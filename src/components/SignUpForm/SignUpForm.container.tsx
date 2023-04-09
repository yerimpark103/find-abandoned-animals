import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {useState} from "react";
import SignUpFormUI from "./SignUpForm.presenter";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!){
    createUser(createUserInput: $createUserInput) {
      _id
      name
      email
    }
  }
`

export default function SignupForm() {
  // 필요한 기능 : 로그인시 해당 페이지 접속 불가하게
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const onChangeName = (event: any) => {
    setName(event.target.value);
  };

  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const onChangePasswordCheck = (event :any) => {
      setPasswordError(event.target.value !== password);
      setPasswordCheck(event.target.value);
    }

  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);
  const onChangeTerm = (event: any) => {
    setTerm(event.target.checked);
    setTermError(false);
  };

  const onClickSubmit = async () => {
    if (password !== passwordCheck) {
      setPasswordError(true);
      return;
    }
    if (!term) {
      setTermError(true);
      return;
    }

    const result = await createUser({
      variables: {
        createUserInput: {
          email: email,
          name: name,
          password: password,
        }
      }
    });
    alert("가입이 완료되었습니다.");
    router.push("/");

  };

  return (
    <SignUpFormUI
        email={email}
        name={name}
        password={password}
        passwordCheck={passwordCheck}
        passwordError={passwordError}
        onChangeEmail={onChangeEmail}
        onChangeName={onChangeName}
        onChangePassword={onChangePassword}
        onChangePasswordCheck={onChangePasswordCheck}
        termError={termError}
        onChangeTerm={onChangeTerm}
        onClickSubmit={onClickSubmit}
    />
  );
}