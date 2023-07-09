function doGet() {
  const html = HtmlService.createTemplateFromFile('index.html');
  const output = html.evaluate();
  return output;
}

function include(fileName){
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}
