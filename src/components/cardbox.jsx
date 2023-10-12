import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";


const CardBox = ({ title, number, subtitle, bgColor, txtColor }) => {
  return (
    <Card sx={{ backgroundColor: bgColor, flex: 1 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", padding: "16px 24px" }}>
        <Typography variant='h4'>{title}</Typography>
        <Typography variant='h1'>{number}</Typography>
        <Typography sx={{ color: txtColor }}>{subtitle}</Typography>
      </Box>
    </Card>
  );
}
export default CardBox;
