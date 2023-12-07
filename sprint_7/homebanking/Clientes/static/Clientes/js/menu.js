//del sprint 1

document.addEventListener('DOMContentLoaded', function () {
    const linkList = document.getElementById('nav');
    const links = nav.getElementsByTagName('a');
    let focusedLinkIndex = 0;
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
        case 'ArrowUp':
            if (focusedLinkIndex > 0) {
            focusedLinkIndex--;
            }
            break;
        case 'ArrowDown':
            if (focusedLinkIndex < links.length - 1) {
            focusedLinkIndex++;
            }
            break;
        default:
            return;
        }

        for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('focused');
        }

        links[focusedLinkIndex].classList.add('focused');
        links[focusedLinkIndex].focus();
    });
    });
