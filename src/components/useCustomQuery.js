import React from 'react'
import {useMutation, useQuery} from '@tanstack/react-query';
import axios from 'axios';

const fetchHeroes = () => {
    return  axios.get('http://localhost:4000/superheroes');
}

const addheroes = (hero) => {
    return  axios.post('http://localhost:4000/superheroes', hero);
}

export function useCustomQuery({ onSuccess, onError}) {
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

export function useAddSuperHero(){
    return useMutation(addheroes);
}

