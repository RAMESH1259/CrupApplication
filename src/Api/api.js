import axios from 'axios'
export const loadUserDetails = async () => {
    try{
        const { data} = await axios.get('http://localhost:3002/posts')
        return data
    } catch (error) {
        return (error)
    }
}

export const deleteDetails = async (id) => {
    try {
        let result =  await axios.delete(`http://localhost:3002/posts/${id}`)
        return result
    } catch (error) {
        return error
    }
}
