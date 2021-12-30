class TrdsRouter{

    constructor(routes){
    
        this.routes = routes;

        window.addEventListener("popstate", this.run);

        document.body.addEventListener("click", e => {
            if (e.target.matches("[trds-router-link]")) {
                e.preventDefault();
                this.navigateTo(e.target.href);
            }
        });

    }

    run = () => {

        const potentialMatches = this.routes.map(route => {
            return {
                route: route,
                result: location.pathname.match(pathToRegex(route.path))
            };
        });

        let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

        if (!match) {
            match = {
                route: this.routes[0],
                result: [location.pathname]
            }
        }

        this.render(match.route.render, getParams(match));

    }

    render = (renderObject, params) => {

        

    }

    navigateTo = url => {
        history.pushState(null, null, url);
        this.run();
    }

}

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

class TrdsPage{

    constructor(params) {
        this.params = params;
        
    }

    setTitle(title) {
        document.title = title;
    }

    render() {
        return "";
    }

    afterRender() {
        return;
    }

    beforeRender() {
        document.body.
    }

}

export { TrdsRouter, TrdsPage };