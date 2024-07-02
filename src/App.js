import React, { useState } from 'react';

function App() {
  const [command, setCommand] = useState('');

  const runCommand = () => {
    // Vulnerabilidad: ejecutar comandos arbitrarios desde el input del usuario
    require('child_process').exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="Enter command"
        />
        <button onClick={runCommand}>Run Command</button>
      </header>
    </div>
  );
}

export default App;
