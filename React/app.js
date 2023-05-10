// import React from 'react';
// import ReactDOM from 'react-dom';


// import { createRoot } from 'react-dom/client';

// // Clear the existing HTML content
// document.body.innerHTML = '<div id="app"></div>';

// // Render your React component instead
// const root = createRoot(document.getElementById('app'));
// root.render(<h1>Hello, world</h1>);

const paragraph = React.createElement(
    'p',
    {id: 'first-p'},
    'My First React Element!'
);

const span = React.createElement(
    'span',
    {id: 'p-container'},
    paragraph,
);

const title = React.createElement(
    'h1',
    {id: 'main-title', title: 'test-title'},
    span
);

ReactDOM.render(
    title,
    // $('#root')
    document.getElementById('root')
);