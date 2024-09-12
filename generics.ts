//Generics Function

function getAge<T>(value:T):T{
    return value;
}

const nage = getAge(20);
console.log(nage);
const sage = getAge("20")
console.log(sage);

