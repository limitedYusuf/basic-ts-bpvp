type Persons = {
   name: string;
 };
 
 type Address = {
   address: string;
 };
 
 type PersonWithAddress = Persons & Address;
 
 const personWithAddress: PersonWithAddress = {
   name: "John",
   address: "123 Main Street",
 };
 