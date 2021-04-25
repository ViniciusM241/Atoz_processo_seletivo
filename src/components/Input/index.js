import React from 'react';
import './style.css';
import {
    CFormGroup,
    CInput,
    CCol,
    CInvalidFeedback,
    CInputGroup,
    CInputGroupPrepend,
    CInputGroupText,
  } from "@coreui/react";
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'

function Input(props) {

    return (
        <CCol xs={12} lg={6}>
            <CFormGroup className="box">
                <CInputGroup className="teste">
                    <CInputGroupPrepend>
                        <CInputGroupText className="div-ico">
                            <CIcon size="lg" content={freeSet.[props.ico]} />
                        </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput invalid={props.invalid} className="input" {...props} />
                    <CInvalidFeedback className="message">{props.errormessage}</CInvalidFeedback>
                </CInputGroup>
            </CFormGroup>
        </CCol>
    );
}

export default Input;