$(document).ready(function () {
    $.getJSON("assets/data/menu.json", function (data) {
        console.log(data);
    }).fail(function () {
        $.getJSON("assets/data/menu-raw.json", function (data) {
            console.log(data);
        })
    });
});