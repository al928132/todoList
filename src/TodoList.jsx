import { useState } from 'react'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input }])
      setInput('')
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') addTodo()
  }

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Todo List</h1>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a todo..."
          style={{ flex: 1, padding: '8px', fontSize: '16px' }}
        />
        <button onClick={addTodo} style={{ padding: '8px 16px', fontSize: '16px' }}>
          Add
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              marginBottom: '8px',
              background: '#f5f5f5',
              borderRadius: '4px'
            }}
          >
            <span>{todo.text}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ padding: '4px 8px', cursor: 'pointer' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
