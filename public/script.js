const burger = document.querySelector('#burger');
        const menu = document.querySelector('#menu');

        burger.addEventListener('click', () =>{
            if(menu.classList.contains('hidden')){
                menu.classList.remove('hidden')
            }else{
                menu.classList.add('hidden')
            }
        });


const toggles = document.querySelectorAll('.accordion-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const headerDiv = toggle.closest('#accordion-container');
        const contentDiv = headerDiv.nextElementSibling;
        contentDiv.classList.toggle('hidden');
    });
});

//  import { animate, scroll } from "https://cdn.jsdelivr.net/npm/motion@12.38.0/+esm"

//     document.querySelectorAll(".motion-animation div").forEach((item) => {
//         scroll(animate(item, { opacity: [0, 1, 1, 0] }), {
//             target: item,
//             offset: ["start end", "end end", "start start", "end start"],
//         })
//     })
