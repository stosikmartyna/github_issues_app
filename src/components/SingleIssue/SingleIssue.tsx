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

    const iconSrc = `./images/${isClicked ? 'checked' : 'unchecked'}-star.svg`;

    return (
        <Wrapper onClick={handleClick}>
            <Text>{issue}</Text>
            <Icon src={iconSrc} />
        </Wrapper>
    );
};