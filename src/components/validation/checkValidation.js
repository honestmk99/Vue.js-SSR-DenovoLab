const checkValidation = (obj) => {
    return Object.values(obj).every((value) => value === true)
}

export default checkValidation
