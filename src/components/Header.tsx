import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #2c4f95;
  width: 100%;
  height: 25vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;
const LogoImg = styled.img`
  height: 100%;
  display: block;
  margin: 0 auto;
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoImg src="https://pbs.twimg.com/media/E5Bpx6KXMAUt7eR?format=jpg&name=large" />
    </HeaderContainer>
  );
}
export default Header;
