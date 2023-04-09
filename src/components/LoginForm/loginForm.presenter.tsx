import React from "react";
import {Input, Button} from "antd";
import { Wrapper, FormWrapper, ButtonWrapper } from "./loginForm.styles";

// interface LoginProps {
// 타입만들기
// }

export default function LoginFormUI(props: any) {
  return (
    <Wrapper>
      <FormWrapper>
        <div>
          <label htmlFor="user-email">이메일</label>
          <br />
          <Input
            name="user-email"
            type="email"
            value={props.email}
            onChange={props.onChangeEmail}
            required
          />
        </div>
        <div>
          <label htmlFor="user-password">패스워드</label>
          <br />
          <Input
            name="user-password"
            type="password"
            value={props.password}
            onChange={props.onChangePassword}
            required
          />
        </div>
        <ButtonWrapper>
          <Button type="primary" htmlType="submit" onClick={props.onClickLogin}>
            로그인
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </Wrapper>
  );
}