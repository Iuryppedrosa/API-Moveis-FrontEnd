import axios from "axios";

export default axios.create({
    baseURL: 'https://036a-189-37-78-170.ngrok-free.app/',
    headers: {"ngrok-skip-browser-warning": "true"}
})