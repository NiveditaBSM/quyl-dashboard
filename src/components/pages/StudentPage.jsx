import { useState } from 'react';
import StudentTable from "./StudentTable";
import AddStudentModal from './AddStudentModal';
import { useDispatch } from 'react-redux';
import { addStudent } from '../../features/studentSlice';

const StudentPage = () => {
    const [cohortFilter, setCohortFilter] = useState('AY 2024-25');
    const [courseFilter, setCourseFilter] = useState('CBSE 9');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();

    const handleCohortChange = (e) => {
        console.log('cohort value changed')
        setCohortFilter(e.target.value);
    };

    const handleCourseChange = (e) => {
        console.log('course value changed')
        setCourseFilter(e.target.value);
    };

    const handleAddStudent = (newStudent) => {
        dispatch(addStudent(newStudent));
    };

    return (
        <div className="m-5 bg-white h-screen p-5 rounded-md text-[#3F526E] overflow-y-auto">
            <div className="flex justify-between items-center font-bold text-base leading-5 tracking-wide">
                <div className="flex justify-between items-center h-9 m">
                    <select className="ml-2 p-2 pl-2 pr-2 w-32 border rounded tracking-wide text-center" value={cohortFilter} onChange={handleCohortChange}>
                        <option value="AY 2024-25">AY 2024-25</option>
                        <option value="AY 2025-26">AY 2025-26</option>
                    </select>
                    <select className="ml-2 p-2 pl-2 pr-2 w-22 border rounded tracking-wide text-center" value={courseFilter} onChange={handleCourseChange}>
                        <option value="CBSE 9">CBSE 9</option>
                        <option value="CBSE 8">CBSE 8</option>
                    </select>
                </div>
                <button className="flex justify-between items-center tracking-wide p-1" onClick={() => setIsModalOpen(true)}>
                    <span className="text-[#3F526E] flex justify-center gap-3 bg-[#E9EDF1] p-2 rounded-md">
                        <div className="font-bold text-lg leading-6 px-2"> + Add new Student</div>
                    </span>
                </button>
            </div>

            <div className="p-2 mb-5 mt-5 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 150px)' }}>
                <StudentTable cohortFilter={cohortFilter} courseFilter={courseFilter} />
            </div>

            <AddStudentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddStudent={handleAddStudent}
            />

        </div>
    )
}

export default StudentPage;