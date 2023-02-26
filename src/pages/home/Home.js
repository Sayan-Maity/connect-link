import React from 'react'
import './Home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import freelancer from "../../assets/svg/Freelancers.svg"
import apps from "../../assets/svg/Apps.svg"
import services from "../../assets/svg/Services.svg"
import events from "../../assets/svg/Events.svg"
import jobs from "../../assets/svg/Jobs.svg"
import marketplace from "../../assets/svg/Marketplace.svg"
import office from "../../assets/images/office.jpg"

const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="home-main">
          <div className="upper-banner">
            <div className="inner-banner">
            
              <div className="heading">
                <p>Explore</p>
              </div>
              <div className="search-banner">
                <div className="main-search-bar">
                  <div className="search-icon">
                    <span class="material-symbols-outlined">search</span>
                  </div>
                  <input type="text" placeholder='Search' />
                </div>
              </div>
              <div className="icon-slider">
                <div className="first">
                  <img src={freelancer} alt="" />
                </div>
                <div className="second">
                  <img src={apps} alt="" />
                </div>
                <div className="third">
                  <img src={services} alt="" />
                </div>
                <div className="fourth">
                  <img src={events} alt="" />
                </div>
                <div className="fifth">
                  <img src={jobs} alt="" />
                </div>
                <div className="sixth">
                  <img src={marketplace} alt="" />
                </div>
              </div>

            </div>
          </div>
          <div className="mobile-components">
            <div className="mobile-heading">
              <div className="title">
                <p>Popular apps</p>
              </div>
              <div className="sort-div">
                <div className="icon">
                  <span class="material-symbols-outlined">filter_list</span>
                </div>
                <div className="icon-name">
                  <p>Sort by</p>
                </div>
              </div>
            </div>
            <div className="item-div">
              <div className="item1">
                <div className="item-logo item1-logo"></div>
                <div className="item-desc">
                  <div className="item-name">
                    <p>Catalog</p>
                  </div>
                  <div className="item-about">
                    <p>Brings all your news into one place</p>
                  </div>
                </div>
              </div>
              <div className="item1">
                <div className="item-logo item2-logo"></div>
                <div className="item-desc">
                  <div className="item-name">
                    <p>Circooles</p>
                  </div>
                  <div className="item-about">
                    <p>Super lightweight design app</p>
                  </div>
                </div>
              </div>
              <div className="item1">
                <div className="item-logo item3-logo"></div>
                <div className="item-desc">
                  <div className="item-name">
                    <p>Command+R</p>
                  </div>
                  <div className="item-about">
                    <p>AI and machine learning data</p>
                  </div>
                </div>
              </div>
              <div className="item1">
                <div className="item-logo item4-logo"></div>
                <div className="item-desc">
                  <div className="item-name">
                    <p>Hourglass</p>
                  </div>
                  <div className="item-about">
                    <p>Time management and productivity</p>
                  </div>
                </div>
              </div>
              <div className="item1">
                <div className="item-logo item5-logo"></div>
                <div className="item-desc">
                  <div className="item-name">
                    <p>Layers</p>
                  </div>
                  <div className="item-about">
                    <p>Connect web apps seamlessly</p>
                  </div>
                </div>
              </div>
              <div className="item1">
                <div className="item-logo item6-logo"></div>
                <div className="item-desc">
                  <div className="item-name">
                    <p>Quotient</p>
                  </div>
                  <div className="item-about">
                    <p>Web-based sales doc management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="recommended">
            <div className="heading">
              <p>Recommended for you</p>
            </div>
            <div className="cards">
              <div className="card1">
                <div className="image">
                  <img src={office} alt="office" className='office-image'/>
                </div>
                <div className="overlay">
                  <div className="name-design">
                    <p>Olivia Rhye</p>
                    <p>Design</p>
                  </div>
                  <div className="date">
                    <p>20 Jan 2022</p>
                  </div>
                </div>
                <div className="desc">
                  <div className="desc-heading">
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                  <div className="desc-desc">
                    <p>how do you create compelling presentations that wow your colleagues and impress your managers ?</p>
                  </div>
                  <div className="read-post">
                    <a href="/" ><p>Read post</p><span class="material-symbols-outlined">north_east</span></a>
                  </div>
                </div>
              </div>
              <div className="card1">
                <div className="image">
                  <img src={office} alt="office" className='office-image'/>
                </div>
                <div className="overlay">
                  <div className="name-design">
                    <p>Olivia Rhye</p>
                    <p>Design</p>
                  </div>
                  <div className="date">
                    <p>20 Jan 2022</p>
                  </div>
                </div>
                <div className="desc">
                  <div className="desc-heading">
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                  <div className="desc-desc">
                    <p>how do you create compelling presentations that wow your colleagues and impress your managers ?</p>
                  </div>
                  <div className="read-post">
                    <a href="/" ><p>Read post</p><span class="material-symbols-outlined">north_east</span></a>
                  </div>
                </div>
              </div>
              <div className="card1">
                <div className="image">
                  <img src={office} alt="office" className='office-image'/>
                </div>
                <div className="overlay">
                  <div className="name-design">
                    <p>Olivia Rhye</p>
                    <p>Design</p>
                  </div>
                  <div className="date">
                    <p>20 Jan 2022</p>
                  </div>
                </div>
                <div className="desc">
                  <div className="desc-heading">
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                  <div className="desc-desc">
                    <p>how do you create compelling presentations that wow your colleagues and impress your managers ?</p>
                  </div>
                  <div className="read-post">
                    <a href="/" ><p>Read post</p><span class="material-symbols-outlined">north_east</span></a>
                  </div>
                </div>
              </div>
              <div className="card1">
                <div className="image">
                  <img src={office} alt="office" className='office-image'/>
                </div>
                <div className="overlay">
                  <div className="name-design">
                    <p>Olivia Rhye</p>
                    <p>Design</p>
                  </div>
                  <div className="date">
                    <p>20 Jan 2022</p>
                  </div>
                </div>
                <div className="desc">
                  <div className="desc-heading">
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                  <div className="desc-desc">
                    <p>how do you create compelling presentations that wow your colleagues and impress your managers ?</p>
                  </div>
                  <div className="read-post">
                    <a href="/" ><p>Read post</p><span class="material-symbols-outlined">north_east</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="recommended2">
            <div className="heading">
              <p>Recommended for you</p>
            </div>
            <div className="cards">
              <div className="card1">
                  <div className="image">
                    <img src={office} alt="office" className='office-image'/>
                  </div>
                  <div className="card1-desc">
                    <div className="overlay">
                      <div className="name-design">
                        <p>Olivia Rhye</p>
                        <p>.</p>
                        <p>20 Jan 2022</p>
                      </div>
                      <div className="date">
                        <p>UX Review Presentation</p>
                      </div>
                    </div>
                    <div className="desc">
                      <div className="desc-heading">
                        <p>Lorem ipsum dolor sit.</p>
                      </div>
                      <div className="desc-desc">
                        <p>how do you create compelling presentations that wow your colleagues and impress your managers ?</p>
                      </div>
                      <div className="read-post">
                        <a href="/" ><p>Read post</p><span class="material-symbols-outlined">north_east</span></a>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="card1">
                <div className="image">
                    <img src={office} alt="office" className='office-image'/>
                </div>
                <div className="card1-desc">
                    <div className="overlay">
                      <div className="name-design">
                        <p>Olivia Rhye</p>
                        <p>.</p>
                        <p>20 Jan 2022</p>
                      </div>
                      <div className="date">
                        <p>UX Review Presentation</p>
                      </div>
                    </div>
                    <div className="desc">
                      <div className="desc-heading">
                        <p>Lorem ipsum dolor sit.</p>
                      </div>
                      <div className="desc-desc">
                        <p>how do you create compelling presentations that wow your colleagues and impress your managers ?</p>
                      </div>
                      <div className="read-post">
                        <a href="/" ><p>Read post</p><span class="material-symbols-outlined">north_east</span></a>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home
