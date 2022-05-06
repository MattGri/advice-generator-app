import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BsFillDice5Fill } from 'react-icons/bs';

const Container = styled.div`
  background-color: #313a49;
  height: auto;
  width: 50%;
  padding: 20px;
  margin: 20px auto 0px auto;
  border-radius: 15px;
`;

const Title = styled.h1`
  text-align: center;
  color: #5a8784;
  text-transform: uppercase;
  margin-bottom: 15px;

  @media (max-width: 450px) {
    font-size: 20px;
  }
`;

const Text = styled.p`
  color: #fff;
  font-size: 20px;
  text-align: center;

  @media (max-width: 490px) {
    font-size: 12px;
  }
`;

const DivParent = styled.div`
  background-color: #52ffac;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  position: relative;
  top: 35px;
  left: 50%;
  transform: translateX(-50%);
`;

const ButtonDice = styled(BsFillDice5Fill)`
  display: block;
  margin: 0 auto;
  cursor: pointer;
`;

const Advice = () => {
  const [advice, setAdvice] = useState({
    adviceId: 0,
    adviceText: '',
  });
  const changeAdvice = () => {
    axios.get('https://api.adviceslip.com/advice').then((res) => {
      console.log(res.data.slip);

      setAdvice({
        adviceId: res.data.slip.id,
        adviceText: res.data.slip.advice,
      });
    });
  };

  useEffect(() => {
    document.title = 'Advice generator app';

    // changeAdvice();
  }, []);

  return (
    <>
      <Container>
        <Title>advice #{advice.adviceId}</Title>
        <Text>"{advice.adviceText}"</Text>

        <DivParent>
          <ButtonDice onClick={changeAdvice}>change</ButtonDice>
        </DivParent>
      </Container>
    </>
  );
};

export default Advice;
