import React from "react";

const Container = ({ children }) => {
  return (
    <div className="flex flex-row mt-10 items-center relative">{children}</div>
  );
};

export default Container;
