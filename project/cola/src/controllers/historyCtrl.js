define(['language'], function(i18n) {
    var historyCtrl = ['$scope', '$state',
        function($scope, $state) {
            $scope.i18n = i18n;

        }
    ];
    return historyCtrl;
});