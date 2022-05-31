import React from "react";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

const Section = styled.div`
  padding: 60px;
  display : flex;
  flex-direction : column;
`;

const Container = ({ children, title }) => {
  return (
    <Section>
      <Typography
        variant="h3"
        gutterBottom
        component="div"
        sx={{ fontWeight: "bold", marginBottom: "30px" }}
      >
        {title}
      </Typography>
      {children}
    </Section>
  );
};

export default Container;
