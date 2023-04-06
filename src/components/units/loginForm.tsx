import React, {ChangeEvent, useState} from "react";
import {Input, Button} from "antd";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "@/commons/store";
import { gql, useMutation } from "@apollo/client";

const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!){
        loginUser(email: $email, password: $password){
            accessToken
        }
    }
`

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled.div`
  padding: 10px;
`;

const Wrapper = styled.div`
  width: 500px;
`;

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickLogin = async () => {
    try {
      const reuslt = await loginUser({
          variables: {
              email,
              password
          },
      })
      const accessToken = reuslt.data?.loginUser.accessToken;
      console.log(accessToken);
      if(!accessToken) {
          console.error("로그인에 실패")
      }
      setAccessToken(accessToken);

      void router.push("/");
  } catch (error) {
      console.log(error);
  }
  };

  return (
    <Wrapper>
      <FormWrapper>
        <div>
          <label htmlFor="user-email">이메일</label>
          <br />
          <Input
            name="user-email"
            type="email"
            value={email}
            onChange={onChangeEmail}
            required
          />
        </div>
        <div>
          <label htmlFor="user-password">패스워드</label>
          <br />
          <Input
            name="user-password"
            type="password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <ButtonWrapper>
          <Button type="primary" htmlType="submit" onClick={onClickLogin}>
            로그인
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </Wrapper>
  );
}