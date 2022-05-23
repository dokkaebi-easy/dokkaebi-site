import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import nginxsetting_domain from "../../../assets/guide/createProject/nginxsetting_domain.png";
import nginxsetting_proxy from "../../../assets/guide/createProject/nginxsetting_proxy.png";
import Setting_https1 from "../../../assets/guide/createProject/setting_https1.png";
import Setting_https2 from "../../../assets/guide/createProject/setting_https2.png";
import Ssl1 from "../../../assets/guide/createProject/ssl1.png";
import Ssl2 from "../../../assets/guide/createProject/ssl2.png";

const Nginxsetting = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Infobox>
              ❗ FE/BE Settings에서 Nginx 사용을 체크하지 않았다면 별도의 설정 없이 Git Setting 단계로 넘어가주세요
            </Infobox>
            <Title1>3. NginX Setting</Title1>
            <P1>- 해당하는 NginX Setting 항목 양식에 맞춰 기입</P1>
            <Img1 src={nginxsetting_domain} alt="이미지없음" />
            <Subtitle> 3-1. Domain 설정</Subtitle>
            <P1>
              - 여러 도메인이 필요한 경우 `+DOMAIN ADD` 버튼을 통해{" "}
              <Bold>입력 FORM을 추가</Bold>할 수 있습니다. <br /> - 사용하는
              서버의 도메인 주소를 입력하면 됩니다. (기본 경로 : `_`) <br />
              &nbsp; 예시{")"} http://k6s205.p.ssafy.io
            </P1>
            <Img1 src={nginxsetting_proxy} alt="이미지없음" />
            <Subtitle> 3-2. Domain 설정 [옵션]</Subtitle>
            <P1>
              - 여러 Proxy pass가 필요한 경우 `+PROXYPASS ADD` 버튼을 통해
              <Bold> 입력 FORM을 추가</Bold>할 수 있습니다.
              <br /> - 기본항목 설명
              <br />
              <Bold>ㆍProxy pass URL</Bold> [필수] : 매핑된 요청을 보낼 URL{" "}
              <br />
              <Bold>ㆍProxy pass Path</Bold> [필수] : 요청 URL에 /api 가 있다면
              Proxy pass URL로 리다이렉트 시켜서 요청을 전달합니다. <br />-
              사용예시
              <br />
              ㆍ Path : /api <br /> ㆍ URL : http://localhost:8080 <br />→
              [http://localhost/api/](http://localhost/api/user) 요청들을
              [http://localhost:8080/api/](http://localhost:8080/api/)로
              전송하겠다는 뜻 입니다.
            </P1>
            <Subtitle>3-3 HTTPS Setting</Subtitle>
            <Img1 src={Setting_https1} alt="이미지없음" />
            <P1>
              - HTTPS를 사용하는 경우, HTTPS 체크박스를 체크해 해당 기능을
              활성화해야 합니다.
            </P1>
            <P1>
              - 서버에서 HTTPS로 통신하기 위해서 공인 SSL 인증서가 필요합니다.{" "}
              <br />- 현 Dockerby 서비스는 Let’s Encrypt SSL 인증서 발급을
              권유하고 있기 때문에 fullchain.pem이랑 privkey.pem 사용하는 것을
              권장하고 있습니다. <br /> - 현 Dockerby 에서는 Certbot을 이용한
              방법 또한 적용은 가능하지만 기능을 제공하고 있지 않으므로 가이드를
              참고해서 <Bold>직접 발급 받으셔야 합니다.</Bold>
            </P1>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <P1>SSL 인증서 발급 가이드</P1>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <P1>
                    Dockerby에서는 NGINX의 HTTPS 옵션 활성화를 제공하고
                    있습니다. <br /> 이 뜻은 해당 서버로 요청을 보낼 때 HTTPS로
                    보내야 한다는 것을 의미합니다.
                  </P1>
                  <P1>
                    서버에서 HTTPS로 통신하기 위해서는 공인 SSL 인증서가
                    필요합니다. <br /> Letsencrypt는 무료로 90일짜리 공식 SSL
                    인증서를 발급해줍니다.
                  </P1>
                  <P1>
                    우리는 Certbot을 이용하여 Let’s Encrypt SSL 인증서 발급을
                    진행하겠습니다.
                  </P1>
                  <P1>
                    여러가지 방법 중 Standalone 방식을 이용하도록 하겠습니다.
                    <br />웹 서버 서비스를 잠시 중단해야한다는 단점이 있지만,
                    상대적으로 안정적인 방식이기에 Standalone 방식을
                    사용하였습니다.
                  </P1>
                  <P1>1. letsencrypt를 설치합니다.</P1>
                  <Textbox>
                    $ sudo apt updtae
                    <br /> $ sudo apt install letsencrypt -y
                  </Textbox>
                  <P1>2. NGINX 가 작동중이라면 정지합니다.</P1>
                  <Textbox>$ sudo service nginx stop</Textbox>
                  <P1>3. SSL 인증서 발급을 시작합니다.</P1>
                  <Textbox>
                    $ sudo certbot certonly --standalone -d {"{"}domain{"}"}
                    <br />
                    <Annotation>
                      # sudo certbot certonly --standalone -d k6s205.p.ssafy.io
                    </Annotation>
                  </Textbox>
                  <Img2 src={Ssl1} alt="이미지없음" />
                  <P1>서버 관리자의 이메일을 입력합니다.</P1>
                  <Img2 src={Ssl2} alt="이미지없음" />
                  <P1>약관에 동의해줍니다.</P1>
                  <Textbox>$ sudo chmod 755 /etc/letsencrypt/live</Textbox>
                  <P1>
                    해당 경로의 권한을 수정하는 명령어를 입력합니다. 사용하지
                    않을 경우 permission denied가 발생합니다.
                  </P1>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Img2 src={Setting_https2} alt="이미지없음" />
            <P1>
              - 발급 받으신 후, IMPORTANT TOTES에서 위의 이미지에 표시한
              경로들을 항목에 맞춰 입력합니다.
              <br /> - 기본항목 설명
              <br />
              <Bold>ㆍSSL Certificate [필수]</Bold> : fullchain.pem의 절대경로를
              입력 <br />
              <P2>
                &nbsp; 예시{")"} 위 이미지에서
                <ColorFont>
                  /etc/letsencrypt/live/k6s205.p.ssafy.io/fullchain.pem
                </ColorFont>
              </P2>
              <Bold>ㆍSSL Certificate Key [필수]</Bold> : privkey.pem의
              절대경로를 입력 <br />
              <P2>
                &nbsp; 예시{")"} 위 이미지에서
                <ColorFont>
                  /etc/letsencrypt/live/k6s205.p.ssafy.io/privkey.pem
                </ColorFont>
              </P2>
              <Bold>ㆍSSL 경로 [필수]</Bold> : configuration directory 인
              <ColorFont> /etc/letsencrypt</ColorFont> 을 입력{" "}
            </P1>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Nginxsetting;

const Item = styled.div``;

const Img1 = styled.img`
  max-width: 800px;
`;

const Img2 = styled.img`
  max-width: 1200px;
  margin-top: 30px;
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

const P2 = styled.p`
  font-size: 14px;
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

const Annotation = styled.span`
  color: gray;
`;
const Infobox = styled.div`
  border: 1px solid black;
  border-color: D9D9D9;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 16px;
  background-color: orange;
  color: black;
  font-size: 18px;
  width: 1000px;
`;
const ColorFont = styled.span`
  background-color: yellow;
`;
