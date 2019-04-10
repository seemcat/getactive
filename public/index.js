document.getElementById('activate').onclick = () => {
	const topic = document.getElementById('topic').value;
	const recipient = document.getElementById('recipient').value;

	// Activate Iron.io worker
	fetch("/activate", {
		credentials: 'include',
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			topic,
			recipient
		}),
	}).catch(err => console.error('Error: ', err));

	document.getElementById('canvas').innerHTML = `You have successfully subscribed! You'll receive a link to the most recent article about <b>${topic}</b> at 7am, every morning of the work week. <hr />To cancel, simply text back the word "CANCEL".`
}
