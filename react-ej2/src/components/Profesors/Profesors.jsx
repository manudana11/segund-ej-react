import React, { useState } from 'react'

const Profesors = () => {
    const teachers = [{name:'Sofia'}, {name:'Yolanda'}, {name:'Bob'}, {name:'Pedro'}, {name:'Maria'}];
    const [name, setName] = useState('Sofia');
    const teachList = teachers.map((teacher, i) =>{
        return <li onClick={() => setName(teacher.name)} key={i}>{teacher.name}</li>
    })
  return (
    <div>
        <h2>Teachers name: {name}</h2>
        <ul>
            {teachList}
        </ul>
    </div>
  )
}

export default Profesors