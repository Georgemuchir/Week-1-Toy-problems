Challenge 1: Student Grade Generator (Toy Problem)
 `getStudentGrade`
   - `let marks;` declares a variable that stores the student's marks;
   - `while (true)` starts an infinite loop to repeatedly prompt the user until valid input is gotten;
   - `marks = prompt("Enter student marks (0-100):");` prompts the user to enter student marks and assigns it to `marks`;
   - `marks = parseFloat(marks);` converts the input into a floating-point number;
   - `if (!isNaN(marks) && marks >= 0 && marks <= 100)` checks if the input is a number between 0 and 100 f valid the loop breaks therwise an alert prompts the user to enter an excisting number;
   - `let grade;` declares a variable to store the grade;
   - The Conditional statements determine the grade based on the input marks;
     - If `marks > 79`, grade is 'A';
     - If `marks >= 60`, grade is 'B';
     - If `marks >= 50`, grade is 'C';
     - If `marks >= 40`, grade is 'D';
     - Otherwise, grade is 'E';
 - `alert(`The grade is: ${grade}`);`displays the grade to the user using an alert;
- `getStudentGrade();` it like calls the funtion making the user to inputv the marks makung sure the input is valid and to ditermine the grade;