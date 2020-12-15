import { v4 as uuid } from 'uuid'

// 👉 the shape of the list of friends from API
const teamMembers = [
    {
      id: uuid(),
      name: "hairo",
      email: "hairone240@gmail.com",
      role: "fullstack",
    },
]

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: teamMembers })
  },
  post(url, { name, email, role }) {
    const newMember = {id: uuid(), name, email, role }
    return Promise.resolve({ status: 200, success: true, data: newMember })
  }
}