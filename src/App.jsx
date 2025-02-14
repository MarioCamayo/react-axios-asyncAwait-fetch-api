import { useState, useEffect } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/posts',{
       method:'GET',
       headers:{
         'Authorization':'Bearer tu token',
         'Content-Type':'application/json'

       }
     })
      .then(response => {
        if(!response.ok){
          throw new Error('Error en la solicitud')
        }
        return response.json()
      })
      .then(data =>{
        console.log(data)
        return setData(data)

      })  
      .catch(error =>
        console.error('error:', Error))

    }, [])

  return (
    <>
      <h1>Bienvenido a los Post</h1>
      <ul>
        {
          data.map(post =>(
            <li key={post.id} >
              {post.title}

            </li>

          ))
        }
      </ul>
    </>
  )
}

export default App

