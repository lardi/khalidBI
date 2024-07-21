import React, { useEffect, useState } from 'react';
import { MdOutlineDirectionsCarFilled } from "react-icons/md";
import { PiMoney } from "react-icons/pi";
import { FiHome } from "react-icons/fi";
import { RiBillLine } from "react-icons/ri";
import { formatNumber } from '../../utils/formatNumber';

const SalaryResultModal = ({ results, onClose, isClosing }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

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

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div id="modal-overlay" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className={`${isClosing ? 'modal-slide-fade-out' : 'modal-slide-fade-in'} bg-white p-6 rounded-3xl shadow-lg max-w-lg mx-auto relative modal-container w-[400px] max-w-[80%]`}>
        <button className="absolute top-2 right-2 text-white text-3xl mr-3 hover:text-gray-200" onClick={onClose}>
          &times;
        </button>
        <h3 className="text-md mt-4 mb-2 text-center">الإجمالي الجديد</h3>
        <p className='bg-white text-black text-2xl p-2 rounded-xl text-center w-[200px] mx-auto'>
          {formatNumber(results.newTotalCompensation)}
        </p>
        <div className='flex flex-row w-full mt-4 er-t pt-3'>
          <div className='w-5/12'>
            <div className='flex items-center'>
              <PiMoney className='text-violet-200 ml-1' size={15} />
              <p className='text-xs text-violet-300 my-1'>الراتب الأساسي</p>
            </div>
            <p>{formatNumber(results.newBasicSalary)}</p>
          </div>
          <div className='w-4/12'>
            <div className='flex items-center'>
              <FiHome className='text-violet-200 ml-1' size={15}/>
              <p className='text-xs text-violet-300 my-1'>بدل السكن</p>
            </div>
            <p>{formatNumber(results.newHousingAllowance)}</p>
          </div>
          <div className='w-3/12'>
            <div className='flex items-center'>
              <MdOutlineDirectionsCarFilled className='text-violet-200 ml-1' size={15} />
              <p className='text-xs text-violet-300 my-1'>بدل النقل</p>
            </div>
            <p>{formatNumber(results.newTransportationAllowance)}</p>
          </div>
        </div>
        <div className="mt-1">
          <div>
            <h3 className="text-md mt-4 mb-2 text-center">الصافي بعد حسم التأمينات</h3>
            <p className='text-3xl bg-opacity-80 text-center bg-white text-black font-bold rounded-xl p-2'>{formatNumber(results.netCompensation)}</p>
          </div>
        </div>
        <div className='bg-black rounded-xl bg-opacity-20 p-1 my-3'>
          {/* Accordion */}
          <h3 className="cursor-pointer text-center text-sm text-violet-300" onClick={toggleAccordion}>
            معلومات إضافية {isAccordionOpen ? '-' : '+'}
          </h3>
          {isAccordionOpen && (
            <div className='accordion-content w-full mt-3'>
              <div className='flex mr-3'>
                <h3 className="text-xs text-violet-300 my-1">حسم التأمينات</h3>
                <p className='text-xl text-right text-yellow-400 mr-5'>- {formatNumber(results.insuranceDeduction)}</p>
              </div>
              <div className="mt-2 flex border-1 bg-black bg-opacity-20 p-3 rounded-2xl">
                <div className='w-2/3'>
                  <h3 className="text-sm mb-2 text-right">الإجمالي القديم</h3>
                  <p className='text-xl text-center bg-gray-300 bg-opacity-10 text-gray-200 rounded-xl py-1 ml-2'>{formatNumber(results.totalCompensation)}</p>
                </div>
                <div className='w-1/3'>
                  <h3 className="text-sm mb-2 text-right">الفرق</h3>
                  <p className='text-xl text-center bg-yellow-400 bg-opacity-50 text-black rounded-xl py-1'>{formatNumber(results.difference)}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SalaryResultModal;
