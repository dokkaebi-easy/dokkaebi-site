import styled from "@emotion/styled";

const Install = () => {
  return (
    <div>
      <H1>Dokerby 설치</H1>
      <P1>dockerby에서는 8482 Port를 지정해서 사용하고 있습니다.</P1>
      <P1>최신 버전 정보 `0.0.6`</P1>
      <P1>해당 Docker Hub를 참고하시길 바랍니다.</P1>
      <P1>
        <a
          href="https://hub.docker.com/r/edh1021/dockerby"
          target="_blank"
          rel="noreferrer"
        >
          https://hub.docker.com/r/edh1021/dockerby
        </a>
      </P1>
      <Span1>Install</Span1>
      <Textbox>
        sudo docker run -d -p 8482:80 -v
        /var/run/docker.sock:/var/run/docker.sock -v
        /usr/bin/docker:/usr/bin/docker -v /var/dockerby:/var/dockerby --name
        dockerby edh1021/dockerby:0.0.4
      </Textbox>
    </div>
  );
};
export default Install;

const H1 = styled.h1`
  background-color: 1976D2;
  color: white;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 30px;
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

const Span1 = styled.span`
  font-size: 32px;
  color: 1976D2;
`;

const P1 = styled.p`
  font-size: 20px;
  margin-top: 10px;
`;
