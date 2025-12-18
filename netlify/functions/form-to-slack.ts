import type { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
	try {
		if (!event.body) {
			return { statusCode: 400, body: 'No payload' };
		}

		const payload = JSON.parse(event.body);

		const { data, form_name, created_at, site } = payload;

		const fields = Object.entries(data || {}).map(([key, value]) => ({
			type: 'mrkdwn',
			text: `*${key}*\n${value ?? '—'}`
		}));

		const slackMessage = {
			text: `New ${form_name} submission`,
			blocks: [
				{
					type: 'header',
					text: {
						type: 'plain_text',
						text: '📩 New form submission'
					}
				},
				{
					type: 'section',
					fields
				},
				{
					type: 'context',
					elements: [
						{
							type: 'mrkdwn',
							text: `*Form:* ${form_name} • *Site:* ${site?.name} • *Time:* ${created_at}`
						}
					]
				}
			]
		};

		await fetch(process.env.SLACK_WEBHOOK_URL!, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(slackMessage)
		});

		return { statusCode: 200, body: 'OK' };
	} catch (err) {
		console.error(err);
		return { statusCode: 500, body: 'Slack forwarding failed' };
	}
};
