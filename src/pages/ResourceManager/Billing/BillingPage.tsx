import { faEye, faFilter, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState, useEffect} from 'react';
import { Link, Outlet } from "react-router-dom";
import { useApisStore } from '../../../store/apiStore';
import { getBillings } from '../../../api/BillingAPI';

interface Props {}  

const BillingPage = (props: Props)=>{

  const [billings, setBillings] = useState<Billing[]>([]);

  useEffect(() =>{
    getBillings().then((data: any) => setBillings(data));
  },[])

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return(
  <>
    <div className='w-full'>
      <div className='px-5 pt-4 d-flex mb-3'>
        <div className="p-2 me-auto">
            <h1> Work Force </h1>
        </div>

        {/* Filter and Search */}
        <div className="flex items-center space-x-4">
          <Link to={'/resourceManager/billing/addNewBilling'}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add Billing
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
      <hr className="border-2 ml-10 mr-10 border-black-900" />

      {/* Selection Bar  (3 views)*/}
      <div className='ml-10 mr-10 p-4 d-flex justify-content-between'>
        <div className='d-flex flex-row'>
          <div className='mr-20'>
            <Link to="/resourceManager/pipeline">
              <button className='btn btn-dark btn-lg rounded'>Pipeline</button>
            </Link>
          </div>
          <div className='mr-20'>
            <Link to="/resourceManager/bench">
              <button className='btn btn-dark btn-lg rounded'>Bench</button>
            </Link>
          </div>
          <div className='mr-20'>
              <Link to="/resourceManager/billing">
                  <button className='btn btn-dark btn-lg rounded'>Billing</button>
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
            {billings.map((billing) =>(
          <tr className="border-b dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              1
            </th>
            <td className="px-6 py-4" key={billing.id}>
              {billing.employeeInformation.candidateInformation.personInformation.name}
            </td>
            <td className="px-6 py-4">
              {billing.employeeInformation.status}
            </td>
            <td className="px-6 py-4">
              {billing.employeeInformation.job_title}
            </td>
            <td className="px-6 py-4">
              {billing.employeeInformation.job_grade}
            </td>
            <td className="px-6 py-4">
              19/04/24
              {/* {billing.billingSince.toString()} */}
            </td>
            <td className="px-6 py-4">
            {billing.employeeInformation.candidateInformation.personInformation.division}
            </td>
            <td className="px-6 py-4">
              <Link to={''} >
                <button type="button" className="btn btn-info">
                  Bench
                </button>
              </Link>
            </td>
            <td className='px-6 py-4 flex flex-row'>
              <div className='pl-6 py-4 mr-6'>
                  <button type="button" className="font-medium hover:underline">
                      <FontAwesomeIcon icon={faEye} />
                  </button>
              </div>

              <div className='pl-3 py-4 mr-6'>
                <Link to="/resourceManager/editBillingPage">
                    <button type="button" className="font-medium hover:underline" onClick={() => {}}>
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </button>
                  </Link>
              </div>
              
              <div className='pl-3 py-4'>
                  <button type="button" className="font-medium hover:underline">
                      <FontAwesomeIcon icon={faTrash} /> 
                  </button>
              </div>
            </td>
          </tr>

            ))}

          </tbody>
        </table>
      </div>
    </div>
  </>);
}

export default BillingPage;

