// import React from 'react'
import { useEffect, useState } from "react";
const Dashboard = () => {
    const [recipes,setRecipes]=useState([])
    const [loading,setloading]=useState(true)
    const[error,setError]=useState();
    useEffect(()=>{
        const url="https://dummyjson.com/recipes";
        const response=fetch(url);
        response.then((response)=>response.json())
        .then((data)=>{
            console.log(data.recipes)
            setRecipes(data.recipes);
            setloading(false)
        }).catch((err)=>{
            console.log("Network Error ",err);
            setError(err);
        })
    },[])
    
  return (
    <div>       
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (<div>
            <h1>Restaurant Menu</h1>
      <table>
        <tr>
            <th>&nbsp;</th>
            <th>Recipe Name</th>
            <th>cuisine</th>
            <th>rating</th>
            <th>price</th>
            <th>Action</th>
        </tr>
        {
            recipes.map((r)=>{
                return(
                <tr key={r.id}>
                <td><img src={r.image} width="100" height="50" /></td>
                <td>{r.name}</td>
                <td>{r.cuisine}</td>
                <td>{r.rating}</td>
                <td>120/-</td>
                <td><button>Add to Cart</button></td>
                </tr>
                )
            })
        }
        </table>
            </div>
            
    )}
    </div>
  )
}

export default Dashboard
