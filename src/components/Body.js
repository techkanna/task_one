import React, { Component } from 'react';
import MainContent from './MainContent';
export class Body extends Component {
  render() {
    return (
      <div className='body'>
        <div className='body-wrap'>
          <div className='nav'>
            <nav>
              <ul>
                <li><a href='#'>HOME</a></li>
                <li><a href='#'>New Page</a></li>
                <li><a href='#'>New Page 2</a></li>
                <li><a href='#'>New Page 3</a></li>
                <li><a href='#'>New Page 4</a></li>
                <li><a href='#'>New Page 5</a></li>
              </ul>
            </nav>
          </div>
          <MainContent />
          <div className='footer-wrap'>
            <div className='footer'>
              <p>Copyright &copy; 2019</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Body
