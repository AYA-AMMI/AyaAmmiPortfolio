import React, { useEffect, useRef } from 'react'

// Photo de profil avec anneaux animes - palette Ethereal Hues.
// Toutes les tailles sont en CSS (clamp + pourcentages) : la photo reste
// visible sur desktop, tablette et mobile.
const HeroExperience = () => {
    const particlesRef = useRef(null)

    useEffect(() => {
        const container = particlesRef.current
        if (!container) return
        container.innerHTML = ''
        const colors = ['#9f9fed', '#d4c1ec', '#736ced', '#f2dfd7']
        for (let i = 0; i < 24; i++) {
            const p = document.createElement('div')
            const size = Math.random() * 4 + 2
            p.style.cssText = `
                position:absolute;
                width:${size}px; height:${size}px;
                background:${colors[Math.floor(Math.random() * colors.length)]};
                border-radius:50%;
                left:${Math.random() * 100}%;
                bottom:-10px;
                opacity:${Math.random() * 0.5 + 0.3};
                animation:floatUp ${Math.random() * 8 + 6}s ${Math.random() * 6}s infinite ease-in-out;
                pointer-events:none;
            `
            container.appendChild(p)
        }
    }, [])

    return (
        <div className="hero-photo-root">
            <style>{`
                .hero-photo-root {
                    position: relative;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 40px 0;
                    overflow: hidden;
                }
                /* Taille de l'anneau exterieur : mobile -> desktop */
                .hero-photo-wrap {
                    position: relative;
                    width: clamp(240px, 78vw, 340px);
                    aspect-ratio: 1 / 1;
                }
                @media (min-width: 1280px) {
                    .hero-photo-wrap { width: clamp(420px, 33vw, 580px); }
                }
                .hero-photo-abs {
                    position: absolute;
                    top: 50%; left: 50%;
                    transform: translate(-50%, -50%);
                    border-radius: 50%;
                }
                @keyframes floatUp {
                    0%   { transform: translateY(0) scale(1); opacity: 0; }
                    10%  { opacity: 1; }
                    90%  { opacity: 0.4; }
                    100% { transform: translateY(-60vh) scale(0.3); opacity: 0; }
                }
                @keyframes floatAvatar {
                    0%,100% { transform: translate(-50%, -50%); }
                    50%     { transform: translate(-50%, calc(-50% - 12px)); }
                }
                @keyframes rotateSlow    { from { transform: translate(-50%,-50%) rotate(0deg); }   to { transform: translate(-50%,-50%) rotate(360deg); } }
                @keyframes rotateReverse { from { transform: translate(-50%,-50%) rotate(360deg); } to { transform: translate(-50%,-50%) rotate(0deg); } }
                @keyframes pulseGlow {
                    0%,100% { opacity: 0.55; transform: translate(-50%,-50%) scale(1); }
                    50%     { opacity: 0.9;  transform: translate(-50%,-50%) scale(1.08); }
                }
            `}</style>

            {/* Particules flottantes */}
            <div ref={particlesRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }} />

            <div className="hero-photo-wrap">

                {/* Halo lumineux */}
                <div className="hero-photo-abs" style={{
                    width: '112%', height: '112%',
                    background: 'radial-gradient(circle at center, #d4c1ecaa 0%, #9f9fed55 45%, #f2dfd766 70%, transparent 100%)',
                    filter: 'blur(36px)',
                    animation: 'pulseGlow 3.5s ease-in-out infinite',
                    pointerEvents: 'none',
                    zIndex: 0,
                }} />

                {/* Anneau exterieur tournant avec 4 points */}
                <div className="hero-photo-abs" style={{
                    width: '100%', height: '100%',
                    border: '1.5px dashed #9f9fed',
                    animation: 'rotateSlow 16s linear infinite',
                    pointerEvents: 'none',
                    zIndex: 2,
                }}>
                    {[
                        { top: '0%',   left: '50%',  color: '#736ced' },
                        { top: '50%',  left: '100%', color: '#9f9fed' },
                        { top: '100%', left: '50%',  color: '#736ced' },
                        { top: '50%',  left: '0%',   color: '#9f9fed' },
                    ].map((d, i) => (
                        <div key={i} style={{
                            position: 'absolute',
                            width: '10px', height: '10px',
                            borderRadius: '50%',
                            background: d.color,
                            boxShadow: `0 0 10px ${d.color}`,
                            top: d.top, left: d.left,
                            transform: 'translate(-50%, -50%)',
                        }} />
                    ))}
                </div>

                {/* Anneau interieur inverse */}
                <div className="hero-photo-abs" style={{
                    width: '80%', height: '80%',
                    border: '1px solid #d4c1ec',
                    animation: 'rotateReverse 10s linear infinite',
                    pointerEvents: 'none',
                    zIndex: 2,
                }} />

                {/* Photo flottante, centree */}
                <div className="hero-photo-abs" style={{
                    width: '72%', height: '72%',
                    animation: 'floatAvatar 4s ease-in-out infinite',
                    zIndex: 5,
                }}>
                    {/* Bordure degradee */}
                    <div style={{
                        position: 'absolute',
                        inset: '-4px',
                        borderRadius: '50%',
                        background: 'conic-gradient(from 0deg, #736ced, #9f9fed, #d4c1ec, #f2dfd7, #736ced)',
                    }} />
                    <div style={{
                        position: 'relative',
                        width: '100%', height: '100%',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        boxShadow: '0 10px 40px #736ced40',
                    }}>
                        <img
                            src="/images/face.jpeg"
                            alt="Aya AMMI"
                            style={{
                                width: '100%', height: '100%',
                                objectFit: 'cover',
                                objectPosition: '50% 8%',
                            }}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroExperience