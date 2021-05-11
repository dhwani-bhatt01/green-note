import React from 'react'
import './Plans'
import Button from '../Button/Button'
import PlanCard from '../PlanCard/PlanCard'

function Plans() {
    return (
        <div className='plans'>
            <h2 className="plans-heading">
                Get the Evernote that’s right for you
            </h2>
            <PlanCard></PlanCard>
            <div>
                <p className="plans-link">COMPARE PLANS</p>
            </div>
        </div>
    )
}

export default Plans
