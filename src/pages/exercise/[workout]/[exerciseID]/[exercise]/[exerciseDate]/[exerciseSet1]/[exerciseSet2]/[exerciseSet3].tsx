import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import LoadingComponent from "@/pages/loading";

function ExercisePage() {
  const router = useRouter();
  const { workout, exerciseID, exercise, exerciseDate, exerciseSet1, exerciseSet2, exerciseSet3 } = router.query;

  const [exerciseChange, setexerciseChange] = useState<string | undefined>(exercise?.toString());
  const [exerciseChangeDate, setexerciseChangeDate] = useState<string | undefined>(exerciseDate?.toString());
  const [exerciseChangeSet1, setexerciseChangeSet1] = useState<string | undefined>(exerciseSet1?.toString());
  const [exerciseChangeSet2, setexerciseChangeSet2] = useState<string | undefined>(exerciseSet2?.toString());
  const [exerciseChangeSet3, setexerciseChangeSet3] = useState<string | undefined>(exerciseSet3?.toString());

  const [isLoading, setIsLoading] = useState(false)

  const handleExerciseChange = (event: ChangeEvent<HTMLInputElement>) => {
    setexerciseChange(event.target.value)
  }
  const handleExerciseChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
    setexerciseChangeDate(event.target.value)
  }
  const handleExerciseChangeSet1 = (event: ChangeEvent<HTMLInputElement>) => {
    setexerciseChangeSet1(event.target.value)
  }
  const handleExerciseChangeSet2 = (event: ChangeEvent<HTMLInputElement>) => {
    setexerciseChangeSet2(event.target.value)
  }
  const handleExerciseChangeSet3 = (event: ChangeEvent<HTMLInputElement>) => {
    setexerciseChangeSet3(event.target.value)
  }
  
  const handleSubmit = async(event: FormEvent) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement

    const tableName = workout

    const data = {
      tableName: tableName as string,
      id: exerciseID as string,
      exercise: form.exercise.value as string,
      date: form.date.value as string,
      set1: form.set1.value as string,
      set2: form.set2.value as string,
      set3: form.set3.value as string,
    }

    setIsLoading(true)
    const response = await fetch('/api/updateTable', {
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
          },
        method: 'POST'
      })
    setIsLoading(false)

    router.push(`/${workout}`)
  
  }


  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-gray-300 dark:bg-gray-700 p-6 rounded-lg shadow-lg mt- flex flex-col items-center">

          <div key={exerciseID?.toString()} className="flex flex-col items-center my-4">
            <h1 className="text-gray-800 dark:text-white text-3xl font-bold">Edit exercise data</h1>
            
            <label className='text-gray-800 dark:text-white' htmlFor="exercise">Exercise</label>
            <input type="text" id="exercise" name="exercise" value={exerciseChange} onChange={handleExerciseChange} />
            
            <label className='text-gray-800 dark:text-white' htmlFor="date">Date</label>
            <input type="text" id="date" name="date" value={exerciseChangeDate} onChange={handleExerciseChangeDate} />

            <label className='text-gray-800 dark:text-white' htmlFor="set1">Set 1</label>
            <input type="number" id="set1" name="set1" value={exerciseChangeSet1} onChange={handleExerciseChangeSet1} />

            <label className='text-gray-800 dark:text-white' htmlFor="set2">Set 2</label>
            <input type="number" id="set2" name="set2" value={exerciseChangeSet2} onChange={handleExerciseChangeSet2} />
            
            <label className='text-gray-800 dark:text-white' htmlFor="set3">Set 3</label>
            <input type="number" id="set3" name="set3" value={exerciseChangeSet3} onChange={handleExerciseChangeSet3} />

          
          </div>
        
          <div className="flex justify-between mb-5">
            <div className="flex flex-col items-center mr-5">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-2">Submit</button>
            </div>
            <div className="flex flex-col items-center mr-5">
              <Link href={`/${workout}`}><button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-2">Go Back</button></Link>
            </div>
          </div>
      </form>
      {isLoading === true && <LoadingComponent message="Updating Database..."/>}
    </div>
  
  );
}

export default ExercisePage;