import {useField, useForm} from "vee-validate";
import * as yup from 'yup'

export function useRequestForm(fn){
    const {isSubmitting, handleSubmit} = useForm({
        initialValues:{
            status: 'active'
        }
    });

    const {value: Name, errorMessage: nError, handleBlur: nBlur} = useField(
        'Name',
        yup
            .string()
            .trim()
            .required('Введите наименование')
    )
    const {value: FirstName, errorMessage: fError, handleBlur: fBlur} = useField(
        'FirstName',
        yup
            .string()
            .trim()
            .required('Введите наименование')
    )
    const {value: LastName, errorMessage: lError, handleBlur: lBlur} = useField(
        'LastName',
        yup
            .string()
            .trim()
            .required('Введите наименование')
    )
    const {value: Email, errorMessage: eError, handleBlur: eBlur} = useField(
        'Email',
        yup
            .string()
            .trim()
            .required('Введите наименование')
    )
    const {value: Phone, errorMessage: pError, handleBlur: pBlur} = useField(
        'Phone',
        yup
            .string()
            .trim()
            .required('Введите наименование')
    )
    // const {value: status} = useField('status')

    const onSubmit = handleSubmit(fn)

    return {
        isSubmitting,
        onSubmit,
        // status,
        Name,
        nError,
        nBlur,
        FirstName,
        fError,
        fBlur,
        LastName,
        lError,
        lBlur,
        Email,
        eError,
        eBlur,
        Phone,
        pError,
        pBlur
    }
}