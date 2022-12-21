import styled from 'styled-components'

const HeaderContent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoHeader = styled.img`
  width: 40px;
  height: 40px;
`

const NavHeader = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;
    color: ${(props) => props.theme['gray-100']};

    border-bottom: 2px solid transparent;
    border-top: 2px solid transparent;

    :hover {
      border-bottom: 2px solid ${(props) => props.theme['green-300']};
      color: ${(props) => props.theme['green-300']};
    }
  }
`

export { HeaderContent, NavHeader, LogoHeader }
