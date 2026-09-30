import { useRef } from "react";

const GlowCard = ({ card, index, children }) => {

    const cardRefs = useRef([]);


    const handleMouseMove = (index) => (e) => {

        const card = cardRefs.current[index];
        if (!card) return;


        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;


        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

        angle = (angle + 360) % 360;

        card.style.setProperty("--start", angle + 60);
    };

    return (
        <div
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={handleMouseMove(index)}
            className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
        >
            <div className="glow"></div>
            <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }, (_, i) => (
                    <svg key={i} viewBox="0 0 24 24" className="size-5 fill-wisteria" aria-hidden="true">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                ))}
            </div>
            {children}

            <div className="mb-5">
                <p className="text-ink text-lg">{card.review}</p>
            </div>

        </div>
    );
};

export default GlowCard;