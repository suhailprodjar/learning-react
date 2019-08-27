import React from 'react';
import ReactDOMServer from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
// import { StaticRouter } from 'react-router';
import Loadable from 'react-loadable';
import manifest from '../../build/asset-manifest.json';
import { Provider as ReduxProvider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
// import our main App component
import App from '../../src/App';

const extractAssets = (assets, chunks) =>
    Object.keys(assets)
        .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
        .map(k => assets[k]);

const path = require('path');
const fs = require('fs');

const context = {};
const modules = [];

export default (store) => (req, res, next) => {
    // point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');
    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end();
        }
        const helmetContext = {};
        let html = ''
        try {
            // render the app as a string
            html = ReactDOMServer.renderToString(
                <ReduxProvider store={store}>
                    <StaticRouter location={req.url} context={context}>
                        <Loadable.Capture report={m => modules.push(m)}>
                            <HelmetProvider context={helmetContext}>
                                <App />
                            </HelmetProvider>
                        </Loadable.Capture>
                    </StaticRouter>
                </ReduxProvider>
            );
        } catch (err) {
            console.error('err:renderer', err);
        }

        let finalHtml = htmlData.replace(
            '<div id="root"></div>',
            `<div id="root">${html}</div>`
        );

        const extraChunks = extractAssets(manifest, modules).map(
            c => `<script type="text/javascript" src="/${c}"></script>`
        );

        finalHtml = finalHtml.replace('</body>', extraChunks.join('') + '</body>');

        // inject the rendered app into our html and send it
        return res.send(finalHtml);
    });
};