export default function Footer() {
  return (
    <footer class="mt-auto bg-grey">
      <div class="container-fluid">
        <br />
        <div class="row">
          <div class="col-md-12">
            <div class="container">
              <div class="row">
                <div class="col-md-4 text-center text-sm-center text-md-start">
                  <h3 class="font-bold">Ban COVID</h3>
                  <p class="p-small">We Can. We Could. We Will.</p>
                  <p class="p-small text-left">
                    Made with <i class="fa fa-heart fa-fw"></i> in India.
                  </p>
                </div>
                <div class="col-md-5 text-center text-sm-center text-md-start">
                  <h5 class="font-semi-bold mt-2">Explore Stats</h5>
                  <ul class="foot-menu-links font-semi-bold">
                    <li>
                      <a href="<?php echo URLROOT; ?>/covid-19-india">
                        India Stats
                      </a>
                    </li>
                    <li>
                      <a href="<?php echo URLROOT; ?>/world-stats">
                        World Stats
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-3"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-4 mb-3">
          <div class="col-md-12">
            <div class="container">
              <div class="row">
                <div class="col-md-6 col-sm-6 col-12 text-center text-sm-center text-md-start">
                  <p class="p-small">&copy; { process.env.REACT_APP_NAME } Date().getFullYear()</p>
                </div>
                <div class="col-md-6 col-sm-6 col-12">
                  <ul class="inline-links text-center text-sm-center text-md-end">
                    <li class="links">
                      <a class="link" href="<?php echo URLROOT; ?>/faq">
                        FAQ
                      </a>
                    </li>
                    <li class="links">
                      <a class="link" href="<?php echo URLROOT; ?>/about">
                        About
                      </a>
                    </li>
                    <li class="links">
                      <a class="link" href="<?php echo URLROOT; ?>/contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
