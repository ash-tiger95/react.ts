import React, { useState, useMemo } from "react";
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
    { id: 1, name: "name1", description: "desc1", observation: "" },
    { id: 2, name: "name2", description: "desc2", observation: "" },
    { id: 3, name: "name3", description: "desc3", observation: "" },
    { id: 4, name: "name4", description: "desc4", observation: "" },
    { id: 5, name: "name5", description: "desc5", observation: "" },
  ]);
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

  return <div>{checkCount}</div>;
};

export default DailyCheckList;
