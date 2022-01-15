import { useEffect, useState } from "react";

const Square = ({ id, value, onClick }) => {
    const [editable, setEditable] = useState("");

    useEffect(() => {
        if (value === null) {
            setEditable(" editable");
        }
    }, []);

    let borderClass = "";

    if (id % 3 === 2 && id % 9 !== 8) {
        borderClass += " right-boundary";
    }

    if (Math.floor(id / 9) === 2 || Math.floor(id / 9) === 5) {
        borderClass += " bottom-boundary";
    }

    return (
        <button
            className={"square" + editable + borderClass}
            id={id}
            onClick={onClick}
        >
            {value}
        </button>
    );
};

export default Square;
