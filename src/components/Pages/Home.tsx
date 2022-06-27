import { useEffect } from "react";
import styled from "styled-components";
import { useMatrixContext } from "../../context/Context";
import Input from "../Atoms/Input";
import Resault from "../Molecules/Resault";
import Table from "../Molecules/Table";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: #383b53;
`;
const Button = styled.button`
  background-color: #379392;
  border-radius: 10px;
  border: 1px solid #379392;
  width: 80px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #fffffa;
  font-weight: bold;
  :hover {
    cursor: pointer;
  }
`;

const Home = () => {
  const { numberOfEquation, setNumberOfEquation, FinalResault, flag } =
    useMatrixContext();
  let a: string;
  const onChange = () => {
    const input = document.getElementById("NumOfEqueazion") as HTMLInputElement;
    a = input.value;
    setNumberOfEquation(parseInt(a));
  };

  return (
    <Root>
      <Text>Unesite broj jednadžbi koje želite imati:</Text>
      <Input Id="NumOfEqueazion" />
      <Button onClick={onChange}>Unesite</Button>
      {numberOfEquation > 1 && (
        <>
          <Text>
            Bitno je napomenuti da ako polje se ostavi prazno prilikom unosa,
            tada će njegova vrijednost biti jednaka nuli.
          </Text>
          <Text>Unesite vrijednosti koeficijenata jednadžbe:</Text>
          <Table />
        </>
      )}
      {<Resault />}
    </Root>
  );
};
export default Home;
