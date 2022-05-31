import React, { useContext } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { PRODUCT_SCREEN, DASHBOARD_SCREEN } from "../constants/screenNames";
import Context from "../../context/Context";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Breadcrumb = ({ actualScreen }) => {
  const { redirect } = useContext(Context);

  const handleClick = () => {
    redirect(DASHBOARD_SCREEN);
  };

  const breadcrumbs = (actualScreen) => [
    <Link
      href="#"
      underline="none"
      key="1"
      color="inherit"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Typography key="2" color="text.primary">
      {actualScreen === PRODUCT_SCREEN ? "Detail" : "Cart"}
    </Typography>,
  ];

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{
        marginBottom: "20px",
      }}
    >
      {breadcrumbs(actualScreen)}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
