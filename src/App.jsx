// import { useState } from 'react'
import './App.css'
import Card from '../src/Card.jsx'
import AlertImage from "../assets/Group 11.png"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <h1>main matrics</h1>
        <ul className='tabContainer'>
          <li className='tabs'>today</li>
          <li className='tabs'>last hour</li>
          <li className='tabs'>yesterday</li>
          <li className='tabs'>last 3 days</li>
        </ul>

        <div className='statusContainer'>

          <ul>
            <li>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  < path d="M7 13C10.3137 13 13 10.3137 13 6.99999C13 3.68628 10.3137 0.999992 7 0.999992C3.68629 0.999992 1 3.68628 1 6.99999C1 10.3137 3.68629 13 7 13Z" fill="#8BC34A" stroke="white" stroke-width="2"/>
                </svg>
              <div>
                <p className='status'>Errors: 0,12%</p>
                <p className='statusScore'>Average: 0,11%</p>
              </div>
            </li>
            <li>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 13C10.3137 13 13 10.3137 13 6.99999C13 3.68628 10.3137 0.999992 7 0.999992C3.68629 0.999992 1 3.68628 1 6.99999C1 10.3137 3.68629 13 7 13Z" fill="#8BC34A" stroke="white" stroke-width="2"/>
                </svg>
              <div>
                <p className='status'>Zeroes: 5,12%</p>
                <p className='statusScore'>Average: 0,11%</p>
              </div>
            </li>
            <li>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13C10.3137 13 13 10.3137 13 6.99999C13 3.68628 10.3137 0.999992 7 0.999992C3.68629 0.999992 1 3.68628 1 6.99999C1 10.3137 3.68629 13 7 13Z" fill="#8BC34A" stroke="white" stroke-width="2"/>
              </svg>
              <div>
                <p className='status'>Timeouts: 0,12%</p>
                <p className='statusScore'>Average: 0,11%</p>
              </div>
            </li>
          </ul>
          <div className='statusBarConatainer'>
            <div className='progressBar'>
              <li className='progress'></li>
              <li className='progress'></li>
              <li className='progress'></li>
              <li className='progress'></li>
            </div>
            <div className='errorList'>
              <li>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.99999C0 0.895423 0.895431 -7.62939e-06 2 -7.62939e-06H8C9.10457 -7.62939e-06 10 0.895423 10 1.99999V7.99999C10 9.10456 9.10457 9.99999 8 9.99999H2C0.89543 9.99999 0 9.10456 0 7.99999V1.99999Z" fill="#FFCC00"/>
                </svg>
                Error 500: 1 256</li>
              <li>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.99999C0 0.895423 0.895431 -7.62939e-06 2 -7.62939e-06H8C9.10457 -7.62939e-06 10 0.895423 10 1.99999V7.99999C10 9.10456 9.10457 9.99999 8 9.99999H2C0.89543 9.99999 0 9.10456 0 7.99999V1.99999Z" fill="#5856D5"/>
                </svg>
                Error 501: 800</li>
              <li>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.99999C0 0.895423 0.895431 -7.62939e-06 2 -7.62939e-06H8C9.10457 -7.62939e-06 10 0.895423 10 1.99999V7.99999C10 9.10456 9.10457 9.99999 8 9.99999H2C0.89543 9.99999 0 9.10456 0 7.99999V1.99999Z" fill="#2196F3"/>
                </svg>
                Error 502: 650</li>
              <li>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.99999C0 0.895423 0.895431 -7.62939e-06 2 -7.62939e-06H8C9.10457 -7.62939e-06 10 0.895423 10 1.99999V7.99999C10 9.10456 9.10457 9.99999 8 9.99999H2C0.89543 9.99999 0 9.10456 0 7.99999V1.99999Z" fill="#A0B0B9"/>
                </svg>
                Other: 330</li>
            </div>
          </div>
        </div>

        <div className='mainsection'>
          <Card 
            image="../assets/Group 28.png"
            firsttext="Searches"
            secondText="29 380"
            thirdText="27 985"
            fourthText="Mobile traffic: 100%"
            fifthText="Web traffic: 100%"
            sixthText="You get 100% traffic on mobile and desktop devices."
            seventhText="Help:"
            eigthText="Searches, Pessimisation"
          />
          <div className='borderShadow'></div>
          <Card
            image= {AlertImage}
            firsttext="Clicks"
            secondText="243"
            thirdText="280"
            fourthText="CTR: 0,04%"
            fifthText=""
            sixthText="Conversion from searches  to clicks on all devices."
            seventhText="Help:"
            eigthText="CTR, Cliks"
          />
          <div className='borderShadow'></div>
          <Card
            image="../assets/Group 11 (1).png"
            firsttext="Sales"
            secondText="24"
            thirdText="24"
            fourthText="STR: 6.2%"
            fifthText="Avg. Check: 8 903₽"
            sixthText="Conversion from cliks  to bookings on all devices."
            seventhText="Help:"
            eigthText="STR, Bookings, Avg. Check"
          />
        </div>
      </div>
    </>
  )
}

export default App
