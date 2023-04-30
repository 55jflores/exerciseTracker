import React, { useEffect, useState } from 'react';
import ExerciseComponent from './components/exerciseComponent';
import { Exercise } from '../types/exercises.types';
import LoadingComponent from './loading';

const Pull = () => {

  const [pullExercises,setPullExercises] = useState<Exercise[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      
        const data = {
            workout: "pull"
        }
        
      const response = await fetch('/api/selectClient', {
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
          },
        method: 'POST'
      })
      const result = await response.json();

      setPullExercises(result)
      setIsLoading(false)


    }
    fetchPosts()
  }, [])

  return (
    <div className="flex flex-col items-center p-4">
    {isLoading === true ? 
    <LoadingComponent message='Fetching pull exercises...'/> 
    :
    <>
      <h1 className="text-gray-800 dark:text-white text-3xl font-bold">Pull Exercises</h1>
      <ExerciseComponent exercises={pullExercises} workout={'pull'} />    
    </>

  }

</div>
  );
}

export default Pull;