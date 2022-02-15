
export const validation = (values) => {
    const errors = {}
    if (!values.login) {
        errors.login = 'Обязательно для заполнения'
    }
    if (!values.email) {
        errors.email = 'Обязательно для заполнения'
    }
    if (!values.password) {
        errors.password = 'Обязательно для заполнения'
    }
    return errors;
}