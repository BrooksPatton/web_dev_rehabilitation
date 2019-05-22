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
            .get('.AllTasks input')
            .first()
            .click();

        cy
            .get('.AllTasks span')
            .first()
            .should('have.class', 'Task-completed');
    });

    it('should edit the task name', () => {
        cy
            .get('button.Task-edit')
            .eq(1)
            .click();

        cy
            .get('.Task form input')
            .type(' meow')
            .should('have.value', 'second task to complete meow');

        cy
            .get('button.Task-save')
            .click();

        cy
            .get('.Task span')
            .eq(1)
            .should('have.text', 'second task to complete meow');
    });

    it('should cancel editing the task name without saving', () => {
        cy
            .get('button.Task-edit')
            .eq(2)
            .click();

        cy
            .get('.Task form input')
            .type(' meow')
            .should('have.value', 'third task to complete meow');

        cy
            .get('button.Task-cancel')
            .click();

        cy
            .get('.Task span')
            .eq(2)
            .should('have.text', 'third task to complete');

        cy
            .get('button.Task-edit')
            .eq(2)
            .click();

        cy
            .get('.Task form input')
            .should('have.value', 'third task to complete');

        cy
            .get('button.Task-cancel')
            .click();
    });

    it('should delete a task', () => {
        cy
            .get('.Task-delete')
            .first()
            .click();

        cy
            .get('.Task span')
            .first()
            .should('have.text', 'second task to complete meow');
    });
});