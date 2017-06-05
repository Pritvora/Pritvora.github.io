$(document).ready(function () {
    var books = [{
            name: "Летучий корабль",
            pik: "Корабль",
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
    }, {
            name: "Пеппи длинный чулок",
            pik: "Пеппи",
            grade: 2
    }, {
            name: "Сказка о золотом петушке",
            pik: "Петушок",
            grade: 2
    }, {
            name: "Русалочка",
            pik: "Русалочка",
            grade: 2
    }, {
            name: "Синяя Борода",
            pik: "Синяя Борода",
            grade: 2
    }, {
            name: "Старик Хоттабыч",
            pik: "Старик",
            grade: 2
    }, {
            name: "Королевство кривых зеркал",
            pik: "КорКривЗеркал",
            grade: 2
    }, {
            name: "Горячий камень",
            pik: "ГорКам",
            grade: 2
    }, {
            name: "Марья Моревна",
            pik: "Марья",
            grade: 2
    }, {
            name: "Королевство кривых зеркал",
            pik: "КорКривЗеркал",
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
        $(".bookrow").remove();
        var filteredBooks = books.filter(function (b) {
            return b.grade == gradeFilter && b.name.indexOf(filter) != -1;
        });
        for (var i = 0; i <= Math.floor(filteredBooks.length / 4); i++) {
            var div = $('<div class="row bookrow"></div>');
            for (var j = 0; j < 4; j++) {
                if (i * 4 + j >= filteredBooks.length)
                    break;
                var book = filteredBooks[i * 4 + j];
                if ($.cookie(filteredBooks[i].name)) {
                    div.append($('<div class="book col-xs-3 done" data-name="' + book.name + '"><img src="imgs/' + book.grade + "/" + book.pik + '.jpg"><div class="check"></div></div>'));
                } else {
                    div.append($('<div class="book col-xs-3" data-name="' + book.name + '"><img src="imgs/' + book.grade + "/" + book.pik + '.jpg"></div>'));
                }
            }
            $('.content').append(div);
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
