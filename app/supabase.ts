import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jhsuoikzwhkrguawhlyz.supabase.co'
const supabaseKey = 'sb_publishable_rCsGJ-tQWjOTqg2vgxJ-2A_ATOEDwji'

export const supabase = createClient(supabaseUrl, supabaseKey)