import { MoreVertical } from 'lucide-react'
import React from 'react'

const Customer = () => {
  return (
    <div className='bg-purple-100 p-4 rounded-lg h-[350px]'>
      <div className="flex justify-between">
        <h2>Customer</h2>
         <MoreVertical /> {/*will update dynamic code to route to customer page  with id */}
      </div>
      <div>
        <h3 className='mt-5'>Total Customer</h3>
        <h1 className='text-xl font-bold font-weight-200 mt-5'>5007K</h1>
        <h6 className='text-green-500'>21.77%</h6>
      </div>
    </div>
  )
}

export default Customer