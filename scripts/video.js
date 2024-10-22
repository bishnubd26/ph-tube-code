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
const displayCategories = data => {
  // add data in html
  console.log(data);

};

loadCategories();