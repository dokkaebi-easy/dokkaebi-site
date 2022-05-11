import styled from "@emotion/styled";

const Beforeinstall = () => {
  return (
    <div>
      <H1>설치하기전</H1>
      <P1>
        해당 가이드는 AWS EC2 Ubutu 인스턴스 생성 후 따라해주시기 바랍니다.
      </P1>
      <P1>
        aws ec2 바로가기 :
        <a
          href="https://aws.amazon.com/ko/ec2/?nc2=h_ql_prod_fs_ec2"
          target="_blank"
          rel="noreferrer"
        >
          https://aws.amazon.com/ko/ec2/?nc2=h_ql_prod_fs_ec2
        </a>
      </P1>
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
  margin-top: 30px;
`;
