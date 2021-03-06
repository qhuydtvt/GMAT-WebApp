import React from 'react';
import { FormGroup, Input, Button } from 'reactstrap';
import ReactQuill from 'react-quill';

import { nestFmkProps, nestFmkValidate } from 'nestFmk';
import ChoiceForm, { validate as validateChoices } from './choice.form';

import { CHOICE_LETTERS } from 'statics';
import { stripHTML } from 'utils';

import 'react-quill/dist/quill.snow.css';
import './quill.custom.css'

export default function(formProps) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue,
    setFieldTouched,
    validateForm,
    custom
  } = formProps;

  const { highlightStimulus, stem, rightChoice } = values;
  const { mustRenderHighlightStimulus } = values;
  const { allowStimulus, originalStimulus } = custom ? custom : {allowStimulus: false, originalStimulus: ""};
  
  const showHighlightStimulus = !!highlightStimulus || mustRenderHighlightStimulus;

  return (
    <div className="bg-white mb-2">
      { showHighlightStimulus ?
       <FormGroup>
          <legend>Hightlight stimulus</legend>
          <Button className="mb-1" color="danger" size="sm" onClick={() => {
            setFieldValue("mustRenderHighlightStimulus", false);
            setFieldValue("highlightStimulus", "");
          }}>
            Remove
          </Button>
          <ReactQuill
            className="quill"
            theme="snow"
            name="highlightStimulus"
            value={highlightStimulus}
            onChange={(html) => {
              setFieldValue("highlightStimulus", html);
              setFieldTouched("highlightStimulus", true);
            }}
            onBlur={() => validateForm(values)}
          />
          <div className="text-danger" >{ touched.highlightStimulus ? errors.highlightStimulus : "" }</div>
        </FormGroup> :
        (
          !!allowStimulus &&
            <Button className="mb-2" size="sm"  onClick={() => {
              setFieldValue("mustRenderHighlightStimulus", true);
              setFieldValue("highlightStimulus", originalStimulus ? originalStimulus : "");
            }}> 
              Add highlight stimulus
            </Button>
        )
      }
      <FormGroup>
        <legend>Stem</legend>
        <ReactQuill
          className="quill"
          theme="snow"
          name="stem"
          value={stem}
          onChange={(html) => {
            setFieldValue("stem", html);
            setFieldTouched("stem", true);
          }}
          onBlur={() => {
            setFieldTouched("stem", true);
          }}
          />
        <div className="text-danger" >{ touched.stem ? errors.stem : "" }</div>
      </FormGroup>

      <FormGroup>
        <legend>Choices</legend>
        <ChoiceForm {...nestFmkProps(formProps, "choices")} />
      </FormGroup>

      <FormGroup>
        <legend>Right choice</legend>
        <Input
          type="select"
          name="rightChoice"
          value={rightChoice}
          onBlur={handleBlur}
          onChange={handleChange}
        >
          {CHOICE_LETTERS.map((choiceLetter, index) => {
            return (
              <option key={index} value={index}> {choiceLetter} </option>
            );
          })}
        </Input>
      </FormGroup>
    </div>
  );
}

export function validate(values) {
  const errors = {};
  if(!stripHTML(values.stem)) {
    errors.stem = "Stem is required";
  }
  
  return {
    ...errors,
    ...nestFmkValidate(validateChoices, "choices")(values)
  };
}
