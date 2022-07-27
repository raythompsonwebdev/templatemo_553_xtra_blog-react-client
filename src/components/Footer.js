import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line func-style
function Footer() {
  return (
    <footer className="row tm-row">
      <hr className="col-12" />
      <div className="col-md-6 col-12 tm-color-gray">
        Design:{' '}
        <Link
          rel="nofollow"
          target="_parent"
          to="https://templatemo.com"
          className="tm-external-link">
          TemplateMo
        </Link>
      </div>
      <div className="col-md-6 col-12 tm-color-gray tm-copyright">
        Copyright 2020 Xtra Blog Company Co. Ltd.
      </div>
    </footer>
  );
}

export default Footer;
