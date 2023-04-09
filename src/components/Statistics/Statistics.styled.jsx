import styled from '@emotion/styled';

export const StatContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 15px;
text-align: center;
background-color: #84A278;
padding: 30px;
border-radius: 50%;
`;

export const StatTitle = styled.h2`
font-size: 25px;
font-weight: 700;
color: white;
text-transform: uppercase;
`;

export const StatList = styled.ul`
list-style: none;
display: flex;
justify-content: space-evenly;;
align-items: center;
gap: 24px;
width: 400px;
padding: 16px;
font-size: 25px;
font-weight: 700;
`;

export const StatItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 8px;
border: 2px solid #F8D24E;
border-radius: 30%;
padding: 8px;
min-width: 70px;

`;

export const StatLabel = styled.span`
font-size: 25px;
font-weight: 700;
color: #F8D24E;
`;
export const StatPercentage = styled.span`
font-size: 25px;
font-weight: 700;
color: #000;
`;
