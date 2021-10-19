import React from 'react';
import { Container, Box } from './SideBar.styles';

export const SideBar: React.FC = () => {
    return (
        <Container>
            <Box>
                <img src={'./'} />
                <span>All</span>
                <span>12</span>
            </Box>
            <Box>
                <img src={'./'} />
                <span>Open</span>
                <span>12</span>
            </Box>
            <Box>
                <img src={'./'} />
                <span>Closed</span>
                <span>12</span>
            </Box>
        </Container> 
    );
};