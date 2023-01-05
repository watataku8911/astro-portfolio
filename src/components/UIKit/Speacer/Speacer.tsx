import React from "react";

type Props = {
  height: string;
};

const Spacer = (props: Props) => {
  return (
    <div
      style={{
        height: `${props.height}px`,
      }}
    ></div>
  );
};
export default Spacer;
