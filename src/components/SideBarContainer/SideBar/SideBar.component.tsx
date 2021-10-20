import React, { useState } from 'react';
import {
    Box,
    Wrapper,
    Icon,
    Text,
    Number,
} from './SideBar.styles';

interface SideBarProps {
    icon: string;
    text: string;
    number: number;
};

export const SideBar: React.FC<SideBarProps> = ({ icon, text, number }) => {
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