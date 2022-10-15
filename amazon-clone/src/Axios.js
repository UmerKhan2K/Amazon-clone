import axios from "axios"

const instance = axios.create({
    baseURL:'http://localhost:5001/clone-35191/us-central1/api' //the api URL
})
export default instance;