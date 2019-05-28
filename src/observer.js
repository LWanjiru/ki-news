function personalize(keys) {
	let clickReward = 4,
		maxScrollReward = 10,
		minReward = -10,
		maxReward = 10;

 	var isScrolling,
		currScrollReward = 0,
		hasPassedMaxReward = false,
		lastRewardReceived = minReward;
	var urlParams = new URLSearchParams(window.location.search);

 	var sessionInfo = {
	    page: window.location.href.split('?')[0],
	    d_id: urlParams.get('d_id'),
		reward: minReward,
	};

 	function sendReward() {
		// Only send if max reward is not reached and we're not sending the same reward again
		if (hasPassedMaxReward === false && sessionInfo.reward !== lastRewardReceived) {
			// Check if max reward has been exceeded
			hasPassedMaxReward = sessionInfo.reward >= maxReward;
			if (hasPassedMaxReward)
				sessionInfo.reward = maxReward;

 			console.log(sessionInfo);
			var xhrResult = new XMLHttpRequest();

 			xhrResult.open('POST', 'https://app.bellwethr.com/api/v1/urls/' + keys + '/result/', true);
			xhrResult.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			xhrResult.send(JSON.stringify(sessionInfo) + console.log( sessionInfo + "data has been sent"));

 			lastRewardReceived = sessionInfo.reward;
		}
	}

 	// Reward Collection

 	window.addEventListener('click', function() {
		sessionInfo.reward += clickReward;
		sendReward();
	}, false);

 	window.addEventListener('scroll', function ( event ) {
		// Clears timeout while scrolling faster than 66 ms
		window.clearTimeout( isScrolling );

 		isScrolling = setTimeout(function() {
			// Scrolling has stopped
			let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight,
				scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

 			let pctScrolled = scrollTop / (scrollHeight - window.innerHeight),
				scrollReward = Math.floor(maxScrollReward * pctScrolled);

 			// Increases total reward
			if (currScrollReward < scrollReward) {
				let rewardDiff = scrollReward - currScrollReward;

 				sessionInfo.reward += rewardDiff;
				currScrollReward = scrollReward;
			}
		}, 66);
	}, false);

 	setTimeout(function () {
		// Sends reward after 5 seconds
		sendReward();
	}, 5000);

 }