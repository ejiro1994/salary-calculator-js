let firstName = document.getElementById('fname')
let lastName = document.getElementById('lname')

let grossIncome = document.getElementById('gross')
let pensionContribution = document.getElementById('pension')


let calculateButton = document.getElementById('submit')

let calcMade = false




let net_income = () => {
    
 if (calcMade === false) {

 

    //calculate tax


    pension =  pensionContribution.value / 100 
    gross_salary = grossIncome.value


    const nin = .075
    let salary_after_tax
    let effective_tax
    let net_income_y
    let net_income_m
    let net_income_w
    let yearly_gross_salary
    let monthly_gross_salary
    let weekly_gross_salary

    switch (true) {
        case (gross_salary > 150001): effective_tax = ((gross_salary - 150001) * (.45)) + (99999 * .4) + (37499 * .2) + (gross_salary * nin) + (gross_salary * pension); break;
        case (gross_salary > 50001): effective_tax = (gross_salary - 50001) * .4 + 37499 * .2 + (gross_salary * nin) + (gross_salary * pension); break;
        case (gross_salary > 12501): effective_tax = (gross_salary - 12501) * .2 + (gross_salary * nin) + (gross_salary * pension); break;
    }  

    yearly_gross_salary = gross_salary
    monthly_gross_salary = gross_salary / 12
    weekly_gross_salary = gross_salary / 52
    net_income_y = gross_salary - effective_tax
    net_income_m = (gross_salary - effective_tax) / 12
    net_income_w = (gross_salary - effective_tax) / 52


    let net_salary_results = [net_income_y, net_income_m]
       
     console.log(net_salary_results)




       //display first name and last name
       let p = document.createElement('p');
       let list = document.getElementById('results')
   
       p.innerHTML = `hello ${firstName.value} ${lastName.value} has earned ${net_salary_results[0]} per year with ${pension} pension`;
   
       list.appendChild(p)
   
       console.log('p tag created')

 } else return null


   
    calcMade = true


}

calculateButton.addEventListener("click", ()=>{
    net_income()
})