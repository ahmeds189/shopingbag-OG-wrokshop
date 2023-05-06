import './tooltip.scss'
const Tooltip = ({ title, color, notRound }) => {
  return (
    <div className={`tooltip ${color} ${notRound && 'not-round'}`}>
      <p>{title}</p>
      {notRound && <span></span>}
    </div>
  )
}

export default Tooltip
