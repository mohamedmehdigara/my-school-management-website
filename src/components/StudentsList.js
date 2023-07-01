import React, { useState } from 'react';

const StudentsList = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'أحمد', grade: 'الصف الثاني' },
    { id: 2, name: 'فاطمة', grade: 'الصف الثالث' },
    { id: 3, name: 'محمد', grade: 'الصف الأول' },
  ]);

  const addStudent = () => {
    const newStudent = {
      id: Math.random(),
      name: 'اسم الطالب',
      grade: 'الصف',
    };
    setStudents([...students, newStudent]);
  };

  const deleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  return (
    <div>
      <h2>قائمة الطلاب</h2>
      <button onClick={addStudent}>إضافة طالب</button>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <span>الاسم: {student.name}</span>
            <span>الصف: {student.grade}</span>
            <button onClick={() => deleteStudent(student.id)}>حذف</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsList;
