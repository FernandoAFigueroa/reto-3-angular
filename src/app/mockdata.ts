import { UserInterface } from './interfaces/user.interface';
import { CardInterface } from './interfaces/card.interface';

export const USERS: UserInterface[] = [
  {
    id: 1,
    name: 'alumno',
    email: 'alumno@uveg.com',
    password: '1234',
  },
];
export const CARDS: CardInterface[] = [
  {
    title: 'Call of Duty',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque commodi, beatae, quaerat laborum quia ab similique officia voluptate explicabo excepturi natus! Recusandae sequi eos sit aut asperiores tempore accusamus sapiente.',
    imageUrl: '../assets/images/card_figure.jpeg',
    rating: 5,
    downloads: 1359876,
    comingSoon: false,
    releaseDate: '7/12/2022',
  },
  {
    title: 'Soccer (2022)',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, et delectus? Quos rem minus, numquam architecto esse, quia, impedit velit facilis eaque voluptatibus nobis nostrum asperiores! Quisquam laborum dolorem a!',
    imageUrl: '../assets/images/card_img.jpeg',
    rating: 3,
    downloads: 39876,
    comingSoon: false,
    releaseDate: '4/20/2022',
  },
  {
    title: 'God of War',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odit vitae doloribus! Dolore expedita ipsam error vel consequatur commodi debitis, id ullam exercitationem aperiam maiores sapiente suscipit asperiores distinctio vitae.',
    imageUrl: '../assets/images/card_figure.jpeg',
    rating: 5,
    downloads: 59876,
    comingSoon: false,
    releaseDate: '1/14/2022',
  },
  {
    title: 'God of War: Ragnarok',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur cum, nulla inventore tempora ipsam ducimus! Porro facere a accusamus sit, ducimus, nam doloribus quis mollitia ipsam fugit fugiat, necessitatibus dolor.',
    imageUrl: '../assets/images/card_img.jpeg',
    rating: 5,
    downloads: 51876,
    comingSoon: false,
    releaseDate: '11/9/2022',
  },
  {
    title: 'Madden 2022',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odit vitae doloribus! Dolore expedita ipsam error vel consequatur commodi debitis, id ullam exercitationem aperiam maiores sapiente suscipit asperiores distinctio vitae.',
    imageUrl: '../assets/images/card_figure.jpeg',
    rating: 4,
    downloads: 59876,
    comingSoon: true,
    releaseDate: '4/28/2023',
  },
  {
    title: 'Xenoblade',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odit vitae doloribus! Dolore expedita ipsam error vel consequatur commodi debitis, id ullam exercitationem aperiam maiores sapiente suscipit asperiores distinctio vitae.',
    imageUrl: '../assets/images/card_img.jpeg',
    rating: 1,
    downloads: 6,
    comingSoon: true,
    releaseDate: '2/28/2023',
  },
  {
    title: 'Final Fantasy VI',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nulla nam provident tenetur. Debitis laboriosam saepe animi veritatis, sit corrupti aspernatur ducimus ullam quae repellendus voluptatibus minus facere omnis et.',
    imageUrl: '../assets/images/card_figure.jpeg',
    rating: 2,
    downloads: 876,
    comingSoon: true,
    releaseDate: '2/23/2023',
  },
];
export const RATINGS: { value: string; text: string }[] = [
  { value: '5', text: '5 Estrellas - Me encanta' },
  { value: '4', text: '4 Estrellas - Muy bueno' },
  { value: '3', text: '3 Estrellas - Me entretiene' },
  { value: '2', text: '2 Estrellas - Juego aveces' },
  { value: '1', text: '1 Estrella - No me gusta' },
];
