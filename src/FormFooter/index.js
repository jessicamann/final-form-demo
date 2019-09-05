import React from "react";

import { FormSpy } from "react-final-form";
import { Button } from "@material-ui/core";

export default function FormFooter() {
  // use FormSpy to access form info in other components
  return (
    <FormSpy subscription={{ pristine: true }}>
      {({ pristine, form: { reset, submit } }) => (
        <React.Fragment>
          <Button variant="outlined" onClick={reset} disabled={pristine}>
            Clear
          </Button>
          <Button variant="outlined" onClick={submit} disabled={pristine}>
            Submit
          </Button>
        </React.Fragment>
      )}
    </FormSpy>
  );
}
