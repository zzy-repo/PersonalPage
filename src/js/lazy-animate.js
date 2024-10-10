
export default function lazyAnimate(elementsSelector, options) {

    const handleAnimation = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    };

    const observer = new IntersectionObserver(handleAnimation, options);

    const elements = document.querySelectorAll(elementsSelector);
    elements.forEach((el) => {
        observer.observe(el);
    });

    return observer;
}