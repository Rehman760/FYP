import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-top: 16px;
  color: green;
`;

const Icon = styled(AiOutlineLoading)`
  animation: ${rotate} 1s linear infinite;
  font-size: 48px;
  color: green;
`;

const Loading = () => {
  return (
    <Container>
      <Icon />
      <Text>Loading...</Text>
    </Container>
  );
};

export default Loading;
