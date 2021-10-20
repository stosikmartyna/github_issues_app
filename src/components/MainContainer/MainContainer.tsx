import React from 'react';
import { Issues } from '../Issues/Issues';
import { SideBar } from '../SideBar/SideBar';
import { Container } from './MainContainer.styles';

export const MainContainer: React.FC = () => {
    return (
        <Container>
            <SideBar />
            <Issues />
        </Container>
    );
};