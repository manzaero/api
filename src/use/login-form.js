import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, watch} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router/dist/vue-router";

export function useLoginForm(){
    const store = useStore();
    const router = useRouter();
    const {handleSubmit, isSubmitting, submitCount} = useForm();

    const {value: Phone, errorMessage: phError, handleBlur: phBlur} = useField(
        'Phone',
        yup
            .string()
            .trim()
            .required('Поле обязательно')
    );
    const {value: Password,errorMessage: pError, handleBlur: pBlur} = useField(
        'Password',
        yup
            .string()
            .trim()
            .required('Поле обязательно')
            .min(6, 'Не менее 6 символов')
    );
    const onSubmit = handleSubmit(async values => {
        console.log('From', values)
        try {
            await store.dispatch('auth/login', values)
            router.push('/')
        } catch (e) {
            console.log(e.message())
        }
    });

    const isToManyInter = computed(() => submitCount.value >= 3);

    watch(isToManyInter, value => {
        if (value){
            setTimeout(()=>{
                submitCount.value = 0
            }, 2000)
        }
    });

    return {
        isToManyInter,
        isSubmitting,
        onSubmit,
        Phone,
        Password,
        phError,
        pError,
        phBlur,
        pBlur
    }
}