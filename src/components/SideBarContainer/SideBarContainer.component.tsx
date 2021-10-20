import React from 'react';
import { Navigation } from './Navigation/Navigation.component';
import { SideBar } from './SideBar/SideBar.component';
import { Container, SideBarWrapper } from './SideBarContainer.styles';

export const SideBarContainer: React.FC = () => {
    return (
        <Container>
            <Navigation />
            <SideBarWrapper>
                <SideBar icon={'./images/icon-github.svg'} text={'All'} number={12} />
                <SideBar icon={'./images/icon-open-issue.svg'} text={'Open'} number={4} />
                <SideBar icon={'./images/icon-closed-issue.svg'} text={'Closed'} number={8} />
            </SideBarWrapper>
        </Container>
    );
};