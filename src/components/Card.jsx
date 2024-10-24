/* eslint-disable react/prop-types */

const Card = ({ title, onDragStart, onDragEnd }) => {
    return (
        <div
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            className="p-4 bg-black outline-none text-white rounded-lg shadow-md m-2 cursor-pointer"
        >
            {title}
        </div>
    );
};

export default Card