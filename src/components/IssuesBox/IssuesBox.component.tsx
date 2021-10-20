import React from 'react';
import { Container } from './IssuesBox.styles';
import { SingleIssue } from './SingleIssue/SingleIssue.component';

export const IssuesBox: React.FC = () => {
    return (
        <Container>
            <SingleIssue date={'19-07-2016'} issues={['Page Changes', 'Review of last issues']} />
            <SingleIssue date={'18-07-2016'} issues={['Visual UI update review', 'Sidebar changes']} />
            <SingleIssue date={'17-07-2016'} issues={['Crash update', 'Page visual UI update', 'Sidebar update']} />
            <SingleIssue date={'19-07-2016'} issues={['Page Changes', 'Review of last issues']} />
            <SingleIssue date={'18-07-2016'} issues={['Visual UI update review', 'Sidebar changes']} />
        </Container>
    );
};