import styled from "styled-components";

export const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  p.explain {
    font-weight: lighter;
    font-size: 2rem;
  }
  p.specipic-knowledge {
    font-size: 1.5rem;
  }
  button {
    /* display: block;
  margin: 10vh; */
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-size: 1.1rem;
    &:hover {
      background: #23d997;
      color: black;
      font-size: 1.1rem;
    }
    @media (max-width: 1300px) {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
  @media (max-width: 1300px) {
    padding: 0;
  }
`;
export const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    width: 42vh;
    height: 45vh;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 10vh;
    @media (max-width: 1300px) {
      margin: 0 auto;
      width: auto;
      height: auto;
    }
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
