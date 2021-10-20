import React from 'react';
import { SingleIssue } from '../SingleIssue/SingleIssue';
import { Container, Date } from './DailyIssues.styles';

interface DailyIssuesProps {
    date: string;
    issues: string[];
};

export const DailyIssues: React.FC<DailyIssuesProps> = ({ date, issues }) => {
    return (
        <Container>
            <Date>{date}</Date>
            {issues.map((issue: string, index: number) => {
                return (
                    <SingleIssue key={index} issue={issue} />
                )
            })}
        </Container>
    );
};