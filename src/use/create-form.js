import {useStore} from "vuex";
import {useRouter} from "vue-router/dist/vue-router";
import {useField} from "vee-validate";
import * as yup from "yup";

export function useCreateForm(){
    const store = useStore()
    const router = useRouter()

    const {value: fName, errorMessage: fnError, handleBlur: fnBlur} = useField(
        'FirstName',
        yup
            .string()
            .trim()
            .required('Поле обязательно')
    )
    const {value: lName, errorMessage: lnError, handleBlur: lnBlur} = useField(
        'LastName',
        yup
            .string()
            .trim()
            .required('Поле обязательно')
    )
    const {value: eMail, errorMessage: eError, handleBlur: eBlur} = useField(
        'Email',
        yup
            .string()
            .trim()
            .required('Поле обязательно')
            .email('Введи почту')
    )
    const {value: pHone, errorMessage: phError, handleBlur: phBlur} = useField(
        'Phone',
        yup
            .string()
            .trim()
            .required('Поле обязательно')
    )
    const {value: Password,errorMessage: pError, handleBlur: pBlur} = useField(
        'Password',
        yup
            .string()
            .trim()
            .required('Обязательное поле')
            .min(6, `Не менее 6 символов!`)
    )
    const {value: Password_confirmation, errorMessage: pcError, handleBlur: pcBlur} = useField(
        'Password_confirmation',
        yup
            .string()
            .trim()
            .required('Обязательное поле')
            .min(6, `Не менее 6 символов и повторите пароль!`)
        // .oneOf(yup.ref('Password'))
    )
}