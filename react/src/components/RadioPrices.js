import React, { useState } from 'react'
import { prices } from './Prices'

const RadioPrices = ({handleFilters}) => {

    // const [checked, setChecked] = useState([])
    const handleChange = e => {
        let value = handlePrice(e.target.value)
        // setChecked(value)
        handleFilters(value,"product_price")
        // console.log(checked)
    }

    const handlePrice = id=>{
        const price = prices.find(item=>item._id == id)
        return price.value
    }
    return (
        <>
            {
                prices.map((price, i) => {
                    return <div className="form-check" key={i}>
                        <input className="form-check-input me-2" type="radio" name="flexRadioDefault" id={`Radio${i}`} value={price._id} onChange={handleChange}/>
                        <label className="form-check-label" htmlFor={`Radio${i}`}>
                            {price.name}
                        </label>
                    </div>

                })
            }

        </>

    )
}

export default RadioPrices