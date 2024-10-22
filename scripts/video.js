// fetch, load and show categories on html

//create loadCategories
const loadCategories = () => {
  // fetch the data
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(err => console.log(err))
};

// create display categories
const displayCategories = categories => {
  const categoryContainer = document.getElementById('category-container');

  categories.forEach(item => {
    console.log(item);
    // create a button
    const button = document.createElement('button');
    button.classList = "btn";
    button.innerText = item.category;
    // add button to category container
    categoryContainer.append(button);
  });

};

loadCategories();