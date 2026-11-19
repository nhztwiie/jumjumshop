:root {
    --bg-gradient: linear-gradient(135deg, #d8eef8 0%, #e6f4fa 48%, #dde9f2 100%);
    --glass-bg: rgba(248, 252, 255, 0.56);
    --glass-border: rgba(255, 255, 255, 0.85);
    --glass-highlight: rgba(255, 255, 255, 0.95);
    --glass-shadow: 0 12px 36px -6px rgba(14, 116, 144, 0.14), inset 0 1.5px 1.5px rgba(255, 255, 255, 0.9);
    --glass-blur: 22px;
    --text-main: #132536;
}

.dark {
    --bg-gradient: linear-gradient(135deg, #131c2e 0%, #19253b 50%, #1c2842 100%);
    --glass-bg: rgba(26, 39, 64, 0.62);
    --glass-border: rgba(125, 211, 252, 0.25);
    --glass-highlight: rgba(255, 255, 255, 0.14);
    --glass-shadow: 0 16px 40px -8px rgba(7, 13, 25, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.14);
    --text-main: #e8f1f8;
}

* {
    font-family: 'Plus Jakarta Sans', sans-serif;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

body {
    min-height: 100vh;
    margin: 0;
    background: var(--bg-gradient);
    color: var(--text-main);
    overflow-x: hidden;
    position: relative;
    transition: background 0.6s ease, color 0.4s ease;
}

#liquidCanvas {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    z-index: -2;
    pointer-events: none;
    transform: translateZ(0);
}

.liquid-orb {
    position: fixed;
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    filter: blur(75px);
    z-index: -1;
    animation: morphLiquid 15s infinite alternate ease-in-out;
    pointer-events: none;
    will-change: transform;
}
.orb-1 { width: 380px; height: 380px; background: rgba(14, 165, 233, 0.32); top: -70px; left: -60px; }
.orb-2 { width: 420px; height: 420px; background: rgba(56, 189, 248, 0.34); bottom: -80px; right: -60px; animation-delay: -5s; }
.orb-3 { width: 300px; height: 300px; background: rgba(125, 211, 252, 0.38); top: 45%; left: 40%; animation-delay: -9s; }
.dark .liquid-orb { opacity: 0.32; }

@keyframes morphLiquid {
    0% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; }
    50% { transform: translate3d(35px, -25px, 0) rotate(90deg) scale(1.08); border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    100% { transform: translate3d(-25px, 35px, 0) rotate(180deg) scale(0.95); border-radius: 35% 65% 55% 45% / 40% 60% 40% 60%; }
}

.liquid-glass {
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur)) saturate(175%);
    -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(175%);
    border: 1.5px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
    border-radius: 28px;
    position: relative;
    overflow: hidden;
    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease, background 0.25s ease;
}

.tactile-btn {
    transition: transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.18s ease, filter 0.18s ease;
    cursor: pointer;
    user-select: none;
    touch-action: manipulation;
}
.tactile-btn:active {
    transform: translateY(2px) scale(0.95) !important;
    box-shadow: inset 0 3px 8px rgba(15, 23, 42, 0.22) !important;
}

.tactile-card {
    transition: transform 0.24s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.24s ease;
}

@media (hover: hover) and (pointer: fine) {
    .tactile-btn:hover {
        transform: translateY(-2px) scale(1.02);
        box-shadow: 0 10px 20px -5px rgba(2, 132, 199, 0.25), inset 0 1px 1px rgba(255,255,255,0.85);
    }
    .tactile-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 14px 32px -8px rgba(2, 132, 199, 0.18), inset 0 1px 2px var(--glass-highlight);
    }
}

.spotlight-card::before {
    content: '';
    position: absolute;
    top: var(--mouse-y, -500px);
    left: var(--mouse-x, -500px);
    width: 310px;
    height: 310px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.65) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 0;
}
.dark .spotlight-card::before {
    background: radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, transparent 70%);
}

.ripple-ring {
    position: fixed;
    border-radius: 50%;
    border: 2px solid rgba(56, 189, 248, 0.85);
    background: radial-gradient(circle, rgba(255,255,255,0.45) 0%, transparent 70%);
    transform: scale(0);
    animation: rippleWave 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    pointer-events: none;
    z-index: 9999;
    will-change: transform, opacity;
}
@keyframes rippleWave {
    0% { transform: scale(0); opacity: 0.85; }
    100% { transform: scale(4); opacity: 0; }
}

@keyframes spinDisk {
    100% { transform: rotate(360deg); }
}
.spinning { animation: spinDisk 5s linear infinite; }

.glass-dock {
    background: rgba(248, 252, 255, 0.88);
    backdrop-filter: blur(18px) saturate(190%);
    -webkit-backdrop-filter: blur(18px) saturate(190%);
    border: 1.5px solid rgba(255, 255, 255, 0.95);
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.14), inset 0 1px 1px #fff;
    transform: translate3d(-50%, 0, 0);
}
.dark .glass-dock {
    background: rgba(22, 34, 56, 0.9);
    border: 1.5px solid rgba(56, 189, 248, 0.3);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
}

.dock-btn {
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.2s ease, color 0.2s ease;
    touch-action: manipulation;
}
@media (hover: hover) {
    .dock-btn:hover { transform: translateY(-4px) scale(1.08); }
}
.dock-btn:active { transform: translateY(2px) scale(0.92); }
.dock-btn.active {
    background: linear-gradient(135deg, #0284c7, #38bdf8);
    color: white;
    box-shadow: 0 6px 16px rgba(2, 132, 199, 0.4);
}

/* ==================== TỐI ƯU HIỆU NĂNG TRÊN ĐIỆN THOẠI & THIẾT BỊ YẾU ==================== */
@media (max-width: 768px), (pointer: coarse) {
    :root {
        --glass-bg: rgba(248, 252, 255, 0.84);
        --glass-blur: 10px;
        --glass-shadow: 0 6px 18px -4px rgba(14, 116, 144, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.85);
    }
    .dark {
        --glass-bg: rgba(24, 36, 58, 0.86);
        --glass-shadow: 0 8px 20px -4px rgba(7, 13, 25, 0.38), inset 0 1px 1px rgba(255, 255, 255, 0.1);
    }

    /* Giảm tải GPU filter blur lớn trên mobile */
    .liquid-orb {
        filter: blur(42px);
        animation-duration: 24s;
        will-change: auto;
    }
    .orb-1 { width: 240px; height: 240px; }
    .orb-2 { width: 260px; height: 260px; }
    .orb-3 { display: none; }

    /* Tắt hiệu ứng đèn rọi theo chuột trên màn hình cảm ứng */
    .spotlight-card::before {
        display: none !important;
    }

    .glass-dock {
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
    }
}

@media (prefers-reduced-motion: reduce) {
    .liquid-orb, .spinning, .ripple-ring {
        animation: none !important;
    }
}

@media print {
    body * { visibility: hidden; }
    #invoicePrintArea, #invoicePrintArea * { visibility: visible; }
    #invoicePrintArea { position: fixed; left: 0; top: 0; width: 100%; background: white !important; color: black !important; }
}

::-webkit-scrollbar { width: 4px; height: 4px; }
::-webkit-scrollbar-thumb { background: rgba(56, 189, 248, 0.45); border-radius: 99px; }
