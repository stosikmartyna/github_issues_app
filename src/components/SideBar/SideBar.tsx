import React from 'react';
import { Controls } from '../Controls/Controls';
import { Navigation } from '../Navigation/Navigation';
import { Container, SideBarWrapper } from './SideBar.styles';

export const SideBar: React.FC = () => {
    return (
        <Container>
            <Controls />
            <SideBarWrapper>
                <Navigation icon={'./images/icon-github.svg'} text={'All'} number={12} />
                <Navigation icon={'./images/icon-open-issue.svg'} text={'Open'} number={4} />
                <Navigation icon={'./images/icon-closed-issue.svg'} text={'Closed'} number={8} />
            </SideBarWrapper>
        </Container>
    );
};