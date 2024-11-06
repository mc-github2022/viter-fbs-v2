import React from 'react'
import { FaListCheck } from 'react-icons/fa6'
import { GoChevronRight } from 'react-icons/go'
import { IoMdPricetag } from 'react-icons/io'
import { Link } from 'react-router-dom'

const PricingList = () => {
  return (
    <div className="list-content mx-0">
        <div className="list-button border-b border-dark/40">
          <Link to="/pricing/list" className="flex items-center gap-2 py-3 hover:bg-dark/5">
            <span className='flex items-center gap-2 ml-2.5 text-xs font-bold'>
              <IoMdPricetag className="text-lg" />
              List
            </span>
            <GoChevronRight className="text-sm" />
          </Link>
        </div>
        <div className="list-button border-b border-dark/40">
          <Link to="/pricing/services" className="flex items-center gap-2 py-3 hover:bg-dark/5">
            <span className='flex items-center gap-2 ml-2.5 text-xs font-bold'>
              <FaListCheck className="text-lg" />
              Services List
            </span>
            <GoChevronRight className="text-sm" />
          </Link>
        </div>
        
      </div>
  )
}

export default PricingList
