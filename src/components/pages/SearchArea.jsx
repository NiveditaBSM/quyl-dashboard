import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const StudentRow = ({ student }) => {
    return (
        <tr>
            <td className="py-2 px-4 border-b">{student.name}</td>
            <td className="py-2 px-4 border-b">{student.cohort}</td>
            <td className="py-2 px-4 border-b">{student.courses.join(', ')}</td>
            <td className="py-2 px-4 border-b">{student.dateJoined}</td>
            <td className="py-2 px-4 border-b">{student.lastLogin}</td>
            <td className="py-2 px-4 border-b">{student.status}</td>
        </tr>
    );
};

StudentRow.propTypes = {
    student: PropTypes.shape({
        name: PropTypes.string.isRequired,
        cohort: PropTypes.string.isRequired,
        courses: PropTypes.arrayOf(PropTypes.string).isRequired,
        dateJoined: PropTypes.string.isRequired,
        lastLogin: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
    }).isRequired,
};

const SearchArea = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // Fetch the list of students from an API or other source
        // For now, we will use a static list
        const fetchedStudents = [
            {
                name: 'John Doe',
                cohort: 'Cohort 1',
                courses: ['Course 1', 'Course 2'],
                dateJoined: '2023-01-01',
                lastLogin: '2023-01-10',
                status: 'Active',
            },
            // Add more student objects as needed
        ];
        setStudents(fetchedStudents);
    }, []);

    return (
        <div className="searchArea p-4 bg-white">
            <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-4">
                    <select className="p-2 border rounded bg-white">
                        <option value="">Filter 1</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                    </select>
                    <select className="p-2 border rounded bg-white">
                        <option value="">Filter 2</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                    </select>
                </div>
                <button className="flex items-center p-2 bg-blue-500 text-white rounded">
                    <span className="mr-2">Add Student</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-2 px-4 border-b">Student Name</th>
                        <th className="py-2 px-4 border-b">Cohort</th>
                        <th className="py-2 px-4 border-b">Courses</th>
                        <th className="py-2 px-4 border-b">Date Joined</th>
                        <th className="py-2 px-4 border-b">Last Login</th>
                        <th className="py-2 px-4 border-b">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <StudentRow key={index} student={student} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SearchArea;