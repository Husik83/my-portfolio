"use client";

import { useEffect, useState } from "react";

export function useFirstLoad() {
    const [firstLoad, setFirstLoad] = useState(false);

    useEffect(() => {
        const alreadyLoaded = sessionStorage.getItem("site_loaded");

        if (!alreadyLoaded) {
            setFirstLoad(true);
            sessionStorage.setItem("site_loaded", "true");
        }
    }, []);

    return firstLoad;
}