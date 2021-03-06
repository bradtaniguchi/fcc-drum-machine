import { DrumMachine } from '../fixtures/drum-machine.po';

describe('DrumMachine', () => {
  const drumMachinePageObject = new DrumMachine();
  before(() => {
    cy.visit('/');
  });
  afterEach(() => {
    cy.reload();
  });

  it(
    'User Story #1: I should be able to see an outer container with a ' +
      'corresponding id="drum-machine" that contains all other elements.',
    () => {
      drumMachinePageObject.getContainer().should('be.visible');
    }
  );
  it(
    'User Story #2: Within #drum-machine I can see an element ' +
      'with a corresponding id="display".',
    () => drumMachinePageObject.getDisplay().should('be.visible')
  );
  it(
    'User Story #3: Within #drum-machine I can see 9 clickable ' +
      'drum pad elements, each with a class name of drum-pad, a unique ' +
      'id that describes the audio clip the drum pad will be set up ' +
      'to trigger, and an inner text that corresponds to one of the ' +
      'following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. ' +
      'The drum pads MUST be in this order.',
    () => {
      const seenIds: string[] = [];
      drumMachinePageObject.drumPadElements().each((element, index) => {
        expect(element.text().trim()).to.eql(
          drumMachinePageObject.getDefaultElementNames()[index]
        );
        const id = element.prop('id');
        // cy.task('log', `id: ${id} text: ${element.text()}`);
        expect(seenIds.includes(id)).to.equal(false);
        seenIds.push(id);
      });
    }
  );
  it(
    'User Story #4: Within each .drum-pad, there should be an HTML5 ' +
      'audio element which has a src attribute pointing to an audio clip, ' +
      'a class name of clip, and an id corresponding to the inner text ' +
      'of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).',
    () => {
      drumMachinePageObject.drumPadElements().each((element, index) => {
        const audioElement = element.find('audio[class="clip"]');
        expect(!!audioElement).to.be.true;
        const id = audioElement.prop('id');
        cy.task('log', `id: ${id} text: ${element.text()}`);
        expect(id).to.eql(
          drumMachinePageObject.getDefaultElementNames()[index]
        );
      });
    }
  );
  it(
    'User Story #5: When I click on a .drum-pad element, the audio ' +
      'clip contained in its child audio element should be triggered.',
    () => {}
  );
  it(
    'User Story #6: When I press the trigger key associated with ' +
      'each .drum-pad, the audio clip contained in its child audio ' +
      'element should be triggered (e.g. pressing the Q key should ' +
      'trigger the drum pad which contains the string "Q", pressing ' +
      'the W key should trigger the drum pad which contains the string "W", etc.).',
    () => {}
  );
  it(
    'User Story #7: When a .drum-pad is triggered, a string describing ' +
      'the associated audio clip is displayed as the inner text of the ' +
      '#display element (each string must be unique).',
    () => {}
  );
});
