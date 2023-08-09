import React from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Loading } from '../components';

import { categories } from '../components/Categories';
import { typeNames } from '../components/PizzaBlock';

const FullPizza: React.FC = () => {
    const [pizza, setPizza] = React.useState<{
        imageUrl: string;
        title: string;
        price: number;
        category: number;
        sizes: number[];
        types: number[];
        rating: number;
    }>();
    const { id } = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        async function fetchPizza() {
            try {
                const { data } = await axios.get(
                    'https://64a1e9640079ce56e2db7a33.mockapi.io/items/' + id,
                );
                setPizza(data);
            } catch (error) {
                alert('Ошибка при получении пиццы!');
                navigate('/');
            }
        }

        fetchPizza();
    }, []);

    if (!pizza) {
        return <Loading />;
    }

    return (
        <div className="container">
            <div className="pizza-about">
                <div className="pizza-about__picture">
                    <img className="pizza-about__img" src={pizza.imageUrl} />
                </div>
                <div className="pizza-about__info">
                    <h2>{pizza.title}</h2>
                    <h3>Цена: {pizza.price} ₽</h3>
                    <h3>Рейтинг: {pizza.rating}⭐</h3>
                    <h3>Катерогия: {categories[pizza.category]}</h3>
                    <h3>Размеры(см): {pizza.sizes.join(', ')}</h3>
                    <h3>
                        Типы теста:{' '}
                        {pizza.types.length === 1
                            ? pizza.types.map((type) => typeNames[type])
                            : pizza.types.map((type) => typeNames[type]).join(', ')}
                    </h3>
                    <Link to="/">
                        <button className="button button--outline button--add">
                            <span>Назад</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FullPizza;
