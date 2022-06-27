import styled from "styled-components";
import { useMatrixContext } from "../../context/Context";

const Text = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: #383b53;
`;

const Resault = () => {
  const { FinalResault, numberOfEquation, flag } = useMatrixContext();
  let array = new Array(numberOfEquation);
  for (let i = 0; i < numberOfEquation; i++) {
    array[i] = i;
    console.log(FinalResault[i] + "RESAULT");
  }
  return (
    <>
      {flag == -1 ? (
        <>
          <Text>Jednadžba nema riješenja</Text>
        </>
      ) : (
        <>
          {flag == 1 && (
            <>
              <Text>Rezultati jednadžbi:</Text>
              {array.map((el, i) => (
                <Text key={i}>
                  x{i + 1}={`${FinalResault[i]}`}
                </Text>
              ))}
            </>
          )}
        </>
      )}
    </>
  );
};
export default Resault;
