describe("Homepage Tests", () => {
  beforeEach(() => {
    // 기본 경로('/')로 이동
    cy.visit("/");
  });

  it('should contain the text "Get started by"', () => {
    // "Get started by" 텍스트가 존재하는지 확인
    cy.contains("Get started by").should("be.visible");
  });

  it('should have an anchor heading with "Docs" and correct href', () => {
    // "Docs"라는 anchor heading이 존재하고 href 속성이 올바른지 확인
    cy.get('[data-testid="read-docs-link"]').should(
      "have.attr",
      "href",
      "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    );
  });
});
