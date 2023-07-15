import axios from 'axios';
const URL = 'http://localhost:3001/api/users';

export const registerUser = async(userData) => {
    const response = await axios.post(`${URL}/register`,userData);
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data));
    }
    return response.data;
}