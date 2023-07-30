import { styled } from "styled-components";

const HangManDrawing = ({ numberOfGuess }: { numberOfGuess: number }) => {
  const HEAD = (
    <div
      key="head"
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "50px",
        right: "-30px",
      }}
    />
  );

  const BODY = (
    <div
      key="body"
      style={{
        width: "10px",
        height: "100px",
        background: "black",
        position: "absolute",
        top: "120px",
        right: 0,
      }}
    />
  );

  const RIGHT_ARM = (
    <div
      key="rightArm"
      style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "-100px",
        rotate: "-30deg",
        transformOrigin: "left bottom",
      }}
    />
  );

  const LEFT_ARM = (
    <div
      key="leftArm"
      style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "10px",
        rotate: "30deg",
        transformOrigin: "right bottom",
      }}
    />
  );

  const RIGHT_LEG = (
    <div
      key="rightLeg"
      style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: "-90px",
        rotate: "60deg",
        transformOrigin: "left bottom",
      }}
    />
  );

  const LEFT_LEG = (
    <div
      key="leftLeg"
      style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: 0,
        rotate: "-60deg",
        transformOrigin: "right bottom",
      }}
    />
  );

  const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]; //   const hangMan = [

  return (
    <HangManDrawingContainer>
      {BODY_PARTS.slice(0, numberOfGuess)}
      <RightTopBar />
      <TopBar />
      <InnerTopDrawer></InnerTopDrawer>
      <InnerDrawer />
    </HangManDrawingContainer>
  );
};

const HangManDrawingContainer = styled.div`
  position: relative;
`;

const RightTopBar = styled.div`
  height: 50px;
  width: 10px;
  background-color: black;
  position: absolute;
  top: 0;
  right: 0;
`;

const TopBar = styled.div`
  height: 10px;
  width: 200px;
  background-color: black;
  margin-left: 120px;
`;

const InnerDrawer = styled.div`
  height: 10px;
  width: 250px;
  background-color: black;
`;

const InnerTopDrawer = styled.div`
  height: 400px;
  width: 10px;
  background-color: black;
  margin-left: 120px;
`;

const Head = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 10px solid black;
  position: absolute;
  top: 50px;
  right: -30px;
`;

const Body = styled.div`
  width: 10px;
  height: 100px;
  background-color: black;
  position: absolute;
  top: 120px;
  right: 0;
`;

const RightLeg = styled.div`
  width: 100px;
  height: 10px;
  background-color: black;
  position: absolute;
  top: 210px;
  right: -90px;
  rotate: 60deg;
  transform-origin: left bottom;
`;

const LeftLeg = styled.div`
  width: 100px;
  height: 10px;
  background-color: black;
  position: absolute;
  top: 210px;
  right: 0;
  rotate: -60deg;
  transform-origin: right bottom;
`;

const RightArm = styled.div`
  width: 100px;
  height: 10px;
  background-color: black;
  position: absolute;
  top: 150px;
  right: -100px;
  rotate: -30deg;
  transform-origin: left bottom;
`;

const LeftArm = styled.div`
  width: 100px;
  height: 10px;
  background-color: black;
  position: absolute;
  top: 150px;
  right: 10px;
  rotate: 30deg;
  transform-origin: right bottom;
`;

export default HangManDrawing;
