import React from "react";
import { uniqueId } from "lodash";

interface IProps {
  checked: boolean;
  text?: string;
  children?: React.ReactElement;
  onChange?: (isCheck: boolean) => void;
}
const CheckBox: React.FC<IProps> = ({
  checked = false,
  text,
  children,
  onChange = (isCheck: boolean) => {},
}): React.ReactElement => {
  const uniqId = uniqueId(`cb-`);
  return (
    <div>
      <input
        type="checkbox"
        id={uniqId}
        checked={checked}
        onChange={() => {
          onChange(!checked);
        }}
      />
      <label htmlFor={uniqId}>{text}</label>
      {children}
    </div>
  );
};

export default CheckBox;
