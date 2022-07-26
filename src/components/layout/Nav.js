// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Nav = ({setSearch}) => {
    const item_show = useSelector(store => store.cart_store.cart_name.length)
    


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link position-relative" to="/cart">Cart
                                    <span class="position-absolute text-center bg-warning" style={{ top: '-1px', right: '0px', fontSize: '12px', backgroundColor: 'darkorange', color: 'black', borderRadius: '50px', width: '16px', height: '16px', lineHeight: '16px' }}>
                                        {item_show}
                                    </span> </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/mobile">Mobile</Link></li>
                                    <li><Link className="dropdown-item" to="/">Laptop</Link></li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search"  placeholder="Search" id='searchV'aria-label="Search" onChange={e=>setSearch(e.target.value)} />
                            <button className="btn btn-outline-success" type="submit" from='searchV'>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav