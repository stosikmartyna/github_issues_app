import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const Container = styled.div`
    padding: 10px 10px;
    overflow: auto;
    height: 475px;

    &::-webkit-scrollbar {
        background-color: ${colors.borderGrey};
        border-radius: 20px;
        width: 7px;
    }
`;

export const Date = styled.span`
    color: ${colors.dateGrey};
    font-size: 12px;
    letter-spacing: .5px;
`;

export const Wrapper = styled.div`
    align-items: center;
    background-color: ${colors.white};
    border: 1px solid ${colors.borderGrey};
    border-radius: 7px;
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
    padding: 10px;
`;

export const Text = styled.span`
    color: ${colors.textGrey};
    font-size: 15px;
    letter-spacing: .5px;
`;

export const Icon = styled.img`
    filter: drop-shadow(0 0 0.1rem #c4c2c2);
`;