import React, { useState } from 'react';
import { 
    Container, 
    Box,
    Wrapper,
    Icon,
    Text,
    Number,
} from './SideBar.styles';

export const SideBar: React.FC = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleIsActive = () => {
        setIsActive(!isActive);
    };

    return (
        <Container>
            <Box isActive={isActive} onClick={handleIsActive}>
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