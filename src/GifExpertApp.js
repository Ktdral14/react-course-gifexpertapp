import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["Full Metal Alchemist   "]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory
                categories={categories}
                setCategories={setCategories}
            />
            <hr />
            <ol>
                {categories.map((category) => (
                    <GifGrid 
                        key={category} 
                        category={category} 
                    />
                ))}
            </ol>
        </>
    );
};
