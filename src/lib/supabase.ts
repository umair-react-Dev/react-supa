import { createClient } from "@supabase/supabase-js";
import { supa } from '../config'
import { Database } from './supabase.types'



const supabase = createClient<Database>(supa.url, supa.anon_key);


export const addData = async <T>(table: string, data: T) => await supabase.from(table).insert(data)

export const updateData = async <T>(table: string, data: T, id: number) => await supabase
    .from(table)
    .update(data)
    .eq('id', id)

export const fetchData = (table: string) => supabase.from(table).select()


export const deleteData = async (table: string, id: number) => await supabase
    .from(table)
    .delete()
    .eq('id', id)





export default supabase 