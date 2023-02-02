import React from 'react'
import Mobilemenu from './Mobilemenu'
import Navbar from './Navbar'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Dashboard() {
    const percentage = 81;
  return (
            <body className="app">
        {/* <!-- BEGIN: Mobile Menu --> */}
        <Mobilemenu/>
        {/* <!-- END: Mobile Menu --> */}
        <div className="flex">
            {/* <!-- BEGIN: Side Menu --> */}
            <Navbar />
            {/* <!-- END: Side Menu --> */}
            {/* <!-- BEGIN: Content --> */}
            <div className="content">
                {/* <!-- BEGIN: Top Bar --> */}
                <div className="top-bar">

                    {/* <!-- BEGIN: Search --> */}
                    <div className="intro-x relative mr-3 sm:mr-6">
                        <div className="search hidden sm:block">
                            <input type="text" className="search__input input placeholder-theme-13" placeholder="Search..."/>
                            <i data-feather="search" className="search__icon dark:text-gray-300"></i> 
                        </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 lg:col-span-8">
                        <a href="" className="intro-x flex items-center pl-5 pt-4">
                    <img alt="Star Mobile HTML Admin Template" className="w-10 mb-4" src="dist/images/login.jpg"/>
                </a>
                <h2 className="font-medium text-base mr-auto ml-5 breadcrumb--active">
                Sign In
                </h2>
                <h2 className="font-medium text-base mr-auto ml-5 breadcrumb--active">
                Sign Up
                </h2>
                
                
            </div>
                           
                    
                    {/* <!-- END: Search --> */}


                </div>
                {/* <!-- END: Top Bar --> */}
                <div className="grid grid-cols-12 ">
                    <div className="col-span-12 xxl:col-span-9 grid grid-cols-12 gap-6">
                        {/* <!-- BEGIN: General Report --> */}
                        <div className="col-span-12 mt-8">
                            <div className="intro-y flex items-center h-10">
                                <h2 className="text-lg font-medium truncate mr-5">
                                    Quick Access
                                </h2>
                            </div>
                        </div>
                        {/* <!-- END: General Report --> */}
                        {/* <!-- BEGIN: Sales Report --> */}
                        <div className="col-span-3 sm:col-span-6 lg:col-span-3">
                           
                            <div className="intro-y ">
                            <div className="col-span-3 lg:col-span-3  sm:col-span-6 xl:col-span-3 intro-y ">
                                    <div className=" zoom-in">
                                        <div className="grid-background box p-5 ">
                                            <div className="text-3xl font-bold leading-8 mt-3 ">250</div>
                                            <div className="text-base font-bold mt-3 mb-3">TOTAL SALES</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3 sm:col-span-6 lg:col-span-3">
                           
                            <div className="intro-y ">
                           <div className="col-span-3 sm:col-span-6 xl:col-span-3 intro-y ">
                                    <div className=" zoom-in">
                                        <div className="grid-background box p-5 ">
                                        <div className="text-3xl font-bold leading-8 mt-3 ">45</div>
                                            <div className="text-base font-bold mt-3 mb-3">TOTAL RETURNS</div>
                                        </div>
                                    </div>
                                </div>
                               
                           </div>
                       </div>
                        <div className="col-span-6 lg:col-span-6 sm:col-span-12">
                           
                        <div className="intro-y">
                        <div className="intro-y">
                                    <div className="box px-4 py-4 mb-3 flex items-center zoom-in grid-background">
          
                                        <div className="ml-4 mr-auto ">
                                            <div className="text-base font-bold">QUANTITY IN HAND</div>
                                        </div>
                                        <div className=" text-base font-bold cursor-pointer">535</div>
                                    </div>
                                </div>
                                <div className="intro-y mt-5">
                                    <div className="box px-4 py-4 mb-3 flex items-center zoom-in grid-background">
          
                                        <div className="ml-4 mr-auto">
                                            <div className="text-base font-bold">QUANTITY TO BE RECEIVED</div>
                                        </div>
                                        <div className=" text-base font-bold cursor-pointer">645</div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>


                </div>



{/* //////////////////////////////start ////////////////// */}

<div className="box col-span-12">
    <div className="grid grid-cols-12 ">
                    <div className="col-span-12 xxl:col-span-9 grid grid-cols-12 ">
                        
                        {/* <!-- BEGIN: Sales Report --> */}
                        <div className="col-span-3 sm:col-span-6 lg:col-span-3">
                           
                            <div className="intro-y ">
                            <div className="col-span-3 lg:col-span-3  sm:col-span-6 xl:col-span-3 intro-y ">
                                    <div >
                                        <div className="box">
                                        <div className="flex flex-col sm:flex-row items-center p-5 border-b border-gray-100">
                                            <h2 className="font-medium text-base ">
                                                PRODUCT DETAIL
                                            </h2>

                                            </div> 

                                            <div className="p-5 col-span-3">
                    <div className="flex text-theme-6">
                        <div className="mr-auto" >Low Stock Item</div>
                        <div>2</div>
                    </div>
                    <div className="flex mt-4">
                        <div className="mr-auto">All Items Group</div>
                        <div className="">5</div>
                    </div>
                    <div className="flex mt-4">
                        <div className="mr-auto">All Items</div>
                        <div>16</div>
                    </div>


                    </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3 box sm:col-span-6 lg:col-span-3 mr-3">
                       
                                    <div  className='mx-auto mt-12' style={{ width: 100, height: 100}}>
                                    <h2 className=" font-medium  text-center mb-3">
                                    Active Items
                                    
                                </h2>
                                    <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                    </div>

                        </div>
                        <div className="col-span-6 lg:col-span-6 sm:col-span-12">
                        <div className="intro-y box col-span-12">
                    <div className="flex items-center px-5 py-3 border-b border-gray-200 dark:border-dark-5">
                                    <h2 className="font-medium text-base mr-auto">
                                        Top Selling Item
                                    </h2>
                                    <button data-carousel="new-products" data-target="prev" className="tiny-slider-navigator button px-2 border relative flex items-center text-gray-700 dark:text-gray-300 mr-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left w-4 h-4"><polyline points="15 18 9 12 15 6"></polyline></svg> </button>
                                    <button data-carousel="new-products" data-target="next" className="tiny-slider-navigator button px-2 border relative flex items-center text-gray-700 dark:text-gray-300"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right w-4 h-4"><polyline points="9 18 15 12 9 6"></polyline></svg> </button>
                                </div>
                                <div className="flex flex-col lg:flex-row border-b border-gray-200 dark:border-dark-5 pb-5 -mx-5  border-r border-gray-200 dark:border-dark-5 border-t lg:border-t-0 pt-5 lg:pt-0">
                        <div className="flex flex-1 px-5 items-center justify-center lg:justify-start">
                           
                            <div className="ml-5 mt-12 border-r border-gray-200 dark:border-dark-5">
                            <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg ml-20"><img alt="Star Mobile HTML Admin Template" className="w-10 mb-4" src="dist/images/1.jpg"/></div>

                                <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg ml-12">Kevin Spacey</div>
                                <div className="text-gray-600 ml-20"><span className='font-bold'>25</span>sets</div>
                            </div>
                        </div>
                        <div className="flex flex-1 px-5 items-center justify-center lg:justify-start">
                           
                            <div className="ml-5 mt-12 ">
                            <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg ml-20"><img alt="Star Mobile HTML Admin Template" className="w-10 mb-4" src="dist/images/1.jpg"/></div>

                                <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg ml-12">Kevin Spacey</div>
                                <div className="text-gray-600 ml-20"><span className='font-bold'>25</span>sets</div>
                            </div>
                        </div>
                        <div className="flex flex-1 px-5 items-center justify-center lg:justify-start">
                           
                           <div className="ml-5 mt-12 ">
                             <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg ml-20"><img alt="Star Mobile HTML Admin Template" className="w-10 mb-4" src="dist/images/1.jpg"/></div>
                               <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg ml-12">Kevin Spacey</div>
                               <div className="text-gray-600 ml-20"><span className='font-bold'>25</span>sets</div>
                           </div>
                       </div>
                        
                    </div>
                        </div>
                        </div>
                    </div>

                </div>
                </div>
{/* //////////////////////////////end ////////////////// */}
















<div className="grid grid-cols-12 ">
                    <div className="col-span-12 xxl:col-span-9 grid grid-cols-12 gap-6">
                        {/* <!-- BEGIN: General Report --> */}
                        
                        {/* <!-- END: General Report --> */}
                        {/* <!-- BEGIN: Sales Report --> */}
                        <div className="col-span-6 sm:col-span-6 lg:col-span-6">
                           
                            <div className="intro-y ">
                            <div className="col-span-6 lg:col-span-6  sm:col-span-6 xl:col-span-3 intro-y ">
                            <div className="intro-y box mt-5">
        <div className="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 lg:col-span-8">
                <h2 className="font-medium text-base mr-auto">
                    Striped Rows
                </h2>
                <div className="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0">
                        <div className="mr-3">This Month</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down w-4 h-4"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
            </div>
            <div className="p-5" id="striped-rows-table">
            <div className="preview">
                                    <div className="overflow-x-auto">
                                        <table className="table">
                                            
                                            <tbody>
                                                <tr className="bg-gray-200 dark:bg-dark-1  border-b border-gray-200">
                                                <div className="intro-y col-span-12 md:col-span-6">
                                                <div className="box">
                                                    <div className="flex flex-col lg:flex-row items-center p-5">
                                                        
                                                        <div className="mx-auto">
                                                            <a href="" className="font-medium mx-auto">QUANTITY ORDERED</a> 
                                                            <div className="text-3xl font-bold leading-8 mt-3 ">519,00</div>
                                                        </div>
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                                </tr>
                                                <tr className="bg-gray-200 dark:bg-dark-1  border-b border-gray-200">
                                                <div className="intro-y col-span-12 md:col-span-6">
                                                <div className="box">
                                                    <div className="flex flex-col lg:flex-row items-center p-5">
                                                        
                                                        <div className="mx-auto">
                                                            <a href="" className="font-medium mx-auto">Total Cost</a> 
                                                            <div className="text-3xl font-bold leading-8 mt-3 ">$19</div>
                                                        </div>
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                                </tr>
                                               
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
            
                            </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6 sm:col-span-6 lg:col-span-6">
                           
                            <div className="intro-y ">
                           <div className="col-span-6 sm:col-span-6 xl:col-span-3 intro-y ">
                                    <div >
                                    <div className="intro-y box mt-5">
        <div className="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 lg:col-span-8">
                <h2 className="font-medium text-base mr-auto">
                    SALES ORDER
                </h2>
                <div className="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0">
                        <div className="mr-3">This Month</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down w-4 h-4"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
            </div>
            <div className="p-5" id="striped-rows-table">
            <div className="preview">
                                    <div className="overflow-x-auto">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="border-b-2 dark:border-dark-5 whitespace-no-wrap">Channel</th>
                                                    <th className="border-b-2 dark:border-dark-5 whitespace-no-wrap">Draft</th>
                                                    <th className="border-b-2 dark:border-dark-5 whitespace-no-wrap">Confirmed</th>
                                                    <th className="border-b-2 dark:border-dark-5 whitespace-no-wrap">Packet</th>
                                                    <th className="border-b-2 dark:border-dark-5 whitespace-no-wrap">Shipped</th>
                                                    <th className="border-b-2 dark:border-dark-5 whitespace-no-wrap">Invoiced</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-gray-200 dark:bg-dark-1">
                                                    <td className="border-b dark:border-dark-5">1</td>
                                                    <td className="border-b dark:border-dark-5">Angelina</td>
                                                    <td className="border-b dark:border-dark-5">Jolie</td>
                                                    <td className="border-b dark:border-dark-5">@angelinajolie</td>
                                                    <td className="border-b dark:border-dark-5">Jolie</td>
                                                    <td className="border-b dark:border-dark-5">@angelinajolie</td>
                                                </tr>
                                                <tr>
                                                    <td className="border-b dark:border-dark-5">2</td>
                                                    <td className="border-b dark:border-dark-5">Brad</td>
                                                    <td className="border-b dark:border-dark-5">Pitt</td>
                                                    <td className="border-b dark:border-dark-5">@bradpitt</td>
                                                    <td className="border-b dark:border-dark-5">Jolie</td>
                                                    <td className="border-b dark:border-dark-5">@angelinajolie</td>
                                                </tr>
                                                <tr className="bg-gray-200 dark:bg-dark-1">
                                                    <td className="border-b dark:border-dark-5">3</td>
                                                    <td className="border-b dark:border-dark-5">Charlie</td>
                                                    <td className="border-b dark:border-dark-5">Hunnam</td>
                                                    <td className="border-b dark:border-dark-5">@charliehunnam</td>
                                                    <td className="border-b dark:border-dark-5">Jolie</td>
                                                    <td className="border-b dark:border-dark-5">@angelinajolie</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
            
                            </div>
                                    </div>
                                </div>
                               
                           </div>
                       </div>
                        
                    </div>


                </div>






                    





            </div>
            {/* <!-- END: Content --> */}
            
        </div>
        
        
    </body>
  )
}

export default Dashboard