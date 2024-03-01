import { unstable_dev, type UnstableDevWorker } from 'wrangler';
import { afterAll, beforeAll, describe, it, expect } from 'vitest';

describe('Worker', () => {
	let worker: UnstableDevWorker;

	beforeAll(async () => {
		worker = await unstable_dev('src/index.ts', {
			experimental: { disableExperimentalWarning: true },
		});
	});

	afterAll(async () => {
		await worker.stop();
	});

	it('should return Hello World', async () => {
		const resp = await worker.fetch();
		const text = await resp.text();

		expect(resp.status).toBe(200);
		expect(text).toMatchInlineSnapshot(`"Hello world"`);
	});
});
