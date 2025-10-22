# ☁️ Bulutta Sunucusuz (Serverless) Uygulama Geliştirme – “My First Serverless Function+”

## 🎯 Amaç
Bu projenin amacı, **serverless mimariyi** kavrayarak bulut üzerinde çalışan basit ama fonksiyonel bir API geliştirmektir.  
Proje kapsamında AWS Lambda ve API Gateway kullanılarak bir HTTP tetikleyicili fonksiyon geliştirilmiş,  
çıktılar hem terminal hem tarayıcı üzerinden test edilmiştir.

---

## ⚙️ Fonksiyonun Özellikleri
- HTTP tetikleyicisi (`GET /squareFunction?name=Aylin&number=4`)
- Parametre alıp işlem yapan API (sayının karesini hesaplar)
- CloudWatch log’ları aktif
- CORS yapılandırması (GitHub Pages ve tarayıcı ile uyumlu)
- (Opsiyonel) CI/CD entegrasyonuna uygun yapı

---

## 🧩 Kullanılan Servisler
- **AWS Lambda**
- **AWS API Gateway**
- **Amazon CloudWatch**
- **GitHub Pages** (frontend barındırma)

---

## 🧱 Proje Dosya Yapısı
lambda-square-api/
┣ index.html → Kullanıcı arayüzü
┣ script.js → API çağrısı ve fetch fonksiyonu
┣ lambda_function.py → AWS Lambda fonksiyonu (Python)
┗ README.md → Dokümantasyon


---

## 🚀 Çalıştırma ve Test
1. **AWS Lambda fonksiyonunu oluştur:**
   - Runtime: `Python 3.12`
   - Handler: `lambda_function.lambda_handler`
   - Test event örneği:
     ```json
     {
       "queryStringParameters": {
         "name": "Aylin",
         "number": "4"
       }
     }
     ```
2. **API Gateway yapılandırması:**
   - Method: `GET`
   - Integration: Lambda Function
   - Enable CORS → ON

3. **Frontend bağlantısı:**
   - `script.js` içinde `fetch("https://api-id.execute-api.region.amazonaws.com/prod/squareFunction?name=Ahmet&number=4")`
   - Tarayıcıda test et.

4. **Yayına alma:**
   - GitHub Pages aktif →  
     `Settings → Pages → main / (root)`  
   - Site adresi:  
     `https://ahcen12.github.io/lambda-square-api/`

---

## 🧩 Örnek Çıktı
**Input:**  
name = Ahmet
number = 4
**Output:**  
```json
{
  "message": "Merhaba Ahmet, 4 sayısının karesi 16'dır!"
}
