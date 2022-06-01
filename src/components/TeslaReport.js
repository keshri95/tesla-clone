import styled from "styled-components";

function TeslaReport() {
  return (
    <Report>
      <a href="#">Read Tesla's 2021 Impact Report</a>
    </Report>
  );
}

export default TeslaReport;

const Report = styled.div`
  // background: 0 1px #d0d1d2;
  border: 1px solid red;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
    padding: 10px 0;
  box-shadow: 0 0 1px #d0d1d2;
  a {
    // cursor: pointer;
    text-decoration: underline;
    color: grey;
    border: 1px solid black;
  }
`;
