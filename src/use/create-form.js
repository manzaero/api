import {useStore} from "vuex";
import {useRouter} from "vue-router/dist/vue-router";
import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, watch} from "vue";

export function useCreateForm(){
    const store = useStore()
    const router = useRouter()
    const {handleSubmit,isSubmitting, submitCount} = useForm()

    const {value: FirstName, errorMessage: fnError, handleBlur: fnBlur} = useField(
        'FirstName',
        yup
            .string()
            .trim()
            .required('Поле обязательно')
    )
    const {value: LastName, errorMessage: lnError, handleBlur: lnBlur} = useField(
        'LastName',
        yup
            .string()
            .trim()
            .required('Поле обязательно')
    )
    const {value: Email, errorMessage: eError, handleBlur: eBlur} = useField(
        'Email',
        yup
            .string()
            .trim()
            .required('Поле обязательно')
            .email('Введи почту')
    )
    const {value: Phone, errorMessage: phError, handleBlur: phBlur} = useField(
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

    const createUser = handleSubmit(async values =>{
        await store.dispatch("register", values)
        await alert('Удачное создание юзверя')
        await router.push('/')
    })

    const isMany = computed(() => submitCount >= 1)

    watch(isMany, values => {
        if (values) {
            setTimeout(() => {submitCount.value = 0}, 3000)
        }
    })

    return {
        isMany,
        isSubmitting,
        createUser,
        Password_confirmation,
        pcError,
        pcBlur,
        FirstName,
        fnError,
        fnBlur,
        LastName,
        lnError,
        lnBlur,
        Email,
        eError,
        eBlur,
        Phone,
        Password,
        phError,
        pError,
        phBlur,
        pBlur
    }

}