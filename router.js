const homeHandler = require('./handlers/homeHandler')
const missingHandler = require('./handlers/missingHandler')
const formHandler = require('./handlers/formHandler')
const recipesHandler = require('./handlers/recipesHandler')

function router(request, response) {
  const url = request.url
  if (url === '/') {
    homeHandler(request, response)
  } else if (url === '/form') {
    formHandler(request, response) //displays the form
  } else if (url === '/post-form' && method === POST) {
    postFormHandler(request, response) //deals with form post request
  } else if (url === '/breakfast') {
    recipesHandler.breakfastHandler(request, response)
  } else if (url === '/lunch') {
    recipesHandler.lunchHandler(request, response)
  } else if (url === '/dinner') {
    recipesHandler.dinnerHandler(request, response)
  } else if (url === '/dessert') {
    recipesHandler.dessertHandler(request, response)
  } else if (url === '/snacks') {
    recipesHandler.snacksHandler(request, response)
  } else {
    missingHandler(request, response)
  }
}

module.exports = router

// else if (url.includes("public/") {
//   publicHandler(request, response);
// }
