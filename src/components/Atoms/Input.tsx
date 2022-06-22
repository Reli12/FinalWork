import { useState } from "react";
import styled from "styled-components";

interface IProps {
  Id?: string;
}

const RootInput = styled.input`
  width: 50px;
  height: 25px;
`;
const Input = ({ Id }: IProps) => {
  const [first, setfirst] = useState(0);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfirst(parseInt(e.target.value));
  };
  return (
    <div>
      <RootInput
        type="number"
        onChange={onChange}
        id={Id}
        step="any"
        value={`${first}`}
      />
    </div>
  );
};
export default Input;
