import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { format } from "timeago.js";
import axios from "axios";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 330px;
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;
const Image = styled.img`
  width: ${(props) => (props.type === "sm" ? "70%%" : "100%")};
  height: ${(props) => (props.type === "sm" ? "100px" : "202px")};
  background-color: #999;
`;
const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
`;
const ChannelImage = styled.img`
  display: ${(props) => (props.type === "sm" ? "none" : "flex")};
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div`
  margin-left: ${(props) => (props.type === "sm" ? "15px" : "0px")};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const Info = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type, video }) => {
  const [channel, setChannel] = useState();

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/api/users/find/${video.userId}`);
      setChannel(res.data);
    };
    fetchChannel();
  }, [video.userId]);
  return (
    <Link to={`/videos/test`} style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src={video.imgUrl} />

        <Details type={type}>
          <ChannelImage type={type} src={channel?.image} />
          <Texts type={type}>
            <Title>{video.title}</Title>
            <ChannelName>{channel?.name}</ChannelName>
            <Info>
              {" "}
              {video.views} viwes + {format(video.createdAt)}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
