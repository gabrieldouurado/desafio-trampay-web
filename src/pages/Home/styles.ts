import styled from 'styled-components'

export const HomeCotainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 32rem;
  height: 22rem;

  padding: 1.5rem;

  border-radius: 25px;

  background: ${(props) => props.theme['gray-200']};

  box-shadow: 3px 3px 3px 1px ${(props) => props.theme['gray-500']};

  img {
    width: 10rem;
    margin-bottom: 2rem;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 80%;

    gap: 0.875rem;
  }
`

export const LoginOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  a {
    color: ${(props) => props.theme['green-300']};
    font-size: 0.875rem;
    text-decoration: none;
  }
`
