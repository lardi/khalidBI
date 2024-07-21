// //utils/salaryCalculate.js
  
export function calculateSalary(basicSalary, housingAllowance, transportationAllowance, otherAllowances, net) {
  const numBasicSalary = parseFloat(basicSalary.trim() || 0);
  const numHousingAllowance = parseFloat(housingAllowance.trim() || 0);
  const numTransportationAllowance = parseFloat(transportationAllowance.trim() || 0);
  const numOtherAllowances = parseFloat(otherAllowances.trim() || 0);
  const numNet = parseFloat(net.trim() || 0); // Using the net salary value

  const totalCompensation = numBasicSalary + numHousingAllowance + numTransportationAllowance + numOtherAllowances;

  const value1 = numBasicSalary;
  const value2 = totalCompensation / 1.35;
  const value3 = numNet > 44212.5 ? (numNet + 4387.5) / 1.35 : numNet / 1.228125;

  const newBasicSalaryValue = Math.max(value1, value2, value3);

  const newHousingAllowanceValue = newBasicSalaryValue / 4;
  const newTransportationAllowanceValue = newBasicSalaryValue / 10;
  const newOtherAllowancesValue = 0;

  const newTotal = newBasicSalaryValue + newHousingAllowanceValue + newTransportationAllowanceValue + newOtherAllowancesValue;
  const difference = newTotal - totalCompensation;

  let insuranceDeduction = (newBasicSalaryValue + newHousingAllowanceValue) * 0.0975;
  if (insuranceDeduction > 4387.5) {
    insuranceDeduction = 4387.5;
  }

  const netCompensation = newTotal - insuranceDeduction;

  return {
    totalCompensation: totalCompensation.toFixed(2),
    newBasicSalary: newBasicSalaryValue.toFixed(2),
    newHousingAllowance: newHousingAllowanceValue.toFixed(2),
    newTransportationAllowance: newTransportationAllowanceValue.toFixed(2),
    newOtherAllowances: newOtherAllowancesValue.toFixed(2),
    newTotalCompensation: newTotal.toFixed(2),
    difference: difference.toFixed(2),
    insuranceDeduction: insuranceDeduction.toFixed(2),
    netCompensation: netCompensation.toFixed(2),
  };
}
