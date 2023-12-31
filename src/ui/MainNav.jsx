import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from 'react-icons/hi2';

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0rem;

  &:last-child {
    border-bottom: 1px solid var(--color-grey-300);
  }
`;

const NavListCustomer = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 5rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    border-top: 1px solid var(--color-grey-300);
    color: var(--color-grey-700);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 2.2rem 2.4rem;
    transition: all 0.2s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-0);
    border-radius: none;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.2s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;
const StyledNavLinkCustomer = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-grey-700);
    font-size: 1.6rem;
    font-weight: 500;
    /* padding: 2.2rem 2.4rem; */
    transition: all 0.2s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    border-bottom: 1px solid var(--color-grey-300);
    margin-bottom: -2rem;
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to='/dashboard'>
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/rooms'>
            <HiOutlineHomeModern />
            <span>Rooms</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/users'>
            <HiOutlineUsers />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/bookings'>
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/settings'>
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export function MainNavCustomer() {
  return (
    <nav>
      <NavListCustomer>
        <li>
          <StyledNavLinkCustomer to='/hotel'>The Hotel</StyledNavLinkCustomer>
        </li>
        <li>
          <StyledNavLinkCustomer to='/rooms'>Bedrooms</StyledNavLinkCustomer>
        </li>
        <li>
          <StyledNavLinkCustomer to='/restaurantbars'>
            Restaurants & Bars
          </StyledNavLinkCustomer>
        </li>
      </NavListCustomer>
    </nav>
  );
}

export default MainNav;
