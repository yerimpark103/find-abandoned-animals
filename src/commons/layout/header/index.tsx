import styled from "@emotion/styled";
import {Button} from "antd";
import Link from "next/link";

const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
`;

export default function LayoutHeader() {

  return (
    <Wrapper>
      <div
        style={{
          width: "100%",
          height: "5rem",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Link href="/"><h1 style={{cursor: "pointer"}}>유기동물보호센터</h1></Link>
        <div>
          <Link href="/login"><Button style={{marginRight: "0.5rem"}}>로그인</Button></Link>
          <Link href="/signup"><Button>회원가입</Button></Link>
        </div>
      </div>
    </Wrapper>
  );
}
