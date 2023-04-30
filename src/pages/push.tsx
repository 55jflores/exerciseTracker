import React, { useEffect, useState } from 'react';
import ExerciseComponent from './components/exerciseComponent';
import { Exercise } from '../types/exercises.types';

const Push = () => {

  const [pushExercises,setPushExercises] = useState<Exercise[]>([])
  
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
      console.log('Response is ',response)
      const result = await response.json();
      console.log('Result is ',result)

      setPushExercises(result)
    }
    fetchPosts()
  }, [])

  return (
    <div className="flex flex-col items-center p-4">
        <h1 className="text-gray-800 dark:text-white text-3xl font-bold">Push Exercises</h1>
        <ExerciseComponent exercises={pushExercises} workout={'push'} />
    </div>
  );
}

export default Push;