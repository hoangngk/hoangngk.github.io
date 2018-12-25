const testData = {
  post01: {
    id: 1,
    title: "How to use arrow function ES6",
    published: false
  },
  post02: {
    id: 2,
    title: "Layout in CSS3",
    description: "This blog show how to layout your website with modern CSS.",
    published: false
  },
  post03: {
    id: 3,
    title: "Learn Javascript in the right way",
    published: true
  },
  nestedData: {
    todo: {
      info: {
        heading: {
          title: "ES6 Exercises",
          description: "50 exercises using ES6 Javascript syntax"
        }
      },
      isDone: true
    }
  },
  arrayData: {
    todos: [
      {
        info: {
          heading: {
            title: "ES6 Exercises",
            description: "50 exercises using ES6 Javascript syntax"
          }
        },
        isDone: true
      },
      {
        info: {
          heading: {
            title: "AWD Course",
            description: "Advanced WebDesign Course"
          }
        },
        isDone: false
      }
    ]
  }
};
export default testData;
