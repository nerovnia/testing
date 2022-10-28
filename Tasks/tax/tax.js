const salaries1 = {
  TeamLead: { salary: 1000, tax: "99%" },
  Architect: { salary: 9000, tax: "34%" },
}
const team1 = [
  { name: "Alexander", specialization: "TeamLead" },
  { name: "Gaudi", specialization: "Architect" },
  { name: "Koolhas", specialization: "Architect" },
  { name: "Foster", specialization: "Architect" },
  { name: "Napoleon", specialization: "General" },]

const totalStr = 'totalBudgetTeam';



function getTax(tax) {
  const taxInt = parseInt(tax.substring(0, tax.length - 1), 10);
  if (isNaN(taxInt)) {
    throw 'Tax is not a number!';
  }
  if ((taxInt >= 0) && (taxInt < 100)) {
    return taxInt;
  } else {
    throw 'Tax is out of range from 0 to 100!';
  }
}

function calculateTeamFinanceReport(salaries, team) {
  if ((team.length > 0) && (team.length < 100)) {
    if (((Object.keys(salaries).length > 0) && (Object.keys(salaries).length < 10))) {
      try {
        const res = {};
        res.totalBudgetTeam = 0;
        Object.keys(salaries).forEach(key => {
          res[totalStr + key] = 0;
        });
        team.forEach(emp => {
          if (salaries[emp.specialization]) {
            let fulSel = salaries[emp.specialization].salary + salaries[emp.specialization].salary * getTax(salaries[emp.specialization].tax) / 100;
            res.totalBudgetTeam += fulSel;
            res[totalStr + emp.specialization] += fulSel;
          }
        })
        Object.keys(res).forEach(k => {
          res[k] = Math.trunc(res[k]);
        });
        return res;
      } catch (err) {
        console.log(err);
        return {};
      }
    } else {
      console.log('Number of specializations is out of range from 0 to 10!');
    }
  } else {
    console.log('Team length is out of range from 0 to 100!');
  }
  return {};
}

const financeReport1 = calculateTeamFinanceReport(salaries1, team1)
console.log(JSON.stringify(financeReport1))
