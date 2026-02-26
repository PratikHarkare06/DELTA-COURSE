import { useState } from 'react'
import AddForm from './component/AddForm'
import Todo from './component/todo'
import { Provider } from 'react-redux'
import store from './app/store'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <AddForm />
      <Todo />
    </Provider>
  )
}

export default App
