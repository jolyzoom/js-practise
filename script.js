document.getElementById("name").innerHTML = "Abylaykhan";
document.getElementById("group").innerHTML = "CS-2119";
function time() {
	var date = new Date(), year = date.getFullYear(), week_day = date.getDay(), day = date.getDate(), month = date.getMonth() + 1;
	var hours = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds();
	switch(week_day) {
		case 1:
			week_day = "Monday";
			break;
		case 2:
			week_day = "Tuesday";
			break;
		case 3:
			week_day = "Wednesday";
			break;
		case 4:
			week_day = "Thursday";
			break;
		case 5:
			week_day = "Friday";
			break;
		case 6:
			week_day = "Saturday";
			break;
		case 7:
			week_day = "Sunday";
			break;
		default:	
	}
	switch(month) {
		case 1:
			month = "January";
			break;
		case 2:
			month = "February";
			break;
		case 3:
			month = "March";
			break;
		case 4:
			month = "April";
			break;
		case 5:
			month = "May";
			break;
		case 6:
			month = "June";
			break;
		case 7:
			month = "July";
			break;
		case 8:
			month = "August";
			break;
		case 9:
			month = "September";
			break;
		case 10:
			month = "October";
			break;
		case 11:
			month = "November";
			break;
		case 12:
			month = "December";
			break;
		default:
	}
	document.getElementById("year").innerHTML = year;
	document.getElementById("week_day").innerHTML = week_day;
	document.getElementById("date").innerHTML = day;
	document.getElementById("month").innerHTML = month;
	if (hours < 10) 
		hours = "0" + hours;
	if (minutes < 10)
		minutes = "0" + minutes;
	if (seconds < 10)
		seconds = "0" + seconds;
	document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
	var graduation_date = new Date("06/30/2024"), current_date = new Date();
	var difference = Math.round((graduation_date.getTime() - current_date.getTime()) / (24 * 60 * 60 * 1000));
	document.getElementById("graduation_days").innerHTML = difference;
}
setInterval(time, 100);
function multiply() {
	var a = document.getElementById("fnum").value, b = document.getElementById("snum").value;
	document.getElementById("res").innerHTML = a * b;
}
function divide() {
	var a = document.getElementById("fnum").value, b = document.getElementById("snum").value;
	document.getElementById("res").innerHTML = a / b;
}