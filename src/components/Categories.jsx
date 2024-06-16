
import React from 'react';

const Categories = () => {
    const categories = ['All', 'Music', 'Gaming', 'News'];

    return (
        <div className='flex flex-row gap-1'>
            {categories.map(category => (
                <div key={category} className="px-4 py-2 rounded-[20px] bg-[#282828]">
                    {category}
                </div>
            ))}
        </div>
    );
}

export default Categories;
