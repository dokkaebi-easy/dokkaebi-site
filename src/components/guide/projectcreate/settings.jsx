import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import setting_main from "../../../assets/guide/createProject/setting_main.png";
import setting_name from "../../../assets/guide/createProject/setting_name.png";
import setting_febe from "../../../assets/guide/createProject/setting_febe.png";
import setting_filepath from "../../../assets/guide/createProject/setting_filepath.png";
import setting_spring from "../../../assets/guide/createProject/setting_spring.png";
import setting_property from "../../../assets/guide/createProject/setting_property.png";
import img_setting from "../../../assets/guide/createProject/setting_4.png";
import setting_publish from "../../../assets/guide/createProject/setting_publish.png";
import setting_volume from "../../../assets/guide/createProject/setting_volume.png";

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
            <Img1 src={setting_main} alt="이미지없음" />
            <Subtitle>1-1. 배포하고자 하는 프로젝트 명칭 설정</Subtitle>
            <Img1 src={setting_name} alt="이미지없음" />
            <Subtitle>
              1-2. 해당하는 FE/BE Setting 항목 양식에 맞춰 기입
            </Subtitle>
            <Img2 src={setting_febe} alt="이미지없음" />
            <P1>
              여러 FE/BE Setting이 필요한 경우 `+FE/BE ADD` 버튼을 통해 입력
              FORM을 추가할 수 있습니다.
            </P1>
            <P1>
              - 기본 항목 설명 <br />
              &nbsp; <Bold> ㆍ명칭 [필수] </Bold> : Framework 또는 Library 별칭
              설정 (소문자로만 작성) <br />
              &nbsp; <Bold> ㆍ프레임워크 [필수] </Bold> : 사용하는 Framework
              또는 Library를 선택 <br />
              &nbsp; <Bold> ㆍ버전 [필수] </Bold> : Framework에서 선택한
              Framework 또는 Library에서 사용하는 언어 version들 중 알맞는
              version을 선택 <br />
              &nbsp; ㆍ타입 [선택] <br />
              &nbsp; &nbsp; &nbsp; &nbsp; - Spring의 경우, 빌드 툴(Gradle, Maven 중 하나)를
              선택 <br />
              &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;  *빌드 파일의 경우 현재 .jar 파일만 지원(.war는 추후 지원 예정)  <br />
              &nbsp; &nbsp; &nbsp; &nbsp; - Vue, React의 경우, Nginx 사용여부를 선택 <br />
              <Exbox>
                <Bold> ㆍ프로젝트 파일 경로 [필수] </Bold> : 프로젝트에서
                build될 폴더 <br />
                <P1>
                  &nbsp; 예시 : gitlab repository 메인 화면을 기준으로 참고
                </P1>
                <Img1 src={setting_filepath} alt="이미지없음" />
                <P1>
                  여기에서 back_end, front_end 와 같은 폴더를 build할 예정이므로
                  기본항목에 알맞는 폴더 ./back_end 또는 ./front_end 를
                  입력하시면 됩니다.
                </P1>
                <Img1 src={img_setting} alt="이미지 없음" />
                <P1>
                  만일 Git Repository에서 위의 예시처럼 FE나 BE등의 경로를
                  구분하지 않고 단일 프레임워크 또는 DB를 베포할 경우에는 Root
                  경로인 `/`만 입력해주시면 됩니다.
                </P1>
              </Exbox>
              <Exbox>
                <P1>
                  <Bold>ㆍ산출물 경로 [선택]</Bold>: 빌드된 산출물이 위치하는
                  경로를 입력
                </P1>
                <P1>
                  &nbsp;각 프레임워크별 기본 Build 경로가 있는데 , 별도로
                  지정하지 않았을 경우에는 입력하지 않아도 됩니다.
                </P1>
                <P1>&nbsp;예시 : spring boot를 사용하는 경우,</P1>
                <Img1 src={setting_spring} alt="이미지없음" />
                <P1>
                  ※ 여기서 말하는 빌드된 산출물이란 build가 완료되면 libs 폴더
                  하위에 위치하는 jar 파일을 말합니다.
                  <br /> 따라서 위와 같은 구조라면 ./build/libs 이 빌드된
                  산출물이 위치하는 경로를 말하지만,
                  <br /> ./build/libs는 Springboot의 기본 빌드 경로임으로 Build
                  File Path을 입력하지 않아도 됩니다.
                </P1>
              </Exbox>
            </P1>
            <Subtitle>1-3. Property 속성 양식에 맞춰 기입</Subtitle>
            <Img2 src={setting_property} alt="이미지없음" />
            <P1>
              여러 Property 속성이 필요한 경우 +PROPERTY ADD 버튼을 통해
              Property를 추가할 수 있습니다.
            </P1>
            <Img1 src={setting_publish} alr="이미지 없음" />
            <P1>
              - 속성 설명 <br /> &nbsp; <Bold> ㆍpublish [선택]</Bold> :
              host에서 접속할 수 있는 포트번호를 설정
            </P1>
            <P1>
              위 예시처럼 사용하면 배포 완료후 8000 포트 번호로 접속할 수
              있습니다.
            </P1>
            <Img1 src={setting_volume} alr="이미지 없음" />
            <P1>
              <Bold> ㆍvolume [선택]</Bold> : 재배포시 모든 데이터 & 폴더가
              사라지게 됩니다. 실제 디스크에 영구적으로 데이터를 저장 할 폴더의
              위치를 입력해주세요.
            </P1>
            <P1>
              위 예시처럼 입력하면 images 폴더가 생성 되고 /images경로에
              데이터를 백업하게 됩니다.
            </P1>
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
