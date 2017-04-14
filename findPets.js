module.exports = function findPets(type, gender, pets) {
  var searchedPets = []

   searchedPets = pets.filter((pet) => {
    if (type !== '') {
      return type.toLowerCase() === pet.type.toLowerCase()
    }

    if (gender !== '') {
      return gender.toLowerCase() === pet.gender.toLowerCase()
    }
  })
  return searchedPets
}
