import React from "react";
import { data } from "../utils/data";
import CategoryCard from "../components/Category";

const HomeScreen = () => {
    return (
        <section className="px-12 py-4 mt-3">
            <div className="flex justify-center items-center">
                <h1 className="text-2xl font-serif md:text-3xl lg:text-4xl">
                    Event Listing App
                </h1>
            </div>
            <section className="mx-2 py-2 flex flex-col md:flex-row md:flex-wrap items-center md:justify-center">
                {data.map((category, index) => (
                    <CategoryCard
                        key={index}
                        index={index}
                        categoryName={category.category}
                        apiLink={category.data}
                    />
                ))}
            </section>
        </section>
    );
};

export default HomeScreen;
