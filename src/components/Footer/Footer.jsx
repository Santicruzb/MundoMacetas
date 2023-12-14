const Footer = () => {
    return (
        <footer className="bg-light text-center text-white">
  {/* Grid container */}
  <div className="container p-4 pb-0">
    {/* Section: Social media */}
    <section className="mb-4">

      {/* Facebook */}
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#3b5998" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-facebook-f"></i>
      </a>

      {/* Twitter */}
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#55acee" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-twitter"></i>
      </a>

      {/* Instagram */}
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#ac2bac" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-instagram"></i>
      </a>

      {/* Linkedin */}
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#0082ca" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>

      {/* Github */}
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#333333" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-github"></i>
      </a>
    </section>
    {/* Section: Social media */}
  </div>
  {/* Grid container */}

  {/* Copyright */}
  <div
    className="text-center p-3"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
  >
    Nos encontramos en Santa Brigida 
    <a className="text-dark-blue" href="https://www.google.com/maps/dir//-34.5682285,-58.7708481/@-34.5681071,-58.7711384,20z/data=!4m2!4m1!3e0?entry=ttu">
        <br/>Maps 
    </a>
  </div>
</footer>
    );
}

export default Footer