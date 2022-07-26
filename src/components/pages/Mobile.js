import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from '../layout/Nav';

const Mobile = () => {
  const item_selector = useSelector(store => store.mobile_item_store.mobile_item_name)
  const [limit, setLimit] = useState(4);
  const [search, setSearch] = useState('')
  const [filterResult, setFilterResult] = useState([])

  useEffect(() => {
    setFilterResult(item_selector.filter(item => item.item_title.toLowerCase().match(search.toLowerCase())))
  }, [search])

  return (
    <>
      <Nav search={search} setSearch={setSearch} filterResult={filterResult} setFilterResult={setFilterResult} />

      <ToastContainer theme='colored' position='top-right' />
      <div className='container-fluid'>
        <div className='row row-cols-2 row-cols-lg-4 row-cols-md-3 g-3'>
          {
            filterResult.map(item_obj => <Card product={item_obj} />)
          }
        </div>
        <div className='text-center'>{
          limit < item_selector.length &&
          <button className='btn btn-warning me-3' onClick={() => {
            setLimit(limit + 4)
          }}>Show More</button>
        }
          {
            limit > 4 &&
            <button className='btn btn-warning' onClick={() => {
              setLimit(limit - 4)
            }}>Show Less</button>
          }
        </div>
      </div>

    </>
  )
}

export default Mobile