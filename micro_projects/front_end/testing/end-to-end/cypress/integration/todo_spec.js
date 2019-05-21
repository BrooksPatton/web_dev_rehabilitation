describe('canary test', () => {
    it('should pass', () => {
        expect(5).to.equal(5);
    });
});

describe('todo app', () => {
    it('should load the todo app', () => {
        cy.visit('http://localhost:3000');
    });

    it('should add a task', () => {
        cy
            .get('input')
            .type('test task')
            .should('have.value', 'test task');

        cy
            .get('button')
            .click();

        cy
            .get('#AddTask')
            .should('have.value', '');

        cy
            .get('.Task-name > span')
            .should('have.text', 'test task');
    });

    it('should add two more tasks', () => {
        cy
            .get('.AddTask input')
            .type('second task to complete');

        cy
            .get('.AddTask button')
            .click();

        cy
            .get('.AddTask input')
            .type('third task to complete');

        cy
            .get('.AddTask button')
            .click();
    })

    it('should mark a task as complete', () => {
        cy
            .get('.AllTasks:first-child input')
            .click();

        cy
            .get('.AllTasks:first-child span')
            .should('have.class', 'Task-completed');
    });
});