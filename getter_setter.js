var person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
        return this.language;
    },
    set lang(value) {
        this.language = value;
    }
};
// person.lang = "hi";
console.log(person.lang);