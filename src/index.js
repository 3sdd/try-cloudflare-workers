/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import { Router } from 'itty-router';

const router = Router();

router.get('/', () => {
	return new Response('Hello world');
});

router.get('/example/:test', ({ params }) => {
	return new Response(`<p>${params.test}</p>`, {
		headers: {
			'Content-Type': 'text/html',
		},
	});
});

router.all('*', () => new Response('404 not found', { status: 404 }));

export default {
	fetch: router.fetch,
};
