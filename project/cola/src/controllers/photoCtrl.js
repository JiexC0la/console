define(['language'], function(i18n) {
    var photoCtrl = ['$scope', '$state',
        function($scope, $state) {
            $scope.i18n = i18n;

        }
    ];
    return photoCtrl;
});