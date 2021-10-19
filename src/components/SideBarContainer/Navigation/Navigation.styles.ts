import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    background-color: #101022;
    border-top-left-radius: 7px;
    display: flex;
    height: 40px;
`;

export const CloseButton = styled.div`
    background-color: #FF594F;
    border-radius: 50%;
    height: 10px;
    margin-left: 10px;
    width: 10px;
`;

export const MinimizeButton = styled(CloseButton)`
    background-color: #FFBC1B;
`;

export const MaximizeButton = styled(CloseButton)`
    background-color: #00CD46;
`;