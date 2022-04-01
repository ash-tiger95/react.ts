import React, { useState, useMemo } from "react";
import DailyCheckItem from "./DailCheckItem";

import NoResult from "@component/NoResult";
import { MDailyCheck } from "@model/DailyCheck";
import { EDailyCheckListType } from "@enum/DailyCheck";

import { get } from "lodash";

enum ESearch {
  OPEN = "open",
  CLOSE = "close",
}
interface MSearchType {
  id: ESearch;
  type: EDailyCheckListType;
}

const DailyCheckList = () => {
  const [dailyCheckList, setDailyCheckList] = useState<MDailyCheck[]>([
    { id: 1, name: "name1", description: "desc1" },
    { id: 3, name: "name3", description: "desc3" },
    { id: 4, name: "name4", description: "desc4" },
    { id: 5, name: "name5", description: "desc5" },
    { id: 2, name: "name2", description: "desc2" },
  ]);
  const [checkedList, setCheckedList] = useState<number[]>([]);
  const [searchType, setSearchType] = useState<MSearchType>({
    id: ESearch.OPEN,
    type: EDailyCheckListType.ALL,
  });

  const checkCount = useMemo(() => {
    let count = 0;
    dailyCheckList.map((v) => {
      get(v, "observation", "").length > 0 && count++;
    });

    return count;
  }, [dailyCheckList]);

  const handleItemChange = (param: MDailyCheck, index: number) => {};

  return (
    <>
      {checkCount}
      <div>
        {dailyCheckList.length === 0 ? (
          <NoResult title="No Data!" subTitle="no result page" />
        ) : (
          dailyCheckList.map((value, index) => (
            <DailyCheckItem
              index={index}
              value={value}
              key={value.id}
              onChange={handleItemChange}
              isChecked={checkedList.indexOf(value.id) > -1 ? true : false} // 있으면 index 번호, 없으면 -1
              onSelect={(isSelect) => {
                if (isSelect) {
                  setCheckedList(checkedList.concat([value.id]));
                } else {
                  setCheckedList(checkedList.filter((v) => v !== value.id));
                }
              }}
            />
          ))
        )}
      </div>
    </>
  );
};

export default DailyCheckList;
