import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 3rem;
`;

export default function LayoutFooter() {
  return (
    <Wrapper>
      <small style={{float: "right", marginRight: "2rem"}}>
        Developed by Yerim Park and Sehwan Kim. 2023
      </small>
    </Wrapper>
  );
}
