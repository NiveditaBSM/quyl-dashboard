import PropTypes from 'prop-types';

const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
};

const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
    const formattedDate = date.toLocaleDateString('en-GB', dateOptions);
    const formattedTime = date.toLocaleTimeString('en-GB', timeOptions);
    return `${formattedDate} ${formattedTime}`;
};

const StudentRow = ({ student }) => {
    return (
        <tr className='border-b'>
            <td>{student.name}</td>
            <td>{student.cohort}</td>
            <td className='whitespace-nowrap'>
                {student.courses.map((course, index) => (
                    <span key={index} className='inline-flex items-center mr-2 bg-slate-100 rounded-md p-1 pr-4'>
                        <img
                            src={`${import.meta.env.BASE_URL}assets/images${course.icon_path}`}
                            alt={course.name}
                            className='h-5 w-5 rounded-s mr-1'
                        />
                        {course.name}
                    </span>
                ))}
            </td>
            <td>{formatDate(student.date_joined)}</td>
            <td>{formatDateTime(student.last_login)}</td>
            <td className='text-center'>
                <span style={{ color: student.status === true ? "#4AEA40" : "#EA4E40" }} className='text-lg'>
                    ●
                </span>
            </td>
        </tr>
    );
};

StudentRow.propTypes = {
    student: PropTypes.shape({
        name: PropTypes.string.isRequired,
        cohort: PropTypes.string.isRequired,
        courses: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                icon_path: PropTypes.string.isRequired,
            })
        ).isRequired,
        date_joined: PropTypes.string.isRequired,
        last_login: PropTypes.string.isRequired,
        status: PropTypes.bool.isRequired,
    }).isRequired,
};

export default StudentRow;