import React from "react"; // 必ず必要

const ColorfullMessage = (props) => {
  // 分割代入
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfullMessage; // 他のファイルでも使えるようにexport
