import './App.css'

function App() {
  

  return (
    <div>
      <h1>What is Component Model?</h1>
      <p>Component Model: An architectural approach where a web page is broken down into small, self-contained, independent, and reusable blocks of code (like buttons, headers, or cards).</p>
      <p>it's better because it can be easily to fix when styling or scirpting because it is independent and self-contained</p>
      <h1>task 2: 5 Components on a Daily Website</h1><br />
      <p>navbar</p>
      <p>sidebar</p>
      <p>videoCard</p>
      <p>commentItem</p>
      <p>subscribeButton</p><br />
      <h1>task 3 What is JSX and how is it different from HTML</h1><br />
      <p>JSX (JavaScript XML): A syntax extension for JavaScript that lets you write HTML-like markup directly inside JavaScript files.</p><br />
      <p>Key Differences from HTML:</p>
      <ul>
        <li>Class Names: Uses className instead of class because class is a reserved keyword in JavaScript.</li>
        <li>Self-Closing Tags: All self-closing tags must end with a slash (e.g., img /or input /).</li>
        <li>CamelCase Attributes: Property names use camelCase (e.g., onClick instead of onclick, tabIndex instead of tabindex).</li>
        <li>Single Root Parent: Everything returned must be wrapped in one parent tag or fragment (<>...</>).</li>
      </ul><br />
      <h1>task 4 Why do junior frontend jobs require React & its alternatives?</h1>
      <p>Why React Won: It introduced a virtual DOM for high rendering performance, pioneered the component architecture, and backed by Facebook/Meta, built the largest ecosystem of open-source packages and community support.   Alternatives:Vue.js: Easier learning curve with template-based syntax.Angular: A batteries-included, opinionated framework maintained by Google.Svelte: Compiles code ahead-of-time into vanilla JavaScript without using a virtual DOM.</p>
    </div>
  )
}

export default App