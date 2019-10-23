class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    this.contacts.push(new Contact(name, email, phone, relation));
  }
  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
}

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}
function print(addressBook) {
  for (const person of addressBook.contacts) {
    console.log(person);
  }
}

// const book = new AddressBook();
// book.add("nvl", "lzklv@gmail.com", 755555555, "dad");
// book.add("kyle", "kt@gmail.com", 7345235485, "brother");
// book.add("kyle", "kt@gmail.com", 7345235485, "brother");
// book.add("kyle", "kt@gmail.com", 7345235485, "brother");
// book.add("kyle", "kt@gmail.com", 7345235485, "brother");

// console.log(book.contacts.length);
// console.log(book.contacts[0].name);
// console.log(book);
// book.deleteAt(0);
// console.log(book);
// print(book);
