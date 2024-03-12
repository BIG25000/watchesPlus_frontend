import { icons } from 'lucide-react';

const IconNoHover = ({ name, color, size }) => {
    const LucideIcon = icons[name];

    return <LucideIcon color={color} size={size} />;
};

export default IconNoHover;