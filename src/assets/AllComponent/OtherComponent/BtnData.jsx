import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const BtnData = () => {
    const data = useLoaderData([]);

    if (!data) {
        return <p>Loading...</p>; // 🔹 যদি data লোড না হয়, তাহলে লোডিং দেখাবে।
    }

    return (
        <div>
            {
                data.map(btn => (
                    <div key={btn.category} className='space-y-5 w-full border-2 text-center hover:bg-gray-200'>
                        {/* ✅ NavLink শুধু এখানেই ব্যবহার হবে */}
                        <NavLink to={`/category/${btn.category}`} className="block text-center bg-gray-300 p-2 rounded-md hover:bg-gray-400">
                            {btn.category}
                        </NavLink>
                    </div>
                ))
            }
        </div>
    );
};

export default BtnData;
