import React from 'react'
import switch1 from '../assets/img/switch1.png'
import switch2 from '../assets/img/switch2.png'
import switch3 from '../assets/img/switch3.png'
const Switch = () => {
  return (
    <div>
        <section className='container'>
        <div className='title'>
             <h1>Why Switch?</h1>
        </div>
            <div className='switch'>
                <div>
                    <img src={switch1} alt="Switch 1" />
                    <h3>Powerful software</h3>
                    <p>Included in our service, each customer gets in-house software to access live financial dashboards and real-time management reports.</p>
                </div>
                <div>
                    <img src={switch2} alt="Switch 2" />
                    <h3>Track cashflow</h3>
                    <p>Stay on top of your working capital, taxes, and cashflow, to ensure your business is performing at its best.</p>
                </div>
                <div>
                    <img src={switch3} alt="Switch 3" />
                    <h3>Award winning support</h3>
                    <p>Expect the best from us. Get a dedicated finance team that will handle all your accounting, R&D credits and CFO needs.</p>
                </div>
            </div>
            <div >
                <button className='btn1'>Discover what we do</button>
            </div>
        </section>
    </div>
  )
}

export default Switch