import React, { useEffect, useState } from 'react';
import ExerciseComponent from './components/exerciseComponent';
import { Exercise } from '../types/exercises.types';
import LoadingComponent from './loading';

const Push = () => {

  const [pushExercises,setPushExercises] = useState<Exercise[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      
        const data = {
            workout: "push"
        }
        
      const response = await fetch('/api/selectClient', {
        body: JSON.stringify(data),
         // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
        method: 'POST'
      })
      const result = await response.json();

      setPushExercises(result)
      setIsLoading(false)

    }
    fetchPosts()
  }, [])

  return (
    <div className="flex flex-col items-center p-4">
        {isLoading === true ? 
        <LoadingComponent message='Fetching push exercises...'/> 
        :
        <>
          <h1 className="text-gray-800 dark:text-white text-3xl font-bold">Push Exercises</h1>
          <ExerciseComponent exercises={pushExercises} workout={'push'} />    
        </>
  
      }

    </div>
  );
}

export default Push;