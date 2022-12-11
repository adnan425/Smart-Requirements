import http from './../../Services/httpService';

 const api = ({dispatch}) => next => async action =>{
    if(action.type !== "apiCallBegin"){
       return  next(action);
    }
    const { url, method, data, onSuccess, onError } = action.payload;
    try {
        const response = await http.request({
            baseURL : 'http://localhost:3004/api',
            url,
            method,
            data, 
        });
        dispatch({type: onSuccess, payload: response.data});
    } catch (error) {
        dispatch({type: onError, payload: error});        
    }
}
export default api;