import styled from "styled-components";

interface IProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Id?: string;
}

const RootInput = styled.input`
  width: 50px;
  height: 25px;
  border: none;
`;
const Input = ({ onChange, Id }: IProps) => {
  return (
    <div>
      <RootInput type="number" onChange={onChange} id={Id} step="any" />
    </div>
  );
};
export default Input;
