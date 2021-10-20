import React, { useState } from 'react';
import { Controls } from '../Controls/Controls';
import { SideBarTab } from '../SideBarTab/SideBarTab';
import { Tab } from './SideBar.types';
import { Container, TabsWrapper } from './SideBar.styles';

export const SideBar: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>(Tab.ALL);

    const handleTabs = (tab: Tab) => {
        setActiveTab(tab)
    };

    return (
        <Container>
            <Controls />
            <TabsWrapper>
                <SideBarTab 
                    icon={'./images/icon-github.svg'} 
                    name={Tab.ALL} 
                    quantity={12} 
                    onClick={handleTabs} 
                    isActive={activeTab === Tab.ALL} 
                />
                <SideBarTab 
                    icon={'./images/icon-open-issue.svg'} 
                    name={Tab.OPEN} 
                    quantity={4} 
                    onClick={handleTabs} 
                    isActive={activeTab === Tab.OPEN} 
                />
                <SideBarTab 
                    icon={'./images/icon-closed-issue.svg'} 
                    name={Tab.CLOSED} 
                    quantity={8} 
                    onClick={handleTabs} 
                    isActive={activeTab === Tab.CLOSED} 
                />
            </TabsWrapper>
        </Container>
    );
};