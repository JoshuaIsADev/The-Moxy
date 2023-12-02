import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://berowsyhmcuafarpczce.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlcm93c3lobWN1YWZhcnBjemNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzOTEwMTYsImV4cCI6MjAxNjk2NzAxNn0.x1SqVTwTMPpI916ZV6sFfC2q2qIPwV-dZGiw_MRWnmk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
