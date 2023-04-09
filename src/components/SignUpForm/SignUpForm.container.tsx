import {useState, useCallback} from "react";
import SignUpFormUI from "./SignUpForm.presenter";

export default function SignupForm() {
  // 필요한 기능 : 로그인시 해당 페이지 접속 불가하게

  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const onChangeNick = useCallback((e) => {
    setNickname(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password]
  );

  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      setPasswordError(true);
      return;
    }
    if (!term) {
      setTermError(true);
      return;
    }
    console.log(email, nickname, password);
  }, [email, password, passwordCheck, term]);

  return (
    <SignUpFormUI
        email={email}
        nickname={nickname}
        password={password}
        passwordCheck={passwordCheck}
        passwordError={passwordError}
        onChangeEmail={onChangeEmail}
        onChangeNick={onChangeNick}
        onChangePassword={onChangePassword}
        onChangePasswordCheck={onChangePasswordCheck}
        termError={termError}
        onChangeTerm={onChangeTerm}
        onSubmit={onSubmit}
    />
  );
}