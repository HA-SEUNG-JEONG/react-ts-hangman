import { styled } from "styled-components";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyBoardProps = {
  activeLetter: string[];
  inactiveLetter: string[];
  disabled?: boolean;
  addGuessedLetter: (letter: string) => void;
};

const KeyBoard = ({
  activeLetter,
  inactiveLetter,
  disabled = false,
  addGuessedLetter,
}: KeyBoardProps) => {
  return (
    <div style={{ alignSelf: "stretch" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(75px,1fr))",
          gap: "0.5rem",
        }}>
        {KEYS.map((key) => {
          const isActive = activeLetter.includes(key);
          const isInactive = inactiveLetter.includes(key);
          return (
            <Button
              $isActive={isActive}
              $isinActive={isInactive}
              disabled={isActive || isInactive || disabled}
              onClick={() => addGuessedLetter(key)}
              key={key}>
              {key}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

const Button = styled.button<{ $isActive: boolean; $isinActive: boolean }>`
  width: 100%;
  border: 3px solid black;
  background: none;
  aspect-ratio: 1 / 1;
  font-size: 2.5rem;
  text-transform: uppercase;
  padding: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  color: black;
  /* &:active {
    background-color: hsl(200, 100%, 50%);
    color: white;
  } */
  background-color: ${(props) =>
    props.$isActive ? "hsl(200, 100%, 50%)" : ""};
  color: ${(props) => (props.$isActive ? "white" : "black")};
  opacity: ${(props) => (props.$isActive ? "1" : "0.5")};

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: hsl(200, 100%, 75%);
  }
`;

export default KeyBoard;
