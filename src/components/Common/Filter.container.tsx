import {theme} from "antd";
import {useState} from "react";
import FilterUI from "./Filter.presenter";
import {IFilterProps} from "./Filter.types";

export default function Filter(props: IFilterProps) {
  const filterableColumns = [{value: "upkind", label: "동물 종류"}];

  const filterOptions = [
    {
      column: "upkind",
      options: [
        {value: "417000", label: "개"},
        {value: "422400", label: "고양이"},
        {value: "429900", label: "기타"},
      ],
    },
  ];

  const [filterColumn, setFilterColumn] = useState("");
  const [filterOptionsByColumn, setFilterOptionsByColumn] = useState([] as any);

  const themeToken = {...theme.useToken().token};

  const handleChangeSelectColumn = (value: string) => {
    setFilterColumn(value);
    const options = filterOptions.find(
      (option) => option.column === value
    )?.options;
    if (options) setFilterOptionsByColumn(options);
  };

  const handleChangeSelectOption = (value: string) => {
    props.setAppliedFilter(`&${filterColumn}=${value}`);
  };

  const handleDeleteFilter = () => {
    setFilterColumn("");
    setFilterOptionsByColumn([]);
  };

  return (
    <FilterUI
      themeToken={themeToken}
      filterableColumns={filterableColumns}
      filterOptionsByColumn={filterOptionsByColumn}
      handleChangeSelectColumn={handleChangeSelectColumn}
      handleChangeSelectOption={handleChangeSelectOption}
      handleDeleteFilter={handleDeleteFilter}
    />
  );
}
