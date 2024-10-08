import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [texts, setTexts] = useState<string[]>([]);

  const handleTextClick = () => {
    setTexts([...texts, 'Text']);
  };

  const handleSave = () => {
    console.log('保存功能');
  };

  return (
    <div className="dashboard">
      <header>
        <button onClick={handleSave}>save</button>
        <span className="widgets-title">widgets:</span>
        <button onClick={handleTextClick}>text</button>
      </header>
      <main>
        <aside className="left-sidebar">左侧栏</aside>
        <section className="content">
          {texts.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </section>
        <aside className="right-sidebar">右侧栏</aside>
      </main>
    </div>
  );
};

export default App;