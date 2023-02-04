import {useField, useForm} from "vee-validate";

export function useRequestForm(){
    const {isSubmitting, handleSubmit} = useForm();

    const {value: name, errorMessage: nError, handleBlur: nBlur} = useField('name')
    const {value: phone, errorMessage: pError, handleBlur: pBlur} = useField('phone')
    const {value: amount, errorMessage: aError, handleBlur: aBlur} = useField('amount')
    const {value: status} = useField('status')

    const onSubmit = handleSubmit(async  () => {

    })

    return {
        isSubmitting,
        onSubmit,
        status,
        name,
        nError,
        nBlur,
        phone,
        pError,
        pBlur,
        amount,
        aError,
        aBlur
    }
}