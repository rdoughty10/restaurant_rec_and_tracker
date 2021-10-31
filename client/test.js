
/*
general unit test of the accounts 
*/
//TEST OF LOGIN 
//test email 
const testEmail = "string@string.com"
test('test that email is within database', () => {
  expect(email.getUser()).toBe(testEmail);
});
//test password 
const testPassword = "strongpassword"
test('test that password is within database', () => {
  expect(password.getUser()).toBe(testPassword);
});

//TEST OF SIGN UP
//test first name
const testFirstName = "John"
test('test that first name is accepted into database', () => {
  expect(firstName.Signup()).toBe(testFirstName);
}); 
//test last name
const testLastName= "Doe"
test('test that last name is accepted into database', () => {
  expect(lastName.Signup()).toBe(testLastName);
}); 
//test email 
const testEmail = "string@string.com"
test('test that email is accepted into database', () => {
  expect(email.Signup()).toBe(testEmail);
});
//test password
const testPassword = "strongpassword"
test('test that password is accepted into database', () => {
  expect(password.Signup()).toBe(testPassword);
});
