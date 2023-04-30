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

    {exercises.map((exercise) => (
        <Link key={exercise.id} href='/exercise/[workout]/[exerciseID]/[exercise]/[exerciseDate]/[exerciseSet1]/[exerciseSet2]/[exerciseSet3]' as={`/exercise/${workout}/${exercise.id}/${exercise.exercise}/${exercise.date}/${exercise.set1}/${exercise.set2}/${exercise.set3}`}>
            <div key={exercise.id} className="flex flex-col items-center my-4">
                <h2 className="text-center text-green-500 text-xl font-bold">{exercise.exercise}: {exercise.date}</h2>
                <p className="mt-2">Set1: {exercise.set1}</p>
                <p className="mt-2">Set2: {exercise.set2}</p>
                <p className="mt-2">Set3: {exercise.set3}</p>
            </div>
        </Link>
        ))}

    </div>

)
}

export default ExerciseComponent