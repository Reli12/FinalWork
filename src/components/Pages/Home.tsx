import { useState } from "react";
import styled from "styled-components";
import Input from "../Atoms/Input";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: #383b53;
`;

const Home = () => {
  const [numberOfEquation, setNumberOfEquation] = useState(0);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfEquation(parseInt(e.target.value));
  };
  return (
    <Root>
      <Text>Insert the number of equation that you wont have:</Text>
      <Input onChange={onChange} />
    </Root>
  );
};
export default Home;
