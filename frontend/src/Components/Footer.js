import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div class="footer-content">
        <nav class="footer-menu">
          <div class="footer-col">
            <div class="item">
              <input type="checkbox" id="products" />
              <div class="col-section">
                <label for="products">
                  <h3>Shop and learn</h3>
                </label>
                <ul class="product-list">
                  <li>
                    <a href="#">Mac</a>
                  </li>
                  <li>
                    <a href="#">iPad</a>
                  </li>
                  <li>
                    <a href="#">iPhone</a>
                  </li>
                  <li>
                    <a href="#">Watch</a>
                  </li>
                  <li>
                    <a href="#">TV</a>
                  </li>
                  <li>
                    <a href="#">Music</a>
                  </li>
                  <li>
                    <a href="#">iTunes</a>
                  </li>
                  <li>
                    <a href="#">HomePod</a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-col">
            <div class="item">
              <input type="checkbox" id="store" />
              <div class="col-section">
                <label for="store">
                  <h3>Apple Store</h3>
                </label>
                <ul class="product-list">
                  <li>
                    <a href="#">Find a Store</a>
                  </li>
                  <li>
                    <a href="#">Genius Bar</a>
                  </li>
                  <li>
                    <a href="#">Today at Apple</a>
                  </li>
                  <li>
                    <a href="#">Apple Camp</a>
                  </li>
                  <li>
                    <a href="#">Field Trip</a>
                  </li>
                  <li>
                    <a href="#">Apple Store App</a>
                  </li>
                  <li>
                    <a href="#">Refurbished and Clearance</a>
                  </li>
                  <li>
                    <a href="#">Financing</a>
                  </li>
                
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-col">
            <div class="item">
              <input type="checkbox" id="education" />
              <div class="col-section">
                <label for="education">
                  <h3>For Education</h3>
                </label>
                <ul class="product-list">
                  <li>
                    <a href="#">Apple and Education</a>
                  </li>
                  <li>
                    <a href="#">Shop for College</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item item-padding-top">
              <input type="checkbox" id="business" />
              <div class="col-section">
                <label for="business">
                  <h3>For Business</h3>
                </label>
                <ul class="product-list">
                  <li>
                    <a href="#">Apple and Business</a>
                  </li>
                  <li>
                    <a href="#">Shop for Business</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-col">
            <div class="item">
              <input type="checkbox" id="acccount" />
              <div class="col-section">
                <label for="acccount">
                  <h3>Account</h3>
                </label>
                <ul class="product-list">
                  <li>
                    <a href="#">Manage Your Apple ID</a>
                  </li>
                  <li>
                    <a href="#">Apple Store Account</a>
                  </li>
                  <li>
                    <a href="#">iCloud.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item item-padding-top">
              <input type="checkbox" id="values" />
              <div class="col-section">
                <label for="values">
                  <h3>Apple Values</h3>
                </label>
                <ul class="product-list">
                  <li>
                    <a href="#">Accessibility</a>
                  </li>
                  <li>
                    <a href="#">Education</a>
                  </li>
                  <li>
                    <a href="#">Environment</a>
                  </li>
                  <li>
                    <a href="#">Inclusion and Diversity</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Supplier Responsibility</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-col">
            <div class="item">
              <input type="checkbox" id="about" />
              <div class="col-section">
                <label for="about">
                  <h3>About Apple</h3>
                </label>
                <ul class="product-list">
                  <li>
                    <a href="#">Newsroom</a>
                  </li>
                  <li>
                    <a href="#">Apple Leadership</a>
                  </li>
                  <li>
                    <a href="#">Job Opportunities</a>
                  </li>
                  <li>
                    <a href="#">Investors</a>
                  </li>
                  <li>
                    <a href="#">Events</a>
                  </li>
                  <li>
                    <a href="#">Contact Apple</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <section class="footer-base">
          <div class="footer-more-ways" x-ms-format-detection="none">
            More ways to shop: Visit an <a href="/retail/">Apple Store</a>,{" "}
            <span class="nowrap">
              call 1-800-MY-APPLE, or <a href="#">find a reseller</a>
            </span>
            .
          </div>
          <div class="footer-legal">
            <div class="footer-legal-copyright">
              Copyright © 2023 Apple Inc. All rights reserved.
            </div>
            <div class="footer-legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
              <a href="#">Sales and Refunds</a>
              <a href="#">Legal</a>
              <a href="#">Site Map</a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;