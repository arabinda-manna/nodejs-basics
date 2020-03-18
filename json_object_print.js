function print_json(obj, key = null, index) {
    // console.log(obj);
    // console.log(typeof obj);
    const commaPresent = (index > 0 ? "," : "")

    if (typeof obj == "string") {
        if(key){
            return commaPresent + "\"" + key + "\"" + ":" + "\"" + obj + "\"";
        }else{
            return commaPresent + "\"" + obj + "\"";
        }
    } else if (typeof obj == "number") {
        if (key) {
            return commaPresent + "\"" + key + "\"" + ":" + obj;
        } else {
            return commaPresent + obj;
        }
    } else if (typeof obj == "boolean") {
        if (key) {
            return commaPresent + "\"" + key + "\"" + ":" + obj;
        } else {
            return commaPresent + obj;
        }
    } else if (obj === null) {
        if (key) {
            return commaPresent + "\"" + key + "\"" + ":" + "null";
        } else {
            return commaPresent + "null";
        }
    }else if (typeof obj == "object"){
        if(obj instanceof Array){
            let returnData = "[";
            for (let i = 0; i < obj.length; i++) {
                returnData += print_json(obj[i], null, i);   
            }
            returnData += "]"
            if (key) {
                return commaPresent + "\"" + key + "\"" + ":" + returnData;
            } else {
                return commaPresent + returnData;
            }
        }else if(obj instanceof Object){     
            let returnData = "{";
            let i = 0;
            for(let key in obj) {
                returnData += print_json(obj[key], key, i);
                i++;
            }
            returnData += "}";

            if (key) {
                return commaPresent + "\"" + key + "\"" + ":" + returnData;
            } else {
                return commaPresent +  returnData;
            }
        }
    }else{
        //undefined case
        return "";
    }
}

// let object = { "firstName": "Arabinda", "lastName": "Manna", "age": 25, "height": null, "weight": undefined, "chest": [56,38,null], null: null, abc: "abc" };
let object = { a: 'Abhsek', b: null, c: undefined, d: true, e: { a: 1, b: [1, "2", "Abc"] } };
console.log(print_json(object));