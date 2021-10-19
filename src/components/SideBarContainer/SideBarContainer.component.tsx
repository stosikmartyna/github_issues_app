import React from 'react';
import { Navigation } from './Navigation/Navigation.component';
import { SideBar } from './SideBar/SideBar.component';
import { Container } from './SideBarContainer.styles';

export const SideBarContainer: React.FC = () => {
    return (
        <Container>
            <Navigation />
            <SideBar />
        </Container>
    );
};