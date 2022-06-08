import React, { useEffect, useState } from 'react'
import List from '../components/List/List'
import Section from '../components/Section/Section'

const App = () => {
  const [data, setData] = useState()

  useEffect(() => {
    try {
      fetch(process.env.REACT_APP_BACKEND_URL)
        .then(res => res.json())
        .then(data => setData(data))
    } catch (err) {}
  })

  return (
    <>
      <Section>
        <h1>Tasks</h1>
        {!data && (
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921'
            alt='Loading...'
          ></img>
        )}
        {data && data.length === 0 && <div>No tasks found</div>}
        {data && data.length > 0 && <List listItems={data} />}
      </Section>
    </>
  )
}

export default App
