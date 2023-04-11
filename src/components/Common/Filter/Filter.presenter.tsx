import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter, faPlus} from "@fortawesome/free-solid-svg-icons";
import {Button, Dropdown} from "antd";
import {DropDownContent} from "../common.styles";
import {FilterUIProps} from "./Filter.types";
import {ReactiveButton} from "./Filter.styles";
import FilterConditionUI from "./FilterCondition.presenter";

export default function FilterUI(props: FilterUIProps) {
  return (
    <>
      <Dropdown
        trigger={["click"]}
        dropdownRender={() => (
          <DropDownContent token={props.themeToken}>
            {props.filterConditions?.map((condition, index) => (
              <FilterConditionUI
                key={index}
                index={index}
                filterConditions={props.filterConditions}
                filterableColumns={props.filterableColumns}
                filterOptionsByColumn={props.filterOptionsByColumn}
                handleChangeSelectColumn={props.handleChangeSelectColumn}
                handleChangeSelectOption={props.handleChangeSelectOption}
                handleDeleteFilter={() => {
                  props.handleDeleteFilter(index);
                }}
                selectedCondition={condition}
              />
            ))}

            {props.filterConditions.length < 2 ? (
              <Button onClick={props.handleAddFilter}>
                <FontAwesomeIcon
                  icon={faPlus}
                  style={{marginRight: "0.25rem"}}
                />
                필터 추가
              </Button>
            ) : null}
          </DropDownContent>
        )}
      >
        <ReactiveButton isActive={props.filterConditions.length > 0}>
          <FontAwesomeIcon icon={faFilter} style={{marginRight: "0.5rem"}} />
          필터
        </ReactiveButton>
      </Dropdown>
    </>
  );
}
