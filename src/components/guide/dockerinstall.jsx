import styled from "@emotion/styled";

const Dockerinstall = () => {
  return (
    <div>
      <H1>Docker 설치</H1>
      <P1>
        <Span1>Step 1: </Span1> 접속한 EC2에 apt Package 업데이트
      </P1>
      <Textbox>$ sudo apt-get update</Textbox>
      <P1>
        <Span1>Step 2: </Span1> 필수 패키지 설치
      </P1>
      <Textbox>
        $ sudo apt-get install -y ca- <br />
        certificates \ <br />
        curl \ <br />
        software-properties- <br />
        common \ <br />
        apt-transport-https \ <br />
        gnupg \ <br />
        lsb-release <br />
      </Textbox>
      <P1>
        <Span1>Step 3: </Span1> Docker의 Official GPG key 등록
      </P1>
      <Textbox>
        $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg
        --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
      </Textbox>
      <P1>
        <Span1>Step 4: </Span1> stable repository 등록
      </P1>
      <Textbox>
        $ echo \ <br />
        "deb [arch=amd64
        signed-by=/usr/share/keyrings/docker-archive-keyring.gpg]
        https://download.docker.com/linux/ubuntu \ $(lsb_release -cs) stable" |
        sudo tee /etc/apt/sources.list.d/docker.list {">"} /dev/null
      </Textbox>
      <P1>
        <Span1>Step 5: </Span1> Docker Engine 최신버전 설치
      </P1>
      <Textbox>
        $ sudo apt-get update <br />$ sudo apt-get install docker-ce
        docker-ce-cli containerd.io
      </Textbox>
    </div>
  );
};

export default Dockerinstall;

const H1 = styled.h1`
  background-color: 1976D2;
  color: white;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const P1 = styled.p`
  font-size: 20px;
  margin-top: 30px;
`;

const Span1 = styled.span`
  font-size: 24px;
  color: 1976D2;
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
