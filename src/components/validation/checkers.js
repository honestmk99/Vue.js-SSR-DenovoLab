export const checkValidation = (obj) => {
    return Object.values(obj).some((value) => value === false)
}

export const checkString = (data) => {
    if (!data || data.length === 0) {
        return true
    }

    return false
}
