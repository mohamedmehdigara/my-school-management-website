import React from 'react';

const Stage = ({ name, subjects }) => {
  return (
    <div>
      <h3>{name}</h3>
      <ul>
        {subjects.map((subject) => (
          <li key={subject.id}>{subject.name}</li>
        ))}
      </ul>
    </div>
  );
};

const SchoolSubjects = () => {
  const stages = [
    {
      id: 1,
      name: 'الابتدائية',
      subjects: [
        { id: 1, name: 'الرياضيات' },
        { id: 2, name: 'اللغة العربية' },
        { id: 3, name: 'العلوم' },
      ],
    },
    {
      id: 2,
      name: 'المتوسطة',
      subjects: [
        { id: 4, name: 'الرياضيات' },
        { id: 5, name: 'اللغة العربية' },
        { id: 6, name: 'العلوم' },
        { id: 7, name: 'التاريخ' },
      ],
    },
    {
      id: 3,
      name: 'الثانوية',
      subjects: [
        { id: 8, name: 'الرياضيات' },
        { id: 9, name: 'اللغة العربية' },
        { id: 10, name: 'الفيزياء' },
        { id: 11, name: 'الكيمياء' },
        { id: 12, name: 'الأدب' },
      ],
    },
  ];

  return (
    <div>
      <h2>المراحل الدراسية والمواد</h2>
      {stages.map((stage) => (
        <Stage key={stage.id} name={stage.name} subjects={stage.subjects} />
      ))}
    </div>
  );
};

export default SchoolSubjects;
