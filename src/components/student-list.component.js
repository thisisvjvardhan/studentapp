import React from 'react'
import axios from 'axios'
export default class StudentList extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            students:[]
        }
    }
    deleteStudent(id){
        axios.delete("http://localhost:3000/student/"+id)
        this.showItems()
    }
    showItems()
    {
        axios.get("http://localhost:3000/student")
        .then(res=>
        {
            this.setState({students:res.data})
            console.log(res.data)
        })
    }
    componentDidMount()
    {
        this.showItems()
        }
    render()
    {
        return(
            <>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.students.map(student=>
                        <tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td><button className='btn btn-primary'>Edit</button></td>
                            <td><button className='btn btn-info'>Info</button></td>
                            <td><buttton className='btn btn-danger' onClick={()=>this.deleteStudent(student.id)}>Delete</buttton></td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
            </>
        )
    }
}