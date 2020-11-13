import React from 'react'

export default (props) =>
    props.fieldType === 'textfield' ? (  //ternary for a from, if true (empty textfield fill in the below)
        <textarea                       //false when autcomplete is true (as) form is filled in
            type={props.type}           //use textearea so the form shows some text in it
            name={props.name}
            value={props.value}
            onChange={(e) => props.onChange(e)} //onChane needed to handle change(update) form
            placeholder={props.placeholder}
        />
    ) : (
            <input      //update form based on the input
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.placeholder}
                autoComplete="false"
            />
        )   