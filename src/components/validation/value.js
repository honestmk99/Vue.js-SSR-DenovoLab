const checkString = (data) => {
    if (!data || data.length === 0) {
        return false
    }

    return true
}

const onlyNumberKey = (evt) => {
    evt = evt ? evt : window.event
    let charCode = evt.which ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
        evt.preventDefault()
    } else {
        return true
    }
}

export { checkString, onlyNumberKey }
