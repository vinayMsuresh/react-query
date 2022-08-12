import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'

const fetchUsersByEmail = email => {
    return axios.get(`http://localhost:4000/users/${email}`);
}

const fetchCoursesById = id => {
    return axios.get(`http://localhost:4000/channels/${id}`);
}

function DependentQueries({ email }) {

    const { data: user} = useQuery(['user', email], () => fetchUsersByEmail(email));
    const channelId = user?.data.channelId;
    const { data: courses} = useQuery(['courses', channelId], ()=> fetchCoursesById(channelId),{
        enabled: !!channelId
    });
  return (
    <div>
        <h2>Available courses are</h2>
        <ul>
            {
                courses?.data.courses.map(course => (
                    <li key={course}>{course}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default DependentQueries