import styled from "@emotion/styled";
import Videonav from "./videonav";
import ConstructionIcon from "@mui/icons-material/Construction";

const Spring = () => {
  return (
    <div>
      <Videonav />
      <ItemCenter>
        <ConstructionIcon sx={{ fontSize: "80px" }} />
        <MainMassage>동영상을 업데이트 중 입니다.</MainMassage>
        <p align="center">
          더 쉬운 사용 방법을 알려드리기 위해 고민중 입니다. <br /> 빠른 시일 내
          작업을 완료하고, 새로운 모습으로 찾아 뵙겠습니다.
          <br /> we're busy updating our website for you and will be back soon
        </p>
      </ItemCenter>
    </div>
  );
};

export default Spring;

const MainMassage = styled.h2`
  margin-top: 20px;
`;

const ItemCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
