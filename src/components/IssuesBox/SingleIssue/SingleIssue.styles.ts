import styled from 'styled-components';

export const Container = styled.div`
    padding: 10px 10px;
    overflow: auto;
    height: 475px;

    &::-webkit-scrollbar {
        background-color: #E0E0E0;
        border-radius: 20px;
        width: 7px;
    }
`;

export const Date = styled.span`
    color: #8A8995;
    font-size: 12px;
    letter-spacing: .5px;
`;

export const Wrapper = styled.div`
    align-items: center;
    background-color: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 7px;
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
    padding: 10px;
`;

export const Text = styled.span`
    color: #080606;
    font-size: 15px;
    letter-spacing: .5px;
`;

export const Icon = styled.img`
    filter: drop-shadow(0 0 0.1rem #c4c2c2);
`;