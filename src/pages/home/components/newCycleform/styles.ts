import styled from 'styled-components'

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['gray-100']};
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`
const defaultThemeInput = styled.input`
  background: transparent;
  border: none;
  height: 2.5rem;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0 0.5rem;

  &:focus {
    box-shadow: none;
    border-bottom: 2px solid ${(props) => props.theme['green-500']};
  }
`

const TaskInputText = styled(defaultThemeInput)`
  flex: 1;

  &:--webkit-calendar-picker-indicator {
    -webkit-appearance: none !important;
    margin: 0;
  }
  &:-ms-expand {
    display: none;
  }
`

const CountDownInputNumber = styled(defaultThemeInput)`
  width: 4rem;
`

export { FormContainer, TaskInputText, defaultThemeInput, CountDownInputNumber }
