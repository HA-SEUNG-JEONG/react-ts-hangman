import { styled } from "styled-components";

const HangManWord = () => {
  const word = "tee";
  const guessedLetters = ["t", "e", "g"];
  return (
    <HangManWordContainer>
      {word.split("").map((letter, index) => (
        <span style={{ borderBottom: "0.1rem solid black" }} key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}>
            {letter}
          </span>
        </span>
      ))}
    </HangManWordContainer>
  );
};

const HangManWordContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  font-size: 6rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: monospace;
`;

export default HangManWord;
