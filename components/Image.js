import React, { useContext } from 'react';
import { PictureContext } from '../pages/_app';
import PropTypes from 'prop-types';
import { getImageUrl } from '../utils';

const Image = ({ imageKey }) => {
  const pics = useContext(PictureContext);
  return <img src={getImageUrl(pics, imageKey, true)}></img>;
};

Image.propTypes = {
  imageKey: PropTypes.string.isRequired,
};

export default Image;
