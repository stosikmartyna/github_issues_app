import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const Container = styled.div`
    align-items: center;
    background-color: ${colors.navyBlue};
    border-top-left-radius: 7px;
    display: flex;
    height: 40px;
`;

export const CloseButton = styled.div`
    background-color: ${colors.red};
    border-radius: 50%;
    height: 10px;
    margin-left: 10px;
    width: 10px;
`;

export const MinimizeButton = styled(CloseButton)`
    background-color: ${colors.yellow};
`;

export const MaximizeButton = styled(CloseButton)`
    background-color: ${colors.green};
`;