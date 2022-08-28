export const StorageKey = "ChitiChata"

export const saveChats = (values) => {
    console.log('values at storage.js', values)
    localStorage.setItem(StorageKey, JSON.stringify(values))
}

export const fetchChats = () => {
    console.log('fetc function run at storage.js')

    const fetchedValue = localStorage.getItem(StorageKey)
    // console.log('fetchedValue at fetc function run at storage.js', fetchedValue)
    // console.log('is fetch data array', Array.isArray(JSON.parse(fetchedValue)))

    try {
        const value = JSON.parse(fetchedValue)
        if (Array.isArray(value)) {
        // console.log('is fetch data array', Array.isArray(JSON.parse(fetchedValue)))
        // if (value) {
            console.log('value at storage.js', value)
            return value
        } else { 
            localStorage.setItem(StorageKey, JSON.stringify([]))
            return []
        }
    } catch {
        // localStorage.setItem(StorageKey, [])
        return []
    }
}