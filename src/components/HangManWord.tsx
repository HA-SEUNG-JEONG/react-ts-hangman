import { styled } from "styled-components";

type HangManWordProps = {
  reveal?: boolean;
  guessedLetter: string[];
  words: string;
};

const HangManWord = ({
  reveal = false,
  guessedLetter,
  words,
}: HangManWordProps) => {
  return (
    <HangManWordContainer>
      {words.split("").map((letter, index) => (
        <span style={{ borderBottom: "0.1rem solid black" }} key={index}>
          <span
            style={{
              visibility:
                guessedLetter.includes(letter) || reveal ? "visible" : "hidden",
              color:
                !guessedLetter.includes(letter) && reveal ? "red" : "black",
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
