import React from "react"
import Header from "./components/header"
import Users from "./components/users"
import AddUser from "./components/adduser"
import axios from "axios"

const baseUrl = "https://reqres.in/api/users?page=1"

class App extends React.Component {
  constructor(props) {
      super(props)

      axios.get(baseUrl).then((res) => {
        this.setState({ users:res.data.data })
      })

      this.state = {
          users: [
             
        ]
    }
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
}
  render() {
    return (<div>
      <Header title="User list" />
      <main>
        <Users users= {this.state.users} onEdit={this.editUser} onDelete={this.deleteUser} />
      </main>
      <aside>
        <AddUser onAdd={this.addUser} />
      </aside>
    </div>)
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })
  }

  editUser(user) {
    let allUsers = this.state.users
    allUsers[user.id - 1] = user

    this.setState({ users: [] }, () => {
      this.setState({users: [...allUsers] })
    })
  }

  addUser (user) {
    console.log(user)
    const id = this.state.users. length + 1
    this.setState({ users: [...this.state.users, { id, ...user }] })
  }
}

export default App