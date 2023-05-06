import { categories } from './constants'
import Tooltip from './components/tooltip/Tooltip'

const App = () => {
  return (
    <div className="container">
      {categories.map((cat) => {
        const Icon = cat.icon
        return (
          <div key={cat.id}>
            <span>{cat.name}</span>
            <Icon />
          </div>
        )
      })}
      <Tooltip title="hot" color="blue" />
      <Tooltip title="new" color="gold" />
      <Tooltip title="hot" color="dark-gold" />
      <Tooltip title="new" color="dark-gold" notRound />
    </div>
  )
}

export default App
