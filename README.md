# Polling_API

# Features
- Create a question (you can add as many questions as you want)
- Add options to a question
- Add a vote to an option of question
- Delete a question → (optional: A question can’t be deleted if one of it’s options has votes)
- Delete an option → (optional: An option can’t be deleted if it has even one vote given to it)
- View a question with it’s options and all the votes given to it


# Routes
#(Index.js)
- Router.use('/question',require('./questions'));
- Router.use('/options',require('./options'))

 #(Questions.js)
- Router.post('/create',questionsController.create)
- Router.get('/show/:qid',questionsController.show)
- Router.delete('/delete/:id',questionsController.delete

 #(Options.js)
- Router.post('/:id/create',optionsController.create);
- Router.get('/:id/add_vote',optionsController.add_vote);
- Router.delete('/delete/:id',optionsController.delete)



