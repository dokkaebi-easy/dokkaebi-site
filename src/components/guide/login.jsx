import styled from "@emotion/styled";

const Login = () => {
  return (
    <div>
      <H1>회원가입 / 로그인</H1>
      <h2>Dokkaebi 회원가입</h2>
      <br></br>

      <P1>1. 가입하기 버튼을 클릭→ 회원가입 창으로 이동</P1>
      <img src="img/guide/login/01.png" alt="login_view" />
      <br></br>
      <br></br>
      <br></br>

      <P1>2. 회원가입 FROM 양식에 맞춰서 기입</P1>
      <img src="img/guide/login/02.png" alt="signup_view" />

      <P1>- ID 중복 확인, 이름 중복 확인을 통해 중복체크해주세요.</P1>
      <P1>
        - 인증키는 여러분의 프로젝트에 다른 사람으로부터 접근을 보호하기 위한
        수단입니다.
      </P1>
      <P1>
        {" "}
        dokkaebi 설치 후, 아래 명령어를 통해 출력된 AuthKey를 입력해주세요.
      </P1>

      <Textbox>
        # dokkaebi 컨테이너에 접속
        <br></br>$ docker exec -it dokkaebi bash
        <br></br>
        <br></br># AuthKey출력
        <br></br>$ cat AuthKey
        <br></br># 7c8c7b0a5a74482e9e9ba84444cc0f12MDIyOTU5Cg
      </Textbox>
      <br></br>

      <P1>3. Dokkaebi 로그인</P1>
      <img src="img/guide/login/03.png" alt="login_view2" />
    </div>
  );
};
export default Login;

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
  color: 000099;
  font-size: 18px;
`;

const P1 = styled.p`
  font-size: 20px;
  margin-top: 10px;
`;
