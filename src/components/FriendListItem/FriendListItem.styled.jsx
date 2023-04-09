import styled from '@emotion/styled';

export const FriendListCard = styled.li`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
border: 2px solid #D6936D;
border-radius: 40px;
padding: 20px;
gap: 20px;
`;

export const Chip = styled.span`
color: ${props => {
    if (props.type) {
        return 'green'
    }
    return 'red'
}};
`
export const FriendName = styled.p`
font-size: 12px;
font-weight: 700;
color: #000;

`;