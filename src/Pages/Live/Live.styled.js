import styled from 'styled-components';
import { device } from '../../config/Responsive';

export const Live = styled.div`
  background: ${(props) => props.theme.blackLight};
  color: ${(props) => props.theme.white};
  padding: 0 2rem;
`;

export const LiveHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  grid-template-rows: repeat(auto-fit, 1fr);
  align-content: space-between;
  justify-content: space-around;
  row-gap: 3rem;
  column-gap: 1rem;

  .videoMain {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }

  .clock {
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .clock-loader {
    --clock-color: ${(props) => props.theme.white};
    --clock-width: 4rem;
    --clock-radius: calc(var(--clock-width) / 2);
    --clock-minute-length: calc(var(--clock-width) * 0.4);
    --clock-hour-length: calc(var(--clock-width) * 0.2);
    --clock-thickness: 0.2rem;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--clock-width);
    height: var(--clock-width);
    border: 3px solid var(--clock-color);
    border-radius: 50%;

    &::before,
    &::after {
      position: absolute;
      content: '';
      top: calc(var(--clock-radius) * 0.25);
      width: var(--clock-thickness);
      background: var(--clock-color);
      border-radius: 10px;
      transform-origin: center calc(100% - calc(var(--clock-thickness) / 2));
      animation: spin infinite linear;
    }

    &::before {
      height: var(--clock-minute-length);
      animation-duration: 2s;
    }

    &::after {
      top: calc(var(--clock-radius) * 0.25 + var(--clock-hour-length));
      height: var(--clock-hour-length);
      animation-duration: 15s;
    }
  }

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }

  .secondary {
    display: none;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fit, 37rem);
    grid-template-rows: repeat(2, 20rem);

    .secondary {
      display: block;
    }

    .clock {
      height: 100%;
    }
  }
`;

export const LiveSection = styled.section`
  margin-top: 3rem;
  .pag {
    display: grid;
    align-content: center;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(auto-fit, 29.2rem);
    gap: 1rem;
    align-content: space-between;
    justify-content: space-around;
  }

  .paginationBttns {
    display: flex;
    align-items: center;

    gap: 1rem;
    padding: 0;
    margin: 0;
    list-style: none;
    grid-row: 13 / 13;
    justify-content: center;

    @media ${device.tablet} {
      grid-row: 9 / 9;
      justify-content: flex-start;
    }

    @media ${device.laptop} {
      grid-row: 4 / 4;
    }
  }

  a {
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme.blueDark} !important;
    border-radius: 50%;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .previous,
  .next {
    a {
      text-decoration: none;
      font-size: 4rem;
      color: white !important;
      background: none;
      font-weight: 300;
      padding: 0;
    }
  }

  .paginationActive {
    a {
      background: ${(props) => props.theme.blueDark};
      color: ${(props) => props.theme.white} !important;
    }
  }
`;
