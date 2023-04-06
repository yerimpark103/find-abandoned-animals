import styled from "@emotion/styled";
import {Card} from "antd";

export const Container = styled.div`
  padding: 3rem 10rem;
`;

export const DropDownContent = styled(Card)<{token: any}>`
  display: flex;
  width: 25rem;
  border: unset;
  padding: unset;
  background-color: ${(props) => props.token.colorBgElevated};
  border-radius: ${(props) => props.token.borderRadiusLG};
  box-shadow: ${(props) => props.token.boxShadowSecondary};
  .ant-card-body {
    padding: 0.75rem 1rem;
  }
`;
