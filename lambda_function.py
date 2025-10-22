import json

def lambda_handler(event, context):
    print("Fonksiyon çağrıldı! Event içeriği:")
    print(event)  

    name = event.get('queryStringParameters', {}).get('name', 'Takipçi')
    number = event.get('queryStringParameters', {}).get('number')

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
        "headers": {"Content-Type": "application/json; charset=utf-8"},
        "body": json.dumps({"message": message}, ensure_ascii=False)
    }
