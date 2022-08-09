import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const fetchHeroes = () => {
    return  axios.get('http://localhost:4000/superheroes');
}

function QueryHeroes() {
    const {isLoading, data, isError, error} = useQuery(['superheroes'], fetchHeroes);
    
    if(isLoading){
        return <h4>loading...</h4>
    }

    if(isError) {
        return <h3>{error.message}</h3>
    }
  return (
    <div>
        <h2>Super heroes List</h2>
        {
            data?.data.map( rs => (
                <h5 key={rs.id}>{rs.name}</h5>
            ))
        }
    </div>
  )
}

export default QueryHeroes