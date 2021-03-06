import React from "react";

const Contact = () => {
  return (
    <body className="contactImg">
      <div class="container">
        <div class="row">
          <div class="col-md-9 transbox contactText mt-5">
            <div>
              <a
                class="btn btn-sm btn-outline-primary"
                target="_blank"
                href="https://www.linkedin.com/in/bridget-shannon/"
                role="button"
                id="linkedinBtn"
              >
                LinkedIn
              </a>
            </div>
            <div>
              <a
                class="github-button"
                id="githubBtn"
                target="_blank"
                href="https://github.com/bridgetrshannon"
                data-color-scheme="no-preference: light; light: light; dark: dark;"
                data-size="large"
                aria-label="Follow @bridgetrshannon on GitHub"
              >
                Follow @bridgetrshannon
              </a>
            </div>
            <iframe
              src="./public/resume.pdf"
              width="100%"
              height="700px"
            ></iframe>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Contact;
