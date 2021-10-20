import styled from 'styled-components';
import { colors } from '../../constants/colors';

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
    cursor: pointer;
    filter: none;
    transition: filter .3s ease-in-out;

    :hover {
        filter: drop-shadow(0 0 0.2rem #e0e0e0);
    }
`;