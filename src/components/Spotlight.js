import React, { useEffect, useState } from 'react';

const Spotlight = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            setPosition({ x: clientX, y: clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="spotlight"
            style={{
                position: 'fixed',
                top: position.y,
                left: position.x,
                transform: 'translate(-50%, -50%)',
                width: '800px', // Adjust size as needed
                height: '800px', // Adjust size as needed
                background: `radial-gradient(800px circle at center, rgba(255,255,255,.06), transparent 40%)`,
                pointerEvents: 'none',
                zIndex: 9999,
            }}
        />
    );
};

export default Spotlight;

