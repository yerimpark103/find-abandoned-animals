import styled from "@emotion/styled";
import {Button} from "antd";

export const ReactiveButton = styled(Button)<{isActive: boolean}>`
  color: ${(props) => (props.isActive ? "#1677ff" : "")};
  border-color: ${(props) => (props.isActive ? "#1677ff" : "")};
`;
