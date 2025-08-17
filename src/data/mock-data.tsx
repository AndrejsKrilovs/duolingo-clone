import type { Lesson } from '../entity'

export const lessons: Lesson[] = [
	{
		title: 'Английский',
		description: 'Международный язык общения и бизнеса 🌍',
		icon: 'GB',
		progress: 0,
	},
	{
		title: 'Испанский',
		description: 'Один из самых мелодичных языков мира 🇪🇸',
		icon: 'ES',
		progress: 0,
	},
	{
		title: 'Французский',
		description: 'Язык любви и искусства 🇫🇷',
		icon: 'FR',
		progress: 0,
	},
	{
		title: 'Немецкий',
		description: 'Язык инженерии и науки 🇩🇪',
		icon: 'DE',
		progress: 0,
	},
	{
		title: 'Итальянский',
		description: 'Язык музыки, искусства и кухни 🇮🇹',
		icon: 'IT',
		progress: 0,
	},
	{
		title: 'Португальский',
		description: 'Официальный язык Бразилии и Португалии 🇵🇹',
		icon: 'PT',
		progress: 0,
	},
	{
		title: 'Русский',
		description: 'Один из крупнейших языков Евразии 🇷🇺',
		icon: 'RU',
		progress: 0,
	},
	{
		title: 'Китайский (мандарин)',
		description: 'Самый распространённый язык по числу носителей 🇨🇳',
		icon: 'CN',
		progress: 0,
	},
	{
		title: 'Японский',
		description: 'Язык технологий и традиций 🇯🇵',
		icon: 'JP',
		progress: 0,
	},
	{
		title: 'Арабский',
		description: 'Официальный язык многих стран Ближнего Востока 🇸🇦',
		icon: 'SA',
		progress: 0,
	},
]

export const lessonQuestions: Record<string, LessonQuestion[]> = {
	GB: [
		{
			question: 'Как переводится "Apple"?',
			options: ['Яблоко', 'Апельсин', 'Груша'],
			correctIndex: 0,
		},
		{
			question: 'Как сказать "Привет" на английском?',
			options: ['Hello', 'Bye', 'Thanks'],
			correctIndex: 0,
		},
		{
			question: 'Перевод слова "Dog"',
			options: ['Собака', 'Кошка', 'Мышь'],
			correctIndex: 0,
		},
	],
	ES: [
		{
			question: 'Как переводится "Hola"?',
			options: ['Привет', 'Пока', 'Спасибо'],
			correctIndex: 0,
		},
		{
			question: 'Перевод слова "Casa"',
			options: ['Дом', 'Машина', 'Книга'],
			correctIndex: 0,
		},
		{
			question: 'Что значит "Gracias"?',
			options: ['Спасибо', 'Пожалуйста', 'Привет'],
			correctIndex: 0,
		},
	],
	FR: [
		{
			question: 'Как переводится "Bonjour"?',
			options: ['Добрый день', 'До свидания', 'Спасибо'],
			correctIndex: 0,
		},
		{
			question: 'Перевод слова "Chat"',
			options: ['Кот', 'Собака', 'Птица'],
			correctIndex: 0,
		},
		{
			question: 'Что значит "Merci"?',
			options: ['Спасибо', 'Пожалуйста', 'Привет'],
			correctIndex: 0,
		},
	],
	DE: [
		{
			question: 'Как переводится "Hund"?',
			options: ['Собака', 'Кошка', 'Корова'],
			correctIndex: 0,
		},
		{
			question: 'Что значит "Danke"?',
			options: ['Спасибо', 'Пожалуйста', 'Привет'],
			correctIndex: 0,
		},
		{
			question: 'Перевод слова "Buch"',
			options: ['Книга', 'Стол', 'Машина'],
			correctIndex: 0,
		},
	],
	IT: [
		{
			question: 'Как переводится "Ciao"?',
			options: ['Привет/Пока', 'Спасибо', 'Пожалуйста'],
			correctIndex: 0,
		},
		{
			question: 'Что значит "Gatto"?',
			options: ['Кот', 'Собака', 'Мышь'],
			correctIndex: 0,
		},
		{
			question: 'Перевод слова "Grazie"',
			options: ['Спасибо', 'Пожалуйста', 'Привет'],
			correctIndex: 0,
		},
	],
	PT: [
		{
			question: 'Как переводится "Olá"?',
			options: ['Привет', 'Пока', 'Спасибо'],
			correctIndex: 0,
		},
		{
			question: 'Что значит "Livro"?',
			options: ['Книга', 'Машина', 'Стол'],
			correctIndex: 0,
		},
		{
			question: 'Перевод слова "Obrigado"',
			options: ['Спасибо', 'Пожалуйста', 'Привет'],
			correctIndex: 0,
		},
	],
	RU: [
		{
			question: 'Как переводится "Hello"?',
			options: ['Привет', 'Пока', 'Спасибо'],
			correctIndex: 0,
		},
		{
			question: 'Что значит "Book"?',
			options: ['Книга', 'Машина', 'Стол'],
			correctIndex: 0,
		},
		{
			question: 'Перевод слова "Cat"',
			options: ['Кошка', 'Собака', 'Птица'],
			correctIndex: 0,
		},
	],
	CN: [
		{
			question: 'Как переводится "你好" (nǐ hǎo)?',
			options: ['Привет', 'Спасибо', 'Пока'],
			correctIndex: 0,
		},
		{
			question: 'Что значит "谢谢" (xièxiè)?',
			options: ['Спасибо', 'Пожалуйста', 'Привет'],
			correctIndex: 0,
		},
		{
			question: 'Перевод слова "猫" (māo)',
			options: ['Кошка', 'Собака', 'Птица'],
			correctIndex: 0,
		},
	],
	JP: [
		{
			question: 'Как переводится "こんにちは" (konnichiwa)?',
			options: ['Здравствуйте', 'Спасибо', 'Пока'],
			correctIndex: 0,
		},
		{
			question: 'Что значит "ありがとう" (arigatou)?',
			options: ['Спасибо', 'Пожалуйста', 'Привет'],
			correctIndex: 0,
		},
		{
			question: 'Перевод слова "ねこ" (neko)',
			options: ['Кошка', 'Собака', 'Птица'],
			correctIndex: 0,
		},
	],
	SA: [
		{
			question: 'Как переводится "مرحبا" (marhaban)?',
			options: ['Привет', 'Спасибо', 'Пока'],
			correctIndex: 0,
		},
		{
			question: 'Что значит "شكرا" (shukran)?',
			options: ['Спасибо', 'Пожалуйста', 'Привет'],
			correctIndex: 0,
		},
		{
			question: 'Перевод слова "كتاب" (kitāb)',
			options: ['Книга', 'Машина', 'Стол'],
			correctIndex: 0,
		},
	],
}
