import React, { useEffect, useState } from "react";

import { get } from "lodash";
import CheckBox from "@component/Common/CheckBox";
import { MDailyCheck, MDailyCheck_Upload } from "@model/DailyCheck";
import { EDailyCheckListType, EDailyCheckBtn } from "@enum/DailyCheck";

import { useTranslation } from "react-i18next";

interface IProps {
  index: number;
  value: MDailyCheck;
  onChange: (param: MDailyCheck_Upload) => void;
  isChecked: boolean;
  onSelect?: (isSelected: boolean) => void;
}

const DailCheckItem: React.FC<IProps> = ({
  index,
  value,
  onChange,
  isChecked,
  onSelect = () => {},
}) => {
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [uploadData, setUploadData] = useState<MDailyCheck_Upload>({
    id: value.id,
    observation: get(value, "upload.observation", ""),
  });

  const { t } = useTranslation(["label"]);

  const btnType = [
    EDailyCheckBtn.BTN1,
    EDailyCheckBtn.BTN2,
    EDailyCheckBtn.BTN3,
    EDailyCheckBtn.BTN4,
  ];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setUploadData({
      ...uploadData,
      observation: (e.target as any).value,
    });
    setIsUpdate(!isUpdate);
  };

  useEffect(() => {
    onChange(uploadData);
  }, [isUpdate]);
  return (
    <>
      <div>
        <CheckBox
          onChange={(newValue: boolean) => {
            onSelect(newValue);
          }}
          checked={isChecked}
        />
        <table>
          <colgroup>
            <col width="90px" />
            <col width="*" />
            <col width="30%" />
            <col width="20%" />
          </colgroup>
          <tbody>
            <tr>
              <th>{t("label:id")}</th>
              <td colSpan={3}>{value.id}</td>
            </tr>
            <tr>
              <th>{t("label:name")}</th>
              <td colSpan={3}>{value.name}</td>
            </tr>
            <tr>
              <th>{t("label:description")}</th>
              <td colSpan={3}>{value.description}</td>
            </tr>
          </tbody>
        </table>

        {btnType.map((cur, index) => (
          <button
            key={btnType[index]}
            value={btnType[index]}
            onClick={handleClick}
          >
            {btnType[index]}
          </button>
        ))}
      </div>
    </>
  );
};

export default DailCheckItem;
