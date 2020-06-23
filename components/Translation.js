import React, { useContext, useEffect, useState } from 'react';
import marked from 'marked';
import { TranslationContext } from '../pages/_app';
import PropTypes from 'prop-types';

const Translation = ({ translationKey }) => {
  const [showKeys, setShowKeys] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (document.location.search.includes('showKeys')) {
        setShowKeys(true);
      }
    }
  }, []);
  const translationsFromContext = useContext(TranslationContext);
  const translation = translationsFromContext.find(
    (t) => t.id === translationKey
  );
  return (
    <span
      className={showKeys ? 'showKeys' : ''}
      dangerouslySetInnerHTML={{
        __html: marked(
          translation && !showKeys
            ? translation['NL zonderopmaak'] || translation.NL
            : translationKey
        ),
      }}
    ></span>
  );
};

Translation.propTypes = {
  translationKey: PropTypes.string.isRequired,
};

export default Translation;
