import React from 'react';
import { Table } from 'reactstrap';
import _ from 'lodash';

import { elipsis, checkFields } from '../../utils';

import './QList.css';

export default function(props) {
    const questions = props.questions;
    const showActions = props.onEditRequest || props.onDeleteRequest;
    const stimulusMaxLength = props.stimulusMaxLength ? props.stimulusMaxLength : 100;
    const onQuestionClicked = props.onQuestionClicked ? props.onQuestionClicked : () => {};
    const pointer = props.pointer? "pointer": "";
    return (
      <Table>
        <thead className="">
          <tr className="">
            <th>#</th>
            <th>Type</th>
            <th>Stimulus</th>
            {showActions && <th className="">Actions</th>}
          </tr>
        </thead>
        <tbody className="container">
          { 
            _.values(questions).map((question, index) => {
              const trClassName = question.selected ? `q-selected ${pointer}` : pointer;
              const highlight = checkFields(question, 'details[0].choices') && question.details[0].choices.length == 5 ? "" : "bg-danger";
              return (<tr key={index} className={`${trClassName} ${highlight}`} onClick={() => onQuestionClicked(question)}> 
                { renderId(index + 1) }
                { renderType(question.type) }
                { renderStimulus(elipsis(question.stimulus, stimulusMaxLength)) }
                { showActions  && renderActions(question, props.onEditRequest, props.onDeleteRequest) }
              </tr>);
            })
          }
        </tbody>
      </Table>
    );
}

function renderId(id)  {
  return (
    <th scope="row"> { id }</th>
  );
}

function renderType(type) {
  return <td>{type}</td>
}

function renderStimulus(stimulus) {
  return (
    <td className="td-stimulus">
      <span dangerouslySetInnerHTML={{__html: stimulus}} />
    </td> 
  );
}

function renderActions(question, editRequest, deleteRequest) {
  return (
    <td>
      {editRequest && <i className="far fa-edit question-edit" onClick={() => editRequest(question)}></i>}
      {deleteRequest && <i className="fas fa-trash question-remove" onClick={() => deleteRequest(question)}></i>}
    </td>
  );
}