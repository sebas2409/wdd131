import * as React from "react";

type IconName =
    | 'book'
    | 'sparkles'
    | 'pencil'
    | 'question'
    | 'check'
    | 'compass'
    | 'menu'
    | 'close'

function Icon({name}: { name: IconName }) {
    const paths: Record<IconName, React.ReactNode> = {
        book: (
            <>
                <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z"/>
                <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v15h4.5a2.5 2.5 0 0 1 2.5 2.5v-15Z"/>
            </>
        ),
        sparkles: (
            <>
                <path
                    d="m12 3 1.05 3.15A4.5 4.5 0 0 0 15.85 9L19 10l-3.15 1.05A4.5 4.5 0 0 0 13 13.85L12 17l-1.05-3.15A4.5 4.5 0 0 0 8.15 11L5 10l3.15-1.05A4.5 4.5 0 0 0 11 6.15L12 3Z"/>
                <path
                    d="m19 16 .45 1.35A2 2 0 0 0 20.65 18l1.35.45-1.35.45a2 2 0 0 0-1.2 1.2L19 21.5l-.45-1.4a2 2 0 0 0-1.2-1.2L16 18.45l1.35-.45a2 2 0 0 0 1.2-1.2L19 16Z"/>
            </>
        ),
        pencil: <path d="m4 20 4.5-1 10.8-10.8a2.12 2.12 0 0 0-3-3L5.5 16 4 20Zm10.8-13.3 3 3M5.5 16l2.5 2.5"/>,
        question: (
            <>
                <path d="M9.4 9a2.8 2.8 0 1 1 4.7 2c-1.2 1-2.1 1.4-2.1 3"/>
                <path d="M12 18h.01"/>
                <circle cx="12" cy="12" r="9"/>
            </>
        ),
        check: <path d="m5 12 4 4L19 6"/>,
        compass: (
            <>
                <circle cx="12" cy="12" r="9"/>
                <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>
            </>
        ),
        menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
        close: <path d="m6 6 12 12M18 6 6 18"/>,
    }

    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            {paths[name]}
        </svg>
    )
}

export default Icon;