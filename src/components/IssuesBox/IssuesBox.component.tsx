import React from 'react';
import { Container } from './IssuesBox.styles';
import { SingleIssue } from './SingleIssue/SingleIssue.component';

export const IssuesBox: React.FC = () => {
    return (
        <Container>
            <SingleIssue />
        </Container>
    );
};