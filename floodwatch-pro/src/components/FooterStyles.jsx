import styled from "styled-components";

export const Container = styled.div`
  position: relative; /* Container relative to the page content */
  min-height: 100vh; /* Ensures the container takes up at least the viewport height */
`;

export const Box = styled.div`
    padding: 1.5% 2.5%;
    background: lightblue;
    // bottom: 0;
    // width: 100%;
    // margin: 0 auto;
    // position: fixed;
    // left: 0;
    // right: 0;

    // @media (max-width: 1000px) {
    //     padding: 1.5% 2.5%; /* Adjust padding for smaller screens */
    // }
`

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
    padding: 10px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 2px;
    &:first-child{
        margin-right: 100px;
    }
    &:last-child {
        margin-left: 100px;
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const Heading = styled.p`
    font-size: 24px;
    color: #000;
    font-weight: bold;
    margin-bottom: 20px;
`;
