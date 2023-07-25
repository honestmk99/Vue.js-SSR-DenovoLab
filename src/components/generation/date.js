export const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate()
}

export const generatYear = (startYear) => {
    const currentYear = new Date().getFullYear(),
        years = []
    startYear = startYear || 1900
    while (startYear <= currentYear) {
        years.push(startYear++)
    }
    return years
}
