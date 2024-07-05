"use client";

import { useState } from 'react';
import { calculateSalary } from '../../../utils/salaryCalculate';
import { formatNumber, parseNumber, isNumeric, removeLeadingZeros } from '../../../utils/formatNumber';
import SalaryResultModal from '@/components/modals/SalaryResultModal';
import '../../../styles/animations.css';

const SalaryCalculatorPage = () => {
  const [basicSalary, setBasicSalary] = useState("");
  const [housingAllowance, setHousingAllowance] = useState("");
  const [transportationAllowance, setTransportationAllowance] = useState("");
  const [otherAllowances, setOtherAllowances] = useState("");
  const [results, setResults] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalClosing, setIsModalClosing] = useState(false);

  const handleInputChange = (e, setter) => {
    let value = e.target.value;

    // Remove any non-numeric characters except for a period
    value = value.replace(/[^0-9.]/g, '');

    // Remove leading zeros
    value = removeLeadingZeros(value);

    if (isNumeric(value)) {
      setter(formatNumber(parseNumber(value)));
    }
  };

  const handleCalculate = () => {
    const result = calculateSalary(
      parseNumber(basicSalary),
      parseNumber(housingAllowance),
      parseNumber(transportationAllowance),
      parseNumber(otherAllowances)
    );
    setResults(result);
    setIsModalOpen(true);
    setIsModalClosing(false);
  };

  const closeModal = () => {
    setIsModalClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 500); // Duration of the fade-out animation
  };

  return (
    <div className="dir-rtl">
      <div className="container md:w-[600px] max-w-[90%] mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">حاسبة النظام الجديد</h1>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md max-w-md mx-auto">
          <div className="space-y-4">
            <div className="input-group">
              <label htmlFor="basicSalary" className="block text-gray-500 text-sm">الراتب الأساسي</label>
              <input
                id="basicSalary"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={basicSalary}
                onChange={(e) => handleInputChange(e, setBasicSalary)}
                className="mt-1 text-black block w-full py-2 border-b-2 border-t-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-2xl"
              />
            </div>
            <div className="flex flex-row pt-4">
              <div className="input-group w-1/2">
                <label htmlFor="housingAllowance" className="block text-gray-500 text-sm">بدل السكن</label>
                <input
                  id="housingAllowance"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={housingAllowance}
                  onChange={(e) => handleInputChange(e, setHousingAllowance)}
                  className="mt-1 text-black block w-full py-2 border-b-2 border-t-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="input-group mr-7 w-1/2">
                <label htmlFor="transportationAllowance" className="block text-gray-500 text-sm">بدل النقل</label>
                <input
                  id="transportationAllowance"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={transportationAllowance}
                  onChange={(e) => handleInputChange(e, setTransportationAllowance)}
                  className="mt-1 text-black block w-full py-2 border-b-2 border-t-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div className="input-group pt-4">
              <label htmlFor="otherAllowances" className="block text-gray-500 text-sm">بدلات أخرى</label>
              <input
                id="otherAllowances"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={otherAllowances}
                onChange={(e) => handleInputChange(e, setOtherAllowances)}
                className="mt-1 text-black block w-full py-2 border-b-2 border-t-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="input-group flex justify-center">
              <button
                onClick={handleCalculate}
                className="py-2 px-7 bg-purple-600 hover:bg-purple-700 text-white rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                حساب الراتب
              </button>
            </div>
          </div>
        </div>
        {isModalOpen && <SalaryResultModal results={results} onClose={closeModal} isClosing={isModalClosing} />}
      </div>
    </div>
  );
};

export default SalaryCalculatorPage;
