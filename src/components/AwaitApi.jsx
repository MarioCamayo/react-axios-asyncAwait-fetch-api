import {useState, useEffect} from 'react'

export const AwaitApi = ()=>{
  const [data, setData] = useState([])
  const [error, setError]= useState(false)
  const fetchUrl = 'https://jsonplaceholder.typicode.com/posts'

  const fetchData = async()=>{
       
    try{  
        const response = await fetch(fetchUrl)
        if(!response.ok){
          throw new Error('Error en la solicitud')
         }
        const datos = await response.json()
        console.log(datos)
        setData(datos)
  

    }catch(error){
         console.error('error', error)

   }
  }

  useEffect(()=>{
    fetchData()
  },[])
   
  return(
    <>
    <h1>Bienvenido Post con Async Await 2025</h1>
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