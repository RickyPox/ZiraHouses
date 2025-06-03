"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Lang = { lang_code: string };
type Route = {
    route_key: string;
    path: string;
    lang_code: string;
};

export default function SwitchLanguage({ lang }: { lang: Lang[] }) {
    const router = useRouter();
    const pathname = usePathname();
    const [routes, setRoutes] = useState<Route[]>([]);

    useEffect(() => {
        fetch("/api/routes")
            .then((res) => res.json())
            .then((data) => setRoutes(data));
    }, []);

    const switchLanguage = (langCode: string) => {
        const segments = pathname.split("/").filter(Boolean);
        const currentLang = lang.find((l) => l.lang_code === segments[0])?.lang_code;
        const pathWithoutLang = currentLang ? segments.slice(1).join("/") : segments.join("/");

        if (!pathWithoutLang) {
            router.push(`/${langCode}`);
            return;
        }

        const currentRoute = routes.find((r) => r.lang_code === currentLang && r.path.replace(/^\//, "") === pathWithoutLang);

        if (!currentRoute) {
            router.push(`/${langCode}/${pathWithoutLang}`);
            return;
        }

        const translatedRoute = routes.find((r) => r.route_key === currentRoute.route_key && r.lang_code === langCode);

        if (translatedRoute) {
            router.push(`/${langCode}/${translatedRoute.path.replace(/^\//, "")}`);
        } else {
            router.push(`/${langCode}`);
        }
    };

    return (
        <div className="flex gap-2">
            {lang.map((l, i) => (
                <p
                    key={i}
                    className={`cursor-pointer uppercase ${pathname.startsWith(`/${l.lang_code}`) ? "font-bold underline" : ""}`}
                    onClick={() => switchLanguage(l.lang_code)}
                >
                    {l.lang_code}
                </p>
            ))}
        </div>
    );
}
