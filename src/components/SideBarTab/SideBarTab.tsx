import React from 'react';
import { Tab } from '../SideBar/SideBar.types';
import {
    Box,
    Wrapper,
    Icon,
    Text,
    IssuesQuantity,
} from './SideBarTab.styles';

interface SideBarTabProps {
    icon: string;
    name: Tab;
    quantity: number;
    onClick: (tab: Tab) => void;
    isActive: boolean;
};

export const SideBarTab: React.FC<SideBarTabProps> = ({ icon, name, quantity, onClick, isActive }) => {

    const handleClick = () => {
        onClick(name);
    };

    return (
        <Box isActive={isActive} onClick={handleClick}>
            <Wrapper>
                <Icon src={icon} />
                <Text>{name}</Text>
            </Wrapper>
            <IssuesQuantity>{quantity}</IssuesQuantity>
        </Box>
    );
};