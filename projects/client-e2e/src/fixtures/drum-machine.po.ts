export class DrumMachine {
  public visit() {
    return cy.visit('/');
  }

  public getContainer() {
    return cy.get('#drum-machine');
  }

  public getDisplay() {
    return cy.get('#display');
  }

  public getDefaultElementNames() {
    return 'Q,W,E,A,S,D,Z,X,C'.split(',');
  }
  /**
   * TODO: might change
   */
  public getDefaultElements() {
    return this.getDefaultElementNames().map((elementName) =>
      cy.get(`#${elementName}`)
    );
  }

  public drumPadElements() {
    return cy.get('.drum-pad');
  }

  public getAudioElement(element: any) {
    // TODO:
  }

  public triggerAudio(element: any) {
    // TODO:
    // checkout this resource:
    // https://blog.mimacom.com/diving-into-e2e-with-cypress/
  }
  /**
   * Trigger the keyboard entry for the given key
   */
  public triggerKey(elementName: string) {
    cy.get('body').type(elementName);
  }
}
