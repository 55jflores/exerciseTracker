import React, { useEffect, useState } from 'react';
import ExerciseComponent from './components/exerciseComponent';
import { Exercise } from '../types/exercises.types';
import LoadingComponent from './components/loading';
import supabaseClient from './api/supabaseclient';
import useSWR from 'swr';

const fetchPull = async(workout: string): Promise<Exercise[]> => {
    const data = {
      workout: workout
  }
  const res = await fetch("/api/selectClient", {
  body: JSON.stringify(data),
  headers: {
      'Content-Type': 'application/json',
    },
  method: 'POST'
  })
  const res_data = await res.json();

  return res_data;
}

/*
const legsChannel = supabaseClient.channel('custom-update-channel')
.on(
  'postgres_changes',
  { event: 'UPDATE', schema: 'public', table: 'pull' },
  (payload) => {
    console.log('UPDATE QUERY HAPPENED')
    console.log('Change received!', payload)
  }
)
.subscribe()
*/
const Pull = () => {
  const body = {
    workout: "pull"
  }

  const {data, error, isLoading} = useSWR<Exercise[]>("pull",fetchPull);
  
  if(error) return <p>Dam, got an error</p>;
  if(isLoading) return <LoadingComponent message='Loading pull exercises. Sit tight'/> 

  return (
    <>
        {data && (
          <>
            <h1 className="text-gray-800 dark:text-white text-3xl font-bold">Pull Exercises</h1>
            <ExerciseComponent exercises={data} workout={'pull'} />    
          </>
        )
  
      }

    </>
  );
}

export default Pull;