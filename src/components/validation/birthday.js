export const checkDay = (data) => {
    console.log(data)
    if (data === undefined || data === null || data === '') {
        return false
    }
    if (data > 1 || data < 31) {
        return true
    }
    return false
}

export const checkMonth = (data) => {
    if (data === undefined || data === null || data === '') {
        return false
    }
    if (data > 1 || data < 12) {
        return true
    }
    return false
}

export const checkYear = (data) => {
    if (data === undefined || data === null || data === '') {
        return false
    }
    if (data > 1900 || data < 2023) {
        return true
    }
    return false
}
