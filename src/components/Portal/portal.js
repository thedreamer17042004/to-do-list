// https://viblo.asia/p/react-portal-canh-cong-khong-gian-va-ung-dung-vyDZOqe75wj
// Prompt and useLocation
// answer https://viblo.asia/p/co-ban-ve-router-trong-reactjs-07LKXzAElV4
import { Button } from "@mui/material";
import React, { Fragment } from "react";
import { createPortal } from "react-dom";

const Portal = () => {
  return (
    <Fragment>
      {createPortal(
        <Button>Heloo my friend</Button>,
        document.getElementById("backdrop")
      )}
    </Fragment>
  );
};
export default Portal;
