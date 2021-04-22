import pg from "pg"
import path from "path"
import LineReader from "line-reader"
import { fileURLToPath } from "url"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/pet-adoption-website-development"
})

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const petTypePath = path.join(__dirname, "../../pet_types.txt")
const adoptablePetsPath = path.join(__dirname, "../../adoptable_pets.txt")
const surrenderApplicationsPath = path.join(__dirname, "../../surrender_applications.txt")

class Seeder {
  static async seed() {
    //Pet Type Seeding
    LineReader.eachLine(petTypePath, async (line, last, done) => {
      const [type, img_url, description] = line.split(";")
      const queryString = "INSERT INTO pet_types ( type, img_url, description) VALUES ($1, $2, $3);"

      try {
        const result = await pool.query(queryString, [type, img_url, description])
        if (last) {
          console.log("Seeding Complete 1")

          //Adoptable Pet Seeding
          LineReader.eachLine(adoptablePetsPath, async (line, last, done) => {
            let [name, img_url, age, vaccination_status, adoption_story, available_for_adoption, pet_type_id] = line.split(";")
            if (age.trim() === "") {
              age = null
            }
            const queryString = "INSERT INTO adoptable_pets ( name, img_url, age, vaccination_status, adoption_story, available_for_adoption, pet_type_id ) VALUES ($1, $2, $3, $4, $5, $6, $7);"
            try {
              const result = await pool.query(queryString, [name, phone_number, email, adoptable_pet_id])
              if (last) {
                console.log("Seeding Complete 2")

                //SEEDING 3 for Surrender Applications
                LineReader.eachLine(surrenderApplicationsPath, async (line, last, done) => {
                  let [name, phone_number, email, adoptable_pet_id] = line.split(";")
                  const queryString = "INSERT INTO surrender_applications (name, phone_number, email, adoptable_pet_id) VALUES ($1, $2, $3, $4);"
                  try {
                    const result = await pool.query(queryString, [name, img_url, age, vaccination_status, adoption_story, available_for_adoption, pet_type_id])
                    if (last) {
                      console.log("Seeding Complete 3")

                      //Begin pool ends & catch blocks
                      pool.end()
                    }
                    done()
                  } catch (error) {
                    console.log(`Inside Surrender Applications seeder block: ${error}`)
                    pool.end()
                    done()
                  }
                }
                 catch (error) {
                  console.log(`Inside Error: ${error}`)
                  pool.end()
                  done()
                }
              })
        }
        done()
      } catch (error) {
        console.log(`Outside Error: ${error}`)
        //should there be another pool.end()?
        //pool.end()
        done()
      }
    })
  }
}

export default Seeder
