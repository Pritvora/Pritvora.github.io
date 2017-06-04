$(document).ready(function () {
    var books = [{
            name: "aaaaaaaaaaaaa",
            pik: "golden",
            grade: 2
    }, {
            name: "Царевна Лягушка",
            pik: "ЦарЛяг",
            grade: 2
    }
    , {
            name: "Винни-Пух",
            pik: "Винни-Пух",
            grade: 2
    }, {
            name: "Приключения Незнайки ",
            pik: "Незнайка",
            grade: 2
    }, {
            name: "Дикие Лебеди",
            pik: "Лебеди",
            grade: 2
    }, {
            name: "Приключения Буратино",
            pik: "Буратино",
            grade: 2
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
            if (i % 4 == 0 || i === filteredBooks.length - 1) {
                if (i > 0)
                    $('.content').append(div);
                div = $('<div class="row"></div>');
            }
            if ($.cookie(filteredBooks[i].name)) {
                div.append($('<div class="book col-xs-3 done" data-name="' + filteredBooks[i].name + '"><img src="imgs/' + filteredBooks[i].pik + '.jpg"><div class="check"></div></div>'));
            } else {
                div.append($('<div class="book col-xs-3" data-name="' + filteredBooks[i].name + '"><img src="imgs/' + filteredBooks[i].pik + '.jpg"></div>'));
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
