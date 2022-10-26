const copy2Clip = (ref) => {
    let password = ref
    password.select()
    password.selectSelectionRange(0, 99999)

    navigator.clipboard.writeText(password.value)
}
