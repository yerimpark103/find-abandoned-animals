import React from "react";
import {Form, Input, Checkbox, Button} from "antd";
import { Wrapper, ButtonWrapper } from "./SignUpForm.styles";

export default function SignUpFormUI(props: any) {
  return (
    <Wrapper>
      <Form onFinish={props.isEdit ? props.onClickUpdate : props.onClickSubmit} style={{padding: 10}}>
        {props.isEdit ? <h1>마이페이지</h1> : <h1>회원가입 페이지</h1>}
        <div>
          <label htmlFor="user-email">이메일</label>
          <br />
          {props.isEdit
            ? (
              <Input
                style={{backgroundColor: "rgba(229, 229, 229, 0.5"}}
                name="user-email"
                type="email"
                value={props.data?.fetchUserLoggedIn.email}
              />
            ) : (
              <Input
                name="user-email"
                type="email"
                value={props.email}
                onChange={props.onChangeEmail}
                required
              />
            )
          }
        </div>
        {props.isEdit
            ? (
              <div>
                <label htmlFor="user-name">이름</label>
                <br />
                <Input
                  name="user-name"
                  placeholder={props.data?.fetchUserLoggedIn.name}
                  onChange={props.onChangeName}
                  required
                />
              </div>
            ) 
            : (
              <div>
                <label htmlFor="user-name">이름</label>
                <br />
                <Input
                  name="user-name"
                  value={props.name}
                  onChange={props.onChangeName}
                  required
                />
              </div>
            )}
        
        {props.isEdit
            ? (<div></div>) 
            : (
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
            )}
        
        {props.isEdit
            ? (<div></div>) 
            : (
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
            )}
        
        <div>
          {props.isEdit
          ? (<div></div>)
          : (<div>
            <Checkbox name="user-term" onChange={props.onChangeTerm}>
              동의합니다.
            </Checkbox>
            {props.termError && (
              <div style={{color: "red"}}>약관에 동의하셔야 합니다.</div>
            )}
          </div>)}
        </div>
        <ButtonWrapper>
          <Button type="primary" htmlType="submit">
            {props.isEdit ? "수정하기" : "가입하기"}
          </Button>
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
}