import React, { useState } from 'react';
import { 
    Container,
    Date,
    Wrapper,
    Text,
    Icon,
} from './SingleIssue.styles';

interface SingleIssueProps {
    date: string;
    issues: string[];
};

export const SingleIssue: React.FC<SingleIssueProps> = ({ date, issues }) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleIsClicked = () => {
        setIsClicked(!isClicked);
    };

    return (
        <Container>
            <Date>{date}</Date>
            {issues.map((issue: string) => {
                return (
                    <Wrapper onClick={handleIsClicked}>
                        <Text>{issue}</Text>
                        {isClicked 
                            ? <Icon src={'./images/dark-star.svg'} />
                            : <Icon src={'./images/white-star.svg'} />
                        }
                    </Wrapper>
                )
            })}
        </Container>
    );
};