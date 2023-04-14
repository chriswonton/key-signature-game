import { useState } from "react";
import styled from "styled-components";

export default function keySignature({ keySignatures }) {
  let [index, setIndex] = useState(0);
  let [score, setScore] = useState(0);
  let [total, setTotal] = useState(0);

  return (
    <Wrapper>
      <h1>
        Key Signature Score: {score} / {total}
      </h1>
      {/* <h1>{keySignatures[index].major}</h1> */}
      <ImageWrapper>
        <img src={keySignatures[index].imgSource} alt="" />
      </ImageWrapper>
      <Controls>
        <button
          onClick={() => {
            setTotal(total + 1);
            if (keySignatures[index].major === "C Major") setScore(score + 1);
            setIndex(
              (index = Math.floor(Math.random() * keySignatures.length))
            );
          }}
        >
          C Major
        </button>
        <button
          onClick={() => {
            setTotal(total + 1);
            if (keySignatures[index].major === "G Major") setScore(score + 1);
            setIndex(
              (index = Math.floor(Math.random() * keySignatures.length))
            );
          }}
        >
          G Major
        </button>
        <button
          onClick={() => {
            setTotal(total + 1);
            if (keySignatures[index].major === "D Major") setScore(score + 1);
            setIndex(
              (index = Math.floor(Math.random() * keySignatures.length))
            );
          }}
        >
          D Major
        </button>
        <button
          onClick={() => {
            setTotal(total + 1);
            if (keySignatures[index].major === "A Major") setScore(score + 1);
            setIndex(
              (index = Math.floor(Math.random() * keySignatures.length))
            );
          }}
        >
          A Major
        </button>
        <button
          onClick={() => {
            setTotal(total + 1);
            if (keySignatures[index].major === "E Major") setScore(score + 1);
            setIndex(
              (index = Math.floor(Math.random() * keySignatures.length))
            );
          }}
        >
          E Major
        </button>
        <button
          onClick={() => {
            setTotal(total + 1);
            if (keySignatures[index].major === "B Major") setScore(score + 1);
            setIndex(
              (index = Math.floor(Math.random() * keySignatures.length))
            );
          }}
        >
          B Major
        </button>
        <button
          onClick={() => {
            setTotal(total + 1);
            if (keySignatures[index].major === "F# Major") setScore(score + 1);
            setIndex(
              (index = Math.floor(Math.random() * keySignatures.length))
            );
          }}
        >
          F# Major
        </button>
        <button
          onClick={() => {
            setTotal(total + 1);
            if (keySignatures[index].major === "C# Major") setScore(score + 1);
            setIndex(
              (index = Math.floor(Math.random() * keySignatures.length))
            );
          }}
        >
          C# Major
        </button>
      </Controls>
      <Controls>
        <button
          onClick={() => {
            setTotal(total + 1);
            if (keySignatures[index].major === "F Major") setScore(score + 1);
            setIndex(
              (index = Math.floor(Math.random() * keySignatures.length))
            );
          }}
        >
          F Major
        </button>
        <button
          onClick={() => {
            setTotal(total + 1);
            if (keySignatures[index].major === "Bb Major") setScore(score + 1);
            setIndex(
              (index = Math.floor(Math.random() * keySignatures.length))
            );
          }}
        >
          Bb Major
        </button>
        <button
          onClick={() => {
            setTotal(total + 1);
            if (keySignatures[index].major === "Eb Major") setScore(score + 1);
            setIndex(
              (index = Math.floor(Math.random() * keySignatures.length))
            );
          }}
        >
          Eb Major
        </button>
        <button
          onClick={() => {
            setTotal(total + 1);
            if (keySignatures[index].major === "Ab Major") setScore(score + 1);
            setIndex(
              (index = Math.floor(Math.random() * keySignatures.length))
            );
          }}
        >
          Ab Major
        </button>
        <button
          onClick={() => {
            setTotal(total + 1);
            if (keySignatures[index].major === "Db Major") setScore(score + 1);
            setIndex(
              (index = Math.floor(Math.random() * keySignatures.length))
            );
          }}
        >
          Db Major
        </button>
        <button
          onClick={() => {
            setTotal(total + 1);
            if (keySignatures[index].major === "Gb Major") setScore(score + 1);
            setIndex(
              (index = Math.floor(Math.random() * keySignatures.length))
            );
          }}
        >
          Gb Major
        </button>
        <button
          onClick={() => {
            setTotal(total + 1);
            if (keySignatures[index].major === "Gb Major") setScore(score + 1);
            setIndex(
              (index = Math.floor(Math.random() * keySignatures.length))
            );
          }}
        >
          Gb Major
        </button>
        <button
          onClick={() => {
            setTotal(total + 1);
            if (keySignatures[index].major === "Cb Major") setScore(score + 1);
            setIndex(
              (index = Math.floor(Math.random() * keySignatures.length))
            );
          }}
        >
          Cb Major
        </button>
      </Controls>
      <Controls>
        <button
          onClick={() => {
            setScore((score = 0));
            setTotal((total = 0));
          }}
        >
          Reset Score
        </button>
      </Controls>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 10px solid black;
  background-color: white;
  img {
    height: 600px;
    width: 800px;
    object-fit: contain;
    /* max-width: 1200px;
    max-height: 1000px; */
    /* padding: 20px; */
  }
`;

const Controls = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
`;
