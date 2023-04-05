import {DefaultOptionType} from "antd/es/select";
import {Dispatch, MouseEventHandler, SetStateAction} from "react";

export interface IFilterProps {
  setAppliedFilter: Dispatch<SetStateAction<string>>;
}

export interface FilterUIProps {
  handleDeleteFilter: MouseEventHandler<SVGSVGElement> | undefined;
  themeToken: any;
  filterableColumns: DefaultOptionType[] | undefined;
  handleChangeSelectColumn:
    | ((value: any, option: DefaultOptionType | DefaultOptionType[]) => void)
    | undefined;
  filterOptionsByColumn: DefaultOptionType[] | undefined;
  handleChangeSelectOption:
    | ((value: any, option: DefaultOptionType | DefaultOptionType[]) => void)
    | undefined;
}
