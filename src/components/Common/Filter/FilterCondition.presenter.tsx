import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Select} from "antd";
import {FilterConditionUIProps} from "./Filter.types";

export default function FilterConditionUI(props: FilterConditionUIProps) {
  return (
    <div style={{marginBottom: "0.5rem"}}>
      <Select
        value={props.selectedCondition.key}
        options={props.filterableColumns}
        // onChange={props.handleChangeSelectColumn}
        onChange={(value) => {
          props.handleChangeSelectColumn?.(value, [], props.index);
        }}
        style={{width: "10rem", marginRight: "0.5rem"}}
        placeholder="필터"
      />
      <Select
        value={props.selectedCondition.value}
        options={props.filterOptionsByColumn}
        onChange={props.handleChangeSelectOption}
        style={{width: "10rem"}}
        placeholder="세부 필터"
      />
      <FontAwesomeIcon
        icon={faTrashCan}
        style={{marginLeft: "1rem", cursor: "pointer"}}
        onClick={props.handleDeleteFilter}
      />
    </div>
  );
}
