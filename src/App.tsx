import React from 'react';
import './App.scss';
import {Button} from "./Components/Button";

function App() {
  return (
    <div className='App'>
     <Button title="button" onclick={() => {}} size="sm" />
     <Button title="button" onclick={() => {}} size="md"/>
     <Button title="button" onclick={() => {}} size="lg" />
    </div>
  );
}

export default App;
