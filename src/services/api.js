import axios from "axios";


const api = axios.create({
 //baseURL: "http://192.168.0.126:8080",
 baseURL: "http://ec2-177-71-131-91.sa-east-1.compute.amazonaws.com:8080"
});

export default api;