import React from 'react';
import ReactDOM from 'react-dom';
// ReactDOM.render{}
//     React.createElement('h1',{},'print will be something'),
//     document.getElementById('root')
// };
// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('root')
//   );
class Hello extends React.Component {
    render() {
      return <h1>Hello World!</h1>
    }
  }
  
  ReactDOM.render(<Hello />, document.getElementById('mydiv'))
  