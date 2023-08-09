import React from 'react';

type TCategoriesProps = {
    value: number;
    onChangeCategory: (i: number) => void;
};

export const categories = ['Все', 'Мясные', 'Вегетарианская', 'Грили', 'Острые', 'Закрытые'];

export const Categories: React.FC<TCategoriesProps> = React.memo(({ value, onChangeCategory }) => {
    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName, index) => (
                    <li
                        key={index}
                        onClick={() => onChangeCategory(index)}
                        className={value === index ? 'active' : ''}>
                        {categoryName}
                    </li>
                ))}
            </ul>
        </div>
    );
});
