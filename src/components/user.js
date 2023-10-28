import React from "react"
import AddUser from "./adduser"
import { IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5'

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ediForm: false
        }
    }
    user = this.props.user
    render() {
        return (
            <div className="user">
                <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className="delete-icon"/>
                <IoHammerSharp onClick={() => {
                    this.setState({
                        ediForm: !this.state.ediForm
                    })
                }} className="edit-icon"/>
                <h3>{this.user.first_name} {this.user.last_name}</h3>
                <img src={this.user.avatar} />
                <p>{this.user.email}</p>
                <b>{this.user.isHappy ? 'Happy :)' : 'Not so :('}</b>

                {this.state.ediForm && <AddUser user={this.user} onAdd={this.props.onEdit} /> }
                </div>
        )
    }
}

export default User