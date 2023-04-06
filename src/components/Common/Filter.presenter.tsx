import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {Button, Dropdown, Select} from "antd";
import {DropDownContent} from "./common.styles";
import {FilterUIProps} from "./Filter.types";

export default function FilterUI(props: FilterUIProps) {
  return (
    <Dropdown
      trigger={["click"]}
      dropdownRender={() => (
        <DropDownContent token={props.themeToken}>
          <Select
            options={props.filterableColumns}
            onChange={props.handleChangeSelectColumn}
            style={{width: "10rem", marginRight: "0.5rem"}}
            placeholder="필터"
          />
          <Select
            options={props.filterOptionsByColumn}
            onChange={props.handleChangeSelectOption}
            style={{width: "10rem"}}
            placeholder="세부 필터"
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            style={{marginLeft: "1rem"}}
            onClick={props.handleDeleteFilter}
          />
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
