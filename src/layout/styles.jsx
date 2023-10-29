import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  background-color: #2d4f79;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 2rem 3.6rem;
  display: flex;
`

export const TopCenter = styled.div`
  position: absolute;
  width: 100%;
  top: 2vw;
  font-size: 3.5vw;
  & h1 {
    padding: 0;
    /* margin: 0 0 0.05em 0; */
    font-weight: 400;
  }
`

export const BottomCenter = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 00.5rem;
  bottom: 2vw;
`

// .g_container {
//   width: 100%;
//   height: 100vh;
//   text-align: center;
//   background-color: #2d4f79;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 1rem;
//   padding: 2rem 3.6rem;
//   display: flex;
// }

// .body {
//   color: #ccc;
// }

// .heading {
//   margin-top: 16px;
//   font-size: 5rem;
//   line-height: 1;
// }

// .text-block-2 {
//   margin-top: 24px;
// }

// .button {
//   border-radius: 100px;
// }

// @media screen and (max-width: 991px) {
//   .heading {
//     font-size: 4rem;
//   }
// }

// @media screen and (max-width: 767px) {
//   .heading {
//     font-size: 3.5rem;
//   }
// }
