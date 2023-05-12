// {
// import React from 'react';
// import ReactDOM from 'react-dom';


// import { createRoot } from 'react-dom/client';

// // Clear the existing HTML content
// document.body.innerHTML = '<div id="app"></div>';

// // Render your React component instead
// const root = createRoot(document.getElementById('app'));
// root.render(<h1>Hello, world</h1>);

// const paragraph = React.createElement(
//     'p',
//     {id: 'first-p'},
//     'My First React Element!'
// );

// const span = React.createElement(
//     'span',
//     {id: 'p-container'},
//     paragraph,
// );

// const title = React.createElement(
//     'h1',
//     {id: 'main-title', title: 'test-title'},
//     span
// );

// ReactDOM.render(
//     title,
//     // $('#root')
//     document.getElementById('root')
// );

// Test of jsx
// }

const title = (
<header>
    <span>
        <h1>Sceiiya Used </h1>
        <p>My First React Element!</p>
    </span>
</header>
);

ReactDOM.render(
    title,
    document.getElementById('root')
);
