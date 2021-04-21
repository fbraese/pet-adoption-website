import pg from "pg"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/pet-adoption-website-development"
})

class Pet {
  constructor({ id, name, age, vaccination_status, vaccinationStatus, adoption_story, adoptionStory, available_for_adoption, availableForAdoption, pet_type_id, petTypeId, type, img_url, imgUrl }) {
    this.id = id
    this.name = name
    this.age = age
    this.vaccinationStatus = vaccinationStatus || vaccination_status
    this.adoptionStory = adoptionStory || adoption_story
    this.availableForAdoption = availableForAdoption || available_for_adoption
    this.petTypeId = petTypeId || pet_type_id
    this.type = type
    this.imgUrl = imgUrl || img_url
  }

  static async findByType(type) {
    try {
      const queryString = "SELECT adoptable_pets.id, adoptable_pets.name, adoptable_pets.age, adoptable_pets.vaccination_status, adoptable_pets.adoption_story, adoptable_pets.available_for_adoption, adoptable_pets.pet_type_id, pet_types.type, adoptable_pets.img_url FROM adoptable_pets JOIN pet_types ON pet_types.id = adoptable_pets.pet_type_id WHERE pet_types.type = $1;"
      const result = await pool.query(queryString, [type])
      const petsData = result.rows
      const pets = petsData.map((petData) => {
        return new this(petData)
      })
      return pets
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  static async findByTypeAndId(type, id) {
    try {
      const queryString = "SELECT adoptable_pets.id, adoptable_pets.name, adoptable_pets.age, adoptable_pets.vaccination_status, adoptable_pets.adoption_story, adoptable_pets.available_for_adoption, adoptable_pets.pet_type_id, pet_types.type, adoptable_pets.img_url FROM adoptable_pets JOIN pet_types ON pet_types.id = adoptable_pets.pet_type_id WHERE pet_types.type = $1 AND adoptable_pets.id = $2;"
      const result = await pool.query(queryString, [type, id])
      const petData = result.rows[0]
      const pet = new this(petData)
      return pet
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

export default Pet