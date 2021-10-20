import React, { useState } from 'react';
import { 
    Container,
    Date,
    Wrapper,
    Text,
    Icon,
} from './DailyIssues.styles';

interface DailyIssuesProps {
    date: string;
    issues: string[];
};

export const DailyIssues: React.FC<DailyIssuesProps> = ({ date, issues }) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleIsClicked = () => {
        setIsClicked(!isClicked);
    };

    return (
        <Container>
            <Date>{date}</Date>
            {issues.map((issue: string, index: number) => {
                return (
                    <Wrapper key={index} onClick={handleIsClicked}>
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