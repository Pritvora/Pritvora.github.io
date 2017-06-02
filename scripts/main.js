function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
$(document).ready(function () {
    var books = [{
        name: "",
        pik: "",
        grade: 2
    }];
    var filter = "";
    var gradeFilter = getCookie("grade") || 2;
    $(".sclass[data-grade='" + gradeFilter + "']").addClass("selected");
    $(".sclass").click(function () {
        gradeFilter = $(this).data("grade");
        $(".selected.sclass").removeClass("selected");
        $(this).addClass("selected");
        var date = new Date(new Date().getTime() + 60 * 1000);
        document.cookie = "grade=" + gradeFilter + "; path=/; expires=" + date.toUTCString();
    });
});
