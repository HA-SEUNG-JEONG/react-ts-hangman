import { useState, useEffect, useCallback } from "react";
import "./App.css";
import words from "./wordList.json";
import styled from "styled-components";
import HangManDrawing from "./components/HangManDrawing";
import HangManWord from "./components/HangManWord";
import KeyBoard from "./components/KeyBoard";

function App() {
  const getWord = () => words[Math.floor(Math.random() * words.length)];

  const [wordGuess, setWordGuess] = useState(getWord);
  console.log(wordGuess);
  const [guessedLetter, setGuessLetter] = useState<string[]>([]);

  const inCorrectLetters = guessedLetter.filter(
    (letter) => !wordGuess.includes(letter)
  );

  const isLoser = inCorrectLetters.length >= 6;
  const isWinner = wordGuess
    .split("")
    .every((letter) => guessedLetter.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetter.includes(letter) || isWinner || isLoser) return;
      setGuessLetter((prev) => [...prev, letter]);
    },
    [guessedLetter, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key;
      if (!key.match(/^[a-z]$/)) return;
      event.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetter, addGuessedLetter]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key;

      if (key !== "Enter") return;
      event.preventDefault();

      setWordGuess(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <Container>
      <Status>{isWinner && "Winner"}</Status>
      <Status>{isLoser && "Losers"}</Status>
      <HangManDrawing numberOfGuess={inCorrectLetters.length} />
      <HangManWord
        reveal={isLoser}
        guessedLetter={guessedLetter}
        words={wordGuess}
      />
      <KeyBoard
        disabled={isWinner || isLoser}
        activeLetter={guessedLetter.filter((letter) =>
          wordGuess.includes(letter)
        )}
        inactiveLetter={inCorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />
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
