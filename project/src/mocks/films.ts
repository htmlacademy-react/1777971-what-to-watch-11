export interface IFilm {
    id: number;
    runTime: number;
    previewImage: string;
    trailer: string;
    name: string;
    genres: string[];
    date: number;
    director: string;
    starring: string[];
  }
export const films: IFilm[] = [
  {
    id: 1,
    runTime: 99,
    previewImage: 'img/bohemian-rhapsody.jpg',
    trailer: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name: 'The Grand Budapest Hotel',
    genres: ['Comedy'],
    date: 2014,
    director: 'Wes Anderson',
    starring: [
      'Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
      'Saoirse Ronan',
      'Tony Revoloru',
      'Tilda Swinton',
      'Tom Wilkinson',
      'Owen Wilkinson',
      'Adrien Brody',
      'Ralph Fiennes',
      'Jeff Goldblum']
  },
  {
    id: 2,
    runTime: 134,
    previewImage: 'img/bohemian-rhapsody.jpg',
    trailer: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name: 'Bohemian Rhapsody',
    genres: ['biography', 'music', 'drama'],
    date: 2018,
    director: 'Брайан Сингер',
    starring: [
      'Рами Малек',
      'Люси Бойнтон',
      'Гвилим Ли',
      'Бен Харди',
      'Джозеф Маццелло',
      'Эйдан Гиллен',
      'Аллен Лич',
      'Том Холландер',
      'Майк Майерс',
      'Аарон МакКаскер',]
  },
  {
    id: 3,
    runTime: 163,
    previewImage: 'img/aviator.jpg',
    trailer: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name: 'Aviator',
    genres: ['biography', 'drama'],
    date: 2004,
    director: 'Мартин Скорсезе',
    starring: [
      'Леонардо ДиКаприо',
      'Кейт Бланшетт',
      'Мэтт Росс',
      'Джон Си Райли',
      'Алан Алда',
      'Кейт Бекинсейл',
      'Алек Болдуин',
      'Иэн Холм',
      'Адам Скотт',
      'Дэнни Хьюстон',
    ]
  },
  {
    id: 4,
    runTime: 156,
    previewImage: 'img/revenant.jpg',
    trailer: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name: 'Revenant',
    genres: ['приключения', 'вестерн', 'боевик', 'драма', 'биография'],
    date: 2015,
    director: 'Алехандро Гонсалес Иньярриту',
    starring: [
      'Леонардо ДиКаприо',
      'Том Харди',
      'Донал Глисон',
      'Уилл Поултер',
      'Форрест Гудлак',
      'Пол Андерсон',
      'Кристоффер Йонер',
      'Джошуа Бёрдж',
      'Дуан Ховард',
      'Мила Нахеко',
    ]
  },
  {
    id: 5,
    runTime: 154,
    previewImage: 'img/pulp-fiction.jpg',
    trailer: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name: 'Pulp Fiction',
    genres: ['криминал', 'драма'],
    date: 1994,
    director: 'Квентин Тарантино',
    starring: [
      'Джон Траволта',
      'Сэмюэл Л. Джексон',
      'Брюс Уиллис',
      'Ума Турман',
      'Винг Реймз',
      'Тим Рот',
      'Харви Кейтель',
      'Квентин Тарантино',
      'Питер Грин',
      'Аманда Пламмер',
    ]
  },
  {
    id: 6,
    runTime: 104,
    previewImage: 'img/snatch.jpg',
    trailer: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name: 'Snatch',
    genres: ['криминал', 'комедия', 'боевик'],
    date: 2000,
    director: 'Гай Ричи',
    starring: [
      'Джейсон Стэйтем',
      'Стивен Грэм',
      'Брэд Питт',
      'Алан Форд',
      'Робби Ги',
      'Ленни Джеймс',
      'Эд',
      'Деннис Фарина',
      'Раде Шербеджия',
      'Винни Джонс',
    ]
  },
  {
    id: 7,
    runTime: 136,
    previewImage: 'img/seven-years-in-tibet.jpg',
    trailer: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name: 'Seven Years in Tibet',
    genres: ['драма', 'приключения', 'военный', 'биография', 'история'],
    date: 1997,
    director: 'Жан-Жак Анно',
    starring: [
      'Брэд Питт',
      'Дэвид Тьюлис',
      'Б.Д. Вонг',
      'Мако',
      'Дэнни Дензонгпа',
      'Виктор Вон',
      'Ингеборга Дапкунайте',
      'Цзямъян Цзямцо Ванчук',
      'Лакпа Тсамшо',
      'Джетсун Пема',
    ]
  },
  {
    id: 8,
    runTime: 116,
    previewImage: 'img/war-of-the-worlds.jpg',
    trailer: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name: 'War of the Worlds',
    genres: ['фантастика', 'боевик', 'приключения'],
    date: 2005,
    director: 'Стивен Спилберг',
    starring: [
      'Том Круз',
      'Дакота Фаннинг',
      'Миранда Отто',
      'Джастин Чатвин',
      'Тим Роббинс',
      'Рик Гонсалес',
      'Юл Васкес',
      'Ленни Венито',
      'Лиза Энн Уолтер',
      'Энн Робинсон',
    ]
  },
];
