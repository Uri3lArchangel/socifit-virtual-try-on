import React from 'react'
import  { CommercialPricingCardComponent, FreePricingCardComponent, PremiumPricingCardComponent } from './PricingCardComponent'

function PricingComponent() {
  return (
<section>
    <div className='flex flex-wrap  justify-around mt-40 my-6'> 
    <FreePricingCardComponent />
    <PremiumPricingCardComponent />
    <CommercialPricingCardComponent />
    </div>
</section>  )
}

export default PricingComponent