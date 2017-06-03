$(document).ready(function () {
    var books = [{
        name: "aaaaaaaaaaaaa",
        pik: "golden",
        grade: 2
    }, {
        name: "dfa",
        pik: "golden",
        grade: 3
    }];
    var filter = "";
    var gradeFilter = $.cookie("grade") || 2;
    render();
    $(".sclass[data-grade='" + gradeFilter + "']").addClass("selected");
    $(".sclass").click(function () {
        gradeFilter = $(this).data("grade");
        $(".selected.sclass").removeClass("selected");
        $(this).addClass("selected");
        $.cookie("grade", gradeFilter, {
            expires: 365
        });
        render();
    });
    $("input").on("keyup", function () {
        filter = $(this).val();
        render();
    });


    function render() {
        $(".book").remove();
        var filteredBooks = books.filter(function (b) {
            return b.grade == gradeFilter && b.name.indexOf(filter) != -1;
        });
        for (var i = 0; i < filteredBooks.length; i++) {

            if ($.cookie(filteredBooks[i].name)) {

                $(".content").append($('<div class="book col-xs-3 done" data-name="' + filteredBooks[i].name + '"><img src="imgs/' + filteredBooks[i].pik + '.jpg"><div class="check"></div></div>'));
            } else {
                $(".content").append($('<div class="book col-xs-3" data-name="' + filteredBooks[i].name + '"><img src="imgs/' + filteredBooks[i].pik + '.jpg"></div>'));
            }
        }
        $(".book").click(function () {

            if ($(this).hasClass("done")) {
                $.cookie($(this).data("name"), null, {
                    expires: -1
                });
            } else {
                $.cookie($(this).data("name"), 1, {
                    expires: 365
                });
            }
            render();
        });
    }

});
