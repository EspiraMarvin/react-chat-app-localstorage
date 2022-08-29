export const StorageKey = "ChitiChata"

export const saveChats = (values) => {
    localStorage.setItem(StorageKey, JSON.stringify(values))
}

export const fetchChats = () => {
    const fetchedValue = localStorage.getItem(StorageKey)
    try {
        const value = JSON.parse(fetchedValue)
        if (Array.isArray(value)) {
            return value
        } else { 
            localStorage.setItem(StorageKey, JSON.stringify([]))
            return []
        }
    } catch {
        return []
    }
}