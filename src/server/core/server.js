import Express from 'express';

import ServerConfig from './server.config';


class Server {
    static init() {

	    const app = Express();

        app.use(Express.static(ServerConfig.PUBLIC_STATIC_CONTENT_DIR));
	    app.get('*', (request, response) => response.sendFile(`${ServerConfig.PUBLIC_STATIC_CONTENT_DIR}/index.html`))
        app.listen(ServerConfig.PORT, _ => console.info(`Server listening at 9001`))

    }
}

export default Server;