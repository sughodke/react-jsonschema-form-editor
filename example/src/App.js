
/*
import React from 'react'




const App = () => {
  return <>
    <FormEditor text="Create React Library Example 😄" />
    <Add/>
    </>
}
*/



import React, { Component } from 'react';

import FormEditor from 'form-editor'
import Form from '@rjsf/core';

import 'form-editor/dist/index.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schema: '',
      uischema: '',
      formData: {}
    };
  }
  render() {
    return (
      <div>
        <FormEditor
          schema={this.state.schema}
          uischema={this.state.uischema}
          onChange={(newSchema: string, newUiSchema: string) => {
            this.setState({
              schema: newSchema,
              uischema: newUiSchema
            })
          }}
          lang={'json'}
        />
        {/*<Form*/}
        {/*  schema={JSON.parse(this.state.schema)}*/}
        {/*  uiSchema={JSON.parse(this.state.uischema)}*/}
        {/*  onChange={(newFormData) => this.setState({formData: newFormData.formData})}*/}
        {/*  formData={this.state.formData}*/}
        {/*  submitButtonMessage={"Submit"}*/}
        {/*/>*/}
      </div>
    );
  }
}

export default App
