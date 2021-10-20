import React, { useState } from 'react';
import {
    Box,
    Wrapper,
    Icon,
    Text,
    Number,
} from './Navigation.styles';

interface NavigationProps {
    icon: string;
    text: string;
    number: number;
};

export const Navigation: React.FC<NavigationProps> = ({ icon, text, number }) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleIsActive = () => {
        setIsActive(!isActive);
    };

    return (
        <Box isActive={isActive} onClick={handleIsActive}>
            <Wrapper>
                <Icon src={icon} />
                <Text>{text}</Text>
            </Wrapper>
            <Number>{number}</Number>
        </Box>
    );
};