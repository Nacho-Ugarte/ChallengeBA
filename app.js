document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})
const fetchData = async() =>{
    try {
        const res = await fetch('api.json')
    const data = await res.json()
    } catch(error){
        console.log(error)
    }
}