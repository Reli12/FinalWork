import styled from "styled-components";

const RootInput = styled.input`
  width: 50px;
  height: 25px;
`;

const Input = () => {
  return (
    <div>
      <RootInput type="number" />
      <div>sada</div>
    </div>
  );
};
export default Input;
