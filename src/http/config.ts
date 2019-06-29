import axios from 'axios'

const axiosConfig = () => {
    axios.defaults.baseURL = 'http://127.0.0.1:8888/'
}

export default axiosConfig
