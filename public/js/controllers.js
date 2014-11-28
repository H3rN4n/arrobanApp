'use strict';

/* Controllers */

function AppCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/name'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!';
  });

  $scope.addPlayer = function(){
	var newPlayer = {
						name: "PEPE1",
						img: "imgs/foto-elalesi.png",
						pj: 2,
						pts: 10
					};

	$scope.players.push(newPlayer);
  };

  $scope.players = [
		{
			name: "PEPE1",
			img: "imgs/foto-elalesi.png",
			pj: 2,
			pts: 10
		},
		{
			name: "PEPE1",
			img: "imgs/foto-elalesi.png",
			pj: 2,
			pts: 10
		},
		{
			name: "PEPE1",
			img: "imgs/foto-elalesi.png",
			pj: 2,
			pts: 10
		},
		{
			name: "PEPE1",
			img: "imgs/foto-elalesi.png",
			pj: 2,
			pts: 10
		},
		{
			name: "PEPE1",
			img: "imgs/foto-elalesi.png",
			pj: 2,
			pts: 10
		},
	];
}

function MyCtrl1($scope) {
}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
