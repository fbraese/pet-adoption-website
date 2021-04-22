import pg from "pg"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/pet-adoption-website-development"
})

class Adoption {
  constructor({ id, name, phoneNumber, phone_number, email, homeStatus, home_status, applicationStatus, application_status, adoptablePetId, adoptable_pet_id }) {
    this.id = id
    this.name = name
    this.phoneNumber = phoneNumber || phone_number
    this.email = email
    this.homeStatus = homeStatus || home_status
    this.applicationStatus = applicationStatus || application_status
    this.adoptablePetId = adoptablePetId || adoptable_pet_id
  }

  async save() {
    try {
      const queryString = "INSERT INTO adoption_applications(name, phone_number, email, home_status, adoptable_pet_id) VALUES ($1,$2,$3,$4,$5) RETURNING id;"
      const adoptionId = await pool.query(queryString, [this.name, this.phoneNumber, this.email, this.homeStatus, this.adoptablePetId])
      this.id = adoptionId.rows[0].id
      return true
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

export default Adoption