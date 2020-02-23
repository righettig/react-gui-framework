import React from 'react';

export default function Nav(props) {
  return <ul>
    {
      props.modules.map((module) =>
        <li>{module.displayName}</li>
      )
    }
  </ul>;
}