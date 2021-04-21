import pg from "pg"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/pet-adoption-website-development"
})

class Adoption {
  constructor({ id, name, phoneNumber, phone_number, email, homeStatus, home_status, applicationStatus, application_status, adoptablePetId, adoptable_pet_id}) {
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
      const 
    } catch (error) {

    }
  }
}

export default Adoption