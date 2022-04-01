import React from "react";

interface IProps {
  title: string;
  subTitle: string;
}
const NoResult: React.FC<IProps> = (title, subTitle) => {
  return (
    <>
      <div>
        <span>{title}</span>
        <span>{subTitle}</span>
      </div>
    </>
  );
};

export default NoResult;
