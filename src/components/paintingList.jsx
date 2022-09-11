import PropTypes from 'prop-types';
import Painting from "./painting";

function PaintingList({ items }) {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <Painting
                        ImageUrl={item.url}
                        title={item.title}
                        authorName={item.author.tag}
                        profileUrl={item.author.url}
                        price={item.price}
                        quantity={item.quantity}
                    />
                </li>
            ))}
        </ul>);
};

PaintingList.PropTypes = {
    items: PropTypes.arrayOf(   PropTypes.shape({
      id: PropTypes.string.isRequired
    }))
}

export default PaintingList;