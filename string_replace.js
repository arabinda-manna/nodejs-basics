let string = "Lorem ipsum dolor sit amet, donec et risus nec, eu justo nam bibendum, nulla amet litora dolor porttitor, nec sagittis."; //lorem ipsum sentence

//replacing "nec" with "new" in above string
console.log('Before Replace : ');
console.log(string);

string = string.replace(/nec/g,'new');
console.log('\nAfter Replace : ');
console.log(string);
