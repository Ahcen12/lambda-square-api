async function calculateSquare() {
  const name = document.getElementById("name").value || "Ziyaretçi";
  const number = document.getElementById("number").value;
  const resultDiv = document.getElementById("result");

  resultDiv.innerText = "Hesaplanıyor...";


  const apiUrl = "https://mktq4gz54j.execute-api.eu-central-1.amazonaws.com/test/squareFunction" ;

  try {
    const response = await fetch(`${apiUrl}?name=${name}&number=${number}`);
    const data = await response.json();
    resultDiv.innerText = data.message;
  } catch (error) {
    resultDiv.innerText = "Hata oluştu: " + error;
  }
}
