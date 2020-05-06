const editCategoryArray = (checked, id) => {
  const selectedCategoryArray = [...selectedCategory];
  if (checked) {
    selectedCategoryArray.push(id);
  } else if (!checked) {
    selectedCategoryArray.splice(selectedCategoryArray.indexOf(id), 1);
  }
  setSelectedCategory(selectedCategoryArray);
};
const updateRenderList = (categoryArray) => {
  const selectedCategoryArray = [...categoryArray];
  filterListState.map((category) => {
    if (category.isChecked) {
      selectedCategoryArray.push(category.id);
    } else {
      selectedCategoryArray.splice(selectedCategory.indexOf(category.id), 1);
    }
  });
  setSelectedCategory(selectedCategoryArray);
};
