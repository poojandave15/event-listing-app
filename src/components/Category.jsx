import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ categoryName, apiLink, index }) => {
    const navigate = useNavigate();
    const imageSource =
        "https://plus.unsplash.com/premium_photo-1664443577542-06294d3354ff?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div
            onClick={() => navigate(`/listing/${index}`)}
            className="w-52 md:w-80 h-auto bg-contain rounded-lg shadow-md flex flex-col gap-y-3 justify-start mx-5 my-5 object-cover hover:cursor-pointer border-2"
        >
            <img
                src={imageSource}
                alt={`event`}
                className="w-auto rounded-md px-2 py-2 h-36 md:h-64 object-cover"
            />
            <p className="text-2xl font-serif text-center px-2 mb-4">
                {categoryName}
            </p>
        </div>
    );
};

export default CategoryCard;
