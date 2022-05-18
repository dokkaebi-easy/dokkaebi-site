import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Img_s from "../../../assets/guide/createProject/19.png";
import Img_t from "../../../assets/guide/createProject/20.png";

const Makeproject = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Title1> 5. Make Project</Title1>
            <P1>- Make Project에서 build 하기 위한 setting을 저장합니다.</P1>
            <Img1 src={Img_s} alt="이미지없음" />
            <p> Build Setting Save 성공 했을 경우 화면입니다.</p>
            <Img1 src={Img_t} alt="이미지없음" />
            <p> 저장 실패시 메세지는 추후 업데이트 예정입니다.</p>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Makeproject;

const Item = styled.div``;

const Img1 = styled.img`
  max-width: 800px;
`;

const Title1 = styled.h2`
  margin-top: 30px;
`;

const P1 = styled.p`
  font-size: 18px;
  margin-top: 10px;
`;
