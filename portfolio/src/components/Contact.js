import React from "react";

const Contact = () => {
  return (
    <div>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-9 transbox bg-white">
            <div>
              <a
                class="btn btn-sm btn-outline-primary"
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
                href="https://github.com/bridgetrshannon"
                data-color-scheme="no-preference: light; light: light; dark: dark;"
                data-size="large"
                aria-label="Follow @bridgetrshannon on GitHub"
              >
                Follow @bridgetrshannon
              </a>
            </div>
            <iframe
              src="assets/resume.pdf"
              width="100%"
              height="500px"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
