export const generateString = (length, pool) => {
    let result = " "
    const charactersLength = pool.length
    for (let i = 0; i < length; i++) {
        result += pool.charAt(Math.floor(Math.random() * charactersLength))
    }

    return result
}
