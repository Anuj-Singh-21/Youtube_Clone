import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-style: 20px;
`;

const SubTitle = styled.h2`
  font-style: 16px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  width: 100%;
  border-radius: 3px;
  padding: 8px;
  background-color: transparent;
`;

const Button = styled.button`
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  display: flex;
  font-style: 10px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div``;

const Link = styled.span`
  margin-left: 30px;
`;

const Signin = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SignIn</Title>
        <SubTitle>Continue to Youtube</SubTitle>
        <Input placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button>SignIn</Button>
        <Title>OR</Title>
        <Input placeholder="Username" />
        <Input placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>SignUp</Button>
      </Wrapper>
      <More>
        <Links>
          <Link>Help</Link>
          <Link>Privacy Policy</Link>
        </Links>
      </More>
    </Container>
  );
};

export default Signin;
