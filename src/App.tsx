import React from 'react';
import { Container } from './App.styles';
import { MainContainer } from './components/MainContainer/MainContainer';

export const App: React.FC = () => {
  return (
    <Container>
      <MainContainer />
    </Container>
  );
};
