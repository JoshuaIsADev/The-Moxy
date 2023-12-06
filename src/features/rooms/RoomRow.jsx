import styled from 'styled-components';
import { formatCurrency } from '../../utils/helpers';
import { deleteRoom } from '../../services/apiRooms';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Button from '../../ui/Button';
import { useState } from 'react';
import CreateRoomForm from './CreateRoomForm';

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 0.8fr 1.6fr 1fr 0.6fr 0.8fr;
  column-gap: 1.5rem;
  align-items: center;
  justify-items: left;
  padding: 1rem;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Test = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Img = styled.img`
  display: block;
  /* height: 10rem; */
  /* width: 15rem; */
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1) translateX(0);
`;

const Room = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-700);
`;

const Price = styled.div`
  font-weight: 600;
`;

const Discount = styled.div`
  font-weight: 500;
  color: var(--color-green-700);
`;

function RoomRow({ room }) {
  const [showForm, setShowForm] = useState(false);
  const { id: roomId, name, maxCapacity, regularPrice, discount, image } = room;

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteRoom,
    onSuccess: () => {
      toast.success('Cabin succesfully deleted');
      queryClient.invalidateQueries({
        queryKey: ['rooms'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <>
      <TableRow role='row'>
        <Img src={image} />
        <Room>{name}</Room>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{formatCurrency(discount)}</Discount>
        <Test>
          <Button onClick={() => setShowForm((show) => !show)}>Edit</Button>
          <Button
            $variation='secondary'
            onClick={() => deleteRoom(roomId)}
            disabled={isDeleting}
          >
            Delete
          </Button>
        </Test>
      </TableRow>
      {showForm && <CreateRoomForm roomToEdit={room} />}
    </>
  );
}

export default RoomRow;
