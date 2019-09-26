import React, { Component } from 'react'

export class MainContent extends Component {
  render() {
    return (
      <div className='main-content'>
        <div className='grid'>
          <div className='side'>
            <div className='main-menu'>
              <div className='main-menu-head'><i className="fas fa-arrow-right"></i> <h2>Main Menu</h2></div>
              <ul>
                <li><i className="fas fa-bars"></i><a href='#'> Menu Item 1</a></li>
                <li><i className="fas fa-bars"></i><a href='#'> Menu Item 2</a></li>
                <li><i className="fas fa-bars"></i><a href='#'> Menu Item 3</a></li>
                <li><i className="fas fa-bars"></i><a href='#'> Menu Item 4</a></li>
                <li><i className="fas fa-bars"></i><a href='#'> Menu Item 5</a></li>
                <li><i className="fas fa-bars"></i><a href='#'> Menu Item 6</a></li>
                <li><i className="fas fa-bars"></i><a href='#'> Menu Item 7</a></li>
                <li><i className="fas fa-bars"></i><a href='#'> Menu Item 8</a></li>
              </ul>
            </div>
            <div className='block'>
              <div className='block-head'><i className="fas fa-arrow-right"></i> <h2>Block</h2></div>
              <p>Enter Block content here...</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla dolor, animi itaque est rem doloribus?</p>
            </div>
          </div>

          <div className='section'>
            <section>
              <div className='section-head'>
                <h2>Gallery</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veniam vel expedita voluptates optio eum quasi magni dolor ex aliquam beatae, sint odio! Nostrum architecto animi, nam tempore exercitationem libero, non modi alias quas ad numquam magnam quasi, commodi voluptates nesciunt quos maxime? Quas at minus aliquid animi nemo magni.exercitationem libero, non modi alias quas ad numquam magnam quasi, commodi voluptates nesciunt quos maxime?</p>
              </div>
              <div className='section-body'>
                <div className='item-one'>
                  <h2>Subscription</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia soluta quasi odio nostrum labore, laborum, nobis optio consectetur et nulla obcaecati quo autem minima asperiores!</p>
                  <button>Read more</button>
                </div>
                <div className='item-two'>
                  <h2>Other Services</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia soluta quasi odio nostrum labore, laborum, nobis optio consectetur et nulla obcaecati quo autem minima asperiores!</p>
                  <button>Read more</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default MainContent
