import React,{useState, useEffect, useRef} from 'react'

function HookCounter() {

  const [count, setCount] = useState(10);
  const inputEl = useRef(null)

   const addCounter = () => {
    setCount(count + 1)
    inputEl.current.focus()
  }

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    console.log(count)
    // document.title = `You clicked ${count} times`;
  },[count]) // 仅在 count 发生变化时，重新订阅
  
  return(
    <div>
      <p>You clicked {count} times</p>

      <button onClick={addCounter}>点击</button>
      <input type='text' ref={inputEl}/>
      <button onClick={() => setCount(0)}>RESET</button>
      <button onClick={() => setCount(count+1)}>+</button>
      <button onClick={() => setCount(count-1)}>-</button>
    </div>
  )
}

export default HookCounter;