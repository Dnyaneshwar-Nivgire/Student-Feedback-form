import { Component } from '@angular/core';

@Component({
  selector: 'app-student-feedback',
  templateUrl: './student-feedback.component.html',
  styleUrls: ['./student-feedback.component.css']
})
export class StudentFeedbackComponent {
  studentName: string = '';
  batchNumber: number | null = null;
  gender: string = '';
  birthdate: string = '';
  feedbackText: string = '';
  submittedFeedback: Array<any> = []; // To hold submitted feedback records

  onSubmit(form: any) {
    if (form.valid) {
      // Calculate age from birthdate
      const birthDate = new Date(this.birthdate);
      const age = new Date().getFullYear() - birthDate.getFullYear();

      // Determine the prefix based on the gender selected
      const prefix = this.gender === 'male' ? 'Mr.' : 'Mrs.';

      // Push the feedback into the submittedFeedback array
      this.submittedFeedback.push({
        name: `${prefix} ${this.studentName}`, // Use prefix with name
        batch: this.batchNumber,
        gender: this.gender,
        birthdate: this.birthdate,
        age: age,
        feedback: this.feedbackText
      });

      // Reset form values
      this.studentName = '';
      this.batchNumber = null;
      this.gender = '';
      this.birthdate = '';
      this.feedbackText = '';
      form.reset(); // Reset the form after submission
    }
  }
}
