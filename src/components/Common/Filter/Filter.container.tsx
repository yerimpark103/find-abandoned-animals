import {sidoList} from "@/util/locationData";
import {theme} from "antd";
import {useEffect, useState} from "react";
import FilterUI from "./Filter.presenter";
import {IFilterProps} from "./Filter.types";
import _ from "lodash";

export default function Filter(props: IFilterProps) {
  const [filterConditions, setFilterConditions] = useState([] as any);
  const [filterableColumns, _] = useState([
    {value: "upkind", label: "동물 종류", disabled: false},
    {value: "upr_cd", label: "시/도", disabled: false},
  ]);

  /* TODO: 
  시/도 컬럼 선택 시 군/구 컬럼 추가, 
  반대로 시/도 컬럼 삭제 시 filterConditions, filterableColumns에 있는 군/구 삭제
  */

  // const filterableColumns = [
  //   {value: "upkind", label: "동물 종류", disabled: false},
  //   {value: "upr_cd", label: "시/도", disabled: false},
  // ];

  // useEffect(() => {
  //   if (
  //     filterConditions.find(
  //       (condition: {key: string}) => condition.key === "upr_cd"
  //     )
  //   ) {
  //     filterableColumns.push({
  //       value: "org_cd",
  //       label: "군/구",
  //       disabled: false,
  //     });
  //   } else {
  //     const tempFilterableColumns = [...filterableColumns];
  //     _.remove(tempFilterableColumns, (el) => {
  //       return el.value === "org_cd";
  //     });
  //     setFilterableColumns(tempFilterableColumns);
  //   }
  // }, [filterConditions]);

  // const sido = filterConditions.find(
  //   (condition: {key: string}) => condition.key === "upr_cd"
  // );

  // const sigunguListBySido = sido ? getSigunguBySido(sido.value) : sigunguList;

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
    // {
    //   column: "org_cd",
    //   options: sigunguListBySido,
    // },
  ];

  const [filterColumn, setFilterColumn] = useState("");
  const [filterOptionsByColumn, setFilterOptionsByColumn] = useState([] as any);

  const themeToken = {...theme.useToken().token};

  const handleChangeSelectColumn = (value: string, _: any, index: number) => {
    const selectedColumn = filterableColumns.find(
      (column) => column.value === value
    );
    if (selectedColumn) {
      const selectedColumnIndex = filterableColumns.indexOf(selectedColumn);
      filterableColumns[selectedColumnIndex].disabled = true;
    }
    setFilterColumn(value);
    const newFilterConditions = [...filterConditions];

    const tempCondition = newFilterConditions[index];
    if (tempCondition.key !== value) tempCondition.value = null;
    tempCondition.key = value;

    const options = filterOptions.find(
      (option) => option.column === value
    )?.options;

    if (options) {
      setFilterOptionsByColumn(options);
    }
  };

  const handleChangeSelectOption = (value: string) => {
    const newFilterConditions = [...filterConditions];
    const tempCondition = newFilterConditions.find(
      (condition: {key: string}) => condition.key === filterColumn
    );
    tempCondition.value = value;
    setFilterConditions(newFilterConditions);
  };

  useEffect(() => {
    let filterQuery = "";
    filterConditions.forEach((condition: {key: any; value: any}) => {
      filterQuery += `&${condition.key}=${condition.value}`;
    });
    props.setAppliedFilter(filterQuery);
  }, [filterConditions]);

  const handleDeleteFilter = (index: number) => {
    const tempFilterConditions = [...filterConditions];
    _.pullAt(tempFilterConditions, [index]);
    setFilterConditions(tempFilterConditions);
  };

  const handleAddFilter = () => {
    setFilterConditions((prev: any[]) => [...prev, {key: null, value: null}]);
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
