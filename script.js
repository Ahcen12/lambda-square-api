async function calculateSquare() {
  const name = document.getElementById("nameInput").value || "Ziyaretçi";
  const number = document.getElementById("numberInput").value;
  const resultDiv = document.getElementById("result");

  // Kullanıcı sayı girmediyse AWS'ye istek bile atma
  if (!number) {
    resultDiv.innerText = `Merhaba ${name}, bu fonksiyon bulutta çalışıyor!`;
    return;
  }

  resultDiv.innerText = "Hesaplanıyor...";

  const apiUrl = "https://mktq4gz54j.execute-api.eu-central-1.amazonaws.com/test/squareFunction";

  try {
    const response = await fetch(`${apiUrl}?name=${name}&number=${number}`);
    const text = await response.text();
    console.log("Ham yanıt:", text);

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { message: text };
    }

    resultDiv.innerText = `Merhaba ${data.message}`;
  } catch (error) {
    resultDiv.innerText = "Hata oluştu: " + error.message;
  }
}
