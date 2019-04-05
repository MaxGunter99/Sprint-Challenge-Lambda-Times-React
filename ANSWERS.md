Self-Study/Essay Questions

<!-- What are PropTypes used for? Please describe why it's important to type check our data in JavaScript. -->

Props are important because they spread information from Parent to Child.

 <!-- Describe a life-cycle event in React? -->

The React Lifecycle starts with Mount- using ComponentDidMount renders the component in the first render Updating- updates your component if there is new information given when you need. Unmounting- stops rendering the component if it is not needed anymore.

 <!-- Explain the details of a Higher Order Component? -->

HOC helps you spread information across seperate components. you can update the state of your components using these

 <-- What are three different ways to style components in React? Explain some of the benefits of each. -->

One of my favorite topics, Three ways to style components would be using CSS, a preprocessor (Less or Sass), or in Javascript using styled components.

CSS - is the classic way to style components using .classes and #id selectors being very specific to that part of the page you want to edit, you have to navigate through the divs and you can not nest using this method so there will be more CSS!

Less or Sass (preprocessing) - using a preprocessor makes styling a little bit easier, you are able to nest styling and :hover methods within eachother so it is easier on the eyes and mind.

Javascript styled components - using Javascript you can simply navigate to the structure you want to style and wrap it in a div, but its not a div, you just name it anything you want <Example> then you can style on that page using Example, to make it wasier you can nest too, theres just less CSS files, none to be exact.