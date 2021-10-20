import React, { useState } from 'react';
import { Wrapper, Text, Icon } from './SingleIssue.styles';

interface SingleIssueProps {
    issue: string;
}

export const SingleIssue: React.FC<SingleIssueProps> = ({ issue }) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <Wrapper onClick={handleClick}>
            <Text>{issue}</Text>
            {isClicked 
                ? <Icon src={'./images/dark-star.svg'} />
                : <Icon src={'./images/white-star.svg'} />
            }
        </Wrapper>
    );
};