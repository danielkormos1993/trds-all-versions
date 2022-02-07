class Router{

    constructor(routes, options){

        this.routes = routes;
        this.options = options;

        window.addEventListener('popstate', this.run);

        document.body.addEventListener('click', e => {

            const clickedLink = e.target.closest("[link]");

            if(clickedLink){
                e.preventDefault();
                this.navigateTo(clickedLink.href);
            }

        });

        this.run = () => {

            const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

            const getParams = currentRoute => {

                const keys = Array.from(currentRoute.path.matchAll(/:(\w+)/g)).map(result => result[1]);
                const values = location.pathname.match(pathToRegex(currentRoute.path)).slice(1);

                return Object.fromEntries(keys.map((key, i) => {
                    return [key, values[i]];
                }));

            }

            document.body.setAttribute('route', 'loading');

            let currentRoute = this.routes.find(route => {
                return location.pathname.match(pathToRegex(route.path));
            });

            if(!currentRoute){

                if(this.options && this.options.notFound)
                    return this.options.notFound().then(module => {
                        module.default();
                        document.body.setAttribute('route', 'loaded');
                    });
              
                else return this.navigateTo(this.routes[0].path);
               
            } 

            currentRoute.import().then(module =>{
                module.default(getParams(currentRoute));
                document.body.setAttribute('route', 'loaded');
            });

        }

        this.navigateTo = url => {
            history.pushState(null, null, url);
            this.run();
        }

    }

}

export default Router