import styled from "@emotion/styled";
import {Card, Tag} from "antd";

export const AnimalCard = styled(Card)`
  height: 100%;
  cursor: pointer;
`;

export const AnimalTag = styled(Tag)`
  margin-bottom: 0.5rem;
`;

export const AnimalImg = styled.img`
  width: 7.5rem;
  height: 12rem;
  object-fit: cover;
`;
