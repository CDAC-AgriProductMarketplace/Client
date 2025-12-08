import React from 'react'

const Address = () => {
  return (
    <div>
         {/* Shipping Address */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <UserIcon className="h-5 w-5 text-gray-500" />
                Shipping Address
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                <Input label="First Name" placeholder="John" />
                <Input label="Last Name" placeholder="Doe" />
              </div>

              <Input label="Address Line" placeholder="112 Farmstead Rd" />

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Input label="City" placeholder="Springfield" />
                <Input label="Postal Code" placeholder="12345" />
                <Input label="State/Province" placeholder="CA" />
                 <Input label="Country" placeholder="United States" />
              </div>

             

              <label className="flex items-center gap-2 cursor-pointer mt-2">
                <input type="checkbox" className="h-4 w-4" />
                <span className="text-sm text-gray-700">Use as billing address</span>
              </label>
            </div>
    </div>
  )
}

export default Address