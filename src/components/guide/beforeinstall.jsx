import styled from "@emotion/styled";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Beforeinstall = () => {
  return (
    <div>
      <H1>설치하기전</H1>
      <P1>
        AWS EC2 인스턴트 생성후 따라해주시기 바랍니다. {"("}테스트 환경: Ubuntu
        20.04 LTS {")"}
      </P1>
      <P1>
        AWS EC2 바로가기 :
        <a
          href="https://aws.amazon.com/ko/ec2/?nc2=h_ql_prod_fs_ec2"
          target="_blank"
          rel="noreferrer"
        >
          https://aws.amazon.com/ko/ec2/?nc2=h_ql_prod_fs_ec2
        </a>
      </P1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography fontSize={18}>
            윈도우에서 EC2 인스턴스 접속하기
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h2>1. PuTTY를 사용해 EC2 인스턴스에 접속</h2>
          <DIV_a>
            <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/">
              PuTTY 다운로드 링크
            </a>
          </DIV_a>
          <img src="img/guide/beforeinstall/ec2_1.png" alt="" />
          <P1>
            ㆍHost Name (IP address): <ColorFont>i6b207.p.ssafy.io</ColorFont>{" "}
            <br /> ㆍport : <ColorFont>22</ColorFont>
          </P1>
          <img src="img/guide/beforeinstall/ec2_2.png" alt="" />
          <P1>
            Connection {">"} SSH {">"} Auth 선택
          </P1>
          <img src="img/guide/beforeinstall/ec2_3.png" alt="" />
          <P1>저장한 7팀.zip 압축파일을 압축 해제한 뒤 .ppk 파일을 클릭</P1>
          <img src="img/guide/beforeinstall/ec2_4.png" alt="" />
          <P1>
            private key file for authentiation에 파일이 잘 올라갔는지 확인
          </P1>
          <img src="img/guide/beforeinstall/ec2_5.png" alt="" />
          <P1>
            Saved Sessions에 간편 등록할 세션 이름 기입 (자유) 후 save버튼
          </P1>
          <img src="img/guide/beforeinstall/ec2_6.png" alt="" />
          <P1>Open을 누르고 login as : 에 ubuntu 입력 후 Enter</P1>
          <h2>2. CMD, Bash</h2>
          <P1>cmd, bash는 .pem 파일을 이용한 ssh 접속 방식입니다.</P1>
          <Textbox>ssh -i i6b207t.pem ubuntu@i6b207.p.ssafy.io</Textbox>
          <P1>
            cmd, bash는 *.pem 파일이 있는 경로에서 열도록하자. 다른 폴더에서
            cmd, bash를 실행할 경우 i6b207t.pem 앞에 폴더 경로가 들어가줘야한다.
          </P1>
          <img src="img/guide/beforeinstall/ec2_7.png" alt="" />
          <P1>
            Are you sure you want to continue connecting
            (yes/no/[fingerprint])가 뜨면 <ColorFont>yes</ColorFont> 입력
          </P1>
          <img src="img/guide/beforeinstall/ec2_8.png" alt="" />
          <P1>
            위 화면과 같이 'ubuntu@...' 과 같은 커멘드 입력란이 뜨면 성공{" "}
          </P1>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Beforeinstall;

const H1 = styled.h1`
  background-color: 1976D2;
  color: white;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const P1 = styled.p`
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const ColorFont = styled.span`
  background-color: yellow;
`;

const DIV_a = styled.div`
  font-size: 18px;
  margin-bottom: 15px;
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
