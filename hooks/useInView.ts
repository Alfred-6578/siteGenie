import { useEffect, useRef, useState } from "react"

export const useInView = <T extends HTMLElement>(options?: IntersectionObserverInit) => {
    const ref = useRef<T | null>(null);
    const [inView, setInView] = useState(false);

    // Destructure options for stable dependencies
    const { threshold, root, rootMargin } = options || {};

    useEffect(() => {
        if (!ref.current) return;
        let hasTriggered = false;
        const observer = new IntersectionObserver(
            ([entry], obs) => {
                if (entry.isIntersecting && !hasTriggered) {
                    setInView(true);
                    hasTriggered = true;
                    obs.disconnect();
                }
            },
            {
                threshold,
                root,
                rootMargin
            }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [threshold, root, rootMargin]);

    return { ref, inView };
}