Cypress.Commands.overwrite("visit", (originalFn, url, options) => {
  options = options || {};

  if (
    typeof options.auth === "undefined" &&
    Cypress.env("authPass") &&
    Cypress.env("authUser")
  ) {
    options.auth = {
      password: Cypress.env("authPass"),
      username: Cypress.env("authUser")
    };
  }

  return originalFn(url, options);
});
