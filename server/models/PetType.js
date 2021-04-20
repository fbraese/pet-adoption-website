import pg from "pg"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/pet-adoption-website-development"
})

class PetType {
  constructor({id, description, img_url, imgUrl}){
    this.id = id
    this.description = description
    this.imgUrl = imgUrl || img_url
  }

  static async findAll() {
    try {
      const result = await pool.query("SELECT * FROM pet_types;")
      const petTypeData = result.rows
      const petTypes = petTypeData.map(petType => new this(petType))
      return petTypes
    } catch (error) {
      console.error("Error from PetType.findall()", error)
      throw(error)
    }
  }
}

export default PetType