import { useEffect, useMemo, useState } from 'react';

export interface UseFormReturn<T> {
    formState: T;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    onResetForm: () => void;
    isFormValid: boolean;
    [key: string]: any; // para incluir validaciones adicionales dinámicas
};

export const useForm = <T extends Object>(initialForm: T, formValidations: { [K in keyof T]?: [(value: T[K]) => boolean, string] }  = {}): UseFormReturn<T> => {

    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({});

    useEffect(() => {
        createValidators();
    }, [formState])

    useEffect(() => {
        setFormState(initialForm);
    }, [initialForm])


    const isFormValid = useMemo(() => {

        for (const formValue of Object.keys(formValidation)) {
            if (formValidation[formValue] !== null) return false;
        }

        return true;
    }, [formValidation])


    const onInputChange = ({ target }) => {
        const { name, value, id } = target;
        setFormState({
            ...formState,
            [name]: value === 'on' ? id : value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    const createValidators = () => {

        const formCheckedValues = {};

        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMessage] = formValidations[formField];

            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
        }

        setFormValidation(formCheckedValues);
    }



    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid
    }
}