import React from 'react';
import MemberList from './components/MemberList';

const sampleMembers = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
];

function App() {
  return (
    <div className="App">
      <h1>AYPA Branch Toolkit</h1>
      <MemberList members={sampleMembers} />
    </div>
  );
}

export default App;
