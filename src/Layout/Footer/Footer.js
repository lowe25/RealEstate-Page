function Footer() {
  return (
    <>
      <footer className="footer">
        <section className="comp-desc">
          <h1>Richmond Properties</h1>
          <p>
            Celebrate life everyday with Avida, and experience a lifestyle{" "}
            <br />
            that is easy, distinct, and enriching. With over three decades
            <br />
            of providing sure, secure, and sensible homes in sustainable <br />
            communities nationwide, Avida has become the developer of <br />
            choice among the rising middle class making dream spaces a <br />
            reality while offering more than the essentials.
          </p>
        </section>

        <section className="contacts">
          <ul className="comp-info">
          <li className="bold">Company Contacts</li>
            <li>Richmond Properties</li>
            <li>richmondprop@gmail.com</li>
            <li>(02) 4 534-9914</li>
            <li>(63) 941 624 8951</li>
          </ul>

          <ul className="comp-social">
              <li className="bold">Socials</li>
              <li><i className="fa-brands fa-facebook-f"></i></li>
              <li><i className="fa-brands fa-youtube"></i></li>
              <li><i className="fa-brands fa-instagram"></i></li>
          </ul>

          <ul className="comp-links">
              <li className="bold">Links</li>
              <li>About</li>
              <li>Properties</li>
              <li>Contacs</li>
          </ul>
        </section>
      </footer>
      <div className="copyright">
          <p>Richmond Properties Allrights Reserved 2022</p>
      </div>
    </>
  );
}
export default Footer;
