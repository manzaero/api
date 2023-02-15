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
    const {value: status} = useField('status')

    const onSubmit = handleSubmit(fn)

    return {
        isSubmitting,
        onSubmit,
        status,
        Name,
        nError,
        nBlur
    }
}