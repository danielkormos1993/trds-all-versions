const TrdsIntersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.isIntersecting();
            TrdsIntersectionObserver.unobserve(entry.target);
        }
    });
}, {rootMargin: "0px 0px 200px 0px"});

export default TrdsIntersectionObserver;