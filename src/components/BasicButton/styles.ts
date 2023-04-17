import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 8rem;
  height: 2.5rem;

  border-radius: 6px;
  border: none;

  font-weight: bold;
  color: ${(props) => props.theme['black-800']};
  background: ${(props) => props.theme['green-100']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-300']};
    transition: all 150ms;

    cursor: pointer;
  }

  &:disabled {
    opacity: 50%;
    cursor: not-allowed;
  }
`
