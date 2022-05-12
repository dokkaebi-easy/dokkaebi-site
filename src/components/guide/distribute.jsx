import styled from "@emotion/styled";
const Distribute = () => {
  return (
    <div>
      <H1>프로젝트 배포</H1>
      <h2>프로젝트 배포</h2>
      <br></br>
      <P1>- 프로젝트 build setting이 끝나면 메인화면으로 이동</P1>
      <P1>- `빌드실행`을 버튼을 클릭해 빌드/배포 해주세요.</P1>
      <img src="img/guide/deploy/01.png" alt="01" />
      <br></br>
      <br></br>
      <br></br>
      <Textbox>
      📢 화면에 보이는 S, 최근성공, 최근실패, 최근 소요시간 의 view는 개발 진행중에 있습니다.
      <br />
     
      추후 업데이트 후 안내드리겠습니다
      </Textbox>
      <br />
      <br />npm
      <h2>프로젝트 상세페이지</h2>
      <P1>- Main의 프로젝트 목록에서 Project ID 또는 Name을 클릭하면 빌드 상세화면에 접속할 수 있습니다.</P1>
      <P1>- 배포 진행 과정은 Sate List를 통해 **Pull, Build, Run** 상태를 확인할 수 있습니다.</P1>

      <img src="img/guide/deploy/02.png" alt="02" />
      <Textbox>
      📢 화면에 실시간으로 빌드 현황을 보여주는 Stage View는 개발 진행중에 있습니다.
      <br />
      추후 업데이트 후 안내드리겠습니다.
      </Textbox>

    </div>
  );
};
export default Distribute;

const H1 = styled.h1`
  background-color: 1976D2;
  color: white;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Textbox = styled.div`
  border: 1px solid black;
  border-color: D9D9D9;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 16px;
  background-color : CCFFFF;
  color: black;
  font-size: 18px;
`;

const P1 = styled.p`
  font-size: 20px;
  margin-top: 10px;
`;
