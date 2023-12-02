import supabase from './supabase';

export async function getRooms() {
  const { data, error } = await supabase.from('rooms').select('*');

  if (error) {
    console.log(error);
    throw new Error('Rooms could not be loaded');
  }

  return data;
}

export async function deleteRoom(id) {
  const { data, error } = await supabase.from('rooms').delete().eq('id', id);
  if (error) {
    console.log(error);
    throw new Error('Room could not be deleted');
  }

  return data;
}