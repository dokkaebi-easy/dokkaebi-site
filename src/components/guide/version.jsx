import styled from "@emotion/styled";

const Version = () => {
  return (
    <div>
      <H1>Dockerby 지원 버전</H1>
      <P1>
        - Java : `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`,
        `18`
      </P1>
      <P1>- Python : `3.5`, `3.6`, `3.7`, `3.8`, `3.9`, `3.10`</P1>
      <P1>- node : `10.23`, `12.22`, `14.19`, `16.14`, `17.9`</P1>
      <P1>- MySQL : `5.5`, `5.6`, `5.7`, `8.0`</P1>
      <P1> 이 외의 버전은 지원하지 않고 있습니다.</P1>
      <P1>추후에 업데이트를 통해 지원버전을 늘려갈 예정입니다.</P1>
    </div>
  );
};

export default Version;

const H1 = styled.h1`
  background-color: 1976D2;
  color: white;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 30px;
`;

const P1 = styled.p`
  font-size: 20px;
  margin-top: 10px;
`;
