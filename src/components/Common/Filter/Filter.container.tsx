import {getSigunguBySido, sidoList, sigunguList} from "@/util/locationData";
import {theme} from "antd";
import {useState} from "react";
import FilterUI from "./Filter.presenter";
import {IFilterProps} from "./Filter.types";
import _ from "lodash";

export default function Filter(props: IFilterProps) {
  const [filterConditions, setFilterConditions] = useState([] as any);
  const filterableColumns = [
    {value: "upkind", label: "동물 종류", disabled: false},
    {value: "upr_cd", label: "시/도", disabled: false},
  ];

  if (
    filterConditions.find(
      (condition: {key: string}) => condition.key === "upr_cd"
    )
  )
    filterableColumns.push({value: "org_cd", label: "군/구", disabled: false});

  const sido = filterConditions.find(
    (condition: {key: string}) => condition.key === "upr_cd"
  );

  const sigunguListBySido = sido ? getSigunguBySido(sido.value) : sigunguList;

  const filterOptions = [
    {
      column: "upkind",
      options: [
        {value: "417000", label: "개"},
        {value: "422400", label: "고양이"},
        {value: "429900", label: "기타"},
      ],
    },
    {
      column: "upr_cd",
      options: sidoList,
    },
    {
      column: "org_cd",
      options: sigunguListBySido,
    },
  ];

  const [filterColumn, setFilterColumn] = useState("");
  const [filterOptionsByColumn, setFilterOptionsByColumn] = useState([] as any);

  const themeToken = {...theme.useToken().token};

  const handleChangeSelectColumn = (value: string) => {
    const selectedColumn = filterableColumns.find(
      (column) => column.value === value
    );
    if (selectedColumn) {
      const selectedColumnIndex = filterableColumns.indexOf(selectedColumn);

      filterableColumns[selectedColumnIndex].disabled = true;
    }
    setFilterColumn(value);
    const newFilterConditions = [...filterConditions];
    const tempCondition = newFilterConditions.find(
      (condition) => condition.key === "new"
    );
    tempCondition.key = value;
    const options = filterOptions.find(
      (option) => option.column === value
    )?.options;
    if (options) setFilterOptionsByColumn(options);
  };

  const handleChangeSelectOption = (value: string) => {
    const newFilterConditions = [...filterConditions];
    const tempCondition = newFilterConditions.find(
      (condition: {key: string}) => condition.key === filterColumn
    );
    tempCondition.value = value;
    setFilterConditions(newFilterConditions);
    let filterQuery = "";
    filterConditions.forEach((condition: {key: any; value: any}) => {
      filterQuery += `&${condition.key}=${condition.value}`;
    });
    props.setAppliedFilter(filterQuery);
  };

  const handleDeleteFilter = (index: number) => {
    if (filterConditions.length === 1) setFilterConditions([]);
    else setFilterConditions(_.pullAt(filterConditions, [index]));
  };

  const handleAddFilter = () => {
    setFilterConditions((prev: any[]) => [...prev, {key: "new", value: ""}]);
  };

  return (
    <FilterUI
      themeToken={themeToken}
      filterConditions={filterConditions}
      filterableColumns={filterableColumns}
      filterOptionsByColumn={filterOptionsByColumn}
      handleChangeSelectColumn={handleChangeSelectColumn}
      handleChangeSelectOption={handleChangeSelectOption}
      handleDeleteFilter={handleDeleteFilter}
      handleAddFilter={handleAddFilter}
    />
  );
}
