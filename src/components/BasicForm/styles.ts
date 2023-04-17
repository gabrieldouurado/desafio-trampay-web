import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 0.875rem;

  input {
    width: 100%;
    height: 3rem;

    padding: 0.5rem;
    border: solid 2px ${(props) => props.theme['gray-500']};
    border-radius: 8px;
  }

  span {
    margin: -0.5rem 0;
  }
`
