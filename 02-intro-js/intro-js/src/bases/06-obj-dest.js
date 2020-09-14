// Object destructuration. 

const person = {
    name: "Tony",
    age: 45,
    password: "IronMan"
}

const { name } = person; // It's like person.name 
const { name: name2} = person; // Renaming the name variable to name2

const returnName = ({ name, age, password}) => {
    return{
        password: password,
        age: age,
        latLng: {
            lat: 123123,
            long: 123123
        }
    }
};

const {password, age, latLng} = returnName(person);
const {lat, long} = latLng;

console.log(password, age,lat, long)