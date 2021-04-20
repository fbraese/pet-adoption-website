import pg from "pg"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/pet-adoption-website-development"
})

class Pet {
  constructor({ id, name, age, vaccination_status, vaccinationStatus, adoption_story, adoptionStory, available_for_adoption, availableForAdoption, pet_type_id, petTypeId, img_url, imgUrl }) {
    this.id = id
    this.name = name
    this.age = age
    this.vaccinationStatus = vaccination_status || vaccinationStatus
    this.adoptionStory = adoptionStory || adoption_story
    this.availableForAdoption = availableForAdoption || available_for_adoption
    this.petTypeId = petTypeId || pet_type_id
    this.imgUrl = imgUrl || img_url
  }

  static async findByType(type) {
    try {
      //Select adoptable pets where type_id matches type from req.params.id
      //id from pet_types & type_id from adoptable_pets
      const queryString = "SELECT * FROM adoptable_pets JOIN pet_types ON pet_types.id = adoptable_pets.pet_type_id WHERE pet_types.type = $1;"
      const result = await pool.query(queryString, [type])
      const petsData = result.rows
      const pets = petsData.map((petData) => { new this(petData) })
      console.log(petType)
      return pets
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  //findById for pet details page
}

export default Pet