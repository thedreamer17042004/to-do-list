import React from "react";
import "./card.css";
import CardTestOne from "./Card";
import { Container, Grid } from "@mui/material";
import CardData from "../../Data/CardData";

const CardTry = () => {
  let CardDataList = CardData.CardDataList;

  return (
    <React.Fragment>
      <Container maxWidth="lg" className="ctn_css">
        <Grid container rowSpacing={2} flexDirection={"row"}>
          <Grid item lg={12} style={{display: 'flex', justifyContent: 'space-between'}}>
            {CardDataList.map((item, index) => {
              return <CardTestOne key={index} item={item}/>;
            })}
          </Grid>    
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default CardTry;
