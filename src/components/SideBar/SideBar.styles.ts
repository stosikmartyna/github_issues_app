import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 150px;
`;

export const TabsWrapper = styled.div`
    border-bottom-left-radius: 7px;
    color: ${colors.white};
    background-color: rgb(16, 16, 34, 0.9);
    backdrop-filter: blur(6px);
    height: 100%;
`;