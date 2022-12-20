import { toast } from "react-toastify";
import http from "./httpService"; 
const apiUrl = 'http://localhost:3004/api';

 
export const managerAddRequirement = (data) => {
    http.post(`${apiUrl}/manager/requirement`,data).then((response) => {
    return response;
    }).catch(err => {console.log("error " , err.response.data);  toast.error(err.response.data) });
  }