import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const IndeterminateCheckbox = ({ indeterminate, className = "", ...rest }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (typeof indeterminate === "boolean" && !rest.checked) {
            ref.current.indeterminate = indeterminate;
        }
    }, [ref, indeterminate, rest.checked]);

    return (
        <input
            type="checkbox"
            ref={ref}
            className={className + " cursor-pointer"}
            {...rest}
        />
    );
};

IndeterminateCheckbox.propTypes = {
    indeterminate: PropTypes.bool,
    className: PropTypes.string,
};

export default IndeterminateCheckbox;
