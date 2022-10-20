import './App.css';
import AboutUs from './components/AboutUs';

const array = [
  {
    id: 1,
    title: "О нас",
    titleBlock: "Все курсы проекта",
    description: "Здесь находятся все курсы программы, которые помогут вам стать востребованным на рынке труда уже сегодня. Вы можете выбрать любое количество из представленных курсов. Курсы сделаны в формате видеоуроков и доступны в любое удобное для вас время.",
    question: "1. Что мне нужно иметь для учебы? -Главное наличие ноутбука и желание учиться. ",
    // image: <image src={Photo} />
    image: "https://idei.club/uploads/posts/2022-02/thumbs/1644910564_35-idei-club-p-tsvet-sten-v-uchebnom-klasse-interer-krasi-50.jpg",
    image2: "https://phonoteka.org/uploads/posts/2021-05/thumbs/1620167047_54-phonoteka_org-p-fon-dlya-obrazovatelnogo-tsentra-58.jpg",
    question1: " “Почему я должен учиться у Вас? Обучение 15 часов, 3 месяца сплошной практики, 180 часов за 3 месяца. Обучение 20% теории, 80% практики через интерактивы, разборы и реальные кейсы",
    image3: "https://phonoteka.org/uploads/posts/2021-05/thumbs/1620167049_58-phonoteka_org-p-fon-dlya-obrazovatelnogo-tsentra-62.jpg",
    question3: "“Нужен ли мне свой ноутбук? - Да, необходимо иметь свой ноутбук. Характеристики: Минимум 4 Гб оперативной памяти, 2 ядерный процессор. В идеале: 8 Гб оперативной памяти и процессор с 4 мя ядрами. "
  }
]

function App() {
  return (
    <div className="App">
      <AboutUs array={array} />
    </div>
  );
}

export default App;
