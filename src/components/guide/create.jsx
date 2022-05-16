import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import HorizontalNonLinearStepper from "./stepper";
import Img_a from "../../assets/guide/createProject/01.png";
import Img_b from "../../assets/guide/createProject/02.png";
import Img_c from "../../assets/guide/createProject/03.png";
import Img_d from "../../assets/guide/createProject/04.png";
import Img_e from "../../assets/guide/createProject/05.png";
import Img_f from "../../assets/guide/createProject/06.png";
import Img_g from "../../assets/guide/createProject/07.png";
import Img_h from "../../assets/guide/createProject/08.png";
import Img_i from "../../assets/guide/createProject/09.png";
import Img_j from "../../assets/guide/createProject/10.png";
import Img_k from "../../assets/guide/createProject/11.png";
import Img_l from "../../assets/guide/createProject/12.png";
import Img_m from "../../assets/guide/createProject/13.png";
import Img_n from "../../assets/guide/createProject/14.png";
import Img_o from "../../assets/guide/createProject/15.png";
import Img_p from "../../assets/guide/createProject/16.png";
import Img_q from "../../assets/guide/createProject/17.png";
import Img_r from "../../assets/guide/createProject/18.png";
import Img_s from "../../assets/guide/createProject/19.png";
import Img_t from "../../assets/guide/createProject/20.png";

const Create = () => {
  return (
    <div>
      <HorizontalNonLinearStepper />
      <H1>프로젝트 생성 페이지</H1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <P1>
              - 메인화면의 CREATE 버튼을 클릭 → 프로젝트 생성 화면으로 이동
            </P1>
            <Img1 src={Img_a} alt="이미지없음" />
            <P1>- 프로젝트 생성화면에서 setting 양식에 맞춰 기입</P1>
            <Img2 src={Img_b} alt="이미지없음" />
            <Title1>1. FE/BE Settings</Title1>
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
            <Title1>2. DB Setting</Title1>
            <Img1 src={Img_h} alt="이미지없음" />
            <P1>
              - 기본 항목 설명 <br />
              &nbsp; <Bold>ㆍName [필수]</Bold> : DB 별칭 설정 (소문자로만 작성){" "}
              <br />
              &nbsp; <Bold>ㆍDB [필수]</Bold> : 사용하는 DB종류 선택 <br />
              &nbsp; <Bold>ㆍVersion [필수]</Bold> : 선택한 DB version들 중
              알맞는 version을 선택 <br />
              &nbsp; <Bold>ㆍPort [필수]</Bold> : 데이터베이스 서버 포트번호{" "}
              <br />
              &nbsp; ㆍDump File Dir [선택] : 데이터베이스 덤프 파일 (테이블
              create ㆍ쿼리가 들어있는 sql파일이 있는 경로)
            </P1>
            <Colorbox>
              📢 각 DB마다 필요로 하는 항목이 다르므로 DB 선택에 따라 추가
              항목이 달라집니다.
            </Colorbox>
            <Img1 src={Img_i} alt="이미지없음" />
            <P1>
              &nbsp;{" "}
              <Bold>ㆍ MYSQL_ROOT_PASSWORD / MARIADB_ROOT_PASSWORD[필수]</Bold>{" "}
              : Root 계정 비밀번호 초기화 <br />
              &nbsp; <Bold>ㆍ MYSQL_DATABASE / MARIADB_DATABASE [필수]</Bold> :
              생성할 데이터베이스 스키마 이름 <br />
              &nbsp; <Bold>ㆍ MYSQL_USER / MARIADB_USER [필수]</Bold> : 생성할
              데이터베이스 유저 계정 <br /> &nbsp;{" "}
              <Bold>ㆍ MYSQL_PASSWORD / MARIADB_PASSWORD [필수]</Bold>: 생성할
              데이터베이스 유저 비밀번호
            </P1>
            <TextboxBlack>
              Dockerby를 이용해 데이터 베이스를 배포할 때에는 서버의
              데이터베이스 주소가 변경되어야합니다. <br />
              예시) 스프링부트 <br />
              1.
              spring.datasource.url=jdbc:mariadb://k6s205.p.ssafy.io:3306/dockerby
              <br />
              2. spring.datasource.url=jdbc:mariadb://{"{"}projectName{"}"}-
              {"{"}dbName{"}"}
              :3306/dockerby <br /> 예를들어 빌드 환경설정에서 입력한
              projectName이 dockerby, DB 환경설정에서 입력한 Name이 maria라면
              jdbc:mariadb://dockerby-maria:3306/dockerby 로 입력해주세요
            </TextboxBlack>
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
              📢 녹색으로 표시된 SSL verification 기능은 아직 구현되지
              않았습니다. 체크하지 말아주세요.
            </Colorbox>
            <P1>
              TEST CONNECTION 버튼을 클릭해 Git 설정이 올바른지 확인할 수
              있습니다.
            </P1>
            <Title1> 5. Make Project</Title1>
            <P1>- Make Project에서 build 하기 위한 setting을 저장합니다.</P1>
            <Img1 src={Img_s} alt="이미지없음" />
            <p> Build Setting Save `성공` 했을 경우 화면입니다.</p>
            <Img1 src={Img_t} alt="이미지없음" />
            <p> Build Setting Save `실패` 했을 경우 화면입니다.</p>
          </Item>
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
