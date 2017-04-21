module.exports = function findPets(type, breed, gender, pets) {
  knex('pets')
    .where('type', type)
    .where('breed', breed)
    .where('gender', gender)
}
