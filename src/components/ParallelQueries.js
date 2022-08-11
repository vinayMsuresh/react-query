import { useQueries } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
const fetchHeroes = () => {
    return  axios.get('http://localhost:4000/superheroes');
}

const fetchFriends = () => {
    return axios.get('http://localhost:4000/friends')
}
function ParallelQueries() {
    const queries = useQueries({
        queries: [
            { queryKey: ['superheroes'], queryFn: fetchHeroes, staleTime: Infinity},
            { queryKey: ['friends'], queryFn: fetchFriends, staleTime: Infinity}
        ]
    });
    const superheroes = queries[0];
    const friends = queries[1];
    console.log(queries);
  return (
    <div>
        <h2>SuperHeroes</h2>
        {
            superheroes.data?.data.map(hero => (
                <h4 key={hero.id}>{hero.name}</h4>
            ))
        }

        <h2>Friends</h2>
        {
            friends.data?.data.map(fr => (
                <h4 key={fr.id}>{fr.name}</h4>
            ))
        }
    </div>
  )
}

export default ParallelQueries