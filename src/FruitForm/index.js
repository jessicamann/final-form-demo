import React from "react";
import "../styles.css";

import "react-table/react-table.css";
import ReactTable from "react-table";

import { Form, Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import arrayMutators from "final-form-arrays";

import { TextField } from "@material-ui/core";
import FormFooter from "../FormFooter";

export default function FruitForm({ data }) {
  const onFormSubmit = (values, form) => {
    console.log(values);
    setTimeout(() => {
      form.reset(); // reset is asynchronous
    }, 500);
  };

  const initialData = { myFruits: data.map(({ name }) => ({ name })) };
  const columns = [
    {
      Header: "Name",
      Cell: ({ row }) => (
        <ImmutableFormField name={`myFruits[${row._index}].name`} />
      )
    },
    {
      Header: "Color",
      Cell: ({ row }) => (
        <DynamicDisplayCell
          fieldNameToSpy={`myFruits[${row._index}].price`}
          value={data[row._index].color}
        />
      )
    },
    {
      Header: "Price",
      Cell: ({ row }) => (
        <CustomInputField name={`myFruits[${row._index}].price`} />
      )
    }
  ];

  return (
    <Form
      onSubmit={onFormSubmit}
      initialValues={initialData}
      mutators={arrayMutators}
      subscription={{}}
    >
      {({ values }) => (
        <React.Fragment>
          <FieldArray name="myFruits">
            {() => (
              <ReactTable
                data={data}
                columns={columns}
                minRows={2}
                defaultPageSize={5000}
              />
            )}
          </FieldArray>
          <FormFooter />
          {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
        </React.Fragment>
      )}
    </Form>
  );
}

function ImmutableFormField({ name }) {
  return (
    <Field name={name}>{({ input: { value } }) => <span>{value}</span>}</Field>
  );
}

function DynamicDisplayCell({ value, fieldNameToSpy }) {
  return (
    <Field name={fieldNameToSpy} subscription={{ value: true }}>
      {({ input: { value: spiedValue } }) => (
        <span>
          {value} + {spiedValue}
        </span>
      )}
    </Field>
  );
}

function CustomInputField({ name }) {
  return (
    <Field name={name}>
      {({ input: { value, onChange } }) => (
        <TextField
          value={value}
          onChange={onChange}
          margin="normal"
          variant="outlined"
          type="number"
        />
      )}
    </Field>
  );
}
