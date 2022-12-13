import http from "./httpService"; 

const apiUrl = 'http://localhost:3004/api';

export const getProjects = () => {
  http.get(`${apiUrl}/projects/me`).then((response) => {
    console.log(response.data);
    return response.data;
  }).catch(err => console.log(err));
}

export function getProjectById(id) {
  http.get(`${apiUrl}/projects/${id}`).then(response => {
    return response.data;
  });
};


export const addProjects = (data)=> { 
   
    // dispatch(addProject(data));
 
  // http.post(
  //   "http://localhost:3004/api/projects",
  //   data
  // ).then((data) => {
  //   if (data.status === 200) {
  //     toast.success(data.data);
  //     this.setState({
  //       data: {
  //         title: "",
  //         description: "",
  //       }
  //     })
  //   }
  // }).catch(({ response }) => {
  //   toast.error(response.data);
  // })
}

