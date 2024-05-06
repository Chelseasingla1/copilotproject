import { faker } from "@faker-js/faker";
const height = 200;
const width = 350;
const stafflist = [{
  key: 0,
  image: faker.image.abstract(width, height, true),
  name: faker.company.buzzPhrase(),
  position: faker.person.jobTitle(),
  jobArea: faker.name.jobArea(),
  rating: (
    <p>
      <img
        src={process.env.PUBLIC_URL + "/star-solid.svg"}
        alt="star"
        width={20}
        height={20}
      />
      5
    </p>
  ),
  author: faker.person.firstName()
},
{
  key: 1,
  image: faker.image.business(width, height, true),
  name: faker.company.buzzPhrase(),
  position: faker.person.jobTitle(),
  jobArea: faker.name.jobArea(),
  rating: (
    <p>
      <img
        src={process.env.PUBLIC_URL + "/star-solid.svg"}
        alt="star"
        width={20}
        height={20}
      />
      5
    </p>
  ),
  author: faker.person.firstName()
},
{
  key: 2,
  image: faker.image.transport(width, height, true),
  name: faker.company.buzzPhrase(),
  position: faker.person.jobTitle(),
  jobArea: faker.name.jobArea(),
  rating: (
    <p>
      <img
        src={process.env.PUBLIC_URL + "/star-solid.svg"}
        alt="star"
        width={20}
        height={20}
      />
      5
    </p>
  ),
  author: faker.person.firstName()


},
{
  key: 3,
  image: faker.image.sports(width, height, true),
  name: faker.person.firstName(),
  position: faker.person.jobTitle(),
  jobArea: faker.name.jobArea(),
  rating: (
    <p>
      <img
        src={process.env.PUBLIC_URL + "/star-solid.svg"}
        alt="star"
        width={20}
        height={20}
      />
      5
    </p>
  ),
  author: faker.person.firstName()

},
{
  key: 4,
  image: faker.image.nature(width, height, true),
  name: faker.person.firstName(),
  position: faker.person.jobTitle(),
  jobArea: faker.name.jobArea(),
  rating: (
    <p>
      <img
        src={process.env.PUBLIC_URL + "/star-solid.svg"}
        alt="star"
        width={20}
        height={20}
      />
      5
    </p>
  ),
  author: faker.person.firstName()

},
{
  key: 5,
  image: faker.image.food(width, height, true),
  name: faker.person.firstName(),
  position: faker.person.jobTitle(),
  jobArea: faker.name.jobArea(),
  rating: (
    <p>
      <img
        src={process.env.PUBLIC_URL + "/star-solid.svg"}
        alt="star"
        width={20}
        height={20}
      />
      4.9
    </p>
  ),
  author: faker.person.firstName()

}
]

export default stafflist;