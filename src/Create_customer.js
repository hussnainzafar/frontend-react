import React from 'react'

function Create_customer() {
  return (
    <div>
      <div className="intro-y box ml-12 mr-20 mt-3">
            <div className="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5">
                <h2 className="font-medium text-base mr-auto">
                    Create Customer
                </h2>
                
            </div>
            <div className="p-5" id="input">
            <div className="preview">
            <div>
                <label>First Name</label>
                <input type="text" className="input w-full border mt-2" placeholder="Input Name"/>
            </div>
            <div className="mt-3">
                    <label>Last Name</label>
                    <input type="text" className="input w-full border mt-2" placeholder="Input Name"/>
                </div>
                <div className="mt-3">
                    <label>Select Gender</label>
                    <div>
                                            <select class="input w-full border mr-2">
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                </div>
                <div className="mt-3">
                        <label>Email</label>
                        <input type="email" class="input w-full border mt-2" placeholder="example@gmail.com"/>
                    </div>
                <div className="mt-3 mb-6">
                <label>Mailing Address</label>
                <textarea type="text" className="input w-full border mt-2 bg-gray-100 " placeholder="" disabled=""/>
                </div>
                <div className="mt-3">
                                        <label>Membership</label>
                                        <div class="flex items-center text-gray-700 dark:text-gray-500 mt-2">
                                            <input type="radio" class="input border mr-2" id="vertical-radio-chris-evans" name="vertical_radio_button" value="vertical-radio-chris-evans"/>
                                            <label class="cursor-pointer select-none" for="vertical-radio-chris-evans">Fellow</label>
                                        </div>
                                        <div class="flex items-center text-gray-700 dark:text-gray-500 mt-2">
                                            <input type="radio" class="input border mr-2" id="vertical-radio-liam-neeson" name="vertical_radio_button" value="vertical-radio-liam-neeson"/>
                                            <label class="cursor-pointer select-none" for="vertical-radio-liam-neeson">Senior</label>
                                        </div>
                                        <div class="flex items-center text-gray-700 dark:text-gray-500 mt-2">
                                            <input type="radio" class="input border mr-2" id="vertical-radio-daniel-craig" name="vertical_radio_button" value="vertical-radio-daniel-craig"/>
                                            <label class="cursor-pointer select-none" for="vertical-radio-daniel-craig">Professional</label>
                                        </div>
                                    
                </div>
                <div className="mt-3 mb-6">
                    <label>Remark</label>
                    <textarea type="text" className="input w-full border mt-2 bg-gray-100 " placeholder="" disabled=""/>
                </div>
                <button type="button" class="button bg-theme-1 text-white mt-5">Submit</button>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Create_customer
