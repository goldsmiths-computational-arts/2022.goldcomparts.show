/**
 * This function generates a slug using the preferredName
 *
 * @export
 * @param {*} preferredName {string}
 */
export function createSlug(preferredName){
  let words = preferredName.split(' '); // Splits string into array of strings.
  words = words.map((word) => {
    return word.toLowerCase()
  });

  return words.join('-');
}


/**
 * This function appends a slug property to artist or artwork model
 * using the preferredName
 * @export
 * @param {*} model
 * @return {*} 
 */
export function slugify(model){
  if(!model.preferredName)
    return model;
  
  model.slug = createSlug(model.preferredName);
  return model
}