import styled from 'styled-components';
import { colors } from '../../constants/colors';

interface BoxProps {
    isActive: boolean;
}

export const Box = styled.div<BoxProps>`
    align-items: center;
    background-color: ${({isActive}) => isActive && `${colors.activeBlue}`};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    height: 50px;
    padding: 0 10px;
    transition: background-color .3s ease-in-out;

    :hover {
        background-color: ${({isActive}) => isActive ? `${colors.activeBlueHover}` : `${colors.navyBlue}`}
    }
`;

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
`;

export const Icon = styled.img`
    margin-right: 10px;
`;

export const Text = styled.span`
    font-size: 14px;
`;

export const IssuesQuantity = styled(Text)``;