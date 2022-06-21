// Your code here.
function getFirstName(user) {
  return user.firstName
}
function getLastName(user) {
  return user.lastName
}
function getFullName(user){
  return `${user.firstName} ${user.lastName}`
}
function setFirstName(user,name){
  user.firstName = name
  return `${user.firstName} ${user.lastName}`
}
function setAge(user,age){
  user.age = age
  return `${user.firstName} ${user.lastName} age:${user.age}`
}
function giveBirthday (user){
  if(user.age > 0){
    user.age ++
    return user 
  }
  if(user.age != true){
    user.age = 1
    return user
  }
}
function marry (person1,person2){
  person1.married = true
  person2.married = true
  person1.spouseName = `${person2.firstName} ${person2.lastName}`
  person2.spouseName = `${person1.firstName} ${person1.lastName}`
  console.log(person1,person2)
  return person1,person2
}
function divorce (person1,person2){
  person1.married = false
  person2.married = false
  delete person1['spouseName']
  delete person2['spouseName']
  return person1,person2
}

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
