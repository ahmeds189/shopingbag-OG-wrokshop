import { categories } from './constants'

const App = () => {
  return (
    <div>
      {categories.map((cat) => {
        const Icon = cat.icon
        return (
          <div key={cat.id}>
            <span>{cat.name}</span>
            <Icon />
          </div>
        )
      })}
    </div>
  )
}

export default App
