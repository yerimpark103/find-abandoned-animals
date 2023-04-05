import {Table, TableColumnsType} from "antd";
import {IAnimalListDataType} from "./AnimalList.types";

interface AnimalListProps {
  columns: TableColumnsType<IAnimalListDataType>;
  data: IAnimalListDataType[];
  handleClickNavigateToDetailPage: (val: any) => any;
}

export default function AnimalListUI(props: AnimalListProps) {
  return (
    <Table
      rowKey={(record) => record.desertionNo}
      columns={props.columns}
      dataSource={props.data}
      onRow={(record) => {
        return {
          onClick: () => {
            props.handleClickNavigateToDetailPage(record.desertionNo);
          },
        };
      }}
      style={{cursor: "pointer"}}
    />
  );
}
