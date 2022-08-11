import React from 'react'
import { useParams } from 'react-router-dom';
import useQueryDetails from './useQueryDetails'

function HeroDetails() {
    const {heroId} = useParams();
    const {isLoading, isError, error, data} = useQueryDetails(heroId);
    console.log({isLoading, isError, error, data})
    if(isLoading) {
        return <h2>loading...</h2>
    }

    if(isError) {
        return <h2>{error.message}</h2>
    }
  return (
    <div>
        <h2>SuperHeroDetails</h2>
        {
            <h6>{data?.data.name} - {data?.data.alterEgo}</h6>
        }
    </div>
  )
}

export default HeroDetails