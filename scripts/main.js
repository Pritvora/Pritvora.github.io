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
            name: "Чучело",
            pik: "Чучело",
            grade: 6
        }, {
            name: "Фотография, на которой меня нет",
            pik: "Фотография, на которой меня нет",
            grade: 6
        }, {
            name: "Три мушкетера",
            pik: "Три мушкетера",
            grade: 6
        }, {
            name: "Толстый и тонкий",
            pik: "Толстый и тонкий",
            grade: 6
        }, {
            name: "Принц и нищий",
            pik: "Принц и нищий",
            grade: 6
        }, {
            name: "Последний из могикан",
            pik: "Последний из могикан",
            grade: 6
        }, {
            name: "Моя семья и другие звери",
            pik: "Моя семья и другие звери",
            grade: 6
        }, {
            name: "Изумруд",
            pik: "Изумруд",
            grade: 6
        }, {
            name: "Звоните и приезжайте",
            pik: "Звоните и приезжайте",
            grade: 6
        }, {
            name: "Детский годы Багрова-внука",
            pik: "Детский годы Багрова-внука",
            grade: 6
        }, {
            name: "Девочка с Земли",
            pik: "Девочка с Земли",
            grade: 6
        }, {
            name: "Валькины друзья и паруса",
            pik: "Валькины друзья и паруса",
            grade: 6
        }, {
            name: "В прекрасном и яростном мире",
            pik: "В прекрасном и яростном мире",
            grade: 6
        }, {
            name: "Дары волхвов",
            pik: "ДарыВол",
            grade: 7
        }, {
            name: "Детство",
            pik: "Детство",
            grade: 7
        }, {
            name: "Записки охотника",
            pik: "ЗапОх",
            grade: 7
        }, {
            name: "Куст сирени",
            pik: "КустСир",
            grade: 7
        }, {
            name: "Мещерская сторона",
            pik: "МещерскСтор",
            grade: 7
        }, {
            name: "Микроскоп",
            pik: "Микроскоп",
            grade: 7
        }, {
            name: "Остров сокровищ",
            pik: "ОстровСОк",
            grade: 7
        }, {
            name: "Песня про царя Ивана",
            pik: "ПесняПроЦар",
            grade: 7
        }, {
            name: "Планета людей",
            pik: "ПланетаЛюдей",
            grade: 7
        }, {
            name: "Повесть о том как один мужик",
            pik: "Повестьотом",
            grade: 7
        }, {
            name: "Полтава",
            pik: "Полтава",
            grade: 7
        }, {
            name: "Русские женщины",
            pik: "РусЖен",
            grade: 7
        }, {
            name: "Севастопольские рассказы",
            pik: "СевРассказы",
            grade: 7
        }, {
            name: "Тарас Бульба",
            pik: "Тарас",
            grade: 7
        }, {
            name: "Ася",
            pik: "Ася",
            grade: 8
        }, {
            name: "Гамлет",
            pik: "Гамлет",
            grade: 8
        }, {
            name: "Капитанская дочка",
            pik: "КапДочка",
            grade: 8
        }, {
            name: "Недоросль",
            pik: "Недоросль",
            grade: 8
        }, {
            name: "Повелитель мух",
            pik: "Повелитель",
            grade: 8
        }, {
            name: "Пожар",
            pik: "Пожар",
            grade: 8
        }, {
            name: "Портрет Дориана Грея",
            pik: "Портрет",
            grade: 8
        }, {
            name: "Приглашение на казнь",
            pik: "ПригКазнь",
            grade: 8
        }, {
            name: "Ревизор",
            pik: "Ревизор",
            grade: 8
        }, {
            name: "Роковые яйца",
            pik: "Роковые",
            grade: 8
        }, {
            name: "Ромео и Джульета",
            pik: "Ромео",
            grade: 8
        }, {
            name: "Василий Теркин",
            pik: "Теркин",
            grade: 8
        }, {
            name: "Хождение по мукам",
            pik: "Хожпо",
            grade: 8
        }, {
            name: "Бедная Лиза",
            pik: "Бедная Лиза",
            grade: 9
        }, {
            name: "Бедные люди",
            pik: "Бедные люди",
            grade: 9
        }, {
            name: "Белые ночи",
            pik: "Белые ночи",
            grade: 9
        }, {
            name: "Герой нашего времени",
            pik: "Герой нашего времени",
            grade: 9
        }, {
            name: "Гобсек",
            pik: "Гобсек",
            grade: 9
        }, {
            name: "Евгений Онегин",
            pik: "Евгений Онегин",
            grade: 9
        }, {
            name: "Золотой горшок",
            pik: "Золотой горшок",
            grade: 9
        }, {
            name: "Маленькие трагедии",
            pik: "Маленькие трагедии",
            grade: 9
        }, {
            name: "Мертвые души",
            pik: "Мертвые души",
            grade: 9
        }, {
            name: "Мещанин во дворянстве",
            pik: "Мещанин во дворянстве",
            grade: 9
        }, {
            name: "Свои люди -сочтемся",
            pik: "Свои люди -сочтемся",
            grade: 9
        }, {
            name: "Собор Парижской Богоматери",
            pik: "Собор Парижской Богоматери",
            grade: 9
        }, {
            name: "Старик и море",
            pik: "Старик и море",
            grade: 9
        }, {
            name: "Судьба человека",
            pik: "Судьба человека",
            grade: 9
        }, {
            name: "Шинель",
            pik: "Шинель",
            grade: 9
        }, {
            name: "Юность",
            pik: "Юность",
            grade: 9
        }, {
            name: "Бесприданница",
            pik: "Бесприданница",
            grade: 10
        }, {
            name: "Вишневый сад",
            pik: "Вишневый сад",
            grade: 10
        }, {
            name: "Война и мир",
            pik: "Война и мир",
            grade: 10
        }, {
            name: "Гроза",
            pik: "Гроза",
            grade: 10
        }, {
            name: "Дама с собачкой",
            pik: "Дама с собачкой",
            grade: 10
        }, {
            name: "Дом с мезонином",
            pik: "Дом с мезонином",
            grade: 10
        }, {
            name: "История одного города",
            pik: "История одного города",
            grade: 10
        }, {
            name: "Кому на Руси жить хорошо",
            pik: "Кому на Руси жить хорошо",
            grade: 10
        }, {
            name: "Леди Макбет Мценского уездаа",
            pik: "Леди Макбет Мценского уездаа",
            grade: 10
        }, {
            name: "О любви",
            pik: "О любви",
            grade: 10
        }, {
            name: "Обломов",
            pik: "Обломов",
            grade: 10
        }, {
            name: "Отцы и дети",
            pik: "Отцы и дети",
            grade: 10
        }, {
            name: "Очарованный странник",
            pik: "Очарованный странник",
            grade: 10
        }, {
            name: "Преступление и наказание",
            pik: "Преступление и наказание",
            grade: 10
        }, {
            name: "Белая гвардия",
            pik: "Белая гвардия",
            grade: 11
        }, {
            name: "Горячий снег",
            pik: "Горячий снег",
            grade: 11
        }, {
            name: "Господин из Сан-Франциско",
            pik: "Господин из Сан-Франциско",
            grade: 11
        }, {
            name: "Гранатовый браслет",
            pik: "Гранатовый браслет",
            grade: 11
        }, {
            name: "Доктор Живаго",
            pik: "Доктор Живаго",
            grade: 11
        }, {
            name: "Дон Кихот",
            pik: "Дон Кихот",
            grade: 11
        }, {
            name: "Мастер и Маргарита",
            pik: "Мастер и Маргарита",
            grade: 11
        }, {
            name: "Матренин двор",
            pik: "Матренин двор",
            grade: 11
        }, {
            name: "Мы",
            pik: "Мы",
            grade: 11
        }, {
            name: "На дне",
            pik: "На дне",
            grade: 11
        }, {
            name: "Один день Ивана Денисовича",
            pik: "Один день Ивана Денисовича",
            grade: 11
        }, {
            name: "Петр Первый",
            pik: "Петр Первый",
            grade: 11
        }, {
            name: "Собачье сердце",
            pik: "Собачье сердце",
            grade: 11
        }, {
            name: "Темные аллеи",
            pik: "Темные аллеи",
            grade: 11
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
    var gradeFilter = localStorage.getItem("grade") || 2;
    render();

    $(".sclass[data-grade='" + gradeFilter + "']").addClass("selected");

    $(".sclass, .logo").click(function () {
        gradeFilter = $(this).data("grade");
        $(".selected.sclass").removeClass("selected");
        $(this).addClass("selected");
        localStorage.setItem("grade", parseInt(gradeFilter));
        render();
    });


    $("input").on("keyup", function () {
        filter = $(this).val();
        render();
    });

    function render() {
        $(".bookrow").remove();
        if (!localStorage.getItem("grade")) {
            $('.content').append("<img src='imgs/mascot.png' class='mascot bookrow'></img>");
        } else {
            var filteredBooks = books.filter(function (b) {
                return b.grade == gradeFilter && b.name.toLowerCase().indexOf(filter.toLowerCase()) != -1;
            });
            for (var i = 0; i <= Math.floor(filteredBooks.length / 4); i++) {
                var div = $('<div class="row bookrow"></div>');
                for (var j = 0; j < 4; j++) {
                    if (i * 4 + j >= filteredBooks.length)
                        break;
                    var book = filteredBooks[i * 4 + j];
                    if (localStorage.getItem(book.name) == 1) {
                        div.append($('<div class="book col-xs-3 done" data-name="' + book.name + '"><img src="imgs/' + book.grade + "/" + book.pik + '.jpg"><div class="check"></div></div>'));
                    } else {
                        div.append($('<div class="book col-xs-3" data-name="' + book.name + '"><img src="imgs/' + book.grade + "/" + book.pik + '.jpg"></div>'));
                    }
                }
                $('.content').append(div);
            }
            $(".book").click(function () {
                if ($(this).hasClass("done")) {
                    localStorage.setItem($(this).data("name"), 0);
                } else {
                    localStorage.setItem($(this).data("name"), 1);
                }
                render();
            });
        }
    }

});
