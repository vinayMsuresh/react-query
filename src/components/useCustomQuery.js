import React from 'react'
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const fetchHeroes = () => {
    return  axios.get('http://localhost:4000/superheroes');
}

function useCustomQuery({ onSuccess, onError}) {
    const query = useQuery(
        ['superheroes'], 
        fetchHeroes,
        { 
            enabled: false,
            onSuccess,
            onError,
            // select: (data) => {
            //     const heroes = data.data.map(dt=> dt.name);
            //     return heroes;
            // } 
        }
    );
  return query;
}

export default useCustomQuery