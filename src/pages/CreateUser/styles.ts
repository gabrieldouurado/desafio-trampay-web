import styled from 'styled-components'

export const CreateUserCotainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`

export const CreationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 32rem;

  padding: 1.5rem;

  border-radius: 25px;

  background: ${(props) => props.theme['gray-200']};

  box-shadow: 3px 3px 3px 1px ${(props) => props.theme['gray-500']};

  strong {
    font-size: 1.125rem;
    padding-bottom: 2rem;
  }

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
