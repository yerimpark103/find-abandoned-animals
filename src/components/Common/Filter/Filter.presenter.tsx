import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter} from "@fortawesome/free-solid-svg-icons";
import {Button, Dropdown} from "antd";
import {DropDownContent} from "../common.styles";
import {FilterUIProps} from "./Filter.types";
import FilterConditionUI from "./FilterCondition.presenter";

export default function FilterUI(props: FilterUIProps) {
  return (
    <Dropdown
      trigger={["click"]}
      dropdownRender={() => (
        <DropDownContent token={props.themeToken}>
          {props.filterConditions?.map((_, index) => (
            <FilterConditionUI
              key={index}
              filterConditions={props.filterConditions}
              filterableColumns={props.filterableColumns}
              filterOptionsByColumn={props.filterOptionsByColumn}
              handleChangeSelectColumn={props.handleChangeSelectColumn}
              handleChangeSelectOption={props.handleChangeSelectOption}
              handleDeleteFilter={() => {
                props.handleDeleteFilter(index);
              }}
            />
          ))}

          <Button onClick={props.handleAddFilter}>필터 추가</Button>
        </DropDownContent>
      )}
    >
      <Button>
        <FontAwesomeIcon icon={faFilter} style={{marginRight: "0.5rem"}} />
        Filter
      </Button>
    </Dropdown>
  );
}
