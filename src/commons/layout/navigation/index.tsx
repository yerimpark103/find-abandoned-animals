import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 45px;
  width: 1500px;
`;

const UlWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #2d2d2d;  
  line-height: 45px;         
`

const LiWrapper = styled.div`
  
`
const Menu1 = styled.div`
  color: white;
  display: block;
  font-size: 20px;
  font-weight: bold;
  font-family: "Trebuchet MS";
`

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
  )
}
