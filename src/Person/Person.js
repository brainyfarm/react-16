import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick = { props.clicked  }> I am a person and and I am { props.name } </p>
            <p> { props.children } </p>
            <input type="text" onChange = { props.changed } value = {props.name } name="" id=""/>
        </div>
    )
};

export default person;