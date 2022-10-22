import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionsHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.header}>
        <tr className={css.headerRow}>
          <th className={css.headerTitle}>Type</th>
          <th className={css.headerTitle}>Amount</th>
          <th className={css.headerTitle}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.body}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.bodyRow} key={id}>
              <td className={css.bodyValue}>{type}</td>
              <td className={css.bodyValue}>{amount}</td>
              <td className={css.bodyValue}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
