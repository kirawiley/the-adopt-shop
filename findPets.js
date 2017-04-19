module.exports = function findPets(type, breed, gender, pets) {
  var searchedPets = pets.concat([])

  if (type !== '' && type !== undefined) {
   searchedPets = pets.filter((pet) => {
     return type.toLowerCase() === pet.type.toLowerCase()
    })
  }

  if (breed !== '' && breed !== undefined) {
    searchedPets = searchedPets.filter((pet) => {
      return breed.toLowerCase() === pet.breed.toLowerCase()
    })
  }

  if (gender !== '' && gender !== undefined) {
    searchedPets = searchedPets.filter((pet) => {
      return gender.toLowerCase() === pet.gender.toLowerCase()
    })
  }
  return searchedPets
}
