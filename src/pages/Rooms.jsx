import Heading from '../ui/Heading';
import Row from '../ui/Row';
import RoomTable from '../features/rooms/RoomTable';
import { useState } from 'react';
import CreateRoomForm from '../features/rooms/CreateRoomForm';
import Button from '../ui/Button';

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

export default Rooms;
