import styled from "styled-components";

interface IProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Id?: string;
}

const RootInput = styled.input`
  width: 50px;
  height: 25px;
`;
const Input = ({ onChange, Id }: IProps) => {
  return (
    <div>
      <RootInput type="number" onChange={onChange} id={Id} />
    </div>
  );
};
export default Input;
