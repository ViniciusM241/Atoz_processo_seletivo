import "./style.css";
import React from "react";
import { CRow } from "@coreui/react";
import { Formik, Field, Form } from 'formik';
import Input from '../../components/Input';
import schema from './utils/schema';
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'
import Swal from 'sweetalert2'

function VForm() {

    function onSubmit(values) {
        Swal.fire("Sucesso!", `Parabéns, ${values.name}, você foi cadastrado com sucesso. Bem vindo ao time.`, 'success');
    }

    function phoneMask(value, setFieldValue) {
        let newValue = value.replace(/\D/g, '');
        
        if (newValue.length === 8)
            newValue = newValue.replace(/(\d{4})(\d{4})/, '() $1-$2');
        if (newValue.length === 9)
            newValue = newValue.replace(/(\d{5})(\d{4})/, '() $1-$2');
        if (newValue.length === 10)
            newValue = newValue.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        if (newValue.length === 11)
            newValue = newValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

        setFieldValue('phone', newValue)
    }

    function nameCapitalize(value, setFieldValue) {
        const newValue = [...value].map((letter, index) => {
            if(index === 0 || value[index - 1] === ' ')
                return letter.toUpperCase();
            return letter;
        })
        setFieldValue('name', newValue.join().replace(/,/g, ''))
    }

    return (
        <Formik
            validationSchema={schema}
            onSubmit={onSubmit}
            initialValues={{
                name: '',
                email: '',
                phone: '',
                pass: '',
                confirmPass: ''
            }}
        >
        {({ values, errors, touched, setFieldValue}) => (
            <Form className="form">
                <CRow>
                    <Field as={Input} 
                        invalid={errors.name && touched.name} 
                        errormessage={errors.name}
                        ico={"cilUser"} 
                        name="name" 
                        placeholder="Seu nome aqui..."
                        onChange={(e) => nameCapitalize(e.target.value, setFieldValue)} 
                    />
                    <Field as={Input} 
                        invalid={errors.email && touched.email} 
                        errormessage={errors.email}
                        ico={"cilEnvelopeClosed"} 
                        name="email" 
                        placeholder="Seu e-mail aqui..." 
                    />
                    <Field as={Input} 
                        invalid={errors.phone && touched.phone} 
                        errormessage={errors.phone}
                        ico={"cilPhone"} 
                        name="phone" 
                        maxLength={'15'}
                        placeholder="Seu contato aqui..." 
                        onChange={(e) => phoneMask(e.target.value, setFieldValue)}
                    />
                </CRow>
                <CRow>
                    <Field as={Input} 
                        invalid={errors.pass && touched.pass} 
                        errormessage={errors.pass}
                        ico={"cilLockLocked"} 
                        type="password" 
                        name="pass" 
                        placeholder="Senha..." 
                    />
                    <Field as={Input} 
                        invalid={errors.confirmPass && touched.confirmPass} 
                        errormessage={errors.confirmPass}
                        ico={"cilLockLocked"} 
                        type="password" 
                        name="confirmPass" 
                        placeholder="Confirme a senha..." 
                    />
                </CRow>
                <button type="submit">
                    <div>
                        CADASTRAR 
                        <CIcon size="lg" content={freeSet.cilArrowRight} /> 
                    </div>
                </button>
            </Form>
        )}
        </Formik>
    );
}

export default VForm;