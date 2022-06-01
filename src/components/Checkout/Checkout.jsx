import React, { useContext } from "react";
import Container from "../../shared/components/Container";
import Breadcrumb from "../../shared/components/Breadcrumb";
import { DASHBOARD_SCREEN, CHECKOUT_SCREEN} from "../../shared/constants/screenNames";
import Button from "@mui/material/Button";
import Context from "../../context/Context";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { MOBILE_MAX_WIDTH } from "../../shared/constants/Common";

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
          height: "400px",
          alignItems: "center",
          padding: "40px",
          textAlign: "center",
          width: "fit-contet",
          margin: "30px auto",
          justifyContent: "center",
          [`@media (max-width:${MOBILE_MAX_WIDTH}px)`]: {
            padding : "5px"
          },
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
