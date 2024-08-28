import React from 'react'
import { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
      
    //   fetch('https://api.github.com/users/adityadav69')
    //   .then(response=>response.json())
    //   .then(data=>{setData(data)})
    // }, [])

    
  return (
    <div  className='bg-gray-700 text-white text-3xl p-4'>
      <h1>Github Followers: {data.followers}</h1>
      <img src={data.avatar_url} className='{width:300} m-auto' alt="Github Profile" />
    </div>
  )
}

export default Github
export const loadData=async ()=>{
    let response=await fetch("https://api.github.com/users/adityadav69")
    return response.json();
}
