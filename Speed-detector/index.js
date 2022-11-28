function speedDetector(){
	let speed = document.getElementById("speed").value;
	if(speed  < 0){
	    document.getElementById('points').innerHTML= "Input valid Speed"
	}
    else if(speed >= 0 && speed  <= 70){
	    document.getElementById('points').innerHTML= "This is a legal speed"
	}
	else if(speed >= 80 && speed < 90){
	    document.getElementById('points').innerHTML= "Illegal speed!, 2 demerit points"
	}
	else if(speed >=90 && speed < 100){
	    document.getElementById('points').innerHTML= "Illegal speed!, plus 4 demerit points"
	}
	else if (speed >=100 && speed < 110){
	    document.getElementById('points').innerHTML= "Illegal speed!,  plus 6 demerit points"
	}
	else if (speed >= 110 && speed < 120){
	    document.getElementById('points').innerHTML= "Illegal speed!,  plus 8 demerit points"
	}
	else if (speed >= 120 && speed < 130){
	    document.getElementById('points').innerHTML= "Illegal speed!, plus 10 demerit points"
	}
	else if (speed >= 130){
	    document.getElementById('points').innerHTML= "Your license has unfortunately been suspended!"
	}
	else {
	    document.getElementById('points').innerHTML = "Input Speed."
	}
    }