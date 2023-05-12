import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'
import {Database} from '../../types/database.types'
import supabaseClient from './supabaseclient';

const tadeh = process.env.NEXT_PUBLIC_TADEH as string;

type ResponseData = {
  data: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const body = req.body
  const myIn = body.tadeh as string

  if (tadeh == myIn){
    // Update row in table  
    const { data, error } = await supabaseClient.from(body.tableName)
                      .update({exercise: body.exercise, date: body.date, set1: body.set1, set2: body.set2, set3: body.set3})
                      .eq('id',body.id)
                      .select()

    // Redirect to page: Works with GET only
    //res.redirect(`/${body.tableName}`)

    res.json({data: 'All good to go'});
  }

}
