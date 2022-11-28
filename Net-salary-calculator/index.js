function netSalary() {
	let salary = document.getElementById("salary").value;
	
	// CALCULATES NET SALARY BELOW (0)
    
	if (salary < 0){
	
	    document.getElementById("netSalary").innerHTML = `Your net salary is 0`
	}
       
	 /// CALCULATE NET SALARY OF (24,000-1) NHIF rate 2.5% and NSSF rate 6%.
    
	else if (salary < 24000){
	    let nhif = salary * 0.025;
		let tax = salary * 0.1;
	    let nssf = salary * 0.06;
		let deductions = (nhif + tax + nssf)
	    let basicSalary = salary - (deductions);
    
	    document.getElementById("netSalary").innerHTML = `Your net salary is: ${basicSalary}`
	}
    
	 //// CALCULATE NET SALARY OF (32333-24000) NHIF rate 2.5% and NSSF rate 6%. 
    
	else if (salary >= 24000 && salary < 32333 ){
	    let nhif = salary * 0.025;
		let tax = salary * 0.1;
	    let nssf = salary * 0.06;
		let deductions = (nhif + tax + nssf)
	    let basicSalary = salary - (deductions);
    
	    document.getElementById("netSalary").innerHTML = `Your net salary is: ${basicSalary}`
	}
    
	 ///// CALCULATE NET SALARY OF (above 32333) using NHIF rate 2.5% and NSSF rate 6%.
    
	else if (salary > 32333){
	    let nhif = salary * 0.025;
		let tax = salary * 0.1;
	    let nssf = salary * 0.06;
		let deductions = (nhif + tax + nssf)
	    let basicSalary = salary - (deductions);
    
	    document.getElementById("netSalary").innerHTML = `Your net salary is: ${basicSalary}`
	}
    
	else {
	    document.getElementById("netSalary").innerHTML = `Enter salary`
	}
	
    }