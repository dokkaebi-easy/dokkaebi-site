import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Img_k from "../../../assets/guide/createProject/11.png";
import Img_l from "../../../assets/guide/createProject/12.png";
import Img_m from "../../../assets/guide/createProject/13.png";
import Img_n from "../../../assets/guide/createProject/14.png";
import Img_o from "../../../assets/guide/createProject/15.png";
import Img_p from "../../../assets/guide/createProject/16.png";
import Img_q from "../../../assets/guide/createProject/17.png";
import Img_r from "../../../assets/guide/createProject/18.png";

const Gitsetting = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Title1> 4. Git Setting</Title1>
            <P1>- 해당하는 Git Setting 항목 양식에 맞춰 기입</P1>
            <Img1 src={Img_k} alt="이미지없음" />
            <Subtitle> 4-1. Connect</Subtitle>
            <P1>
              <Bold>ㆍ Host Url </Bold>설정 <br />
              - GitLab 페이지 기본 도메인 이름을 뜻함 <br />
              예시) ssafy에서 제공하는 기본 도메인은 `https://lab.ssafy.com`으로
              <Bold> Host Url</Bold>은 `https://lab.ssafy.com`이 됩니다. <br />
              <Bold>ㆍ Access Token </Bold>설정 <br />- GitLab에서 Access Token
              발급 <br /> &nbsp; &nbsp;- GitLab 좌측 하단의 `Settings {">"}
              Access Tokens` 에 들어가 Project Access Token 생성
            </P1>
            <Img1 src={Img_l} alt="이미지없음" />
            <P1>
              api, read_api, read_repository 체크 후 Create project access token
              버튼을 눌러 access token 생성
            </P1>
            <Img1 src={Img_m} alt="이미지없음" />
            <P1>
              상단 화면의 Your new project access token에 만들어진 access
              token을 Connect Credentials 항목에 맞춰 기입한 후 등록
            </P1>
            <Img1 src={Img_n} alt="이미지없음" />
            <Subtitle> 4-2. Repositories</Subtitle>
            <P1>
              <Bold>ㆍProject ID</Bold> 설정 <br /> &nbsp; &nbsp;- GitLab
              Repository에서 등록할 프로젝트의 Project ID를 입력해야 합니다.
            </P1>
            <Img1 src={Img_o} alt="이미지없음" />
            <P1>
              <Bold>ㆍRepository URL</Bold> 설정 <br /> &nbsp; &nbsp; - GitLab
              Repository에서 `Clone with HTTPS` URL을 입력해야 합니다.
            </P1>
            <Img1 src={Img_p} alt="이미지없음" />
            <P1>
              <Bold>ㆍBranch Name</Bold> 설정 <br /> &nbsp; &nbsp; - GitLab
              Repository에서 배포할 기준이 되는 Branch Name을 입력해주세요.
            </P1>
            <Subtitle> 4-3. Connection Check</Subtitle>
            <P1>
              <Bold>ㆍSecret Token</Bold> 설정 <br /> &nbsp; &nbsp;- `+
              CREATE`버튼을 클릭해 <Bold>Secret Token 생성</Bold>
              <br /> &nbsp; &nbsp; - Secret Token을 다시 조회할 수 없습니다.
              다른 곳에 미리 저장해주세요.
            </P1>
            <Img1 src={Img_q} alt="이미지없음" />
            <P1>
              - GitLab 좌측 하단의 `Settings {">"} Webhooks` 에 들어가 webhook을
              추가합니다.
            </P1>
            <Colorbox>
              👀 Web hook URL은 {"{"}도메인 주소{"}"}:8482/api/project/hook/
              {"{"}projectName{"}"} 규칙을 따르고 있습니다.
            </Colorbox>
            <Img1 src={Img_r} alt="이미지없음" />
            <P1>
              - Dockerby에서 생성한 <Bold>Secret Token</Bold>을 GitLab의
              webhooks Secret token에 입력해줘야 합니다.
              <br /> - Trigger는 <Bold>Push events, Merge request events</Bold>
              체크 후 `Add webhook` 실행합니다.
            </P1>
            <Colorbox>
              📢 녹색으로 표시된 SSL verification https 선택시에만 체크 후 사용
              부탁드립니다.
            </Colorbox>
            <P1>
              TEST CONNECTION 버튼을 클릭해 Git 설정이 올바른지 확인할 수
              있습니다.
            </P1>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Gitsetting;

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
