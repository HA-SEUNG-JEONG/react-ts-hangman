import { useState } from "react";
import "./App.css";
import words from "./wordList.json";
import styled from "styled-components";
import HangManDrawing from "./components/HangManDrawing";
import HangManWord from "./components/HangManWord";
import KeyBoard from "./components/KeyBoard";

function App() {
  const [wordGuess, setWordGuess] = useState(
    () => words[Math.floor(Math.random() * words.length)]
  );
  const [guessedLetter, setGuessLetter] = useState<string[]>([]);
  return (
    <Container>
      <Status>Lose Win</Status>
      <HangManDrawing />
      <HangManWord />
      <KeyBoard />
    </Container>
  );
}

const Container = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
  align-items: center;
`;

const Status = styled.div`
  font-size: 2rem;
  text-align: center;
`;

export default App;
