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
  grid-template-columns: 1.2fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-700);
  padding: 1.6rem 2.4rem;
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
