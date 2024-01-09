import mockProjects from "../fixtures/projects.json";
import { ProjectStatus } from "@api/projects.types";

describe("Project List Loading", () => {
  it("displays a loading spinner", () => {
    //intercept request and add delay
    cy.intercept("GET", "https://prolog-api.profy.dev/project", async (req) => {
      req.reply({
        fixture: "projects.json",
        delay: 500,
      });
    }).as("getProjects");

    // open projects page and confirm loader is visible
    cy.visit("http://localhost:3000/dashboard");
    cy.get("[data-test-id='loader']").should("be.visible");
    //wait for request and confirm loader does not exist
    cy.wait("@getProjects");
    cy.get("[data-test-id='loader']").should("not.exist");
  });
});

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // wait for request to resolve
    cy.wait("@getProjects");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];

      const statusToText = {
        [ProjectStatus.info]: "Stable",
        [ProjectStatus.warning]: "Warning",
        [ProjectStatus.error]: "Critical",
      };

      // get all project cards
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          const status = mockProjects[index].status as ProjectStatus;
          cy.wrap($el).contains(statusToText[status]);
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });
  });
});
