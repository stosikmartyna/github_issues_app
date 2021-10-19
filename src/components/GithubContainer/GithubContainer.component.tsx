import React from 'react';
import { SideBarContainer } from '../SideBarContainer/SideBarContainer.component';
import { IssuesBox } from '../IssuesBox/IssuesBox.component';
import { Container } from './GithubContainer.styles';

export const GithubContainer: React.FC = () => {
    return (
        <Container>
            <SideBarContainer />
            <IssuesBox />
        </Container>
    );
};