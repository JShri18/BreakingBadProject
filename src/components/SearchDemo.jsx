import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react'

const SearchDemo = () => {

    
    const[items,setItems]=useState([]);
    const[query,setQuery] = useState("");
    useEffect(()=>{
        const fetchItem = async()=>{
            const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
            setItems(result.data);   
            console.log(query);     
        }
        fetchItem();
    },[query])

  return (
      <>
      <div className="container">
          <div className="content">
              <div className="searchBar">
                  <input type="text" onClick={(e)=>setQuery(e.target.value)}/>
                  {
                      items.map((item)=>{
                          return(
                              <>
                              {item.name}
                              </>
                          )
                      })
                  }
              </div>
          </div>       
      </div>
      </>
    
  )                               
}

export default SearchDemo
