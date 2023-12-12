import styled from 'styled-components';
import Logo from './Logo';
import MainNav from './MainNav';
import { useRooms } from '../features/rooms/useRooms';

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-50);
  padding: 0rem 0rem;
  border-right: 1px solid var(--color-grey-300);

  grid-row: 1 /-1;
  display: flex;
  flex-direction: column;
  gap: 10rem;
`;

function Sidebar() {
  const { isLoading, rooms } = useRooms();

  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
