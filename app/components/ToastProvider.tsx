'use client';

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
    ReactNode,
} from 'react';
import Icon from '../config/icons';

type ToastType = 'success' | 'error' | 'warning';

type Toast = {
    id: number;
    type: ToastType;
    message: string;
    duration: number;
};

type ToastContextType = {
    success: (message: string, duration?: number) => void;
    error: (message: string, duration?: number) => void;
    warning: (message: string, duration?: number) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = useCallback(
        (type: ToastType, message: string, duration = 5000) => {
            const id = Date.now() + Math.random();

            setToasts((prev) => [
                ...prev,
                {
                    id,
                    type,
                    message,
                    duration,
                },
            ]);
        },
        []
    );

    const removeToast = useCallback((id: number) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    return (
        <ToastContext.Provider
            value={{
                success: (message, duration) =>
                    showToast('success', message, duration),

                error: (message, duration) =>
                    showToast('error', message, duration),

                warning: (message, duration) =>
                    showToast('warning', message, duration),
            }}
        >
            {children}

            <div className="fixed top-16 right-5 z-[9999] flex w-[calc(100%-2rem)] max-w-sm flex-col gap-3">
                {toasts.map((toast) => (
                    <ToastItem
                        key={toast.id}
                        toast={toast}
                        onClose={() => removeToast(toast.id)}
                    />
                ))}
            </div>
        </ToastContext.Provider>
    );
}

function ToastItem({
    toast,
    onClose,
}: {
    toast: Toast;
    onClose: () => void;
}) {
    const [isPaused, setIsPaused] = useState(false);
    const [remaining, setRemaining] = useState(toast.duration);

    const lastTimeRef = useRef<number | null>(null);

    useEffect(() => {
        if (isPaused) {
            lastTimeRef.current = null;
            return;
        }

        let animationFrame: number;

        const tick = (time: number) => {
            if (lastTimeRef.current === null) {
                lastTimeRef.current = time;
            }

            const elapsed = time - lastTimeRef.current;
            lastTimeRef.current = time;

            setRemaining((prev) => {
                const newRemaining = prev - elapsed;

                if (newRemaining <= 0) {
                    onClose();
                    return 0;
                }

                return newRemaining;
            });

            animationFrame = requestAnimationFrame(tick);
        };

        animationFrame = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(animationFrame);
    }, [isPaused, onClose]);

    const styles = {
        success: {
            border: 'border-green-500',
            icon: 'success',
            font: 'text-green-600',
            iconBg: 'bg-green-500',
            title: 'Success',
        },
        error: {
            border: 'border-red-500',
            icon: 'error',
            font: 'text-red-600',
            iconBg: 'bg-red-500',
            title: 'Error',
        },
        warning: {
            border: 'border-yellow-500',
            icon: 'warning',
            font: 'text-yellow-600',
            iconBg: 'bg-yellow-500',
            title: 'Warning',
        },
    };

    const style = styles[toast.type];

    const progress = Math.max(
        0,
        Math.min(100, (remaining / toast.duration) * 100)
    );

    return (
        <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className={`relative overflow-hidden rounded-xl border-l-4 ${style.border}
        bg-white dark:bg-gray-800 shadow-xl
        text-gray-800 dark:text-white
        transition-all duration-300`}
        >
            <div className="flex items-start gap-3 p-4">
                {/* Message */}
                <div className="min-w-0 flex-1">
                    <div className={`flex font-semibold ${style.font}`}>
                        <Icon name={style.icon} className={`${style.font} mr-2`} />
                        {style.title}
                    </div>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 break-words">
                        {toast.message}
                    </p>
                </div>

                {/* Close */}
                <button onClick={onClose}
                    className="absolute top-1 right-2 text-3xl leading-none text-gray-300 transition hover:text-gray-700 dark:hover:text-white" aria-label="Close notification">
                    ×
                </button>
            </div>

            {/* Progress bar */}
            <div className="h-1 w-full bg-gray-200 dark:bg-gray-700">
                <div
                    className={`h-full ${style.iconBg} transition-none`}
                    style={{
                        width: `${progress}%`,
                    }}
                />
            </div>
        </div>
    );
}

export function useToast() {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error('useToast must be used inside ToastProvider');
    }

    return context;
}