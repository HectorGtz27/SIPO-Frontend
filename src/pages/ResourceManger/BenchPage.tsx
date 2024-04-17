import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState, useEffect} from 'react';
import { Link, Outlet } from "react-router-dom";

interface Props {}  

const BenchPage = (props: Props)=>{
  
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return(
  <>
    <div className="flex h-screen bg-gray-100">

      {/* Main Content */}
      <div className="flex-grow">
        <Outlet />
        
        <div className="px-5 pt-4 d-flex mb-3">
          <div className="p-2 me-auto">
            <h1> Work Force </h1>
          </div>

          {/* Filter and Search */}
          <div className="flex items-center space-x-4">

            <Link to={'/addNewPipeline'}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add Bench
              </button>
            </Link>
            

            <div className="flex items-center border rounded-lg overflow-hidden w-64 ">

              <span className="pl-2">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m2-5a6.65 6.65 0 11-14 0 6.65 6.65 0 0113.3 0z"></path></svg>
              </span>

              <input type="search" id="default-search" className="p-2 pl-0 w-full text-sm bg-transparent focus:outline-none" placeholder="Search " />

              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Search
              </button>
            </div>
          </div>

          <div className="p-2 flex items-center justify-center">
            <button className="pl-5" type="button" >
              <FontAwesomeIcon icon={faFilter} />
            </button>
          </div>
        </div>

        {/* Selection Bar  (3 views, add, filter and search)*/}
        <div className='ml-10 mr-10 p-4 d-flex justify-content-between border-top border-bottom border-dark'>
          <div className='d-flex flex-row'>
            <div className='mr-20'>
              <Link to="/pipeline">
                <button className='btn btn-dark btn-lg rounded-0'>Pipeline</button>
              </Link>
            </div>
            <div className='mr-20'>
              <Link to="/bench">
                <button className='btn btn-dark btn-lg rounded-0'>Bench</button>
              </Link>
            </div>
            <div className='mr-20'>
              <Link to="/billing">
                <button className='btn btn-dark btn-lg rounded-0'>Billing</button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Table */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className=" w-full text-sm  rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">ID</th>
                <th scope="col" className="px-6 py-3"> Name</th>
                <th scope="col" className="px-6 py-3">Employee Status </th>
                <th scope="col" className="px-6 py-3">Job Title </th>
                <th scope="col" className="px-6 py-3">Job Grade</th>
                <th scope="col" className="px-6 py-3">Date of Joining </th>
                <th scope="col" className="px-6 py-3">Division</th>
                <th scope="col" className="px-6 py-3">Move To</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  1
                </th>
                <td className="px-6 py-4">
                  Mariana García Gómez
                </td>
                <td className="px-6 py-4">
                  Bench
                </td>
                <td className="px-6 py-4">
                  Developer
                </td>
                <td className="px-6 py-4">
                  C2
                </td>
                <td className="px-6 py-4">
                  01/01/2021
                </td>
                <td className="px-6 py-4">
                  Mexico
                </td>
                <td className="px-6 py-4">
                  <Link to={''} >
                    <button type="button" className="btn btn-info">
                     Billing
                    </button>
                  </Link>
                </td>
                <td className="px-6 py-4">
                    <button className='btn btn-sm btn-primary'>View</button>
                    <button className='btn btn-sm btn-primary'>Edit</button>
                    <button className='btn btn-sm btn-danger'>Delete</button>  
                </td>
              </tr>

              <tr className="border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    2
                </th>
                  <td className="px-6 py-4">
                    Guillermo Valdez Contreras
                  </td>
                  <td className="px-6 py-4">
                    Bench
                  </td>
                  <td className="px-6 py-4">
                    Developer
                  </td>
                  <td className="px-6 py-4">
                    C1
                  </td>
                  <td className="px-6 py-4">
                    01/01/2021
                  </td>
                  <td className="px-6 py-4">
                    Mexico
                  </td>
                  <td className="px-6 py-4">
                    <Link to={''} >
                      <button type="button" className="btn btn-info">
                      Billing
                      </button>
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                      <button className='btn btn-sm btn-primary'>View</button>
                      <button className='btn btn-sm btn-primary'>Edit</button>
                      <button className='btn btn-sm btn-danger'>Delete</button>  
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    3
                  </th>
                  <td className="px-6 py-4">
                      Uma Umaña
                  </td>
                  <td className="px-6 py-4">
                      Bench
                  </td>
                  <td className="px-6 py-4">
                      Developer
                  </td>
                  <td className="px-6 py-4">
                      C2
                  </td>
                  <td className="px-6 py-4">
                      01/01/2021
                  </td>
                  <td className="px-6 py-4">
                      Mexico
                  </td>
                  <td className="px-6 py-4">
                    <Link to={''} >
                      <button type="button" className="btn btn-info">
                        Billing
                      </button>
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                      <button className='btn btn-sm btn-primary'>View</button>
                      <button className='btn btn-sm btn-primary'>Edit</button>
                      <button className='btn btn-sm btn-danger'>Delete</button>  
                  </td>
                  </tr>
                <tr className="border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        4
                    </th>
                    <td className="px-6 py-4">
                        Alejandra García Gómez
                    </td>
                    <td className="px-6 py-4">
                        Bench
                    </td>
                    <td className="px-6 py-4">
                        Developer
                    </td>
                    <td className="px-6 py-4">
                        C1
                    </td>
                    <td className="px-6 py-4">
                        01/01/2021
                    </td>
                    <td className="px-6 py-4">
                        Mexico
                    </td>
                    <td className="px-6 py-4">
                      <Link to={''} >
                        <button type="button" className="btn btn-info">
                        Billing
                        </button>
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                        <button className='btn btn-sm btn-primary'>View</button>
                        <button className='btn btn-sm btn-primary'>Edit</button>
                        <button className='btn btn-sm btn-danger'>Delete</button>  
                    </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>);
}

export default BenchPage;