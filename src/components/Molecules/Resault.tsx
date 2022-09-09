import styled from "styled-components";
import useStore from "../../appStore/appStore";
import { useMatrixContext } from "../../context/Context";

const Text = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: #383b53;
`;

const Resault = () => {
  const { numberOfEquation, flag } = useMatrixContext();
  const { finalResault } = useStore();
  let array = new Array(numberOfEquation);
  for (let i = 0; i < numberOfEquation; i++) {
    array[i] = i;
  }
  return (
    <>
      {flag === -1 ? (
        <>
          <Text>Jednadžba nema riješenja</Text>
          <Text> ili jednadžba nije riješiva ovom metodom</Text>
        </>
      ) : (
        <>
          {flag === 1 && (
            <>
              <Text>Rezultati jednadžbi:</Text>
              {array.map((_, i) => (
                <Text key={i}>
                  x{i + 1}={`${finalResault[i]}`}
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
