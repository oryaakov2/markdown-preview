import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {

  const [markdown, setMarkdown] = useState("## Markdown Preview");

  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          onChange={(e) => setMarkdown(e.target.value)}
          value={markdown}
        />
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  )
}

export default App;
