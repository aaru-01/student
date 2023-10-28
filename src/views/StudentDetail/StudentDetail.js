import React, { useEffect, useState } from 'react'
import  "./StudentDetail.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'

function StudentDetail() {

  const [student, setStudent] = useState({})
    const { id } = useParams()

    const loadStudent = async () =>{
const response = await axios.get(`/student/${id}`);
setStudent(response?.data?.data)
    }

    useEffect(()=>{
 loadStudent();
    },[])
        
  return (
    <div>
         <h1 className='text-center'>Student Detail</h1>
      <div className='main-student-detail-container'>

  <h2 className='text-center'>Student ID: {id}</h2>
  <h3 className='text-center'>Name: {student?.name}</h3>
  <h3 className='text-center'>Age: {student?.age}</h3>
  <h3 className='text-center'>Mobile: {student?.mobile}</h3>
  <h3 className='text-center'>Email: {student?.email}</h3>
    </div>
    </div>
  )
}

export default StudentDetail
