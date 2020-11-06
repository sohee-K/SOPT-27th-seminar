import axios from 'axios';

const client = axios.create({
    baseURL: "https://api.github.com/users/",
});

const getUserAPI = async (username) => {
    const data = await client.get(username);
    return data.data;
};

export default getUserAPI;