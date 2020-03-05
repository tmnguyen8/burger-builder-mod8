import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://create-react-burger-70598.firebaseio.com'
})

export default instance;