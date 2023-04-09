import {TableHead, Table, TableBody, TableCell, TableLine} from './TransactionHistory.styled'
import PropTypes from 'prop-types';

function TransactionHistory({ items }) {
  return <Table>
  <TableHead>
    <tr>
      <TableCell>Type</TableCell>
      <TableCell>Amount</TableCell>
      <TableCell>Currency</TableCell>
    </tr>
  </TableHead>
  <TableBody>
          {items.map(item => (
    <TableLine key={item.id}>
        <TableCell>{item.type}</TableCell>
        <TableCell>{item.amount}</TableCell>
        <TableCell>{item.currency}</TableCell>
    </TableLine>
    ))}
   
  </TableBody>
</Table>
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })),
};