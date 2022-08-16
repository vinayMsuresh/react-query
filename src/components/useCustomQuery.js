import React from 'react'
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import axios from 'axios';
import { request } from './axios-utils';

const fetchHeroes = () => {
    return request({url: '/superheroes'});
    // return  axios.get('http://localhost:4000/superheroes');
}

const addheroes = (hero) => {
    return request({url: '/superheroes', method: 'post', data: hero});
    // return  axios.post('http://localhost:4000/superheroes', hero);
}

export function useCustomQuery({ onSuccess, onError}) {
    const query = useQuery(
        ['superheroes'], 
        fetchHeroes,
        { 
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
    const queryClient = useQueryClient();
    return useMutation(addheroes, {
        onSuccess: (data) => {
            queryClient.invalidateQueries('superheroes');
            // queryClient.setQueryData((oldData) => {
            //     return {
            //         ...oldData,
            //         data: [...oldData.data, data.data]
            //     }
            // })
        },
        // onMutate: async(newHero) => {
        //     await queryClient.cancelQueries('superheroes');
        //     const previousHero = queryClient.getQueryData('superheroes');
        //     queryClient.setQueryData((oldData) => {
        //         return {
        //             ...oldData,
        //             data: [...oldData.data, {id: oldData.data?.length + 1, ...newHero}]
        //         }
        //     });
        //     return {
        //         previousHero,
        //     }
        // },
        // onError: (_error, _hero, context) => {
        //     queryClient.setQueryData('superheroes',context.previousHero);
        // },
        // onSettled: ()=>{
        //     queryClient.invalidateQueries('superheroes');
        // }
    });
}

