export const getData = async () => {
    const resp = await fetch('http://localhost:3000/services')
    const data = await resp.json()
    return data
}