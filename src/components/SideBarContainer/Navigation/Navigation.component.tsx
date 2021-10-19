import React from 'react';
import { 
    Container, 
    CloseButton,
    MinimizeButton,
    MaximizeButton, 
} from './Navigation.styles';

export const Navigation: React.FC = () => {
    return (
        <Container>
            <CloseButton />
            <MinimizeButton />
            <MaximizeButton />
        </Container>
    );
};