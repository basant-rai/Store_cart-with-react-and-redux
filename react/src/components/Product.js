import React from 'react'
import Card from './Card'
// import { Button } from "@mui/material";
import {Link} from 'react-router-dom'

const Product = () => {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 "style={{marginTop:"1500px"}}>
                <Card img={"./images/p7.jpg"} title={"Adidas"} description={"Not available"} />
                <Card img={"./images/p3.jpg"} title={"Converse"}/>
                <Card img={"./images/p4.jpg"} title={"DC"}/>
                <Card img={"./images/p2.jpg"} title={"Woodland"}/>
            </div>
            <div className='text-center mt-4 mx-auto text-decoration-none'>
                <Link to="/deals" className='text-align-center mx-auto text-decoration-none' >
                 
                {/* <Button variant="outlined"  sx={{backgroundColor:"yellowgreen",borderRadius:"50px",p:"10px 100px"}}>
                    More
                </Button> */}
                </Link>
            </div>
        </>
    )
}

export default Product