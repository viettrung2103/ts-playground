// import { AxiosResponse } from './node_modules/axios/index.d';
import axios, { AxiosResponse} from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      
      'https://jsonplaceholder.typicode.com/todos/5'
    );
    console.log("Todo: ",response.data);
    
  } catch (error:any){
    if(axios.isAxiosError(error)){
      console.error("Axios Error ", error.message);
      if (error.response) {
        console.log("Status ", error.response.status);
        console.log("Data ", error.response.data
        );  
      }
      else {
        console.error("Error ", error.message);
      }
    }
  }
}

fetchData();