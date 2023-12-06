import { useQuery } from '@tanstack/react-query';
import { getRooms } from '../../services/apiRooms';
import Spinner from '../../ui/Spinner';
import styled from 'styled-components';
import RoomRow from './RoomRow';

const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.6rem;
  background-color: var(--color-grey-50);
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 1.4fr 0.8fr 1.6fr 1fr 0.6fr 0.8fr;
  column-gap: 1.5rem;
  align-items: center;
  justify-items: left;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  /* letter-spacing: 0.4px; */
  font-weight: 600;
  color: var(--color-grey-700);
  padding: 1rem;
`;

function RoomTable() {
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
    <Table role='table'>
      <TableHeader role='row'>
        <div></div>
        <div>Room</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {rooms.map((room) => (
        <RoomRow room={room} key={room.id} />
      ))}
    </Table>
  );
}

export default RoomTable;
