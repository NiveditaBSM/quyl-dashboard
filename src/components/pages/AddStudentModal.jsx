import { useState } from 'react';
import PropTypes from 'prop-types';

const AddStudentModal = ({ isOpen, onClose, onAddStudent }) => {
    const [name, setName] = useState('');
    const [cohort, setCohort] = useState('');
    const [courses, setCourses] = useState([]);
    const [dateJoined, setDateJoined] = useState('');
    // const [lastLogin, setLastLogin] = useState('');
    // const [status, setStatus] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStudent = {
            name,
            cohort,
            courses: courses.map(course => ({ name: course.trim(), icon_path: '/default.png' })), // Adjust as needed
            date_joined: dateJoined,
            // last_login: lastLogin,
            status: true
        };
        onAddStudent(newStudent);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-md w-1/3">
                <h2 className="text-xl font-bold mb-4">Add New Student</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Cohort</label>
                        <input
                            type="text"
                            value={cohort}
                            onChange={(e) => setCohort(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Courses</label>
                        <select
                            multiple
                            value={courses}
                            onChange={(e) => setCourses(Array.from(e.target.selectedOptions, option => option.value))}
                            className="w-full p-2 border rounded h-20"
                            required
                        >
                            <option value="CBSE 9 Science">CBSE 9 Science</option>
                            <option value="CBSE 9 Science">CBSE 9 Math</option>

                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Date Joined</label>
                        <input
                            type="date"
                            value={dateJoined}
                            onChange={(e) => setDateJoined(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button type="button" onClick={onClose} className="mr-2 p-2 bg-gray-300 rounded">Cancel</button>
                        <button type="submit" className="p-2 bg-gray-300 rounded">Add Student</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
AddStudentModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onAddStudent: PropTypes.func.isRequired,
};

export default AddStudentModal;