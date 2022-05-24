import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import HorizontalNonLinearStepper from "./stepper";

const Create = () => {
  return (
    <div>
      <H1>프로젝트 생성 페이지</H1>
      <HorizontalNonLinearStepper />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item></Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Create;

const H1 = styled.h1`
  background-color: 1976D2;
  color: white;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 30px;
`;

const Item = styled.div``;
