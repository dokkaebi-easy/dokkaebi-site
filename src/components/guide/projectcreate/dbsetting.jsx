import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import dbsetting_main from "../../../assets/guide/createProject/dbsetting_main.png";
import dbsetting_mysql from "../../../assets/guide/createProject/dbsetting_mysql.png";
import dbsetting_mongo from "../../../assets/guide/createProject/dbsetting_mongo.png";

const Dbsetting = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Title1>2. DB Setting</Title1>
            <Colorbox>
              📢 Dockerby를 이용해 데이터베이스를 배포할 때에는 서버의
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
            </Colorbox>
            <Img1 src={dbsetting_main} alt="이미지없음" />
            <P1>
              - 기본 항목 설명 <br />
              &nbsp; <Bold>ㆍ명칭 [필수]</Bold> : 데이터베이스 별칭 설정
              (소문자로만 작성) <br />
              &nbsp; <Bold>ㆍ데이터베이스 [필수]</Bold> : 사용하는 DB종류 선택{" "}
              <br />
              &nbsp; <Bold>ㆍ버전 [필수]</Bold> : 선택한 데이터베이스 버전들 중
              알맞는 버전을 선택 <br />
              &nbsp; <Bold>ㆍ포트 [필수]</Bold> : 데이터베이스 서버 포트번호
              <br />
              &nbsp; ㆍ덤프 파일 경로 [선택] : 데이터베이스 덤프 파일 (테이블
              create ㆍ쿼리가 들어있는 sql파일이 있는 경로)
            </P1>
            <Colorbox>
              📢 각 DB마다 필요로 하는 항목이 다르므로 DB 선택에 따라 추가
              항목이 달라집니다.
            </Colorbox>
            <P1>- 예시{")"} MySQL, MariaDB</P1>
            <Img1 src={dbsetting_mysql} alt="이미지없음" />
            <P1> &nbsp; ※ Mysql 과 Mariadb의 기본 PORT : 3306</P1>
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
            <P1>- 예시{")"} Mongo</P1>
            <Img1 src={dbsetting_mongo} alt="이미지없음" />
            <P1> &nbsp; ※ Mysql 과 Mariadb의 기본 PORT : 27017</P1>
            <P1>
              &nbsp; <Bold>ㆍ MONGO_INITDB_ROOT_USERNAME[필수]</Bold> : 생성할
              데이터베이스 유저 계정 <br />
              &nbsp; <Bold>ㆍ MONGO_INITDB_ROOT_PASSWORD [필수]</Bold>
              : 생성할 데이터베이스 유저 비밀번호 <br />
            </P1>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dbsetting;

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

const Bold = styled.span`
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const P1 = styled.p`
  font-size: 18px;
  margin-top: 10px;
`;
