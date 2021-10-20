import styled from 'styled-components';
import { colors } from '../../constants/colors';

interface BoxProps {
    isActive?: boolean;
}

export const Box = styled.div<BoxProps>`
    align-items: center;
    background-color: ${({isActive}) => isActive && `${colors.activeBlue}`};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    height: 50px;
    transition: background-color .3s ease-in-out;

    :hover {
        background-color: ${({isActive}) => isActive ? `${colors.activeBlueHover}` : `${colors.navyBlue}`}
    }
`;

export const Wrapper = styled.div``;

export const Icon = styled.img`
    margin: 0 10px;
`;

export const Text = styled.span`
    font-size: 14px;
`;

export const Number = styled(Text)`
    margin-right: 10px;
`;