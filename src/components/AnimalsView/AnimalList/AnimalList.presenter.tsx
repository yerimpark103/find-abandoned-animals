import {Table, TableColumnsType} from "antd";
import PaginationUI from "../../Pagination/Pagination.presenter";
import {IAnimalListDataType} from "./AnimalList.types";

interface AnimalListProps {
  columns: TableColumnsType<IAnimalListDataType>;
  data: IAnimalListDataType[];
  handleClickNavigateToDetailPage: (val: any) => any;
  totalPageCount: number;
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

export default function AnimalListUI(props: AnimalListProps) {
  return (
    <>
      <Table
        rowKey={(record) => record.desertionNo}
        columns={props.columns}
        dataSource={props.data}
        pagination={false}
        onRow={(record) => {
          return {
            onClick: () => {
              props.handleClickNavigateToDetailPage(record.desertionNo);
            },
          };
        }}
        style={{cursor: "pointer"}}
      />
      <PaginationUI
        currentPage={props.currentPage}
        startPage={props.startPage}
        lastPage={props.lastPage}
        isPrevPageButtonActive={props.isPrevPageButtonActive}
        handleClickPage={props.handleClickPage}
        handleClickPrevPage={props.handleClickPrevPage}
        isNextPageButtonActive={props.isNextPageButtonActive}
        handleClickNextPage={props.handleClickNextPage}
      />
    </>
  );
}
