import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Container = styled.div`
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 150px;
`;

export const SideBarWrapper = styled.div`
    border-bottom-left-radius: 7px;
    color: ${colors.white};
    background-color: rgb(16, 16, 34, 0.9);
    backdrop-filter: blur(6px);
    height: 100%;
`;