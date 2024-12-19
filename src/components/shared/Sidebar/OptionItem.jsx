import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const OptionItem = ({ Icon, name, onClick }) => {
    return (
        <Button
            className="w-[100%]"
            onClick={onClick}
        >
            <span className="icon flex items-center justify-center rounded-md">
                <Icon className="h-[1.75rem] w-[1.75rem]" />
            </span>
            <div className="ml-3">{name}</div>
        </Button>
    );
};

OptionItem.propTypes = {
    Icon: PropTypes.elementType.isRequired, // The React icon component
    name: PropTypes.string.isRequired, // Button label
    onClick: PropTypes.func, // Optional click handler
};

export default OptionItem;
