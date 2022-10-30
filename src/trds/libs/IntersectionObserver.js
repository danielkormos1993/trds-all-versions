// observed elements must have a intersecting() function

const TrdsIntersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.intersecting();
            TrdsIntersectionObserver.unobserve(entry.target);
        }
    });
}, {rootMargin: "0px 0px 200px 0px"});

export default TrdsIntersectionObserver;