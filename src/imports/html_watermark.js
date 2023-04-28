async function loadWatermark() {
    const response = await fetch('/src/imports/html_watermark.html');
    let html = await response.text();
    html = html.slice(4, -3);
    const commentNode = document.createComment(html);
    document.insertBefore(commentNode, document.documentElement);

    document.querySelector('#watermark-script').remove();
}
  
loadWatermark();