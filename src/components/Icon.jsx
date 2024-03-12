import React, { useState } from 'react';
import { icons } from 'lucide-react';

const Icon = ({ name, color, size }) => {
    const [hovered, setHovered] = useState(false);
    const LucideIcon = icons[name];

    // สีที่ใช้เมื่อ Hover
    const hoverColor = "#b88c52";

    return (
        <div
            style={{ color: hovered ? hoverColor : color }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <LucideIcon size={size} />
        </div>
    );
};

export default Icon;