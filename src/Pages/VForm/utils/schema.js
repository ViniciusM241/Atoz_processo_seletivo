import * as Yup from 'yup';

const phoneRegExp = /(\(\d{2}\)\s)(\d{4,5}-\d{4})/;

    /*
        Formatos de telefones Válidos: 
        (16) 91231-6165
        (16)  3231-6165
    */

const passRegExp = /^[A-Za-záàâéèêíóôúçÁÀÂÃÉÈÍÓÔÚÇ ]+$/;


export default Yup.object().shape({
    name: Yup.string()
        .required("Preencha o campo antes de prosseguir.")
        .min(6, "O campo deve possuir pelo menos 6 caracteres.")
        .max(50, "Quantidade máxima de 50 caracteres excedida."),

    email: Yup.string()
        .required("Preencha o campo antes de prosseguir.")
        .email("Informe um e-mail válido."),

    phone: Yup.string()
        .matches(phoneRegExp, "O número do contato não é válido."),

    pass: Yup.string()
        .required("Preencha o campo antes de prosseguir.")
        .min(8, "O campo deve possuir pelo menos 8 caracteres.")
        .max(50, "Quantidade máxima de 50 caracteres excedida.")
        .matches(passRegExp, "Deve possuir apenas letras maiúsculas ou minúsculas."),
        
    confirmPass: Yup.string()
        .required("Preencha o campo antes de prosseguir.")
        .oneOf([Yup.ref("pass")], "As senhas devem ser iguais.")
})