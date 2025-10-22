☁️ Lambda Square API

Bulutta Sunucusuz (Serverless) Uygulama Geliştirme – “My First Serverless Function+”

🎯 Fonksiyonun Yaptığı İş

Bu proje, AWS Lambda üzerinde çalışan basit ama fonksiyonel bir serverless API örneğidir.
Fonksiyonun amacı:

HTTP istekleriyle tetiklenen bir Lambda fonksiyonu oluşturmak,

Kullanıcıdan alınan isim (name) ve sayı (number) parametrelerini işleyerek sonucu döndürmektir.

Fonksiyon iki temel davranış sergiler:

/squareFunction?name=Ali&number=5
→ Merhaba Ali, 5 sayısının karesi = 25

Eğer parametre verilmezse:
→ Merhaba Ziyaretçi, bu fonksiyon bulutta çalışıyor!

AWS Lambda fonksiyonu, gelen HTTP isteğini API Gateway üzerinden alır ve sonuç olarak JSON formatında bir yanıt döndürür.
Frontend kısmı GitHub Pages üzerinde barındırılmıştır.

🚀 Nasıl Deploy Edilir
1️⃣ Lambda Fonksiyonu Oluşturma

AWS Console → Lambda → “Create function”

Function name: squareFunction

Runtime: Python 3.x

“Create function” butonuna tıkla.

Aşağıdaki kodu Lambda fonksiyonuna yapıştır:

import json

def lambda_handler(event, context):
    print("Fonksiyon çağrıldı! Event içeriği:")
    print(event)

    params = event.get('queryStringParameters', {}) or {}
    name = params.get('name', 'Ziyaretçi')
    number = params.get('number')

    if number:
        try:
            n = int(number)
            result = n * n
            message = f"{name}, {n} sayısının karesi = {result}"
        except ValueError:
            message = "Lütfen geçerli bir sayı girin."
    else:
        message = f"Merhaba {name}, bu fonksiyon bulutta çalışıyor!"

    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
        },
        "body": json.dumps({"message": message}, ensure_ascii=False)
    }

2️⃣ API Gateway Üzerinden HTTP Tetikleyicisi Ekleme

AWS Console → API Gateway → “Create API”

Seçeneklerden “HTTP API” veya “REST API” oluştur.

Route olarak /squareFunction ekle.

Method: ANY veya GET

Integration Target: Lambda fonksiyonunu seç → squareFunction

“Deploy” et ve oluşturulan endpoint’i kopyala.

Örnek endpoint:

https://mktq4gz54j.execute-api.eu-central-1.amazonaws.com/test/squareFunction

3️⃣ Frontend (GitHub Pages)

index.html, script.js ve README.md dosyalarını bir klasöre koy.

GitHub Desktop ile repository oluştur ve push et.

GitHub → Settings → Pages →

Source: “Deploy from a branch”

Branch: main

Folder: / (root)

Sayfa linki otomatik oluşturulur (örn. https://kullaniciadi.github.io/lambda-square-api/).

🧪 Test Senaryoları
Test	Input (URL)	Beklenen Çıktı
1	/squareFunction?name=Ali&number=5	Merhaba Ali, 5 sayısının karesi = 25
2	/squareFunction?name=Ece&number=12	Ece, 12 sayısının karesi = 144
3	/squareFunction?name=Ahmet	Merhaba Ahmet, bu fonksiyon bulutta çalışıyor!
4	/squareFunction	Merhaba Ziyaretçi, bu fonksiyon bulutta çalışıyor!
5	/squareFunction?name=Ali&number=a	Lütfen geçerli bir sayı girin.
📦 Kullanılan Servisler

AWS Lambda – Fonksiyonun çalıştığı serverless ortam

Amazon API Gateway – HTTP tetikleyici

Amazon CloudWatch – Log yönetimi

GitHub Pages – Frontend barındırma

🖼️ Örnek Çalışma Görseli

“Bir sayı gir, AWS Lambda senin için karesini hesaplasın.”

Ali, 4 sayısının karesi = 16
