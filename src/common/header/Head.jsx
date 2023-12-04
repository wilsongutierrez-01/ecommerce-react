import React from 'react'

const Head = () => {
  return (
    <>
        <section className='head'>
            <div className='container d_flex'>
                <div className='left row'>
                    <i className='fa fa-phone'></i>
                    <label>+503777777</label>
                    <i className='fa fa-envelope'></i>
                    <label>exampl3@gmail.com</label>
                </div>
                <div className='right row RText'>
                    <label>FAQ's</label>
                    <label>Help</label>
                    <span>🏳</span>
                    <label htmlFor="">EN</label>
                    <span>🏳</span>
                    <label htmlFor="">USD</label>
                </div>
            </div>
        </section>
    </>
  )
}

export default Head
