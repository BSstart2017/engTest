export type VocabularyType = {
	[key: string]: string | string[];
}

const day1: VocabularyType = {
	"I": "Я",
	"Speak": "говорить",
	"English": "Английский",
	"Can": "Уметь",
	"Understand": "Понимаю",
	"You": "Ты",
	"It": "Это",
	"Very": "Очень",
	"Well": "Хорошо",
	"Work": "Работа",
	"Study": "Учиться",
	"And": "и",
	"Learn": "Изучать",
	"Like": "Нравиться",
	"This": "Этот",
	"Online": "Онлайн",
	"Place": "Место",
	"City": "Город",
	"Line": "Линия",
	"In": "В",
	"Russia": "Россия",
	"New York": "Нью Йорк",
	"Country": "Страна",
	"We": "Мы",
	"They": "Они",
	"Help": "Помощь",
	"Me": "Мне",
	"Really": "Действительно",
	"Want": "Хотеть",
	"Lesson": "Урок",
	"Video": "Видео",
	"Program": "Программа",
	"See": "Видеть",
	"My": "Мой",
	"Result": "Результат",
	"Russian": "Русский",
	"Know": "Знать",
	"Go": "Идти",
	"To": "к",
	"School": "Школа",
	"Often": "Часто",
	"Here": "Здесь",
	"There": "Там",
	"Language": "Язык",
	"Every": "Каждый",
	"Day": "День",
	"Do": "Делать",
	"Travel": "Путешествовать",
	"Year": "Год",
	"Traveling": "Путешествие",
	"Game": "Игра",
	"Play": "Играть",
	"Football": "Футбол",
	"So": "Так",
	"Also": "Так же",
	"Think": "Думать",
	"About": "о",
	"Sometimes": "Иногда",
	"Love": "Любовь",
	"Song": "Песня",
	"Music": "Музыка",
	"Read": "Читать",
	"Book": "Книга",
	"More": "Больше",
	"Practice": "Практика",
	"These": "Эти",
	"Usually": "Обычно",
	"Buy": "Купить",
	"Thing": "Вещь",
	"Absolutely": "Абсолютно",
	"Agree": "Согласен",
	"Better": "Лучше",
	"Cost": "Стоить",
	"Dollar": "Доллар",
	"Euro": "Евро",
	"Far": "Далеко",
	"Feel": "Самочувствие",
	"Fifty": "Пятьдесят",
	"He": "Он",
	"Less": "Меньше",
	"Make": "Делать",
	"Mistake": "Ошибка",
	"Much": "Много",
	"Near": "Рядом",
	"Pound": "Фунт",
	"Problem": "Проблема",
	"She": "Она",
	"Ten": "Десять",
	"That": "Тот",
	"Ticket": "Билет",
	"Together": "Вместе",
	"Twenty": "Двадцать",
	"With": "С",
	"Call": "Звонить",
	"Happen": "Случаться",
	"Hear": "Слышать",
	"How": "Как",
	"Idea": "Идея",
	"Little": "Мало",
	"A lot of": "Много",
};

const day2: VocabularyType = {
	"On": "на",
	"people": "люди",
	"person": "человек",
	"say": "говорить",
	"tell": ["сказать", "рассказывать"],
	"too": ["так же", "то же"],
	"TV": "телевизор",
	"us": ["нам","нас"],
	"watch": "смотреть",
	"why": ["почему", "зачем"],
	"apple": "яблоко",
	"boy": "мальчик",
	"brother": "брат",
	"bus": "автобус",
	"car": "машина",
	"free": ["бесплатно", "свободный"],
	"girl": ["девушка", "девочка"],
	"have": "иметь",
	"hotel": "отель",
	"house": "дом",
	"job": "работа",
	"man": "мужчина",
	"money": "деньги",
	"one": "один",
	"orange": "апельсин",
	"question": "вопрос",
	"sister": "систра",
	"some": ["некоторые", "немного"],
	"teacher": "учитель",
	"time": "время",
	"two": "два",
	"university": "университет",
	"woman": "женщина",
	"your": ["твой", "ваш"],
	"bank": "банк",
	"coffee": "кофе",
	"computer": "компьютер",
	"different": ["другой", "разный"],
	"drink": "пить",
	"eat": "есть",
	"exercise": ["задание", "упражнение"],
	"family": "семья",
	"fish": "рыба",
	"juicer": "сок",
	"milk": "молоко",
	"motivation": "мотивация",
	"progress": "прогресс",
	"sport": "спорт",
	"student": "студент",
	"taxi": "такси",
	"tea": "чай",
	"water": "вода",
	"airport": "аэропорт",
	"apartment": "квартира",
	"cake": "торт",
	"child": "ребёнок",
	"children": "дети",
	"chocolate": "шоколад",
	"daughter": "дочка",
	"four": "четыре",
	"German": "Немецкий",
	"meat": "мясо",
	"men": "мужчины",
	"seafood": "морепродукты",
	"son": "сын",
	"Spanish": "Испанский",
	"three": "три",
	"women": "женщины",
	"boyfriend": "парень",
	"ice cream": "мороженное",
	"foreign": "иностранный",
	"girlfriend": "девушка",
	"hospital": "больница",
	"pizza": "пицца",
	"swimming": "плавание",
	"be": "быть",
	"become": "становиться",
	"businessman": "бизнесмен",
	"correctly": ["корректно", "правильно"],
	"designer": "дизайнер",
	"doctor": "доктор, врач",
	"fluently": "свободно",
	"happy": "счастливый",
	"her": "ей",
	"him": "ему",
	"manager": "менеджер",
	"new": "новый",
	"now": "сейчас",
	"programmer": "программист",
	"them": "их, им",
	"visit": ["посещать", "визит"],
	"without": "без",
	"would": "бы",
	"abroad": "заграницей",
	"China": "Китай",
	"England": "Англия",
	"father": "отец",
	"Germany": "Германия",
	"his": "его",
	"Italy": "Италия"
};

const day3: VocabularyType = {
	"Japan": "Япония",
	"month": "месяц",
	"mother": "мама",
	"next": "следующий",
	"the United States": "соединённые штаты",
	"their": "их",
	"week": "неделя",
	"big": "большой",
	"business": "бизнес",
	"control": ["контролировать", "контроль"],
	"course": "курс",
	"education": "образование",
	"food": "еда",
	"for": "для",
	"future": "будущее",
	"not": "нет",
	"our": "наш",
	"pay": "платить",
	"politics": "политика",
	"situation": "ситуация",
	"spend": ["проводить", "тратить"],
	"talk": ["говорить", "разговаривать"],
	"tennis": "теннис",
	"those": "те",
	"any": "любой",
	"cat": "кот",
	"dog": "собака",
	"exam": "экзамен",
	"friend": "друг",
	"interest": "интерес",
	"interesting": "интересный",
	"internet": "интернет",
	"maths": "математика",
	"motivate": "мотивация",
	"only": "только",
	"plan": "план",
	"sell": "продавать",
	"service": "сервис",
	"subject": ["предмет", "тема"],
	"teach": "учить",
	"test": "тест",
	"use": "использовать",
	"worry": ["беспокоиться", "волноваться"],
	"address": "адрес",
	"again": ["опять", "снова"],
	"another": ["другой, другое"],
	"bad": "плохой",
	"because": "потому что",
	"communicate": ["коммуникация", "общаться", "общение"],
	"fast": "быстро",
	"get": ["взять", "получать"],
	"good": "хороший",
	"name": "имя",
	"need": "нужно",
	"other": "другие",
	"prefer": "предпочитать",
	"professionally": "профессионально",
	"remember": "помнить",
	"slowly": "медленно",
	"website": "сайт",
	"who": "кто, кого",
	"boring": "скучный",
	"Chinese": "Китайский",
	"cinema": ["кино", "кинотеатр"],
	"dancing": "танцы",
	"find": "находить",
	"intensively": ["интенсивно", "активно"],
	"many": "много",
	"movie": ["мультик", "фильм"],
	"or": "или",
	"park": "парк",
	"reading": "чтение",
	"real": ["реально", "реальный"],
	"show": "показать",
	"singing": "пение",
	"support": ["помогать", "поддерживать"],
	"train": "тренироваться",
	"weather": "погода",
	"write": "писать",
	"actor": "актёр",
	"actress": "актриса",
	"change": ["изменять", "меняться"],
	"cheap": ["дешёвый", "дёшево"],
	"discuss": ["дискутировать", "обсуждать"],
	"expensive": ["дорого", "дорогой"],
	"five": "5",
	"forty": "40",
	"from": "из",
	"one hundred": "100",
	"important": ["важно", "важный"],
	"listen": "слушать",
	"look": "смотреть",
	"method": "метод",
	"phone": "телефон",
	"seem": ["казаться", "показалось"],
	"seven": "7",
	"strange": ["странно", "странный"],
	"than": "чем",
	"thirty": "30",
	"thousand": "1000"
};

const day4: VocabularyType = {
	"application": "приложение",
	"clothes": "одежда",
	"come": "приходить",
	"cook": "готовить",
	"dance": "танцевать",
	"early": ["рано", "утро"],
	"enough": ["достаточно", "хватит"],
	"get up": "вставать",
	"group": "группа",
	"home": "дом",
	"late": ["опоздать", "позже"],
	"order": ["заказ", "заказывать"],
	"pet": ["питомец", "домашнее животное"],
	"profession": "профессия",
	"recommend": "рекомендовать",
	"shop": "магазин",
	"toy": "игрушка",
	"wake up": "просыпайся",
	"all": ["все", "всё"],
	"document": "документ",
	"download": ["загрузка", "скачать"],
	"file": "файл",
	"island": "остров",
	"leave": ["уйти", "покинуть"],
	"level": "уровень",
	"regularly": ["регулярно", "постоянно"],
	"sad": "печально",
	"unhappy": ["несчастливый", "несчастный"],
	"what": "что",
	"when": "когда",
	"were": "где",
	"which": "который",
	"angry": "злой",
	"at": ["в", "на"],
	"best": "лучший",
	"busy": ["занят", "занято", "занятый"],
	"fact": "факт",
	"husband": "муж",
	"million": "миллион",
	"old": "старый",
	"right": "правильно",
	"room": "комната",
	"secretary": "секретарь",
	"singer": "певец",
	"sixty": "60",
	"sure": "уверен",
	"wife": "жена",
	"wonderful": ["прекрасное", "замечательно"],
	"young": "молодой",
	"alright": "всё в порядке",
	"American": ["американец", "Американский"],
	"beautiful": ["красивый", "красиво"],
	"dangerous": ["опасность", "опасно"],
	"difficult": ["трудно", "сложно"],
	"easy": "легко",
	"effective": "эффективно",
	"eight": "8",
	"eighteen": "80",
	"fine": ["хорошо", "в порядке"],
	"hardworking": "трудолюбивый",
	"lazy": ["лениться", "ленивый"],
	"married": ["женат", "замужем", "быть в браке"],
	"ok": ["ок ей", "всё хорошо"],
	"parents": "родители",
	"poor": "бедный",
	"possible": "возможно",
	"ready": "готов",
	"rich": "богатый",
	"seventy": "70",
	"singe": "холост",
	"smart": "умный",
	"afraid": "бояться",
	"answer": "ответ",
	"correct": ["правильно", "правильный"],
	"decision": "решение",
	"of": "из",
	"popular": "популярный",
	"assistant": ["ассистент", "помощник"],
	"Brazil": "Бразилия",
	"cheaper": "дешевле",
	"choice": "выбор",
	"colleague": "коллега",
	"director": "директор",
	"driver": "водитель",
	"kitchen": "кухня",
	"native speaker": "носитель языка",
	"price": "цена",
	"professional": "профессионал",
	"trainer": "тренер",
	"worker": ["сотрудник", "рабочий"],
	"bag": "сумка",
	"box": "коробка",
	"dress": "платье",
	"jeans": "джинсы",
	"pair": "пара",
	"trousers": "брюки",
	"upset": "расстроен",
	"worse": "хуже",
	"wrong": "неправильно",
	"thousand": "1000"
};

const randomWord: VocabularyType = {
	...day1,
	...day2,
	...day3,
	...day4,
}

export type Vocabulary = {
	day1: VocabularyType;
	day2: VocabularyType;
	day3: VocabularyType;
	day4: VocabularyType;
	randomWord: VocabularyType;
};

export const vocabulary: Vocabulary = {
	day1,
	randomWord,
	day2,
	day3,
	day4,
};