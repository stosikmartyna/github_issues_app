import React from 'react';
import { DailyIssues } from '../DailyIssues/DailyIssues';
import { Container } from './Issues.styles';

export const Issues: React.FC = () => {
    return (
        <Container>
            <DailyIssues date={'19-07-2016'} issues={['Page Changes', 'Review of last issues']} />
            <DailyIssues date={'18-07-2016'} issues={['Visual UI update review', 'Sidebar changes']} />
            <DailyIssues date={'17-07-2016'} issues={['Crash update', 'Page visual UI update', 'Sidebar update']} />
            <DailyIssues date={'19-07-2016'} issues={['Page Changes', 'Review of last issues']} />
            <DailyIssues date={'18-07-2016'} issues={['Visual UI update review', 'Sidebar changes']} />
        </Container>
    );
};