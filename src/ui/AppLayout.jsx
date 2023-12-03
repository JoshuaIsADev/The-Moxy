import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header, { HeaderCustomer } from './Header';
import styled from 'styled-components';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;
const StyledAppLayoutCustomer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const ContainerCustomer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export function AppLayoutCustomer() {
  return (
    <StyledAppLayoutCustomer>
      <HeaderCustomer />
      <Main>
        <ContainerCustomer>
          <Outlet />
        </ContainerCustomer>
      </Main>
    </StyledAppLayoutCustomer>
  );
}

export default AppLayout;
