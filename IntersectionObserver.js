const TrdsIntersectionObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry) {
        if(entry.isIntersecting){
            entry.target.load();
            TrdsIntersectionObserver.unobserve(entry.target);
        }
    });
}, {rootMargin: "0px 0px 200px 0px"});

export default TrdsIntersectionObserver;