import styled from 'styled-components';

export const Container = styled.div`
    border-bottom-left-radius: 7px;
    color: #fff;
    background-color:rgb(16, 16, 34, 0.9);
    backdrop-filter: blur(6px);
    height: 100%;
`;

export const Box = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    height: 50px;
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