import axios from 'axios'
const api="http://localhost:3002/posts/"
export const loadUserDetails = async () => {
    try{
        const { data} = await axios.get(`${api}`)
        return data
    } catch (error) {
        return (error)
    }
}

export const deleteDetails = async (id) => {
    try {
        let result =  await axios.delete(`${api}${id}`)
        return result
    } catch (error) {
        return error
    }
}
export const updateDetails = async (personDetails) => {
    try {
        let result = await axios.put(`${api}${personDetails.id}`,personDetails);
        return result
    } catch (error) {
        return error
    }
}
export const AddUserDetails = async (personDetails) => {
    try {
        let result = await axios.post(`${api}`,personDetails);
        return result
    } catch (error) {
        return error
    }
}
