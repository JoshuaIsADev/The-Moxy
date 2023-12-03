import Heading from '../ui/Heading';
import Row from '../ui/Row';
import RoomTable from '../features/rooms/RoomTable';
import { useState } from 'react';
import CreateRoomForm from '../features/rooms/CreateRoomForm';
import Button from '../ui/Button';
import Gallery from '../ui/gallery';
import { useQuery } from '@tanstack/react-query';
import { getRooms } from '../services/apiRooms';
import Spinner from '../ui/Spinner';

function Rooms() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>All rooms</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <RoomTable />
        <Button onClick={() => setShowForm((show) => !show)}>
          Add new room
        </Button>
        {showForm && <CreateRoomForm />}
      </Row>
    </>
  );
}

export function RoomsCustomer() {
  const {
    isLoading,
    data: rooms,
    // error,
  } = useQuery({
    queryKey: ['rooms'],
    queryFn: getRooms,
  });

  if (isLoading) return <Spinner />;
  return (
    <>
      <div>test22</div>
      {rooms.map((room) => (
        <Gallery room={room} key={room.id} />
      ))}
    </>
  );
}

export default Rooms;
