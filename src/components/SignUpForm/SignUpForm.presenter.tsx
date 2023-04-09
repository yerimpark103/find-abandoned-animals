import React from "react";
import {Form, Input, Checkbox, Button} from "antd";
import { Wrapper } from "./SignUpForm.styles";

export default function SignUpFormUI(props: any) {
  return (
    <Wrapper>
      <Form onFinish={props.onClickSubmit} style={{padding: 10}}>
        <div>
          <label htmlFor="user-email">아이디</label>
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
          <label htmlFor="user-name">닉네임</label>
          <br />
          <Input
            name="user-name"
            value={props.name}
            onChange={props.onChangeName}
            required
          />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            type="password"
            value={props.password}
            onChange={props.onChangePassword}
            required
          />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={props.passwordCheck}
            required
            onChange={props.onChangePasswordCheck}
          />
          {props.passwordError && (
            <div style={{color: "red"}}>비밀번호가 일치하지 않습니다.</div>
          )}
        </div>
        <div>
          <Checkbox name="user-term" onChange={props.onChangeTerm}>
            동의합니다.
          </Checkbox>
          {props.termError && (
            <div style={{color: "red"}}>약관에 동의하셔야 합니다.</div>
          )}
        </div>
        <div style={{marginTop: 10}}>
          <Button type="primary" htmlType="submit">
            가입하기
          </Button>
        </div>
      </Form>
    </Wrapper>
  );
}