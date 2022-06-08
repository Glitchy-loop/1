import React, {useState} from 'react'
import Section from '../components/Section/Section'

const AddTask = () => {
  const [task, setTask] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch(process.env.REACT_APP_BACKEND_URL, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ task })
    })
    const data = await res.json()
    alert('Task added', data)
  }

  return (
      <Section>
        <h1>Add Task</h1>
        <form onSubmit={handleSubmit}>
          <label>New task:
             <input type="text" onChange={(e) => setTask(e.target.value)}/>
          </label>
          <input type="submit" value="Add" />
        </form>
      </Section>
  )
}

export default AddTask