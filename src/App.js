import "./styles.css";
import styled from "styled-components";
import KeySignature from "./components/KeySignature";

const keySignatures = [
  {
    imgSource:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Treble_clef_with_empty_staff.svg/1280px-Treble_clef_with_empty_staff.svg.png",
    major: "C Major",
    minor: "a minor"
  },
  {
    imgSource:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/G-major_e-minor.svg/1920px-G-major_e-minor.svg.png",
    major: "G Major",
    minor: "e minor"
  },
  {
    imgSource:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/D-major_b-minor.svg/1920px-D-major_b-minor.svg.png",
    major: "D Major",
    minor: "b minor"
  },
  {
    imgSource:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/A-major_f-sharp-minor.svg/1920px-A-major_f-sharp-minor.svg.png",
    major: "A Major",
    minor: "F# minor"
  },
  {
    imgSource:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/E-major_c-sharp-minor.svg/1920px-E-major_c-sharp-minor.svg.png",
    major: "E Major",
    minor: "c# minor"
  },
  {
    imgSource:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/B-major_g-sharp-minor.svg/1920px-B-major_g-sharp-minor.svg.png",
    major: "B Major",
    minor: "f# minor"
  },
  {
    imgSource:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/F-sharp-major_d-sharp-minor.svg/1920px-F-sharp-major_d-sharp-minor.svg.png",
    major: "F# major",
    minor: "d# minor"
  },
  {
    imgSource:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/C-sharp-major_a-sharp-minor.svg/1920px-C-sharp-major_a-sharp-minor.svg.png",
    major: "C# Major",
    minor: "a# minor"
  },
  {
    imgSource:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/F-major_d-minor.svg/1920px-F-major_d-minor.svg.png",
    major: "F Major",
    minor: "d minor"
  },
  {
    imgSource:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/B-flat-major_g-minor.svg/1920px-B-flat-major_g-minor.svg.png",
    major: "Bb Major",
    minor: "g minor"
  },
  {
    imgSource:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/E-flat-major_c-minor.svg/1920px-E-flat-major_c-minor.svg.png",
    major: "Eb Major",
    minor: "c minor"
  },
  {
    imgSource:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/A-flat-major_f-minor.svg/1920px-A-flat-major_f-minor.svg.png",
    major: "Ab Major",
    minor: "f minor"
  },
  {
    imgSource:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/D-flat-major_b-flat-minor.svg/1920px-D-flat-major_b-flat-minor.svg.png",
    major: "Db Major",
    minor: "bb minor"
  },
  {
    imgSource:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/G-flat-major_e-flat-minor.svg/1920px-G-flat-major_e-flat-minor.svg.png",
    major: "Gb major",
    minor: "eb minor"
  },
  {
    imgSource:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/C-flat-major_a-flat-minor.svg/1920px-C-flat-major_a-flat-minor.svg.png",
    major: "Cb Major",
    minor: "ab minor"
  }
];

export default function App() {
  return (
    <Wrapper>
      <KeySignature keySignatures={keySignatures} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
