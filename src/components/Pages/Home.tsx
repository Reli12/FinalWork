import styled from "styled-components";
import { useMatrixContext } from "../../context/Context";
import Input from "../Atoms/Input";
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

const Home = () => {
  const { numberOfEquation, setNumberOfEquation } = useMatrixContext();
  let a: string;
  const onChange = () => {
    const input = document.getElementById("NumOfEqueazion") as HTMLInputElement;
    a = input.value;
    setNumberOfEquation(parseInt(a));
  };
  return (
    <Root>
      <Text>Insert the number of equation that you wont have:</Text>
      <Input Id="NumOfEqueazion" />
      <button onClick={onChange}>Button</button>
      {numberOfEquation > 1 && <Table />}
    </Root>
  );
};
export default Home;
