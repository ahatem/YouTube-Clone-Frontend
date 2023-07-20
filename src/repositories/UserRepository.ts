import type { User } from '@/models/Models'
import { faker } from '@faker-js/faker'

export default class UserRepository {
  private users: User[] = []

  constructor() {
    for (let i = 0; i < 10; ++i) this.users.push(this.createRandomUser())
  }

  createRandomUser(): User {
    const sex = faker.person.sexType()
    const firstName = faker.person.firstName(sex)
    const lastName = faker.person.lastName()
    const email = faker.internet.email({ firstName, lastName })
    const username = `${firstName} ${lastName}`

    return {
      username: username.replace(' ', ''),
      email: email,
      password: faker.internet.password(),
      profile: {
        name: username,
        avatar: faker.internet.avatar()
      },
      interests: [],
      channels: []
    }
  }
}
