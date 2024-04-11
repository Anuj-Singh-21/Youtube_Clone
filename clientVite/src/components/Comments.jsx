import { styled } from "styled-components";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Avatar = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.textSoft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://images.pexels.com/photos/18681382/pexels-photo-18681382/free-photo-of-coding.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        <Input placeholder="Add a new Comment..." />
      </NewComment>
    </Container>
  );
};

export default Comments;
