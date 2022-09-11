import PropTypes from 'prop-types';
import defaultImage from './default.jpg';

const Painting = ({
    ImageUrl = defaultImage,
    title,
    profileUrl,
    authorName = "Undefined",
    price,
    quantity,
}) => (
    <div>
        <img src={ImageUrl} alt={title} width="480" />
        <h2>{title}</h2>
        <p>
            Автор: <a href={profileUrl}>{authorName}</a>
        </p>
        <p>Цена: {price}кредитов</p>
        <p>Доступность: {quantity >= 10
            ? 'Есть в наличии'
            : 'Нужно поискать на складе'}</p>
        <button type="button">Добавить в корзину</button>
    </div>);

Painting.propTypes = {
    ImageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    profileUrl: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
}

export default Painting;