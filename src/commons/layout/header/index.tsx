import {useState} from "react";
import styled from "@emotion/styled";
import {Col, Row, Modal, Button} from "antd";
import LoginForm from "@/components/units/LoginForm";
import SignupForm from "@/components/units/SignupForm";

const Wrapper = styled.div`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function LayoutHeader() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const loginModal = () => {
    setOpenLogin((prev) => !prev);
  };

  const signUpModal = () => {
    setOpenSignUp((prev) => !prev);
  };
  return (
    <Wrapper>
      <Row style={{width: "100%", margin: "0 auto"}}>
        <Col span={6}></Col>
        <Col span={12}>유기동물보호센터</Col>
        <Col span={6}>
          <Button onClick={loginModal}>로그인</Button>
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
        </Col>
      </Row>
    </Wrapper>
  );
}
