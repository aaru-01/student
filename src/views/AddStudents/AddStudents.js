import React, { useState } from 'react'

import "./AddStudents.css"
import axios from 'axios'

function AddStudents() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const addStudent = async () => {
    if (!name || !age || !mobile || !email) {
      alert('Please field all the fields')
      return
    }

    const student = {
      name,
      age,
      mobile,
      email,
    }

    const response = await axios.post('/student', student);
    alert(response.data.message)

    setName('')
    setAge('')
    setMobile('')
    setEmail('')
  }

  return (
    <div>
      <h2 className='heading-add-studdent'>Add Students Here</h2>
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
          onClick={addStudent}>Add Students</button>
      </form>
    </div>
  )
}

export default AddStudents
