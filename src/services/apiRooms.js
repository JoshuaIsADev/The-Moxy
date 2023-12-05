import supabase, { supabaseUrl } from './supabase';

export async function getRooms() {
  const { data, error } = await supabase.from('rooms').select('*');

  if (error) {
    console.log(error);
    throw new Error('Rooms could not be loaded');
  }

  return data;
}

export async function createRoom(newRoom) {
  const imageName = `${Math.random()}-${newRoom.image.name}`.replaceAll(
    '/',
    ''
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/room-images/${imageName}`;

  //1. Create room
  const { data, error } = await supabase
    .from('rooms')
    .insert([{ ...newRoom, image: imagePath }])
    .select();

  if (error) {
    console.log(error);
    throw new Error('Room could not be created');
  }
  // 2.upload image

  const { error: storageError } = await supabase.storage
    .from('room-images')
    .upload(imageName, newRoom.image);

  //3. Delet room if there was an error if uploading image
  if (storageError) {
    await supabase.from('rooms').delete().eq('id', data.id);
    console.log(storageError);
    throw new Error(
      'Room image could not be created and cabin was not created'
    );
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
