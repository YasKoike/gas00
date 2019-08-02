function doGet(e) {
  const filename = "test";
  var   html = HtmlService.createTemplateFromFile(filename);
  return html.evaluate().setTitle("テストサイト").setSandboxMode(HtmlService.SandboxMode.NATIVE);
} 