import React from 'react'
import hub from '../assets/img/Hub.png'
const Hub = () => {
  return (
    <div>
        <section className='container'>
            <div className='hub'>
                <div>
                    <h1>The AC Hub</h1>
                    <p>Explore our dedicated online resources. We've got the tips, tricks and online accounting know-how for business success.</p>
                    <button>View Hub</button>
                </div>
                <div>
                    <img src={hub}/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hub