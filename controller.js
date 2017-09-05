var app = angular.module('pokerApp', []);
console.log("asdfnb");
app.controller('app', function($scope) {

	$scope.potDisable = false;

	$scope.players = [{
		id: 'player1',
		action: 0
	}];

	$scope.potScore = {};
	$scope.potScore.score = 0;

	var startingPot = true;

	$scope.addPlayer = function() {
		var newPlayer = $scope.players.length + 1;
		var score = parseInt($scope.players[0].score);
		$scope.players.push({
			'id': 'player' + newPlayer,
			'score': score,
			'action': 0
		});
	};

	$scope.removePlayer = function() {
		var lastPlayer = $scope.players.length - 1;
		$scope.players.splice(lastPlayer);
	};

	$scope.playDisabled = true;

	$scope.play = function() {
		$scope.playDisabled = false;

	};


	// $scope.raiseDisabled = false;
	// $scope.callDisabled = false;
	// $scope.foldDisabled = false;

	$scope.raiseBy = function(index, player) {
		console.log(index);

		player.raiseByDisabled = true;

		$scope.players[index].callDisabled = true;
		$scope.players[index].foldDisabled = true;
	};

	$scope.raise = function(index, raiseBid, bidScore) {
		var raiseBid1 = parseInt(raiseBid);
		var bidScore1 = parseInt(bidScore);
		console.log($scope.players[index].action);
		var raiseIc = raiseBid1 + bidScore1;
		console.log(raiseIc);
		$scope.players[index].action = $scope.players[index].action + raiseIc;
		$scope.players[index].score = $scope.players[index].score - raiseIc;
		$scope.potScore.bid = parseInt($scope.potScore.bid) + parseInt(raiseBid);
		$scope.potScore.score = $scope.potScore.score + raiseBid1 + bidScore1;
	};

	$scope.call = function(index, potBid) {
		$scope.players[index].raiseDisabled = true;
		$scope.players[index].foldDisabled = true;
		console.log(potBid);
		console.log($scope.players);
		var potBid2 = parseInt(potBid);
		console.log(potBid2);
		var playerAction = $scope.players[index].action;
		var playerAction1 = parseInt(playerAction);
		console.log(playerAction1);
		$scope.players[index].action = playerAction1 + potBid2;
		console.log($scope.players);
		$scope.players[index].score = $scope.players[index].score - potBid2;
		console.log($scope.players[1].score);
		/*if (!startingPot || index !== 0) {
			console.log("hellow");
			$scope.potScore.score = 2 * parseInt($scope.potScore.score);
		}*/
		var potScore = parseInt($scope.potScore.score);
		$scope.potScore.score = potScore + potBid2;
		console.log(potScore);
	};

	$scope.playerFold = true;

	$scope.next = function() {
		startingPot = false;
		angular.forEach($scope.players, function(value, key) {
			value.raiseDisabled = false;
			value.callDisabled = false;
			value.foldDisabled = false;
			value.raiseByDisabled = false;
		});
	};
});
