module.exports = function findPets(type, breed, gender, pets) {
  var searchedPets = []

  if (type !== '') {
   searchedPets = pets.filter((pet) => {
     return type.toLowerCase() === pet.type.toLowerCase()
    })
  }

  if (breed !== '') {
    searchedPets = searchedPets.filter((pet) => {
      return breed.toLowerCase() === pet.breed.toLowerCase()
    })
  }

  if (gender !== '') {
    searchedPets = searchedPets.filter((pet) => {
      return gender.toLowerCase() === pet.gender.toLowerCase()
    })
  }
  return searchedPets
}
