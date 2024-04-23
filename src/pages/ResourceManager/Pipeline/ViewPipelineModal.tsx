import React, { useState } from 'react';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const ViewPipelineModal = (props: Props) => {
    
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        props.onClose();
    };

    return (
        <>
        <div className={`modal fade ${props.isOpen ? 'show' : ''}`} tabIndex={-1} role="dialog" style={{ display: props.isOpen ? 'block' : 'none' }}>                    
            <div className="modal-dialog rounded flex-grow" role="document">
                <div className="modal-content flex p-10 gap-4 ml-10 mr-10 ">

                    <div className=''>
                        <button type="button" className="close" onClick={closeModal} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className=''>
                    
                        <div className=" flex items-center bg-white p-5 shadow rounded">
                            
                            <div className="text-center">
                                <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                                </svg>
                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500">
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF</p>
                            </div>
                        </div>
                        
                    </div>

                    <form className='flex-1 mt-0 bg-white p-5 shadow rounded'>
                        <fieldset className='flex flex-col' disabled>
                            <div className='grid grid-cols-3 gap-4'>

                                <div className=''>
                                    <label>Name</label>
                                    <input type="text" id="disabledTextInput" placeholder="Disabled input" 
                                    className="w-full rounded-md border border-[#e0e0e0] form-control bg-white p-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required/>

                                </div>

                                <div className="">
                                    <label className="font-bold sm:text-l ">
                                        Email
                                    </label>
                                    <input type="text" id="disabledTextInput" placeholder="Disabled input"
                                    className="w-full rounded-md border border-[#e0e0e0] form-control bg-white p-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required/>
                                </div>

                                <div className="">
                                    <label className="font-bold sm:text-l ">
                                        Phone
                                    </label>
                                    
                                    <input type="text" id="disabledTextInput" placeholder="Disabled input"
                                    className="w-full rounded-md border border-[#e0e0e0] form-control bg-white p-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required/>
                                </div>
                            </div>

                            <div className='grid grid-cols-3 gap-4'>
                                <div>
                                    <label className="font-bold sm:text-l pb-3">
                                        Gender
                                    </label>
                                </div>
                                
                                <div>
                                    <label className="font-bold sm:text-l pb-3">
                                        Division
                                    </label>
                                </div>

                                <div>
                                    <label className="font-bold sm:text-l pb-3">
                                        Tech Stak
                                    </label>
                                    <input type="text" name="" id="" />
                                </div>
                            

                            </div>

                            <div className='grid grid-cols-3 gap-4'>

                            </div>

                            <div className='grid grid-cols-3 gap-4'>

                            </div>
                        </fieldset>
                    </form>


            
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={closeModal}>
                            Close
                        </button>
                        <button type="button" className="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default ViewPipelineModal;
