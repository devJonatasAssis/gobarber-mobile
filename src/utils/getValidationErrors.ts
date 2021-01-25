import { ValidationError } from 'yup';

interface Errors {
    [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
    const validateErrors: Errors = {};
    err.inner.forEach((error) => {
        validateErrors[error.path] = error.message;
    });
    return validateErrors;
}
