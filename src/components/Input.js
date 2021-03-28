import styled from 'styled-components';

const InputStyle = styled.input`
  width: 100%;
  border: 2px black solid;
  border-radius: .5rem;
  padding: 1rem;
  margin-bottom: .5rem;

  &:focus {
    outline: 0;
    filter: drop-shadow(0 .2rem 0 black);
    transform: translateY(-2px);
    /*transition: filter .5s, transform .5s;*/
  }
`;

export default function Input({ placeholder }) {
  return (
    <>
      <InputStyle placeholder={placeholder} />
    </>
  )
}
