const tutorials = tutorials.map( x => {
    let words = x.split(' ');
    let caseTitle = words.map (
      y => y[0].toUpperCase() + y.substr(1));

     let join =   caseTitle.join(' ')

     return join


     });
     return sentences

const titleCased = () => {
  return tutorials
}
