import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const heroDetails = ({queryKey}) => {
    const heroId = queryKey[1];
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}
function useQueryDetails(heroId) {
  const queryClient = useQueryClient();
  return useQuery( ['hero_details', heroId], heroDetails, {
    initialData: () => {
      const hero = queryClient.getQueryData(['superheroes'])?.data?.find(
        hero => hero.id === parseInt(heroId)
      );
      if(hero){
        return { data: hero};
      } else {
        return undefined;
      }
    }
  });
}

export default useQueryDetails