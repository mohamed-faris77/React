import React, { useState } from 'react';

const initialStudents = [
  { id: 1, name: "Faris", age: 21 },
  { id: 2, name: "Fasalu", age: 26 },
  { id: 3, name: "Yadhu", age: 22 },
  { id: 4, name: "Joel", age: 21 }
];

const StudentList = () => {
  const [students, setStudents] = useState(initialStudents);

  const removeStudent = (id) => {
    const updateList = students.filter(student => student.id !== id);
    setStudents(updateList);
  };

  return (
    <div>
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>Onnulla</p>
      ) : (
        <ul>
          {students.map(stud => (
            <li key={stud.id}>
              {stud.name} - Age: {stud.age}
              <button onClick={() => removeStudent(stud.id)} style={{ marginLeft: '10px' }}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentList;
