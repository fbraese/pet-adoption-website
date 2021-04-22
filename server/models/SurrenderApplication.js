import pg from "pg"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/pet-adoption-website-development"
})

class SurrenderApplication {
  constructor({ id, name, phoneNumber, phone_number, email, adoptablePetId, adoptable_pet_id, status }) {
    this.id = id
    this.name = name
    this.phoneNumber = phoneNumber || phone_number
    this.email = email
    this.adoptablePetId = adoptablePetId || adoptable_pet_id
    this.status = status
  }

  async save(id) {
    try {
      const queryString = "INSERT INTO surrender_applications (name, phone_number, email, adoptable_pet_id, status) VALUES ($1, $2, $3, $4, $5) RETURNING id;"
      const result = await pool.query(queryString, [this.name, this.phoneNumber, this.email, id, this.status])
      this.id = result.rows[0].id
      return true
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

export default SurrenderApplication