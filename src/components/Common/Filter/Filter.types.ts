import {DefaultOptionType} from "antd/es/select";
import {Dispatch, MouseEventHandler, SetStateAction} from "react";

export interface IFilterProps {
  setAppliedFilter: Dispatch<SetStateAction<string>>;
}

export interface FilterUIProps {
  handleDeleteFilter: (index: number) => void;
  themeToken: any;
  filterConditions: string[];
  filterableColumns: DefaultOptionType[] | undefined;
  handleChangeSelectColumn:
    | ((
        value: any,
        option: DefaultOptionType | DefaultOptionType[],
        index: number
      ) => void)
    | undefined;
  filterOptionsByColumn: DefaultOptionType[] | undefined;
  handleChangeSelectOption:
    | ((value: any, option: DefaultOptionType | DefaultOptionType[]) => void)
    | undefined;
  handleAddFilter: () => void;
}

export interface FilterConditionUIProps {
  selectedCondition: any;
  key: number;
  index: number;
  filterConditions: string[];
  handleDeleteFilter: MouseEventHandler<SVGSVGElement> | undefined;
  filterableColumns: DefaultOptionType[] | undefined;
  handleChangeSelectColumn:
    | ((
        value: any,
        option: DefaultOptionType | DefaultOptionType[],
        index: number
      ) => void)
    | undefined;
  filterOptionsByColumn: DefaultOptionType[] | undefined;
  handleChangeSelectOption:
    | ((value: any, option: DefaultOptionType | DefaultOptionType[]) => void)
    | undefined;
}
