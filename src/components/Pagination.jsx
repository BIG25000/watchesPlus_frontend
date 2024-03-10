import { useState } from "react";
import Icon from "./Icon";
import Button from "./Button"

export default function Pagination() {
    const [active, setActive] = useState(1);

    const next = () => {
        if (active === 5) return;
        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;
        setActive(active - 1);
    };

    return (
        <div className="flex items-center gap-4">
            <Button
                onClick={prev}
            >
                <Icon name='ArrowLeft' />
            </Button>
            <div className="join">
                <button className={`join-item btn ${active === 1 ? 'btn-active' : ''}`}>1</button>
                <button className={`join-item btn ${active === 2 ? 'btn-active' : ''}`}>2</button>
                <button className={`join-item btn ${active === 3 ? 'btn-active' : ''}`}>3</button>
                <button className={`join-item btn ${active === 4 ? 'btn-active' : ''}`}>4</button>
                <button className={`join-item btn ${active === 5 ? 'btn-active' : ''}`}>5</button>
            </div>
            <Button
                onClick={next}
            >
                <Icon name='ArrowRight' />
            </Button>
        </div>
    );
}