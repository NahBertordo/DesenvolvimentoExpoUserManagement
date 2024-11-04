import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://cacjptxopjjccekfrcyi.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhY2pwdHhvcGpqY2Nla2ZyY3lpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxMTQ3MTYsImV4cCI6MjA0NTY5MDcxNn0.ZL7oas1EGEqTasYaQmDDRt0sZ4Wei_tVBWuYx4HuZ54"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  })
