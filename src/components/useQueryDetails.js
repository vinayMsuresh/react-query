import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const heroDetails = ({queryKey}) => {
    const heroId = queryKey[1];
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}
function useQueryDetails(heroId) {
  return useQuery( ['hero_details', heroId], heroDetails);
}

export default useQueryDetails