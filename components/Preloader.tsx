'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import LogoImage from '@/public/logo.png';
import { useLoading } from '@/context/LoadingContext';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const { setLoading } = useLoading();

    useEffect(() => {
        // Minimum time to show loader
        const timer = setTimeout(() => {
            setIsLoading(false);
            setLoading(false);
        }, 2000);

        // Remove from DOM after transition
        const removeTimer = setTimeout(() => {
            setIsVisible(false);
        }, 2500);

        return () => {
            clearTimeout(timer);
            clearTimeout(removeTimer);
        };
    }, [setLoading]);

    if (!isVisible) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(5, 5, 5, 0.9)',
                backdropFilter: 'blur(10px)',
                zIndex: 9999,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'opacity 0.5s ease-in-out, visibility 0.5s ease-in-out',
                opacity: isLoading ? 1 : 0,
                visibility: isLoading ? 'visible' : 'hidden',
            }}
        >
            <div className="preloader-logo">
                <Image
                    src={LogoImage}
                    alt="MssTechno Logo"
                    width={180}
                    height={40}
                    style={{
                        objectFit: 'contain',
                        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                    }}
                    priority
                />
            </div>
            <style jsx global>{`
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.05); opacity: 0.8; }
                }
            `}</style>
        </div>
    );
};

export default Preloader;
