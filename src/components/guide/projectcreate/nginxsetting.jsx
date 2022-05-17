import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Img_j from "../../../assets/guide/createProject/10.png";

const Nginxsetting = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Title1>3. NginX Setting</Title1>
            <P1>- 해당하는 NginX Setting 항목 양식에 맞춰 기입</P1>
            <Img2 src={Img_j} alt="이미지없음" />
            <Subtitle> 3-1. Domain 설정</Subtitle>
            <P1>
              - 여러 Domain이 필요한 경우 `+DOMAIN ADD` 버튼을 통해{" "}
              <Bold>입력 FORM을 추가</Bold>할 수 있습니다. <br /> - 사용하는
              서버의 도메인 주소를 입력하면 됩니다.
              `[k6s205.p.ssafy.io](http://k6s205.p.ssafy.io)` / `_`
            </P1>
            <Subtitle> 3-2. Domain 설정 [옵션]</Subtitle>
            <P1>
              - 여러 Proxy pass가 필요한 경우 `+PROXYPASS ADD` 버튼을 통해
              **입력 FORM을 추가**할 수 있습니다.
              <br /> - 기본항목 설명
              <br />
              <Bold>ㆍProxy pass URL</Bold> [필수] : 매핑된 요청을 보낼 URL{" "}
              <br />
              <Bold>ㆍProxy pass Path</Bold> [필수] : 요청 URL에 `/api` 이
              있다면 Proxy pass URL로 리다이렉트 시켜서 요청을 전달합니다.{" "}
              <br />- 사용예시
              <br />
              ㆍ Path : `/api` <br /> ㆍ URL : http://localhost:8080 <br />→
              [`http://localhost/api/](http://localhost/api/user)` 요청들을
              [`http://localhost:8080/api/`로](http://localhost:8080/api/로)
              전송하겠다는 뜻 입니다.
            </P1>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Nginxsetting;

const Item = styled.div``;

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
