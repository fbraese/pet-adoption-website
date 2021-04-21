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

  save() {

  }
}

export default SurrenderApplication