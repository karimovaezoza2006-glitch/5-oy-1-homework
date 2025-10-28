import React from 'react'
import plants1 from '../assets/img/plants1.png'
import plants2 from '../assets/img/plants2.png'
import plants3 from '../assets/img/plants3.png'

const Plants = () => {
  return (
    <div>
        <div className='plants'>
            <section className='container'>
                <div >
                    <div className='title'>
                     <h1>Plans built for growth</h1>
                </div>
                    <div className='switch'>
                        <div>
                            <img src={plants1} alt="Switch 1" />
                            <h3>Powerful software</h3>
                            <p>Included in our service, each customer gets in-house software to access live financial dashboards and real-time management reports.</p>
                        </div>
                        <div>
                            <img src={plants2} alt="Switch 2" />
                            <h3>Track cashflow</h3>
                            <p>Stay on top of your working capital, taxes, and cashflow, to ensure your business is performing at its best.</p>
                        </div>
                        <div>
                            <img src={plants3} alt="Switch 3" />
                            <h3>Award winning support</h3>
                            <p>Expect the best from us. Get a dedicated finance team that will handle all your accounting, R&D credits and CFO needs.</p>
                        </div>
                    </div>
    
                </div>
                </section>
        </div>
    </div>
  )
}

export default Plants