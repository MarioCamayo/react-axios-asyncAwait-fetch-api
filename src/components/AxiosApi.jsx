import { useState, useEffect } from 'react';
import axios from'axios'

export const AxiosApi = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  

  const fetchData = async () => {
    
      axios.get('https://jsonplaceholder.typicode.com/posts',{
        headers:{
          'Authorization':'Bearer tu_token_aqui',
          'Content-Type':'application/json'
        }
      })
      .then(datos => setData(datos.data))
      .catch (error=> 
      console.error('error', error))
    
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Bienvenido Post con Axios 2025</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};
