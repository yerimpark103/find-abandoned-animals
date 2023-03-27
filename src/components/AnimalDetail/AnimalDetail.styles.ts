import styled from "@emotion/styled";

export const AnimalDetailCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding: unset !important;
  width: 100%;
  border: 1px solid #efefef;
  border-radius: 0.5rem;
`;

export const AnimalDetailImg = styled.img`
  width: 24rem;
  height: 24rem;
  object-fit: cover;
  border-radius: 0.5rem 0 0 0.5rem;
`;

export const AnimalDetailContainer = styled.div`
  padding: 2rem 1rem;
`;

export const AnimalDetailTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AnimalDetailText = styled.span`
  margin-bottom: 0.75rem;
`;

export const PhoneNumber = styled.small`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
