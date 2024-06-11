export function calculateSalary(basicSalary, housingAllowance, transportationAllowance, otherAllowances) {
    // Convert empty strings to zero
    const numBasicSalary = parseFloat(basicSalary.trim() || 0);
    const numHousingAllowance = parseFloat(housingAllowance.trim() || 0);
    const numTransportationAllowance = parseFloat(transportationAllowance.trim() || 0);
    const numOtherAllowances = parseFloat(otherAllowances.trim() || 0);
  
    // Calculate total compensation
    const totalCompensation = numBasicSalary + numHousingAllowance + numTransportationAllowance + numOtherAllowances;
  
    // Calculate new values
    const basicSalaryPlus35 = numBasicSalary * 1.35;
    let newTotal = totalCompensation;
    let newBasicSalaryValue = numBasicSalary;
    let newHousingAllowanceValue = numHousingAllowance;
    let newTransportationAllowanceValue = numTransportationAllowance;
    let newOtherAllowancesValue = numOtherAllowances;
  
    if (totalCompensation >= basicSalaryPlus35 || numOtherAllowances > 0) {
      newOtherAllowancesValue = 0; // Ensure newOtherAllowances is always zero
      const difference = totalCompensation - basicSalaryPlus35;
      const adjustedDifference = difference / 1.35;
      const newBasic = numBasicSalary + adjustedDifference;
      newBasicSalaryValue = Math.max(newBasic, numBasicSalary);
      newHousingAllowanceValue = newBasicSalaryValue / 4;
      newTransportationAllowanceValue = newBasicSalaryValue / 10;
    } else {
      newBasicSalaryValue = numBasicSalary;
      newHousingAllowanceValue = numBasicSalary / 4;
      newTransportationAllowanceValue = numBasicSalary / 10;
      newOtherAllowancesValue = numOtherAllowances;
    }
  
    // Calculate new total compensation
    newTotal = newBasicSalaryValue + newHousingAllowanceValue + newTransportationAllowanceValue + newOtherAllowancesValue;
  
    // Calculate difference
    const difference = newTotal - totalCompensation;
  
    return {
      totalCompensation: totalCompensation.toFixed(2),
      newBasicSalary: newBasicSalaryValue.toFixed(2),
      newHousingAllowance: newHousingAllowanceValue.toFixed(2),
      newTransportationAllowance: newTransportationAllowanceValue.toFixed(2),
      newOtherAllowances: newOtherAllowancesValue.toFixed(2),
      newTotalCompensation: newTotal.toFixed(2),
      difference: difference.toFixed(2),
    };
  }
  