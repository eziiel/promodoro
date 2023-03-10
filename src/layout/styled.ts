import styled from 'styled-components'

const LayoutContent = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
`

export { LayoutContent }
