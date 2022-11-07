const formatTheSalary = (salary: string) => {
  let formattedSalary;
  if (salary.toLowerCase().includes("k")) {
    formattedSalary = salary.replaceAll("k", " 000");
  }
  return formattedSalary;
};

export default formatTheSalary;
