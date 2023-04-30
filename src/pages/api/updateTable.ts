import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'
import {Database} from '../types/database.types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabaseClient = createClient<Database>(supabaseUrl as string, supabaseAnonKey as string)

type ResponseData = {
  data: string
}
export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const body = req.body
  // Update row in table  
  const { error } = await supabaseClient.from(body.tableName)
                    .update({exercise: body.exercise, date: body.date, set1: body.set1, set2: body.set2, set3: body.set3})
                    .eq('id',body.id)
  // Redirect to page: Works with GET only
  //res.redirect(`/${body.tableName}`)

  res.json({data: 'All good to go'});

}
