import React, {ChangeEvent, useState} from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "@/commons/store";
import { useMutation } from "@apollo/client";
import LoginFormUI from "./LoginForm.presenter";
import { LOGIN_USER } from "./LoginForm.query";

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
        localStorage.setItem("accessToken", accessToken);

        void router.push("/");

    } catch (error) {
        console.log(error);
    }
}

  return (
    <LoginFormUI
      email={email}
      password={password}
      accessToken={accessToken}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
    />
  );
}