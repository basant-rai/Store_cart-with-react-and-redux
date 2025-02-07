import React, { useEffect, useState } from 'react'
import { viewCategory } from '../Api/categoryApi';
// import { viewproducts } from '../Api/ProductApi';

const CheckboxCategories = ({handleFilters}) => {

    const [categories, setCategories] = useState([]);
    const [checked,setChecked] = useState('');

    const handleChange = e =>{
        const newChecked = [...checked]
        const find_item = newChecked.findIndex(item=>item == e.target.value)
        // return index if already checked -1 if not checked

        if(find_item === -1){
            newChecked.push(e.target.value)

        }else{
            newChecked.splice(find_item,1)
        }
        setChecked(newChecked)
        // console.log(newChecked)
        handleFilters(newChecked,"product_category")
    }

    useEffect(() => {
        viewCategory()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setCategories(data)
                }
            })
    }, [])
    return (
        <>
            {
                categories.map((category, i) => {
                    return <div className="form-check" key={i}>
                            <input className="form-check-input me-2" type="checkbox" id={`flex${i}`} value={category._id} onChange={handleChange}/>
                            <label className="form-check-label text-white" htmlFor={`flex${i}`}>
                                {category.category_name}
                            </label>
                    </div>
                })
            }
        </>
    )
}

export default CheckboxCategories