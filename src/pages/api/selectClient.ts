import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'
import {Database} from '../../types/database.types'
import supabaseClient from './supabaseclient';
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const tadah = process.env.NEXT_PUBLIC_TADAH
//export const supabaseClient = createClient<Database>(supabaseUrl as string, supabaseAnonKey as string)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const body = req.body  
  const split = body.workout as string
  const myIn = body.tadah as string

  if (tadah == myIn){
    const { data, error } = await supabaseClient.from(split).select('*')  
    res.json(data ?? [])
  }

  // Return JSON
  res.json([])
}
