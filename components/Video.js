import React, { useContext } from 'react';
import { PictureContext } from '../pages/_app';
import PropTypes from 'prop-types';
import { getImageUrl } from '../utils';

const Video = ({ movieKey }) => {
  const pics = useContext(PictureContext);
  return (
    <video
      id="videoHome"
      src={getImageUrl(pics, movieKey, true)}
      playsInline
      autoPlay
      muted
      loop
    ></video>
  );
};

Video.propTypes = {
  movieKey: PropTypes.string.isRequired,
};

export default Video;
