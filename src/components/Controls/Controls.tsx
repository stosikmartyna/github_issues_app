import React from 'react';
import { 
    Container, 
    CloseButton,
    MinimizeButton,
    MaximizeButton, 
} from './Controls.styles';

export const Controls: React.FC = () => {
    return (
        <Container>
            <CloseButton />
            <MinimizeButton />
            <MaximizeButton />
        </Container>
    );
};