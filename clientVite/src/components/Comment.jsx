import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
  color: ${({ theme }) => theme.text};
`;

const Avatar = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.span`
  font-weight: 500;
  font-size: 13px;
`;

const Date = styled.span`
  font-weight: 400;
  font-size: 12px;
  margin-left: 5px;
  color: ${({ theme }) => theme.textSoft};
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://images.pexels.com/photos/18681382/pexels-photo-18681382/free-photo-of-coding.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
      <Details>
        <Name>
          Anuj Singh <Date>5 days ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          inventore quam! Optio, sapiente! Accusantium labore sapiente suscipit,
          quae nostrum omnis deserunt! Magni quasi adipisci, reiciendis
          consequatur vero nisi necessitatibus dignissimos?
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
