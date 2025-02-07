import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import "./bolg.css"
// import "./deals.css"
import Nav from '../layout/NavBar'
const Blogs = () => {
    return (
        <>
            <Nav />
            <div className='bg_image'>
                <div className='row ' >
                    <div className="inner mt-5 ">
                        <div className="container mx-auto text-start mt-5 ">
                            <div className="inner_box mx-5 py-5 ">
                                <h4 className="text-white mt-3">Blogs</h4>
                                <ul className="nav" style={{ display: "inline-flex", listStyleType: "none" }}>
                                    <li className="nav-item"><Link className="fw-bold fs-6 text-white" style={{ textDecoration: "none" }}
                                        to="/">Home</Link></li>
                                    <li className="nav-item active text-white fs-6 ps-2 ">
                                        <i className="fa-solid fa-angle-right"></i>
                                        Blogs
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Box className='blog-container  mt-5' sx={{ width: "100%,", backgroundColor: "darkcyan", padding: '20px' }}>

                    <Box className='blog' sx={{
                        borderRadius: '50px', p: '50px', display: 'flex', border: '2px solid white',
                        '&:hover': {
                            backgroundColor: 'whitesmoke'


                        }
                    }}>
                        <Box className='blog-content' sx={{ width: '80%' }}>
                            <Box className='blog_title'>
                                <Typography variant='h4'>
                                    Title
                                </Typography>
                            </Box>
                            <Box className='blog-text'>Text</Box>
                        </Box>
                        <Box classame='blog_author mx-auto' sx={{ width: "50%", }}>
                            <Box className='blog_image' sx={{ borderRadius: "50%", backgroundColor: "black", overflow: "hidden", margin: "auto" }}>
                                {/* <img src='./images/b.jpg' /> */}
                            </Box>
                        </Box>
                        <Box className='blogger_name'>
                            Name
                        </Box>
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default Blogs