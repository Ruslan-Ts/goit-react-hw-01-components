import styled from '@emotion/styled';


export const Table = styled.table`

font-size: 30px;
font-weight: 500;
padding: 5px 20px;
`
export const TableHead = styled.thead`
background-color: #F0D00D;
  font-size: 20px;
  font-weight: 700;
`
export const TableBody = styled.tbody`
background-color: #EFD478;
  font-size: 15px;
  font-weight: 500;
`
export const TableCell = styled.td`

  padding: 5px 20px;
`

export const TableLine = styled.tr`

  &:nth-of-type(2n) {
    background-color: #F8D24E;
  }
`