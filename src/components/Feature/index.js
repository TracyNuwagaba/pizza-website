import React from 'react'
import { FeatureContainer, FeatureButton } from './FeatureElements'

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Pizza of the Day</h1>
            <p>Special offer at 15% discount. Enjoy with friends.</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
