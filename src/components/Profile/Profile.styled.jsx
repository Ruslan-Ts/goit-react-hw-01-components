import styled from '@emotion/styled';

export const Container = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const DescriptionBox = styled.div`
width: 400px;
padding: 16px;
display: flex;
height: auto;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 8px;
border: 2px solid #000;
border-radius: 8px;
`

export const Avatar = styled.img`
width: 240px;

height: auto;
display: flex;
`
export const UserInfo = styled.p`
font-size: 25px;
font-weight: 700;
margin: 0;
`

export const StatBox = styled.ul`
list-style: none;
display: flex;
justify-content: space-evenly;;
align-items: center;
gap: 24px;
border: 2px solid #000;
border-radius: 8px;
width: 400px;
padding: 16px;
background-color: gray;
font-size: 16px;
font-weight: 700;
color: white;
`

export const StatItem = styled.li`
display: flex;
gap: 8px;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const StatItemText = styled.span`
font-size: 16px;
font-weight: 900;
`