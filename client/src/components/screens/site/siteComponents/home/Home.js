import React from 'react'
import withRoot from './withRoot'
import ProductHero from './ProductHero'
import ProductValues from './ProductValues'
import ProductCateegories from './ProductCategories'
import ProductHowItWorks from './ProductHowItWorks' 
import ProductCTA from './ProductCTA'
import ProductEndHero from './ProductEndHero'

function Home() {
    return (
        <React.Fragment>
            <ProductHero />
            <ProductValues />
            <ProductCateegories />
            <ProductHowItWorks />
            <ProductCTA />
            <ProductEndHero />
        </React.Fragment>
    )
}

export default withRoot(Home)
