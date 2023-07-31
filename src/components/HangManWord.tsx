import { useState } from "react";
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
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const handleClick = () => {
    setIsKeyboardVisible(true);
  };

  return (
    <HangManWordContainer onClick={handleClick}>
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
      {isKeyboardVisible && (
        <input
          type="text"
          autoFocus
          style={{ position: "absolute", top: -100, left: -100 }} // 숨겨진 위치로 이동하여 키보드를 활성화합니다.
          onBlur={() => setIsKeyboardVisible(false)}
        />
      )}
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
