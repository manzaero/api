import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, watch} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router/dist/vue-router";

export function useRegForm(){
    const store = useStore()
    const router = useRouter()
    const MIN_LENGTH = 6;
    const {handleSubmit, isSubmitting, submitCount} = useForm()

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
            .min(6, `Не менее ${MIN_LENGTH} символов!`)
    )
    const {value: Password_confirmation, errorMessage: pcError, handleBlur: pcBlur} = useField(
        'Password_confirmation',
        yup
            .string()
            .trim()
            .required('Обязательное поле')
            .min(6, `Не менее ${MIN_LENGTH} символов и повторите пароль!`)
        // .oneOf(yup.ref('Password'))
    )

    const regSubmit = handleSubmit(async values => {
        try {
            await store.dispatch('register', values);
            await router.push('/auth')
        } catch (e) {
            console.log(e)
        }
    })

    const isToMany = computed(() => submitCount.value >= 1)

    watch(isToMany, value => {
        if (value){
            setTimeout(() => {submitCount.value = 0}, 2000)
        }
    })



    return {
        isToMany,
        regSubmit,
        isSubmitting,
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