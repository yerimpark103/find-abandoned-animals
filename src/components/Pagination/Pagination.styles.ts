import styled from "@emotion/styled";

export const PaginationButtonContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

export const PaginationButton = styled.span<{isSelected: boolean}>`
  cursor: pointer;
  margin: 0.5rem;
  color: ${(props) => (props.isSelected ? "#bb2649" : "unset")};
`;

export const PaginationNavigationButton = styled.span<{
  isActive: boolean;
}>`
  margin: 0.5rem;
  cursor: ${(props) => (props.isActive ? "pointer" : "not-allowed;")};
  opacity: ${(props) => (props.isActive ? 1 : 0.2)};
`;
