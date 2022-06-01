import React, { useContext } from "react";
import Container from "../../shared/components/Container";
import Breadcrumb from "../../shared/components/Breadcrumb";
import { DASHBOARD_SCREEN, CHECKOUT_SCREEN} from "../../shared/constants/screenNames";
import Button from "@mui/material/Button";
import Context from "../../context/Context";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const Checkout = () => {
  const { redirect } = useContext(Context);

  const handleClickCheckout = () => {
    redirect(DASHBOARD_SCREEN);
  };

  return (
    <Container title={"Checkout"}>
      <Breadcrumb actualScreen={CHECKOUT_SCREEN} />
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "540px",
          alignItems: "center",
          padding: "40px",
          textAlign: "center",
          width: "fit-contet",
          margin: "30px auto",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            margin: "25px 0px",
            fontWeight: "bold",
          }}
          variant="h4"
        >
          Congratulations! Your order is on the way 🎉
        </Typography>

        <Button
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            marginTop: "100px",
          }}
          variant="contained"
          onClick={() => {
            handleClickCheckout();
          }}
        >
          Go back to Home
        </Button>
      </Card>
    </Container>
  );
};

export default Checkout;
