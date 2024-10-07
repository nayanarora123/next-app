'use client';

import React, { useState } from 'react';

// Functional Component
export default function TodoList () {
  
  // State Definitions
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  // Function to Add Todo
  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  // Function to Remove Todo
  const handleRemoveTodo = (index: number) => { // Index should be a number
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  // Rendering the Component
  return (
    <div>
      <h1>To-Do List</h1>
      <input
        className='mt-2'
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo"
      />
      <button className="pl-5" onClick={handleAddTodo}>Add</button>
      <ul className='pt-2'>
        {todos.map((todo, index) => (
          <li key={index} className='pt-1'>
            {todo}
            <button className='pl-2' onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};