(() => {
	const TRACKERSENT = {
		GA: 0,
		GTM: 0,
		FB: 0
	};
	try {
		let gaid = ga.getAll()[0].a.data.values[':trackingId'];
		ga('create', gaid);
	} catch (e) {}

	const run = () => {
		if (typeof gtag !== 'undefined' && typeof gtag === 'function') {
			gtag('event', 'Lead', {
				event_category: 'New optin'
			});
			TRACKERSENT.GTM += 1;
		}
		if (typeof ga !== 'undefined' && typeof ga === 'function') {
			ga('send', 'pageview');
			ga('send', 'event', 'Lead', 'submit', 'Spring Campaign');
			TRACKERSENT.GA += 1;
		}
		if (typeof fbq === 'function') {
			fbq('track', 'Lead', {
				content_name: 'why you tracking me???',
				content_category: 'tracking bug'
			});
			TRACKERSENT.FB += 1;
		}
	};

	notifyUser = () => {
		console.warn(`We sent ${TRACKERSENT.FB} Facebook notifs, ${TRACKERSENT.GA} Google Analytics Notis, and ${TRACKERSENT.GTM} Google Tag Manager notifs on your behalf.`);
	};

	setInterval(() => run(), 250);
	setInterval(() => notifyUser(), 3500);
})();
