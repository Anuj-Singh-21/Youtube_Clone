import { styled } from "styled-components";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareIcon from "@mui/icons-material/Share";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Comments from "../components/Comments";
import Comment from "../components/Comment";
import Card from "./../components/Card";

const Container = styled.div`
  display: flex;
  gap: 24px;
  color: ${({ theme }) => theme.text};
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div`
  /* height: 540px;
  width: 100%; */
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  border: none;
  color: ${({ theme }) => theme.textSoft};
  background-color: transparent;
  cursor: pointer;
`;

const Recomendation = styled.div`
  flex: 2;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  position: sticky;
  overflow: auto;
  top: 0;
  &::-webkit-scrollbar {
    width: 0px;
    background-color: transparent;
    opacity: 0%;
  }
`;
const Channel = styled.div`
  display: flex;
  margin-top: 8px;

  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Subscribe = styled.button`
  border: none;
  background-color: red;
  font-weight: 500;
  color: white;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 25px;
`;

const ChannelImage = styled.img`
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #999;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const ChannelDescription = styled.p`
  font-size: 14px;
`;

const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};

  margin: 15px 0px;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="420px"
            src="https://www.youtube.com/embed/k3Vfj-https://www.youtube.com/watch?v=qot0iPHozdk&list=RDqot0iPHozdk&start_radio=1&ab_channel=Panther"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>22,232,222 + Jun 22, 20234</Info>
          <Buttons>
            <Button>
              <ThumbUpIcon /> 32123
            </Button>
            <Button>
              <ThumbDownIcon /> Dislike
            </Button>
            <Button>
              <ShareIcon /> Share
            </Button>
            <Button>
              <SaveAltIcon /> Save
            </Button>
          </Buttons>
        </Details>

        <Hr />
        <Channel>
          <ChannelInfo>
            <ChannelImage src="https://images.pexels.com/photos/18681382/pexels-photo-18681382/free-photo-of-coding.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
            <ChannelDetail>
              <ChannelName>Test Channel</ChannelName>
              <ChannelCounter>10M Subscribers</ChannelCounter>
              <ChannelDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                mollitia quam quisquam at, quis totam, ex dignissimos illum
                sapiente quos quia quibusdam magnam! Ipsum vero laboriosam,
                accusamus neque eum nisi?
              </ChannelDescription>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
        <Hr />

        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </Content>
      <Recomendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recomendation>
    </Container>
  );
};

export default Video;
