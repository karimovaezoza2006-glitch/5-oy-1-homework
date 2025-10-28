import React from 'react'
import laptop from '../assets/img/showcase.png';
const Showcase = () => {
  return (
    <div>
        <section className='container'>
            <div className='showcase'>
                <div>
                    <h1>Get your finances right</h1>
                    <p>Get your finances right with Accountancy
                         Cloud. We offer the best accounting, R&D credits and CFO services for ambitious businesses who want to grow.</p>
                    <h3>Switching to us is simple</h3>
                    <button>Talk to us</button>
                </div>
                <div>
                    <img src={laptop} alt="Finance dashboard" />

                </div>
            </div>
        </section>
    </div>
  )
}

export default Showcase