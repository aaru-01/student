import { useEffect, useState } from "react"
import "./Home.css"
import axios from "axios"


export default function Home() {

  const [students, setStudents] = useState([])

  const loadStudents = async () => {
    const response = await axios.get('/students')
    setStudents(response?.data?.data)
  }


  const deleteStudent = async (id) => {
    const response = await axios.delete(`/student/${id}`);
    alert(response?.data?.message)
    loadStudents()
  }

  useEffect(() => {
    loadStudents();
  }, [])
  // const students = [
  //   {
  //     "_id": "653254186f31000253b36a39",
  //     "name": "Aarti",
  //     "age": 22,
  //     "mobile": "3546576879",
  //     "email": "aarti23@gmail.com",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "653254b16f31000253b36a3b",
  //     "name": "Mrunal",
  //     "age": 22,
  //     "mobile": "9876543243",
  //     "email": "mruna23@gmail.com",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "653254d16f31000253b36a3d",
  //     "name": "JAgruti",
  //     "age": 20,
  //     "mobile": "9987656789",
  //     "email": "jaggu675@gmail.com",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "65325ef78f87f9290cb500ea",
  //     "name": "anvika",
  //     "age": 23,
  //     "mobile": "4871344566",
  //     "email": "anu1111@gmail.com",
  //     "__v": 0
  //   }
  // ]
  return (
    <>
      <h1 className="text-center card">All Students</h1>
      <div className="main-container">
        <div>
          {
            students?.map((student, index) => {

              const { _id, name, age, mobile, email } = student
              return <div className="main-card-container"
                key={index}>
                {/* // onClick={() => {
                //   window.open(`/student-detail/${_id}`, `_blank`)
                // }}> */}

                <h2 className="text-center">Name: {name} is {age} years olds</h2>
                <h4 className="text-center">📞 Mobile number: {mobile}</h4>
                <h4 className="text-center">✉ Email Id: {email}</h4>
                <a href={`/student-detail/${_id}`} target='_blank' className="link-btn-view-detail">View Details</a>
                <br />
                <button type="button"
                  className="btn-delete" onClick={() => { deleteStudent(_id) }}>Delete</button>

                <a href={`/updatestudents/${_id}`} target='_blank' className="btn-edit-student">Edit</a>
              </div>
            })
          }
        </div>
      </div>

    </>
  )
}