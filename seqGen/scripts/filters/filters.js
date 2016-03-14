//UI filter, group courses by SEMESTER (to be displayed in sequence.html view)
SequenceGenerator.filter('groupby', function () {
    return function (input, groupvalue) {
        var group = [];
        angular.forEach(input, function (value, index) {
            if (group.indexOf(value.SEMESTER) == -1) {
                group.push(value.SEMESTER);
                group.sort();
            }
        });

        return group;
    }
});