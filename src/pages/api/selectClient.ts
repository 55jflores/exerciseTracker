import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'
import {Database} from '../../types/database.types'
import supabaseClient from './supabaseclient';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

//export const supabaseClient = createClient<Database>(supabaseUrl as string, supabaseAnonKey as string)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body  
  const split = body.workout as string
  const { data, error } = await supabaseClient.from(split).select('*')

  // Return JSON
  res.json(data ?? [])
}
