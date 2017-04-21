module.exports = function findPets(type, breed, gender, database) {
  database
    .where('type', type)
    .where('breed', breed)
    .where('gender', gender)
}
