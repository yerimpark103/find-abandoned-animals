import styled from "@emotion/styled";
import {Button} from "antd";

export const ReactiveButton = styled(Button)<{isactive: number}>`
  color: ${(props) => (props.isactive > 0 ? "#1677ff" : "")};
  border-color: ${(props) => (props.isactive > 0 ? "#1677ff" : "")};
`;
