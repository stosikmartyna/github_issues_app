import React from 'react';
import { 
    Container, 
    Box,
    Wrapper,
    Icon,
    Text,
    Number,
} from './SideBar.styles';

export const SideBar: React.FC = () => {
    return (
        <Container>
            <Box>
                <Wrapper>
                    <Icon src={'./images/icon-github.svg'} />
                    <Text>All</Text>
                </Wrapper>
                <Number>12</Number>
            </Box>
            <Box>
                <Wrapper>
                    <Icon src={'./images/icon-open-issue.svg'} />
                    <Text>Open</Text>
                </Wrapper>
                <Number>12</Number>
            </Box>
            <Box>
                <Wrapper>
                    <Icon src={'./images/icon-closed-issue.svg'} />
                    <Text>Closed</Text>
                </Wrapper>
                <Number>12</Number>
            </Box>
        </Container> 
    );
};