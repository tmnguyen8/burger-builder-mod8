import axios from 'axios';
import keys from "../src/keys/keys";

const instance = axios.create({
    baseURL: keys.FIREBASE_BASEURL
})

export default instance;