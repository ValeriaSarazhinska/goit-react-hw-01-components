import PropTypes from "prop-types"
import css from "../styles/statistics.module.css"

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const Statistics = ({title, stats}) => {
  return(
    <section className={css.statistics}>
      {title && <h2 className={css.title} style={{color:getRandomHexColor()}}>Upload stats</h2>}
      <ul className={css["stat-list"]}>
        {stats.map(stat => (
          <li className={css.item} key={stat["id"]} style={{backgroundColor:getRandomHexColor()}}>
          <span className={css.label}>{stat["label"]}</span>
          <span className={css.percentage}>{stat["percentage"]}%</span>
          </li>
          )
          )
        }

      </ul>
    </section>
  )
}
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array,
}

export default Statistics
