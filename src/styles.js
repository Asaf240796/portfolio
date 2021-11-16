import styled from "styled-components";

export const About = styled.div`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
color: white;
`;
export const Description = styled.div`
flex: 1;
padding-right: 5rem;
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
}
`;
export const Image = styled.div`
flex: 1;
overflow: hidden;
img {
  width: 50vh;
  height: 50vh;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 20vh;
}
`;
export const Hide =styled.div`
overflow: hidden;
`
