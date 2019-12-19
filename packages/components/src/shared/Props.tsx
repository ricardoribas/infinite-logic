import PropTypes from 'prop-types';

export const CHILDREN_PROPS = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default {
  CHILDREN_PROPS
};
