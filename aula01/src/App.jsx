import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'
import Lua from './components/Lua'

const App = () => {
  return (
    <div>
      <Lua nome="Lua"/>
      <Divisao num1={10} num2={2}/>
      <Multiplicacao num1={2} num2={2}/>
      <Subtracao num1={2} num2={1}/>
      <Adicao num1={2} num2={2}/>
    </div>
  )
}

export default App