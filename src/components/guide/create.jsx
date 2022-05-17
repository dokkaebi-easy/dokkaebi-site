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

const Exbox = styled.div`
  border: 1px solid black;
  border-color: D9D9D9;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 16px;
  font-size: 18px;
`;

const Textbox = styled.div`
  border: 1px solid black;
  border-color: D9D9D9;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 16px;
  color: 000099;
  font-size: 18px;
`;

const TextboxBlack = styled.div`
  border: 1px solid black;
  border-color: D9D9D9;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 16px;
  font-size: 18px;
`;

const Colorbox = styled.div`
  border: 1px solid black;
  border-color: D9D9D9;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 16px;
  background-color: CCFFFF;
  color: black;
  font-size: 18px;
  width: 800px;
`;

const Item = styled.div``;

const Img1 = styled.img`
  max-width: 800px;
`;

const Img2 = styled.img`
  max-width: 1200px;
`;

const Title1 = styled.h2`
  margin-top: 30px;
`;

const Subtitle = styled.p`
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 24px;
`;

const Bold = styled.span`
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const P1 = styled.p`
  font-size: 18px;
  margin-top: 10px;
`;
