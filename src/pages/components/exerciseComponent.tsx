import React from "react"
import { Exercise } from "../../types/exercises.types"
import Link from "next/link"

interface ExercisesProps {
    exercises: Exercise[]
    workout: string
}

const ExerciseComponent = ({exercises, workout}: ExercisesProps) => {

return (
<div>
    {exercises && exercises.map((exercise) => (
        <div key={exercise.id} className="bg-gray-300 dark:bg-gray-700 p-4 rounded-lg shadow-lg mb-4" >
            <Link key={exercise.id} href='/exercise/[workout]/[exerciseID]/[exercise]/[exerciseDate]/[exerciseSet1]/[exerciseSet2]/[exerciseSet3]' as={`/exercise/${workout}/${exercise.id}/${exercise.exercise}/${exercise.date}/${exercise.set1}/${exercise.set2}/${exercise.set3}`}>
                    <h2 className="text-green-500 text-xl font-bold">{exercise.exercise}</h2>
                    <h3 className="text-gray-800 dark:text-white">{exercise.date}</h3>
                    <div className="flex items-stretch">
                        <div className="pr-3">
                            <p className=" text-gray-800 dark:text-white mt-2">Set1: {exercise.set1}</p>
                        </div>
                        <div className="pr-3">
                            <p className=" text-gray-800 dark:text-white mt-2">Set2: {exercise.set2}</p>
                        </div>
                        <div className="pr-3">
                            <p className=" text-gray-800 dark:text-white mt-2">Set3: {exercise.set3}</p>
                        </div>
                    </div>

            </Link>
        </div>

    ))}

</div>
)
}

export default ExerciseComponent