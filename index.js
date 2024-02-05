function classifyGrade() {
   
    var score = document.getElementById("examScore").value;

    
    if (score >= 90) {
        document.getElementById("gradeResult").innerHTML = "Grade: A";
    } else if (score >= 80) {
        document.getElementById("gradeResult").innerHTML = "Grade: B";
    } else if (score >= 70) {
        document.getElementById("gradeResult").innerHTML = "Grade: C";
    } else if (score >= 60) {
        document.getElementById("gradeResult").innerHTML = "Grade: D";
    } else {
        document.getElementById("gradeResult").innerHTML = "Grade: F";
    }
}