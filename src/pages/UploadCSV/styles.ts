import styled from 'styled-components'

export const UploadCSVContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`

export const UploadBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 32rem;

  padding: 1.5rem;

  border-radius: 25px;

  background: ${(props) => props.theme['gray-200']};

  box-shadow: 3px 3px 3px 1px ${(props) => props.theme['gray-500']};

  gap: 1rem;

  strong {
    font-size: 1.125rem;
    padding-bottom: 2rem;
  }

  div {
    display: flex;
    gap: 1rem;
  }
`
