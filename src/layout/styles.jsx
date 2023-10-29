import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Inter';
  font-size: 1rem;
`

export const TopLeft = styled.div`
  position: absolute;
  top: 5vw;
  left: 5vw;
  & h1 {
    font-size: 6rem;
    color: #db8400;
    padding: 0;
    margin: 0 0 0.05em 0;
    font-family: 'talon', sans-serif;
    font-weight: 400;
    font-style: normal;
    /* -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #ffffff; */
  }
`
