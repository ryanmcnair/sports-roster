import PropTypes from 'prop-types';

const playerShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
});

export default playerShape;
