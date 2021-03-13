import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
<<<<<<< HEAD

const Hello = ({ name }) => {
  return (
    <div>
      Hello,
      {name}
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}
=======
import App from './components/app';

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
>>>>>>> ee532196bbdadc160498f4b48358d87709cbf06b
