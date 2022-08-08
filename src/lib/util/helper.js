/**
 * This function generates a slug using the preferredName
 *
 * @export
 * @param {*} pref_name {string}
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
 * using the preferredName if it exists
 * @export
 * @param {*} model
 * @return {*} 
 */
export function slugify(model){
  // if(!model.preferredName || !model.name )
  //   return model;
  
  if(model.pref_name){
    model.slug = createSlug(model.pref_name);
  } else {
    model.slug = createSlug(model.name)
  }
  return model
}