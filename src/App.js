import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, changeTheme } from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const theme = useSelector(state => state.theme)

  const dispatch = useDispatch() 

  return (
    <div className={`App ${theme}`}>
      { counter }
      <button onClick={() => dispatch(add())}>Добавить</button>
      <button onClick={() => dispatch(changeTheme())}>Изменить тему</button>
    </div>
  )
}

export default App
