    function Footer() {
    return (
        <footer className="bg-iki-cream text-iki-ink">
        <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-20 text-center sm:px-8 md:py-32 lg:px-12">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl md:text-3xl">
            Let&apos;s connect
            </h2>

            <p className="mt-6 text-xl tracking-[-0.02em] sm:text-1xl md:text-xl">
            Get in touch for opportunities or just to say hi! 👋
            </p>

            <nav
            aria-label="Contact links"
            className="mt-14"
            >
            <ul className="flex items-center gap-8">
                <li>
                <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex min-h-10 min-w-10 items-center justify-center text-iki-ink transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iki-ink focus-visible:ring-offset-4 motion-reduce:transform-none motion-reduce:transition-none"
                >
                    <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-8 w-8"
                    fill="currentColor"
                    >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V9H3.54v11.45ZM22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0Z" />
                    </svg>
                </a>
                </li>

                <li>
                <a
                    href="mailto:hello@portfolioiki.com"
                    aria-label="Send me an email"
                    className="inline-flex min-h-12 min-w-12 items-center justify-center text-iki-ink transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iki-ink focus-visible:ring-offset-4 motion-reduce:transform-none motion-reduce:transition-none"
                >
                    <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-9 w-9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    >
                    <rect
                        x="2"
                        y="4"
                        width="20"
                        height="16"
                        rx="2"
                    />

                    <path d="m3 6 9 7 9-7" />
                    </svg>
                </a>
                </li>
            </ul>
            </nav>
        </section>
        </footer>
    );
    }

    export default Footer;