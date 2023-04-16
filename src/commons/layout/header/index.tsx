import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import {Button} from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
`;

const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn {
        fetchUserLoggedIn {
            _id
            email
            name
        }
    }
`

export default function LayoutHeader() {
  const [info, setInfo] = useState(false);
  // const { data } = useQuery(FETCH_USER_LOGGED_IN);
  
  useEffect(() => {
    if(localStorage.getItem("accessToken")) {
        setInfo(true);
    }; 
  });

  const onClickLogout = () => {
    localStorage.removeItem("accessToken")
    setInfo(false);
  }
  
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
        <Link href="/"><a><h1 style={{cursor: "pointer"}}>유기동물보호센터</h1></a></Link>
        <div>
          {info
            ? (
              <>
                <Button style={{marginRight: "0.5rem"}} onClick={onClickLogout}>로그아웃</Button>
                <Link href="/mypage"><Button>마이페이지</Button></Link>
              </> 
            ) : (
              <>
                <Link href="/login"><a><Button style={{marginRight: "0.5rem"}}>로그인</Button></a></Link>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
              </>
            )
          }
          
        </div>
      </div>
    </Wrapper>
  );
}
