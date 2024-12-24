import StudentRow from './StudentRow';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../../features/studentSlice';

const StudentTable = ({ cohortFilter, courseFilter }) => {
    const dispatch = useDispatch();
    const students = useSelector((state) => state.students.data.data) ?? [];
    const status = useSelector((state) => state.students.status);
    const error = useSelector((state) => state.students.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchStudents());
        }
    }, [dispatch, status]);

    console.log('Data:', students);
    console.log('Cohort Filter:', cohortFilter);
    console.log('Course Filter:', courseFilter);

    const filteredStudents = students.filter(student =>
        student.cohort === cohortFilter && student.courses.some(course => course.name.includes(courseFilter))
    );
    console.log('Filtered Students:', filteredStudents);

    if (status === 'loading') {
        return <p className='p-2'>Loading...</p>;
    }

    if (status === 'failed') {
        return <p className='p-2'>Error: {error}</p>;
    }

    return (
        <table border="1" cellPadding="8" className='w-full border-collapse text-black'>
            <thead className='font-bold text-xs text-700 border-b'>
                <tr className='text-left'>
                    <th>Student Name</th>
                    <th>Cohort</th>
                    <th>Courses</th>
                    <th>Date Joined</th>
                    <th>Last Login</th>
                    <th className='text-center'>Status</th>
                </tr>
            </thead>
            <tbody className='text-xs text-black text-400'>
                {filteredStudents.map((student, index) => (
                    <StudentRow key={index} student={student} />
                ))}
            </tbody>
        </table>
    );
};


// const students = [
//     {
//         name: "Anshuman Kashyap",
//         cohort: "AY 2024-25",
//         courses: [
//             { name: "CBSE 9 Science", icon: course1 },
//             { name: "CBSE 9 Math", icon: course2 },
//         ],
//         dateJoined: "17. Nov. 2024",
//         lastLogin: "17. Nov. 2024 4:16 PM",
//         status: "active",
//     },
//     {
//         name: "Bansi Dadhaniya",
//         cohort: "AY 2024-25",
//         courses: [
//             { name: "CBSE 9 Science", icon: course1 },
//             { name: "CBSE 9 Math", icon: course2 },
//         ],
//         dateJoined: "17. Nov. 2024",
//         lastLogin: "17. Nov. 2024 4:16 PM",
//         status: "inactive",
//     },

// ];
StudentTable.propTypes = {
    cohortFilter: PropTypes.string.isRequired,
    courseFilter: PropTypes.string.isRequired,
};

export default StudentTable;
