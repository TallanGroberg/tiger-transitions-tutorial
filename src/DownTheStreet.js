import React from 'react';
import {Link} from 'react-tiger-transition'

const DownTheStreet = () => {
  return (
    <div>
      <Link transition='glueout-left' to='/around-the-corner'>around the corner.</Link>
    </div>
  );
};

export default DownTheStreet;