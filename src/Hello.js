import { Component } from 'react';

import './Hello.css'
class Hello extends Component {
    render() {
        return (
            <header class="tc ph4">
            <h1 class="f3 f2-m f1-l fw2 black-90 mv3">
              This is my first name
            </h1>
            <h2 class="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
              {this.props.greetings}
            </h2>
          </header>)
    }
}
export default Hello