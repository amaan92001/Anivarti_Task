import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MembersDirectory() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/members').then((response) => {
            setMembers(response.data);
        });
    }, []);

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-2xl mx-auto mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Community Members</h2>
            <ul className="mt-4">
                {members.map((member) => (
                    <li key={member._id} className="p-2 border-b border-gray-300">
                        {member.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MembersDirectory;