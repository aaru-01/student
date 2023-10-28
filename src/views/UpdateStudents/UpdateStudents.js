import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./UpdateStudents.css"
import { useParams } from 'react-router-dom'




function UpdateStudents() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const { id } = useParams();

  const loadStudent = async () => {
    const response = await axios.get(`/student/${id}`)

    const { name, age, mobile, email } = response?.data?.data

    setName(name)
    setAge(age)
    setMobile(mobile)
    setEmail(email)
  }


  useEffect(() => {
    loadStudent();
  }, [])

  const updateStudent = async () => {

    const updatedDetails = {
      name,
      age,
      mobile,
      email
    }

    const response = await axios.put(`/student/${id}`, updatedDetails)

    alert(response?.data?.message)
  }

  return (
    <div>
      <h2 className='heading-add-studdent'>Update Students</h2>
      <form className='Main-form-container'>

        <input type='text'
          placeholder='Enter Name'
          className='input-box'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }} /><br />

        <input type='text'
          placeholder='Enter Age'
          className='input-box'
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }} /><br />

        <input type='text'
          placeholder='Enter Mobile Number'
          className='input-box'
          value={mobile} onChange={(e) => {
            setMobile(e.target.value);
          }} /><br />

        <input type='text'
          placeholder='Enter Email'
          className='input-box'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }} /><br />

        <button type='button'
          className='btn-add-student'
          onClick={updateStudent}>Update Students</button>
      </form>
    </div>
  )
}

export default UpdateStudents
