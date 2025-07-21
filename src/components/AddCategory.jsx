import { useState } from "react"


export const AddCategory = ({onNewValue}) => {

    const [inputValue, setInputValue] = useState('');


    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length < 1) return;

      onNewValue(inputValue)
       setInputValue('')

    }

  return (
  <form onSubmit={onSubmit}>
    
      <input type="text" 
      placeholder="Browse Gifts"
      className="input"
      value={inputValue}
      onChange={onInputChange}
      />

  </form>
  )
}

