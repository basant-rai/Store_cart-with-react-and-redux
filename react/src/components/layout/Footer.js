import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div class="container-fluid ">
                <footer class="py-3 my-4">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">Home</Link></li>
                        <li class="nav-item"><Link to="/menu" class="nav-link px-2 text-muted">Menu</Link></li>
                        <li class="nav-item"><Link to="/foods" class="nav-link px-2 text-muted">Foods</Link></li>
                        <li class="nav-item"><Link to="/contact" class="nav-link px-2 text-muted">Contact</Link></li>
                    </ul>
                    <p class="text-center text-muted">&copy; 2024 Korean Kini</p>
                </footer>
            </div>
        </>
    )
}

export default Footer