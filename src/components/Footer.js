const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-auto">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Blog-App</h5>
            <p>
              Share your thoughts and ideas with the world. Connect, learn, and
              grow with our community.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/" className="text-dark">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-dark">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-dark">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/blogs" className="text-dark">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3">
        © {new Date().getFullYear()} BlogApp. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
