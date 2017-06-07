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
            name: "Вниз по Волшебной реке",
            pik: "Вниз",
            grade: 2
    }, {
            name: "Голубая чашка",
            pik: "ГЧашка",
            grade: 2
    }, {
            name: "Кузька в новом доме",
            pik: "Кузьма",
            grade: 2
    }, {
            name: "Огниво",
            pik: "Огниво",
            grade: 2
    }, {
            name: "Ученик волшебника",
            pik: "УчВолшебника",
            grade: 2
    }, {
            name: "Аленький цветочек",
            pik: "АленькийЦв",
            grade: 3
    }, {
            name: "Путешествие Алисы",
            pik: "Алиса",
            grade: 3
    }, {
            name: "Городок в табакерке",
            pik: "Городок",
            grade: 3
    }, {
            name: "Путешествия Гулливера",
            pik: "Гулливера",
            grade: 3
    }, {
            name: "Детство",
            pik: "ДТемы",
            grade: 3
    }, {
            name: "Ежик в тумане",
            pik: "Ежик",
            grade: 3
    }, {
            name: "Сказка о жабе и розе",
            pik: "ЖабаИроза",
            grade: 3
    }, {
            name: "Как я ловил человечков",
            pik: "КакЯ",
            grade: 3
    }, {
            name: "Каштанка",
            pik: "Каштанка",
            grade: 3
    }, {
            name: "Конек-Горбунок",
            pik: "КГорбунок",
            grade: 3
    }, {
            name: "Лиса и журавль",
            pik: "ЛисаиЖур",
            grade: 3
    }, {
            name: "Маленький принц",
            pik: "МалПр",
            grade: 3
    }, {
            name: "Сказка о мертвой царевне и о семи богатырях",
            pik: "Мертвая",
            grade: 3
    }, {
            name: "Мой добрый папа",
            pik: "МойДПапа",
            grade: 3
    }, {
            name: "Питер Пэн",
            pik: "ПитерПэн",
            grade: 3
    }, {
            name: "Приключения Электроника",
            pik: "ПЭл",
            grade: 3
    }, {
            name: "Серебряное копытце",
            pik: "СерКоп",
            grade: 3
    }, {
            name: "Синяя птица",
            pik: "СинПтица",
            grade: 3
    }, {
            name: "Страна ОЗ",
            pik: "СтранаОЗ",
            grade: 3
    }, {
            name: "Приключения Тома Сойера",
            pik: "Том",
            grade: 3
    }, {
            name: "Три толстяка",
            pik: "ТриТол",
            grade: 3
    }, {
            name: "Черная курица",
            pik: "ЧКурица",
            grade: 3
    }, {
            name: "Щелкунчик и Мышиный король",
            pik: "Щелкунчик",
            grade: 3
    }, {
            name: "Вечера на хуторе близ Диканьки",
            pik: "Вечера",
            grade: 4
    }, {
            name: "Городок в табакерке",
            pik: "Городок",
            grade: 4
    }, {
            name: "Невидимое дитя",
            pik: "Дитя",
            grade: 4
    }, {
            name: "Дубровский",
            pik: "Дубровский",
            grade: 4
    }, {
            name: "Двенадцать месяцев",
            pik: "Месяцы",
            grade: 4
    }, {
            name: "Муму",
            pik: "Муму",
            grade: 4
    }, {
            name: "В дурном обществе",
            pik: "Общество",
            grade: 4
    }, {
            name: "Васюткино озеро",
            pik: "Озеро",
            grade: 4
    }, {
            name: "О чем говорят цветы",
            pik: "ОчемговЦв",
            grade: 4
    }, {
            name: "Кавказский пленник",
            pik: "Пленник",
            grade: 4
    }, {
            name: "Рассказы и сказки",
            pik: "Рассказы",
            grade: 4
    }, {
            name: "Робинзон Крузо",
            pik: "Робинзон",
            grade: 4
    }, {
            name: "Спящая царевна",
            pik: "Спящая",
            grade: 4
    }, {
            name: "Тедди",
            pik: "Тедди",
            grade: 4
    }, {
            name: "Хоббит или Туда и Обратно",
            pik: "Хоббит",
            grade: 4
    }, {
            name: "Белый пудель",
            pik: "БелПудель",
            grade: 5
    }, {
            name: "Бежин луг",
            pik: "БЛуг",
            grade: 5
    }, {
            name: "Вождь краснокожих",
            pik: "ВождьКрасн",
            grade: 5
    }, {
            name: "Кладовая солнца",
            pik: "КладСолнца",
            grade: 5
    }, {
            name: "Конь с розовой гривой",
            pik: "Конь",
            grade: 5
    }, {
            name: "Левша",
            pik: "Левша",
            grade: 5
    }, {
            name: "Любовь к жизни",
            pik: "Любовь",
            grade: 5
    }, {
            name: "Маттео Фальконе",
            pik: "Маттео",
            grade: 5
    }, {
            name: "Алые паруса",
            pik: "Паруса",
            grade: 5
    }, {
            name: "Повести покойного ",
            pik: "ПовестиБел",
            grade: 5
    }, {
            name: "Уроки французского",
            pik: "УрФран",
            grade: 5
    }, {
            name: "Приключения Гекльберри Финна",
            pik: "Финн",
            grade: 5
    }, {
            name: "Дары волхвов",
            pik: "ДарыВол",
            grade: 6
    }, {
            name: "Детство",
            pik: "Детство",
            grade: 6
    }, {
            name: "Записки охотника",
            pik: "ЗапОх",
            grade: 6
    }, {
            name: "Куст сирени",
            pik: "КустСир",
            grade: 6
    }, {
            name: "Мещерская сторона",
            pik: "МещерскСтор",
            grade: 6
    }, {
            name: "Микроскоп",
            pik: "Микроскоп",
            grade: 6
    }, {
            name: "Остров сокровищ",
            pik: "ОстровСОк",
            grade: 6
    }, {
            name: "Песня про царя Ивана",
            pik: "ПесняПроЦар",
            grade: 6
    }, {
            name: "Планета людей",
            pik: "ПланетаЛюдей",
            grade: 6
    }, {
            name: "Повесть о том как один мужик",
            pik: "Повестьотом",
            grade: 6
    }, {
            name: "Полтава",
            pik: "Полтава",
            grade: 6
    }, {
            name: "Русские женщины",
            pik: "РусЖен",
            grade: 6
    }, {
            name: "Севастопольские рассказы",
            pik: "СевРассказы",
            grade: 6
    }, {
            name: "Тарас Бульба",
            pik: "Тарас",
            grade: 6
    }, {
            name: "Ася",
            pik: "Ася",
            grade: 7
    }, {
            name: "Гамлет",
            pik: "Гамлет",
            grade: 7
    }, {
            name: "Капитанская дочка",
            pik: "КапДочка",
            grade: 7
    }, {
            name: "Недоросль",
            pik: "Недоросль",
            grade: 7
    }, {
            name: "Повелитель мух",
            pik: "Повелитель",
            grade: 7
    }, {
            name: "Пожар",
            pik: "Пожар",
            grade: 7
    }, {
            name: "Портрет Дориана Грея",
            pik: "Портрет",
            grade: 7
    }, {
            name: "Приглашение на казнь",
            pik: "ПригКазнь",
            grade: 7
    }, {
            name: "Ревизор",
            pik: "Ревизор",
            grade: 7
    }, {
            name: "Роковые яйца",
            pik: "Роковые",
            grade: 7
    }, {
            name: "Ромео и Джульета",
            pik: "Ромео",
            grade: 7
    }, {
            name: "Василий Теркин",
            pik: "Теркин",
            grade: 7
    }, {
            name: "Хождение по мукам",
            pik: "Хожпо",
            grade: 7
    }, {
            name: "Бедная Лиза",
            pik: "Бедная Лиза",
            grade: 8
    }, {
            name: "Бедные люди",
            pik: "Бедные люди",
            grade: 8
    }, {
            name: "Белые ночи",
            pik: "Белые ночи",
            grade: 8
    }, {
            name: "Герой нашего времени",
            pik: "Герой нашего времени",
            grade: 8
    }, {
            name: "Гобсек",
            pik: "Гобсек",
            grade: 8
    }, {
            name: "Евгений Онегин",
            pik: "Евгений Онегин",
            grade: 8
    }, {
            name: "Золотой горшок",
            pik: "Золотой горшок",
            grade: 8
    }, {
            name: "Маленькие трагедии",
            pik: "Маленькие трагедии",
            grade: 8
    }, {
            name: "Мертвые души",
            pik: "Мертвые души",
            grade: 8
    }, {
            name: "Мещанин во дворянстве",
            pik: "Мещанин во дворянстве",
            grade: 8
    }, {
            name: "Свои люди -сочтемся",
            pik: "Свои люди -сочтемся",
            grade: 8
    }, {
            name: "Собор Парижской Богоматери",
            pik: "Собор Парижской Богоматери",
            grade: 8
    }, {
            name: "Старик и море",
            pik: "Старик и море",
            grade: 8
    }, {
            name: "Судьба человека",
            pik: "Судьба человека",
            grade: 8
    }, {
            name: "Шинель",
            pik: "Шинель",
            grade: 8
    }, {
            name: "Юность",
            pik: "Юность",
            grade: 8
    }, {
            name: "Бесприданница",
            pik: "Бесприданница",
            grade: 9
    }, {
            name: "Вишневый сад",
            pik: "Вишневый сад",
            grade: 9
    }, {
            name: "Война и мир",
            pik: "Война и мир",
            grade: 9
    }, {
            name: "Гроза",
            pik: "Гроза",
            grade: 9
    }, {
            name: "Дама с собачкой",
            pik: "Дама с собачкой",
            grade: 9
    }, {
            name: "Дом с мезонином",
            pik: "Дом с мезонином",
            grade: 9
    }, {
            name: "История одного города",
            pik: "История одного города",
            grade: 9
    }, {
            name: "Кому на Руси жить хорошо",
            pik: "Кому на Руси жить хорошо",
            grade: 9
    }, {
            name: "Леди Макбет Мценского уездаа",
            pik: "Леди Макбет Мценского уездаа",
            grade: 9
    }, {
            name: "О любви",
            pik: "О любви",
            grade: 9
    }, {
            name: "Обломов",
            pik: "Обломов",
            grade: 9
    }, {
            name: "Отцы и дети",
            pik: "Отцы и дети",
            grade: 9
    }, {
            name: "Очарованный странник",
            pik: "Очарованный странник",
            grade: 9
    }, {
            name: "Преступление и наказание",
            pik: "Преступление и наказание",
            grade: 9
    }, {
            name: "Белая гвардия",
            pik: "Белая гвардия",
            grade: 10
    }, {
            name: "Горячий снег",
            pik: "Горячий снег",
            grade: 10
    }, {
            name: "Господин из Сан-Франциско",
            pik: "Господин из Сан-Франциско",
            grade: 10
    }, {
            name: "Гранатовый браслет",
            pik: "Гранатовый браслет",
            grade: 10
    }, {
            name: "Доктор Живаго",
            pik: "Доктор Живаго",
            grade: 10
    }, {
            name: "Дон Кихот",
            pik: "Дон Кихот",
            grade: 10
    }, {
            name: "Мастер и Маргарита",
            pik: "Мастер и Маргарита",
            grade: 10
    }, {
            name: "Матренин двор",
            pik: "Матренин двор",
            grade: 10
    }, {
            name: "Мы",
            pik: "Мы",
            grade: 10
    }, {
            name: "На дне",
            pik: "На дне",
            grade: 10
    }, {
            name: "Один день Ивана Денисовича",
            pik: "Один день Ивана Денисовича",
            grade: 10
    }, {
            name: "Петр Первый",
            pik: "Петр Первый",
            grade: 10
    }, {
            name: "Собачье сердце",
            pik: "Собачье сердце",
            grade: 10
    }, {
            name: "Темные аллеи",
            pik: "Темные аллеи",
            grade: 10
    }, {
            name: "Бегущая по волнам",
            pik: "Бегущая по волнам",
            grade: 11
    }, {
            name: "Братья и сестры",
            pik: "Братья и сестры",
            grade: 11
    }, {
            name: "Гордость и предубеждение",
            pik: "Гордость и предубеждение",
            grade: 11
    }, {
            name: "Джейн Эйр",
            pik: "Джейн Эйр",
            grade: 11
    }, {
            name: "Дни Турбиных",
            pik: "Дни Турбиных",
            grade: 11
    }, {
            name: "Король Артур и рыцари Круглова стола",
            pik: "Король Артур и рыцари Круглова стола",
            grade: 11
    }, {
            name: "Красный цветок",
            pik: "Красный цветок",
            grade: 11
    }, {
            name: "Мартин Иден",
            pik: "Мартин Иден",
            grade: 11
    }, {
            name: "На западном фронте без перемен",
            pik: "На западном фронте без перемен",
            grade: 11
    }, {
            name: "Обелиск",
            pik: "Обелиск",
            grade: 11
    }, {
            name: "Пигмалион",
            pik: "Пигмалион",
            grade: 11
    }, {
            name: "По ком звонит колокол",
            pik: "По ком звонит колокол",
            grade: 11
    }, {
            name: "Поднятая целина",
            pik: "Поднятая целина",
            grade: 11
    }, {
            name: "Поединок",
            pik: "Поединок",
            grade: 11
    }, {
            name: "Понедельник начинается в субботу",
            pik: "Понедельник начинается в субботу",
            grade: 11
    }, {
            name: "Последний поклон",
            pik: "Последний поклон",
            grade: 11
    }, {
            name: "Сто лет одиночества",
            pik: "Сто лет одиночества",
            grade: 11
    }, {
            name: "Три товарища",
            pik: "Три товарища",
            grade: 11
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
                if ($.cookie(book.name)) {
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
