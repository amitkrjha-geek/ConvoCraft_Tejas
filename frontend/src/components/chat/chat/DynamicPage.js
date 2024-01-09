// DynamicPage.js
import React from "react";
import { useParams } from "react-router-dom";
import ResponsiveAppBar from "../../Header";
import LeftPannel from "../LeftPannel";
import RightPannel from "../RightPannel";

const DynamicPage = () => {
  const { id } = useParams();
  return (
    <>
      <ResponsiveAppBar />
      <div style={{ display: "flex" }}>
        <LeftPannel />
        <RightPannel/>
      </div>
    </>
  );
};

export default DynamicPage;
