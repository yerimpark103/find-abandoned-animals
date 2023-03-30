import {
  PaginationButton,
  PaginationButtonContainer,
  PaginationNavigationButton,
} from "./Pagination.styles";

interface PaginationProps {
  currentPage: number;
  startPage: number;
  lastPage: number;
  // TODO: change to mouseevent type
  handleClickPage: any;
  handleClickPrevPage: any;
  handleClickNextPage: any;
  isPrevPageButtonActive: boolean;
  isNextPageButtonActive: boolean;
}

export default function PaginationUI(props: PaginationProps) {
  return (
    <>
      <PaginationButtonContainer>
        <PaginationNavigationButton
          isActive={props.isPrevPageButtonActive}
          onClick={props.handleClickPrevPage}
        >
          {" "}
          &lsaquo;{" "}
        </PaginationNavigationButton>
        {Array(10)
          .fill(1)
          .map(
            (_, index) =>
              index + props.startPage <= props.lastPage && (
                <PaginationButton
                  key={index + props.startPage}
                  id={String(index + props.startPage)}
                  isSelected={props.currentPage === index + props.startPage}
                  onClick={props.handleClickPage}
                >
                  {index + props.startPage}
                </PaginationButton>
              )
          )}
        <PaginationNavigationButton
          isActive={props.isNextPageButtonActive}
          onClick={props.handleClickNextPage}
        >
          {" "}
          &rsaquo;{" "}
        </PaginationNavigationButton>
      </PaginationButtonContainer>
    </>
  );
}
