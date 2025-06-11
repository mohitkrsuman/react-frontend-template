export const preloadFonts = () => {
  const fonts = [
    {
      family: "Inter",
      weights: ["400", "500", "600", "700"],
      display: "swap",
    },
    {
      family: "Roboto Mono",
      weights: ["400", "500", "600"],
      display: "swap",
    },
  ];

  fonts.forEach((font) => {
    font.weights.forEach((weight) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "font";
      link.type = "font/woff2";
      link.crossOrigin = "anonymous";
      link.href = `https://fonts.gstatic.com/s/${font.family
        .toLowerCase()
        .replace(" ", "")}/v12/font-${weight}.woff2`;
      document.head.appendChild(link);
    });
  });
};

export const loadFontsWithFallback = () => {
  if ("fonts" in document) {
    const inter = new FontFace(
      "Inter",
      "url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyeMZhrib2Bg-4.woff2)"
    );
    const robotoMono = new FontFace(
      "Roboto Mono",
      "url(https://fonts.gstatic.com/s/robotomono/v22/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_ROW4.woff2)"
    );

    Promise.all([inter.load(), robotoMono.load()])
      .then((fonts) => {
        fonts.forEach((font) => {
          document.fonts.add(font);
        });
        document.body.classList.add("fonts-loaded");
      })
      .catch((error) => {
        console.warn("Font loading failed:", error);
        document.body.classList.add("fonts-fallback");
      });
  }
};
