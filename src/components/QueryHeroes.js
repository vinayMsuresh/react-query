import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const fetchHeroes = () => {
    return  axios.get('http://localhost:4000/superheroes');
}

function QueryHeroes() {
    const [time, setTime] = useState(3000);
    const onSuccess = (data) => {
        console.log('data fetching', data);
        if(data.data.length >= 4){
            setTime(false)
        }
    };

    const onError = (error) => {
        console.log('Error occured', error);
        setTime(false);
    }
    const {isLoading, data, isError, error, isFetching, refetch} = useQuery(
        ['superheroes'], 
        fetchHeroes,
        { refetchInterval: time,
        onSuccess,
        onError }
    );
    if(isFetching){
        return <h4>loading...</h4>
    }

    if(isError) {
        return <h3>{error.message}</h3>
    }
  return (
    <div>
        <h2>Super heroes List</h2>
        <button onClick={refetch}>Fetch Heroes</button>
        {
            data?.data.map( rs => (
                <h5 key={rs.id}>{rs.name}</h5>
            ))
        }
    </div>
  )
}

export default QueryHeroes