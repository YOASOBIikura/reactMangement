import axios from "axios";

const getUsers = async ()=>{
    return await axios.get('/main/getUserData')
}

export {getUsers}