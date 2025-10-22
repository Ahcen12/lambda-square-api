async function calculateSquare() {
  const name = document.getElementById("nameInput").value || "Ziyaretçi";
  const number = document.getElementById("numberInput").value;
  const resultDiv = document.getElementById("result");

  resultDiv.innerText = "Hesaplanıyor...";

  const apiUrl = "https://mktq4gz54j.execute-api.eu-central-1.amazonaws.com/test/squareFunction";

  try {
    const response = await fetch(`${apiUrl}?name=${name}&number=${number}`);
    const text = await response.text(); // gelen yanıt düz metin olabilir
    console.log("Ham yanıt:", text);

    let data;
    try {
      data = JSON.parse(text); // JSON’a çevirmeyi dene
    } catch {
      data = { message: text }; // değilse direkt mesaj olarak yaz
    }

    resultDiv.innerText = `Merhaba ${data.message}`;
  } catch (error) {
    resultDiv.innerText = "Hata oluştu: " + error.message;
  }
}
