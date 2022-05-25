import styled from "@emotion/styled";
import Videonav from "./videonav";
import ConstructionIcon from "@mui/icons-material/Construction";

const Django = () => {
  return (
    <div>
      <Videonav />
      <IframeDiv>
        <iframe
          width="840"
          height="600"
          src="https://www.youtube.com/embed/BVDyX3M1EkU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </IframeDiv>
    </div>
  );
};

export default Django;

const MainMassage = styled.h2`
  margin-top: 20px;
`;

const ItemCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IframeDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 30px;
`;
