const listOfCategoriesRef= document.querySelectorAll(".item");
console.log(`Number of categories: ${listOfCategoriesRef.length}`);
const listOfNamesOFCategoriesRef = document.querySelectorAll("h2");

// const showNamesOFCategoriesAndAmountOfElements = listOfNamesOFCategoriesRef  => 
listOfNamesOFCategoriesRef.forEach(nameCat => {
    console.log(`Category: ${nameCat.innerText}`);
    console.log(`Elements: ${nameCat.nextElementSibling.children.length}`);
});
// showNamesOFCategoriesAndAmountOfElements(listOfNamesOFCategoriesRef);

