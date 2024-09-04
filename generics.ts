//Generics Function

function getAge<T>(value:T):T{
    return value

}

console.log(getAge('Roshan'));

console.log(getAge(20));
