import React from "react";
import User from "./user"

class Users extends React.Component {
    
    render() {
        if(this.props.users.length > 0)
        return (<div>
            {this.props.users.map((el) => (
                <User onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={el.id} user={el} />
            ))}
        </div>)
        else
        return (<div className=""user>
           <h3>No users found</h3>
        </div>)
    }
}

export default Users