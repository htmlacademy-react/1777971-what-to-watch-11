function getRandomNumber(max: number, min: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export interface IReview {
  id: number;
  text: string;
  rating: number;
  name: string;
  date: string;
}

export interface IFilm {
  id: number;
  runTime: number;
  rating: number;
  ratingStatus: string;
  ratings: number;
  firstDescription: string;
  secondDescription: string;
  previewImage: string;
  trailer: string;
  name: string;
  genres: string[];
  date: number;
  director: string;
  starring: string[];
  reviews: IReview[];
}


export const films: IFilm[] = [
  {
    id: 1,
    rating: getRandomNumber(10, 1),
    ratingStatus: 'Very Good',
    ratings: getRandomNumber(1000, 1),
    firstDescription:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
    secondDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae expedita tenetur debitis doloremque? Dolorum ullam praesentium saepe quae veritatis facere, ad quos quo ab, quaerat ea commodi necessitatibus debitis, eveniet ducimus distinctio autem? Est quidem quod quisquam quas eius, nihil beatae voluptatem suscipit ex, et, architecto perferendis molestiae adipisci?',
    runTime: 99,
    previewImage: 'img/the-grand-budapest-hotel-poster.jpg',
    trailer:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name: 'The Grand Budapest Hotel',
    genres: ['comedy'],
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
      'Jeff Goldblum',
    ],
    reviews: [{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `March ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    }],
  },
  {
    id: 2,
    rating: getRandomNumber(10, 1),
    ratingStatus: 'Very Good',
    ratings: getRandomNumber(1000, 1),
    firstDescription:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
    secondDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae expedita tenetur debitis doloremque? Dolorum ullam praesentium saepe quae veritatis facere, ad quos quo ab, quaerat ea commodi necessitatibus debitis, eveniet ducimus distinctio autem? Est quidem quod quisquam quas eius, nihil beatae voluptatem suscipit ex, et, architecto perferendis molestiae adipisci?',
    runTime: 134,
    previewImage: 'img/bohemian-rhapsody.jpg',
    trailer:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
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
      'Аарон МакКаскер',
    ],
    reviews: [{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `April ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `May ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    }],
  },
  {
    id: 3,
    rating: getRandomNumber(10, 1),
    ratingStatus: 'Very Good',
    ratings: getRandomNumber(1000, 1),
    firstDescription:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
    secondDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae expedita tenetur debitis doloremque? Dolorum ullam praesentium saepe quae veritatis facere, ad quos quo ab, quaerat ea commodi necessitatibus debitis, eveniet ducimus distinctio autem? Est quidem quod quisquam quas eius, nihil beatae voluptatem suscipit ex, et, architecto perferendis molestiae adipisci?',
    runTime: 163,
    previewImage: 'img/aviator.jpg',
    trailer:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
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
    ],
    reviews: [{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `June ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `July ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    }],
  },
  {
    id: 4,
    rating: getRandomNumber(10, 1),
    ratingStatus: 'Very Good',
    ratings: getRandomNumber(1000, 1),
    firstDescription:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
    secondDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae expedita tenetur debitis doloremque? Dolorum ullam praesentium saepe quae veritatis facere, ad quos quo ab, quaerat ea commodi necessitatibus debitis, eveniet ducimus distinctio autem? Est quidem quod quisquam quas eius, nihil beatae voluptatem suscipit ex, et, architecto perferendis molestiae adipisci?',
    runTime: 156,
    previewImage: 'img/revenant.jpg',
    trailer:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name: 'Revenant',
    genres: ['adventure', 'western', 'action', 'drama', 'biography'],
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
    ],
    reviews: [{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    }],
  },
  {
    id: 5,
    rating: getRandomNumber(10, 1),
    ratingStatus: 'Very Good',
    ratings: getRandomNumber(1000, 1),
    firstDescription:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
    secondDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae expedita tenetur debitis doloremque? Dolorum ullam praesentium saepe quae veritatis facere, ad quos quo ab, quaerat ea commodi necessitatibus debitis, eveniet ducimus distinctio autem? Est quidem quod quisquam quas eius, nihil beatae voluptatem suscipit ex, et, architecto perferendis molestiae adipisci?',
    runTime: 154,
    previewImage: 'img/pulp-fiction.jpg',
    trailer:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name: 'Pulp Fiction',
    genres: ['crime', 'drama'],
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
    ],
    reviews: [{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    }],
  },
  {
    id: 6,
    rating: getRandomNumber(10, 1),
    ratingStatus: 'Very Good',
    ratings: getRandomNumber(1000, 1),
    firstDescription:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
    secondDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae expedita tenetur debitis doloremque? Dolorum ullam praesentium saepe quae veritatis facere, ad quos quo ab, quaerat ea commodi necessitatibus debitis, eveniet ducimus distinctio autem? Est quidem quod quisquam quas eius, nihil beatae voluptatem suscipit ex, et, architecto perferendis molestiae adipisci?',
    runTime: 104,
    previewImage: 'img/snatch.jpg',
    trailer:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name: 'Snatch',
    genres: ['crime', 'comedy', 'action movie'],
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
    ],
    reviews: [{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    }],
  },
  {
    id: 7,
    rating: getRandomNumber(10, 1),
    ratingStatus: 'Very Good',
    ratings: getRandomNumber(1000, 1),
    firstDescription:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
    secondDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae expedita tenetur debitis doloremque? Dolorum ullam praesentium saepe quae veritatis facere, ad quos quo ab, quaerat ea commodi necessitatibus debitis, eveniet ducimus distinctio autem? Est quidem quod quisquam quas eius, nihil beatae voluptatem suscipit ex, et, architecto perferendis molestiae adipisci?',
    runTime: 136,
    previewImage: 'img/seven-years-in-tibet.jpg',
    trailer:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name: 'Seven Years in Tibet',
    genres: ['drama', 'adventure', 'military', 'biography', 'history'],
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
    ],
    reviews: [{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    }],
  },
  {
    id: 8,
    rating: getRandomNumber(10, 1),
    ratingStatus: 'Very Good',
    ratings: getRandomNumber(1000, 1),
    firstDescription:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
    secondDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae expedita tenetur debitis doloremque? Dolorum ullam praesentium saepe quae veritatis facere, ad quos quo ab, quaerat ea commodi necessitatibus debitis, eveniet ducimus distinctio autem? Est quidem quod quisquam quas eius, nihil beatae voluptatem suscipit ex, et, architecto perferendis molestiae adipisci?',
    runTime: 116,
    previewImage: 'img/war-of-the-worlds.jpg',
    trailer:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name: 'War of the Worlds',
    genres: ['fantasy', 'action', 'adventure'],
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
    ],
    reviews: [{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    },{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `December ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    }],
  },{
    id: 1,
    rating: getRandomNumber(10, 1),
    ratingStatus: 'Very Good',
    ratings: getRandomNumber(1000, 1),
    firstDescription:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
    secondDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae expedita tenetur debitis doloremque? Dolorum ullam praesentium saepe quae veritatis facere, ad quos quo ab, quaerat ea commodi necessitatibus debitis, eveniet ducimus distinctio autem? Est quidem quod quisquam quas eius, nihil beatae voluptatem suscipit ex, et, architecto perferendis molestiae adipisci?',
    runTime: 99,
    previewImage: 'img/the-grand-budapest-hotel-poster.jpg',
    trailer:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    name: `The Grand Budapest Hotel ${getRandomNumber(10, 1)}`,
    genres: ['comedy'],
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
      'Jeff Goldblum',
    ],
    reviews: [{
      id: getRandomNumber(1000, 1),
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa! Beatae explicabo nesciunt quidem praesentium voluptatum corrupti eius, natus, consequatur molestias eveniet adipisci voluptas ducimus iste libero repudiandae est ab!',
      rating: getRandomNumber(10, 1),
      name: 'Albert Enshtein',
      date: `March ${getRandomNumber(31, 1)}, ${getRandomNumber(2022, 2016)}`
    }],
  }
];
