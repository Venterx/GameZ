export const product = [
    {
        id: 0,
        text: "Все игры",
        type: "btnPurple",
    },
    {
        id: 1,
        text: "Экшн",
        type: "btnDark",
    },
    {
        id: 2,
        text: "Инди",
        type: "btnDark",
    },
    {
        id: 3,
        text: "Симуляторы",
        type: "btnDark",
    },
]

export const products = [
    {
        id: 0,
        name: 'Black Myth: Wukong',
        price: 3499,
        imagePath: '/src/assets/Products/Item1.jpg',
        description: 'Black Myth: Wukong — это приключенческий экшен, основанный на китайской легенде "Путешествие на Запад". Игра предлагает неповторимый мир, вдохновленный китайской мифологией, с завораживающей графикой и захватывающими боями против монстров и богов.',
        categoryId: 1,
        developer: 'Game Science',
        releaseDate: '20 Августа 2023',
        tags: ['Экшен', 'RPG', 'Китайская мифология', 'Одиночная игра']
    },
    {
        id: 1,
        name: 'Cuphead',
        price: 899,
        imagePath: '/src/assets/Products/Item2.jpg',
        description: 'Cuphead — это увлекательный инди-платформер в стиле мультфильмов 1930-х годов. В этой игре вам предстоит управлять Чашеголовым или его братом Кружкоголовым, которые должны выплатить долг дьяволу, сражаясь с различными боссами.',
        categoryId: 2,
        developer: 'Studio MDHR',
        releaseDate: '29 Сентября 2017',
        tags: ['Инди', 'Платформер', 'Сложная', 'Кооператив']
    },
    {
        id: 2,
        name: 'Dead Cells',
        price: 1199,
        imagePath: '/src/assets/Products/Item3.jpg',
        description: 'Dead Cells — это экшен-рогалик с элементами метроидвании. Игра предлагает динамичные 2D-сражения, процедурно генерируемые уровни и систему «перманентной смерти». В роли бессмертного сгустка клеток, контролирующего тело казненного узника.',
        categoryId: 2,
        developer: 'Motion Twin',
        releaseDate: '7 Августа 2018',
        tags: ['Рогалик', 'Метроидвания', 'Сложная', 'Экшен'] 
    },
    {
        id: 3,
        name: 'ULTRAKILL',
        price: 649,
        imagePath: '/src/assets/Products/Item4.jpg',
        description: 'ULTRAKILL — это ретро-шутер от первого лица, вдохновленный классикой жанра 90-х. Игра предлагает сверхскоростной геймплей, брутальную боевую систему и уникальный механизм восстановления здоровья через кровь врагов.',
        categoryId: 1,
        developer: 'Arsi "Hakita" Patala',
        releaseDate: '3 Сентября 2020',
        tags: ['Шутер от первого лица', 'Ретро', 'Быстрый', 'Кровавый']
    },
    {
        id: 4,
        name: 'Euro Truck Simulator 2',
        price: 499,
        imagePath: '/src/assets/Products/Item5.jpg',
        description: 'Euro Truck Simulator 2 — это реалистичный симулятор грузоперевозок по Европе. Игрокам предстоит управлять грузовиками, доставлять грузы в различные города по всей Европе, развивать собственную транспортную компанию.',
        categoryId: 3,
        developer: 'SCS Software',
        releaseDate: '19 Октября 2012',
        tags: ['Симулятор', 'Вождение', 'Открытый мир', 'Реалистичный']
    },
    {
        id: 5,
        name: 'Counter-Strike 2',
        price: 0,
        imagePath: '/src/assets/Products/Item6.jpg',
        description: 'Counter-Strike 2 — это продолжение легендарного тактического шутера от первого лица. Игра предлагает командные сражения между террористами и спецназом на различных картах с разными задачами.',
        categoryId: 1,
        developer: 'Valve',
        releaseDate: '27 Сентября 2023',
        tags: ['Шутер от первого лица', 'Соревновательный', 'Тактический', 'Командный']
    },
    {
        id: 6,
        name: 'REPO',
        price: 349,
        imagePath: '/src/assets/Products/Item7.jpg',
        description: 'REPO — это необычный симулятор работы изъятия имущества у должников. В игре игрок принимает на себя роль "repo man" — человека, который изымает имущество у людей, которые не могут выплатить кредиты.',
        categoryId: 3,
        developer: 'Woodland Games',
        releaseDate: '14 Марта 2023',
        tags: ['Симулятор', 'Стелс', 'Инди', 'Атмосферная']
    },
    {
        id: 7,
        name: 'DUSK',
        price: 599,
        imagePath: '/src/assets/Products/Item8.jpg',
        description: 'DUSK — это ретро-шутер от первого лица, вдохновленный классикой жанра 90-х, такими как Doom, Quake и Blood. Игра предлагает три эпизода, наполненных кровавым действием, мрачной атмосферой и оккультными темами.',
        categoryId: 1,
        developer: 'David Szymanski',
        releaseDate: '10 Декабря 2018',
        tags: ['Шутер от первого лица', 'Ретро', 'Хоррор', 'Быстрый']
    },
    {
        id: 8,
        name: 'Path of Exile',
        price: 0,
        imagePath: '/src/assets/Products/Item9.jpg',
        description: 'Path of Exile — это бесплатная онлайн-экшен RPG, действие которой происходит в мрачном фэнтезийном мире Рэкласт. Игра предлагает глубокую систему развития персонажа с обширным древом пассивных навыков, множеством умений и экипировки.',
        categoryId: 1,
        developer: 'Grinding Gear Games',
        releaseDate: '23 Октября 2013',
        tags: ['ARPG', 'Бесплатная', 'Многопользовательская', 'Глубокая кастомизация']
    },
]