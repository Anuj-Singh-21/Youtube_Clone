import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";
const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: #181818;
`;
const Wrapper = styled.div``;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu />
        <Main>
          <Navbar />
          <Wrapper>
            <h1>Test Content</h1>
            <h1>Test Content</h1>
            <h1>Test Content</h1>
            <h1>Test Content</h1>
            <h1>Test Content</h1>
            <h1>Test Content</h1>
            <h1>Test Content</h1>
            <h1>Test Content</h1>
            <h1>Test Content</h1>
            <h1>Test Content</h1>
            <h1>Test Content</h1>
            <h1>Test Content</h1>
            <h1>Test Content</h1>
            <h1>Test Content</h1>
            <h1>Test Content</h1>
            <h1>Test Content</h1>
            <h1>Test Content</h1>
            <h1>Test Content</h1>
            <h1>Test Content</h1>
            <h1>Test Content</h1>
            <h1>Test Content</h1>
            <h1>Test Content</h1>
            <h1>Test Content</h1>
            <h1>Test Content</h1>
            <h1>Test Content</h1>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
