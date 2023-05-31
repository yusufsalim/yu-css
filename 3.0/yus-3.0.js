const modal = document.querySelector('.yu-modal');
const openModalBtns = document.querySelectorAll('[data-modal-target]');
const closeModalBtns = document.querySelectorAll('.yu-modal-close');

// Open Modal Function
function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('yu-modal-active');
    overlay.classList.add('yu-modal-overlay-active');
}

// Close Modal Function
function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('yu-modal-active');
    overlay.classList.remove('yu-modal-overlay-active');
}

// Open Modal when clicked
openModalBtns.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

// Close Modal when clicked
closeModalBtns.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.yu-modal');
        closeModal(modal);
    });
});

// Close Modal when clicked outside of modal
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.yu-modal-active');
    modals.forEach(modal => {
        closeModal(modal);
    });
});

const tooltips = document.querySelectorAll('[yu-component="tooltip"]');

tooltips.forEach((tooltip) => {
    const direction = tooltip.getAttribute('data-direction') || 'up';
    const animation = tooltip.getAttribute('data-animation') || 'translate';
    const tooltipText = tooltip.querySelector('.yu-tooltip-text');

    tooltip.addEventListener('mouseenter', () => {
        tooltipText.style.visibility = 'visible';
        tooltipText.style.opacity = '1';
        tooltipText.setAttribute('data-tooltip-direction', direction);
        tooltipText.setAttribute('data-tooltip-animation', animation);
    });

    tooltip.addEventListener('mouseleave', () => {
        tooltipText.style.visibility = 'hidden';
        tooltipText.style.opacity = '0';
        tooltipText.removeAttribute('data-tooltip-direction');
        tooltipText.removeAttribute('data-tooltip-animation');
    });
});

// Get all toasts
const toasts = document.querySelectorAll('.yu-toast');

// Loop through all toasts
toasts.forEach((toast) => {
    // Set data tag for closing toast
    toast.dataset.close = true;

    // Set timeout for automatically closing toast
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 3000);

    // Add click event listener to close toast
    toast.addEventListener('click', (e) => {
        if (e.target.dataset.close) {
            toast.classList.add('fade-out');
            setTimeout(() => {
                toast.remove();
            }, 500);
        }
    });
});

// JavaScript code for scrollspy
document.addEventListener("DOMContentLoaded", function () {
    const scrollspy = new bootstrap.ScrollSpy(document.getElementById('navbar'), {
        target: '#navbar',
        offset: 70 // Adjust the offset as needed
    });
});
