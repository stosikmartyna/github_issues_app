import React from 'react';
import { GithubContainer } from './components/GithubContainer/GithubContainer.component';
import { Container } from './App.styles';

export const App: React.FC = () => {
  return (
    <Container>
      <GithubContainer />
    </Container>
  );
};
