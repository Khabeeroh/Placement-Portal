 import { animate, inView } from "https://cdn.jsdelivr.net/npm/motion@12.38.0/+esm"

    inView(".motion-animation", (element) => {
        animate(
            element,
            { opacity: 1, x: [-100, 0] },
            {
                duration: 1,
                easing: [0.17, 0.55, 0.55, 1],
            }
        )

        return () => animate(element, { opacity: 0, x: -100 })
    })