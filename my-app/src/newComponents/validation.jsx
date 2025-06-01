export default function validate(input) {
    const errors = {};
  
    if (!input.rollno.trim()) {
      errors.rollno = "Roll no is required.";
    }
    if (!input.name.trim()) {
      errors.name = "Name is required.";
    }
    if (!input.address.trim()) {
      errors.address = "Address is required.";
    }
    return errors;
  }
  