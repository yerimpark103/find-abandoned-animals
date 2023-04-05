import styled from "@emotion/styled";
import {useRouter} from "next/router";

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
  const router = useRouter();

  const handleClickListViewMenu = () => {
    void router.push("/");
  };

  const handleClickCardViewMenu = () => {
    void router.push("/card-view");
  };

  return (
    <Wrapper>
      <UlWrapper>
        <LiWrapper>
          <Menu1 onClick={handleClickListViewMenu}>리스트로 보기</Menu1>
        </LiWrapper>
        <LiWrapper>
          <Menu1 onClick={handleClickCardViewMenu}>카드로 보기</Menu1>
        </LiWrapper>
      </UlWrapper>
    </Wrapper>
  );
}
