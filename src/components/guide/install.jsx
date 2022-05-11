import styled from "@emotion/styled";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Install = () => {
  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>

        <Step>Step 1 :</Step>
        </Grid>
        <Grid item xs={6}>
          <div>접속한 EC2dp apt Packge 업데이트</div>
        </Grid>

      </Grid>
      <div>
      <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
        <Button>
         $ sudo apt-get update
        </Button>
      </Box>
      </div>

      <Co>ㄴㅇㅁ러ㅏㅇ넘라ㅣㄴ엄라ㅣㄴㅇㅁ러ㅏㅣ</Co>
    </div>
  );
};
export default Install;
const Co = styled.div
  `font-size: 100px;`
;

const Step = styled.h1
  `color: blue;`
;