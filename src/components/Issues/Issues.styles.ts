import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Container = styled.div`
    background-color: ${colors.backgroundIssueGrey};
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    height: 480px;
    overflow: auto;
    padding: 10px 10px;
    width: 100%;

    &::-webkit-scrollbar {
        background-color: ${colors.borderGrey};
        border-radius: 20px;
        width: 7px;
    }
`;