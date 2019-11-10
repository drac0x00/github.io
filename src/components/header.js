import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({siteTitle, subTitle}) => (
  <header
    style={{
      background: `white`,
      marginBottom: `0rem`,
      marginTop: `2em`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `40rem`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{margin: 0}}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h2>
        {subTitle}
      </h2>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  subTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
  subTitle: ``,
};

export default Header;
