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
  findByName(name) {
    return this.contacts.find(function(contactinfo) {
      return contactinfo.name === name;
    });
  }
  //   edit (oldName, name, email, phone, relation){
  //     let index = this.contacts.findIndex(Contact =>
  //       contact.name === oldName

  //     }
  //     let updated = new Contact(name, email, phone, relation),
  //     this.contacts[index] = updated
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

const book = new AddressBook();
book.add("kyle", "lzklv@gmail.com", 755555555, "bro");
book.add("ken", "kG@gmail.com", 7345235485, "dad");
book.add("julie", "jk@gmail.com", 7345235485, "mom");
book.add("lou", "ml@gmail.com", 7345235485, "grandma");
book.add("bob", "kt@gmail.com", 7345235485, "uncle");

console.log(book.contacts.length);
console.log(book.contacts[0].name);
console.log(book);
book.deleteAt(4);
console.log(book);
print(book);
book.findByName("lou");
console.log(book.findByName("kyle"));
