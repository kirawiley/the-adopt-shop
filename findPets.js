module.exports = function findPets(type, breed, gender, pets) {
  var searchedPets = []

  if (/* ? */.type !== '' && /* ? */.gender !== '') {
    searchedPets = pets.filter(() => {
      /* ? */.type.toLowerCase() === pets.type.toLowerCase()

      /* ? */.gender.toLowerCase() === pets.gender.toLowerCase()

      return searchedPets
    })
  }

  if(/* ? */.breed !== '') {
    searchedPets = pets.filter(() => {
      /* ? */.breed.toLowerCase() === pets.breed.toLowerCase()

      return searchedPets
    })
  }
}
