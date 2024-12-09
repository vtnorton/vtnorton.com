import { Product } from '../interfaces/Product'

export const productsItems: Product[] = [
	{
		name: 'Heartthrob',
		imageUrl: '/img/projects/heartthrob.jpg',
		link: '/heartthrob',
		supported: true,
		businessCase: true,
	},
	{
		name: 'Formula - Code Editor',
		imageUrl: '/img/projects/formula.webp',
		link: '/formula',
		supported: true,
		businessCase: true,
	},
	{
		name: 'Conjugar',
		imageUrl: '/img/projects/conjugar.webp',
		link: '/project/conjugar',
		supported: true,
		businessCase: false,
	},
	{
		name: 'Olá Wolff',
		imageUrl: '/img/projects/ola-wolff.jpg',
		link: '/olawolff',
		supported: false,
		businessCase: true,
	},
	{
		name: 'True Dark Mode',
		imageUrl: '/img/projects/truedarkmode.webp',
		link: '/project/truedarkmode',
		supported: false,
		businessCase: false,
	},
	{
		name: 'guia definitivo para o onenote',
		imageUrl: '/img/projects/onenote.jpg',
		link: '/project/onenote',
		supported: false,
		businessCase: false,
	},
	{
		name: 'Calculadora de tempo',
		imageUrl: '/img/projects/calculadoradetempo.webp',
		link: '/project/calculadoradetempo',
		supported: false,
		businessCase: false,
	},
	{
		name: '#TrueOrDare',
		imageUrl: '/img/projects/trueordare.webp',
		link: '/project/trueordare',
		supported: false,
		businessCase: false,
	},
	{
		name: '#NeverEver',
		imageUrl: '/img/projects/neverever.webp',
		link: '/project/neverever',
		supported: false,
		businessCase: false,
	},
	{
		name: 'Random 42',
		imageUrl: '/img/projects/random42.webp',
		link: '/project/random42',
		supported: false,
		businessCase: false,
	},
	{
		name: 'Tocha Olímpica',
		imageUrl: '/img/projects/tochaolimpica.webp',
		link: '/project/tochaolimpica',
		supported: false,
		businessCase: false,
	},
]


export const getNextProductBasedOnCurrentPath = (path: string) => {
	const currentProject = productsItems.filter((x) => x.link == path)[0]
	const indexOfCurrentProject = productsItems.indexOf(currentProject)
	const indexOfNextProject = indexOfCurrentProject === productsItems.length - 1 ? 0 : indexOfCurrentProject + 1
	return productsItems[indexOfNextProject]
}