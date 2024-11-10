export function startHomeAnimation() {
    const galleryColumnsContainer = document.querySelector('main')!;
    const divs = Array.from(document.querySelectorAll<HTMLDivElement>('.card'));

    let selectedIndex = 0;
    let isHovering = false;

    divs.forEach((div, ix) => {
        div.onmouseenter = () => {
            selectedIndex = ix;
            isHovering = true;
            updateGalleryContainerColumns()
        }

        div.onmouseleave = () => {
            isHovering = false;
        }
    })

    function updateGalleryContainerColumns() {
        const selectedDiv = document.querySelector('.card.active');

        selectedDiv && selectedDiv.classList.remove('active')

        const newColumns = divs.map((div, ix) => {
            if (ix === selectedIndex) {
                div.classList.add('active')
                return '7fr'
            } else {
                return '1fr'
            }
        }).join(' ');

        galleryColumnsContainer.style.gridTemplateColumns = newColumns;
    }

    updateGalleryContainerColumns()

    // setInterval(() => {
    //     if (!isHovering) {
    //         ++selectedIndex;

    //         if (selectedIndex >= divs.length) {
    //             selectedIndex = 0;
    //         }

    //         updateGalleryContainerColumns()
    //     }
    // }, 5200)
}