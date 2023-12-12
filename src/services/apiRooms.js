import supabase, { supabaseUrl } from './supabase';

export async function getRooms() {
  const { data, error } = await supabase.from('rooms').select('*');

  if (error) {
    console.log(error);
    throw new Error('Rooms could not be loaded');
  }

  return data;
}

export async function createEditRoom(newRoom, id) {
  const hasImagePath = newRoom.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newRoom.image.name}`.replaceAll(
    '/',
    ''
  );
  const imagePath = hasImagePath
    ? newRoom.image
    : `${supabaseUrl}/storage/v1/object/public/room-images/${imageName}`;

  //1. CREATE/EDIT ROOM
  let query = supabase.from('rooms');

  //A) CREATE
  if (!id) query = query.insert([{ ...newRoom, image: imagePath }]);

  //B) EDIT
  if (id) query = query.update({ ...newRoom, image: imagePath }).eq('id', id);

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error('Room could not be created');
  }

  // 2.UPLOAD IMAGE
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from('room-images')
    .upload(imageName, newRoom.image);

  //3. DELETE ROOM IF THERE WAS AN ERROR IF UPLOADING AN IMAGE
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
