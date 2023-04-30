import styled from "@emotion/styled";

export const AnimalDetailCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding: unset !important;
  width: 100%;
  height: 24rem;
  border: 1px solid #efefef;
  border-radius: 0.5rem;
`;

export const AnimalDetailImg = styled.img`
  width: 50%;
  max-height: 28rem;
  object-fit: cover;
  border-radius: 0.5rem 0 0 0.5rem;
`;

export const AnimalDetailContainer = styled.div`
  width: 50%;
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

export const KakaoMap = styled.div`
  width: 100%;
  height: 15rem;
  margin-top: 10px;
  border-radius: 0.5rem;
`
