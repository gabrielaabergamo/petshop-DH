import axios from 'axios'
export const getData = async () => {
    const resp = await axios.get('http://localhost:3000/services')
    return resp.data
  }