import {useState} from "react";
import styled from "@emotion/styled";
import {Modal, Button} from "antd";
import LoginForm from "@/components/units/LoginForm";
import SignupForm from "@/components/units/SignupForm";
import {useRouter} from "next/router";

const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
`;

export default function LayoutHeader() {
  const router = useRouter();
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const loginModal = () => {
    setOpenLogin((prev) => !prev);
  };

  const signUpModal = () => {
    setOpenSignUp((prev) => !prev);
  };

  const handleClickLogo = () => {
    void router.push("/");
  };

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
        <h1 onClick={handleClickLogo} style={{cursor: "pointer"}}>
          유기동물보호센터
        </h1>
        <div>
          <Button onClick={loginModal} style={{marginRight: "0.5rem"}}>
            로그인
          </Button>
          {openLogin && (
            <Modal
              open={true}
              onOk={loginModal}
              onCancel={loginModal}
              footer={[]}
            >
              <LoginForm />
            </Modal>
          )}
          <Button onClick={signUpModal}>회원가입</Button>
          {openSignUp && (
            <Modal
              open={true}
              onOk={signUpModal}
              onCancel={signUpModal}
              footer={[]}
            >
              <SignupForm />
            </Modal>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
