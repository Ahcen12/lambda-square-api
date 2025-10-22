import json

def lambda_handler(event, context):
    print("Fonksiyon çağrıldı! Event içeriği:")
    print(event)

    # 1️⃣ OPTIONS (CORS preflight) isteğini özel olarak yanıtla
    if event.get("requestContext", {}).get("http", {}).get("method") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type"
            },
            "body": json.dumps({"message": "CORS preflight OK"})
        }

    # 2️⃣ Normal GET isteği işlemleri
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

    print(f"Gönderilen mesaj: {message}")

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
