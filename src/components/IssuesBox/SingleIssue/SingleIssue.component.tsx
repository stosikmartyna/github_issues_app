import React from 'react';
import { 
    Container,
    Date,
    Wrapper,
    Text,
    Icon,
} from './SingleIssue.styles';

export const SingleIssue:React.FC = () => {
    return (
        <Container>
            <Date>19-07-2016</Date>
            <Wrapper>
                <Text>Page Changes</Text>
                <Icon src={'./images/icon-star.svg'} />
            </Wrapper>
            <Wrapper>
                <Text>Review of last issues</Text>
                <Icon src={'./images/icon-star.svg'} />
            </Wrapper>
            <Date>19-07-2016</Date>
            <Wrapper>
                <Text>Visual UI Update Review</Text>
                <Icon src={'./images/icon-star.svg'} />
            </Wrapper>
            <Wrapper>
                <Text>Sidebar changes</Text>
                <Icon src={'./images/icon-star.svg'} />
            </Wrapper>
            <Date>19-07-2016</Date>
            <Wrapper>
                <Text>Crash update</Text>
                <Icon src={'./images/icon-star.svg'} />
            </Wrapper>
            <Wrapper>
                <Text>Page visual UI update review</Text>
                <Icon src={'./images/icon-star.svg'} />
            </Wrapper>
            <Date>19-07-2016</Date>
            <Wrapper>
                <Text>Sidebar update</Text>
                <Icon src={'./images/icon-star.svg'} />
            </Wrapper>
            <Wrapper>
                <Text>Page Changes</Text>
                <Icon src={'./images/icon-star.svg'} />
            </Wrapper>
            <Date>19-07-2016</Date>
            <Wrapper>
                <Text>Page Changes</Text>
                <Icon src={'./images/icon-star.svg'} />
            </Wrapper>
            <Wrapper>
                <Text>Page Changes</Text>
                <Icon src={'./images/icon-star.svg'} />
            </Wrapper>
        </Container>
    );
};