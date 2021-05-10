import React from "react";
import "./Resume.scss";

const Resume = () => {
  return (
    <>
      <div className='resume-timeline' id='resume'>
        <div className='heading'>
          <h1>Experience & Education</h1>
        </div>
        <ul className='timeline'>
          <li>
            <div className='direction-r'>
              <div className='flag-wrapper'>
                <span className='flag'>Tecnolynx</span>
                <span className='time-wrapper'>
                  <span className='time'>2020</span>
                </span>
              </div>
              <div className='desc'>
                <h3>Intership</h3>
                <ul>
                  <li>Analyzed website to improve performance.</li>
                  <li>Performed SEO on website to improve click rates.</li>
                  <li>Studied digital marketing. </li>
                  <li>Optimized website to make them operate efficiently.</li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className='direction-l'>
              <div className='flag-wrapper'>
                <span className='flag'>B.Tech Computer Sciences</span>
                <span className='time-wrapper'>
                  <span className='time'>2016 - 2020</span>
                </span>
              </div>
              <div className='desc'>
                <h3>MRIT college (affiliated to JNTU) </h3>
                GPA 7.0
              </div>
            </div>
          </li>

          {/* <li>
            <div className='direction-r'>
              <div className='flag-wrapper'>
                <span className='flag'>Senior Secondary (12th Grade)</span>
                <span className='time-wrapper'>
                  <span className='time'>2015</span>
                </span>
              </div>
              <div className='desc'>
                <h3>NIOS</h3>
                GPA 5.9
              </div>
            </div>
          </li>

          <li>
            <div className='direction-l'>
              <div className='flag-wrapper'>
                <span className='flag'>Secondary School (10th Grade)</span>
                <span className='time-wrapper'>
                  <span className='time'>2013</span>
                </span>
              </div>
              <div className='desc'>
                <h3>St. Andrews High School</h3>
                GPA 8.0
              </div>
            </div>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default Resume;
