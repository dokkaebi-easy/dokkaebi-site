import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Img_a from "../../../assets/guide/createProject/01.png";
import Img_c from "../../../assets/guide/createProject/03.png";
import Img_d from "../../../assets/guide/createProject/04.png";
import Img_e from "../../../assets/guide/createProject/05.png";
import Img_f from "../../../assets/guide/createProject/06.png";
import Img_g from "../../../assets/guide/createProject/07.png";

const Settings = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Title1>1. FE/BE Settings</Title1>
            <P1>
              - 메인화면의 CREATE 버튼을 클릭 → 프로젝트 생성 화면으로 이동
            </P1>
            <Img1 src={Img_a} alt="이미지없음" />
            <Subtitle>1-1. 배포하고자 하는 Project Name 설정</Subtitle>
            <Img1 src={Img_c} alt="이미지없음" />
            <Subtitle>
              1-2. 해당하는 FE/BE Setting 항목 양식에 맞춰 기입
            </Subtitle>
            <Img2 src={Img_d} alt="이미지없음" />
            <P1>
              여러 FE/BE Setting이 필요한 경우 `+FE/BE ADD` 버튼을 통해 입력
              FORM을 추가할 수 있습니다.
            </P1>
            <P1>
              - 기본 항목 설명 <br />
              &nbsp; <Bold> ㆍName [필수] </Bold> : Framework 또는 Library 별칭
              설정 (소문자로만 작성) <br />
              &nbsp; <Bold> ㆍFramework [필수] </Bold> : 사용하는 Framework 또는
              Library를 선택 <br />
              &nbsp; <Bold> ㆍVersion [필수] </Bold> : Framework에서 선택한
              Framework 또는 Library에서 사용하는 언어 version들 중 알맞는
              version을 선택 <br />
              &nbsp; ㆍType [선택] <br />
              &nbsp; &nbsp; - Spring의 경우, 빌드 툴(Gradle, Maven 중 하나)를
              선택 <br />
              &nbsp; &nbsp; - Vue, React의 경우, Nginx 사용여부를 선택 <br />
              <Exbox>
                <Bold> ㆍProject File Dir [필수] </Bold> : 프로젝트에서 build될
                폴더 <br />
                <P1>
                  &nbsp; 예시 : gitlab repository 메인 화면을 기준으로 참고
                </P1>
                <Img1 src={Img_e} alt="이미지없음" />
                <P1>
                  여기에서 back_end, front_end 와 같은 폴더를 build할 예정이므로
                  기본항목에 알맞는 폴더 ./back_end 또는 ./front_end 를
                  입력하시면 됩니다.
                </P1>
              </Exbox>
              <Exbox>
                <P1>
                  <Bold>ㆍBulid File Path[선택]</Bold>: 컴파일러를 통해 빌드된
                  산출물이 위치하는 경로 를 입력
                </P1>
                <P1>&nbsp; 예시 : spring boot를 사용하는 경우,</P1>
                <Img1 src={Img_f} alt="이미지없음" />
                <P1>
                  ※ 여기서 말하는 빌드된 산출물이란 build가 완료되면 libs 폴더
                  하위에 위치하는 jar 파일을 말합니다. 따라서 위와 같은 구조라면
                  ./build/libs 이 빌드된 산출물이 위치하는 경로를 말합니다.
                </P1>
              </Exbox>
            </P1>
            <Subtitle>1-3. Property 속성 양식에 맞춰 기입</Subtitle>
            <Img2 src={Img_g} alt="이미지없음" />
            <P1>
              여러 Property 속성이 필요한 경우 +PROPERTY ADD 버튼을 통해
              Property를 추가할 수 있습니다.
            </P1>
            <P1>
              - 속성 설명 <br /> &nbsp; <Bold> ㆍ포트번호 [선택]</Bold> :
              host에서 접속할 수 있는 포트번호를 설정
            </P1>
            <Textbox>
              # docker에서 활용되는 예시 <br />$ docker run -d -p 8080:8000
              python:3.8-alpine python -m http.server
            </Textbox>
            <P1>위 예시에서 8080이 포트번호에 해당한다.</P1>
            <P1>
              &nbsp;ㆍ보존할 폴더 위치 [선택] : 재배포시 모든 데이터 & 폴더가
              사라지게 됩니다. 실제 디스크에 영구적으로 데이터를 저장할 폴더의
              위치를 입력해주세요.
            </P1>
            <Textbox>
              # docker에서 활용되는 예시 <br /># -v {"<"}host path{">"}:{"<"}
              mounting point path in container{">"} <br />$ docker run -v
              /var/dockerby/{"{"}project{"}"}:/image
            </Textbox>
            <P1>위 예시에서 /image 가 보존할 폴더 위치에 해당한다.</P1>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Settings;

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
