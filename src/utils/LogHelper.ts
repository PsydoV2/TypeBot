export function LogError(error: String) {
    if (error === ""){
        return
    }

    console.error(error)
}

export function LogWarning(warning: String) {
    if (warning === ""){
        return
    }

    console.warn(warning)
}