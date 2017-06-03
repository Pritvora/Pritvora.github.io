function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
$(document).ready(function () {
    var books = [{
        name: "aaaaaaaaaaaaa",
        pik: "golden",
        grade: 2
    }];
    var filter = "";
    var gradeFilter = getCookie("grade") || 2;
    render();
    $(".sclass[data-grade='" + gradeFilter + "']").addClass("selected");
    $(".sclass").click(function () {
        gradeFilter = $(this).data("grade");
        $(".selected.sclass").removeClass("selected");
        $(this).addClass("selected");
        var date = new Date(new Date().getTime() + 60 * 1000);
        document.cookie = "grade=" + gradeFilter + "; path=/; expires=" + date.toUTCString();
        render();
    });
    $("input").on("change", function () {
        filter = $(this).val();
        render();
    });

    function render() {
        $(".book").remove();
        var filteredBooks = books.filter(function (b) {
            return b.grade == gradeFilter && b.name.indexOf(filter) != -1;
        });
        for (var i = 0; i < filteredBooks.length; i++) {
            $(".content").append($('  <div class="book col-xs-3 done"><img src="imgs/' + filteredBooks[i].pik + '.jpg"><div class="check"></div></div>'));
        }
    }
});
