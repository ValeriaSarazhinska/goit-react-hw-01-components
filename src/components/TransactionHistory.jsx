import PropTypes from "prop-types";
import css from "../styles/transactionHistory.module.css"

const TransactionHistory = ({items}) => {
  return (
    <table className={css["transaction-history"]}>
      <thead className={css.thead}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
      </thead>

      <tbody>
      {items.map((item, index) => (

        <tr key={item["id"]} className={index % 2 ? css.trow : css["trow-secondary"]}>
          <td>{item["type"]}</td>
          <td>{item["amount"]}</td>
          <td>{item["currency"]}</td>
        </tr>))}
      </tbody>
    </table>
  )
}
TransactionHistory.propTypes = {
  items: PropTypes.array
}

export default TransactionHistory
