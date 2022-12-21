import styled from 'styled-components'

const HomeContent = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

const BaseButtonFormCount = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border: none;
  border-radius: 8px;
  font-weight: bold;
  color: ${(props) => props.theme['gray-100']};
  padding: 1rem;
  cursor: pointer;

  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
const StartButtonFormCount = styled(BaseButtonFormCount)`
  background-color: ${(props) => props.theme['green-500']};
  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`
const StopButtonFormCount = styled(BaseButtonFormCount)`
  background-color: ${(props) => props.theme['red-500']};
  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['red-700']};
  }
`

export { HomeContent, StartButtonFormCount, StopButtonFormCount }
