import React, { useEffect } from 'react';
import { MdOutlineDirectionsCarFilled } from "react-icons/md";
import { PiMoney } from "react-icons/pi";
import { FiHome } from "react-icons/fi";
import { RiBillLine } from "react-icons/ri";
import { formatNumber } from '../../utils/formatNumber';

const SalaryResultModal = ({ results, onClose, isClosing }) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.id === 'modal-overlay') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  if (!results) return null;

  return (
    <div id="modal-overlay" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className={`${isClosing ? 'modal-slide-fade-out' : 'modal-slide-fade-in'} bg-white p-6 rounded-3xl shadow-lg max-w-lg mx-auto relative modal-container w-[400px] max-w-[80%]`}>
        <button className="absolute top-2 right-2 text-white text-3xl mr-3 hover:text-gray-200" onClick={onClose}>
          &times;
        </button>
        <h3 className="text-md mt-4 mb-2 text-center">الإجمالي الجديد</h3>
        <p className='bg-white text-black text-3xl font-semibold p-2 rounded-xl text-center w-[200px] mx-auto'>
          {formatNumber(results.newTotalCompensation)}
        </p>
        <div className='flex flex-row w-full mt-6 border-violet-400 border-t pt-3'>
          <div className='w-1/2'>
            <PiMoney className='text-violet-400' size={18} />
            <p className='text-sm text-violet-300 my-1'>الراتب الأساسي</p>
            <p>{formatNumber(results.newBasicSalary)}</p>
          </div>
          <div className='w-1/2'>
            <FiHome className='text-violet-400' size={18}/>
            <p className='text-sm text-violet-300 my-1'>بدل السكن</p>
            <p className='text-xl'>{formatNumber(results.newHousingAllowance)}</p>
          </div>
        </div>
        <div className='flex flex-row w-full mt-6 border-violet-400 border-b pb-3'>
          <div className='w-1/2'>
            <MdOutlineDirectionsCarFilled className='text-violet-400' size={18} />
            <p className='text-sm text-violet-300 my-1'>بدل النقل</p>
            <p className='text-xl'>{formatNumber(results.newTransportationAllowance)}</p>
          </div>
          <div className='w-1/2'>
            <RiBillLine className='text-violet-400' size={18}/>
            <p className='text-sm text-violet-300 my-1'>بدلات أخرى</p>
            <p className='text-xl'>{formatNumber(results.newOtherAllowances)}</p>
          </div>
        </div>
        <div className="mt-6 flex">
          <div className='w-2/3'>
            <h3 className="text-sm mb-2 text-center">الإجمالي القديم</h3>
            <p className='text-xl text-center bg-gray-300 text-gray-600 rounded-xl mx-3'>{formatNumber(results.totalCompensation)}</p>
          </div>
          <div className='w-1/3'>
            <h3 className="text-sm mb-2 text-center">الفرق</h3>
            <p className='text-xl text-center bg-yellow-400 text-black rounded-xl'>{formatNumber(results.difference)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryResultModal;
