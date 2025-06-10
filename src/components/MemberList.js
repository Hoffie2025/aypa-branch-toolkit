import React from 'react';

function MemberList({ members }) {
  return (
    <ul>
      {members.map((m) => (
        <li key={m.id}>{m.name}</li>
      ))}
    </ul>
  );
}

export default MemberList;
