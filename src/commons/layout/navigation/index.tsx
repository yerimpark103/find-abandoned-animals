import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  height: 3rem;
`;

const UlWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #2d2d2d;
  line-height: 3rem;
`;

const LiWrapper = styled.div``;
const Menu1 = styled.div`
  color: white;
  font-weight: bold;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export default function LayoutMenu1() {
  return (
    <Wrapper>
      <UlWrapper>
        <LiWrapper>
          <Menu1>메뉴1</Menu1>
        </LiWrapper>
        <LiWrapper>
          <Menu1>메뉴2</Menu1>
        </LiWrapper>
        <LiWrapper>
          <Menu1>메뉴3</Menu1>
        </LiWrapper>
        <LiWrapper>
          <Menu1>메뉴4</Menu1>
        </LiWrapper>
      </UlWrapper>
    </Wrapper>
  );
}
