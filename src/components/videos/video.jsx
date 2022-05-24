import styled from "@emotion/styled";
import Videonav from "./videonav";

const Video = () => {
  return (
    <div>
      <Videonav />
      <IframeDiv>
        <iframe
          width="840"
          height="600"
          src="https://www.youtube.com/embed/V06Mvr729Yk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </IframeDiv>
    </div>
  );
};

export default Video;

const IframeDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 30px;
`;
