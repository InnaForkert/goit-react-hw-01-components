import css from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

export const TransactionHistory = ({items}) => (
  <table className={css.table}>
  <thead>
    <tr>
      <th className={css.thead}>Type</th>
      <th className={css.thead}>Amount</th>
      <th className={css.thead}>Currency</th>
    </tr>
  </thead>
  <tbody>
    {items.map(item => 
      <tr key={item.id}>
        <td className={css.capitilize}>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    )}
  </tbody>
</table>
)