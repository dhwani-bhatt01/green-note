import React from 'react'

const PlanCard = () => {
    return (
        <div className="card">
            <div className="card-icon">
                <div className="icon">
                    <img src="" alt="" />
                </div>
                <h4 className='card-icon-name'>Basic</h4>
            </div>

            <h1 className="card-price">Free</h1>
            <h4 className="card-subheading">TAKE GREAT NOTES</h4>
            <ul className="card-points">
                <li className="card-point"> Find notes fast with search and tags</li>
                <li className="card-point"> Apply rich formatting to your notes</li>
                <li className="card-point"> Sync up to 2 devices</li>
                <li className="card-point"> Clip web pages</li>
                <li className="card-point"> 25MB maximum note size</li>
                <li className="card-point"> 60MB monthly upload limit</li>
            </ul>
            <button className='btn btn-plan'>Get started</button>
        </div>
    )
}

export default PlanCard
