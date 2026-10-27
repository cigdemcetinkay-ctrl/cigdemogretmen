// Çiğdem Öğretmen sitesi içerikleri
// t = başlık, s = kısa açıklama, k = öğrenecekler, m = malzemeler, c = örnek kod, h = ev çalışması
window.ICERIK = {
  weeks: [
    {
      t: "Arduino’ya giriş",
      s: "Kartı tanıyalım, ilk kodumuzu yükleyelim",
      k: ["Arduino kartının bölümlerini söyleyebilirim", "Arduino IDE’de kod yazıp karta yükleyebilirim", "setup() ve loop() işlevlerinin görevini açıklayabilirim"],
      m: ["Arduino Uno", "USB kablosu", "Bilgisayar", "Jumper"],
      c: `void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}`,
      h: "Karttaki parçaları defterine çiz ve adlarını yaz."
    },
    {
      t: "LED ve breadboard",
      s: "Devre kuralım, dijital çıkış verelim",
      k: ["Breadboard bağlantılarını doğru yapabilirim", "LED’i dirençle güvenli şekilde bağlayabilirim", "Üç LED’i sırayla yakabilirim"],
      m: ["3 LED", "3 adet 220 Ω direnç", "Breadboard", "Jumper kablo"],
      c: `int led1 = 8;
int led2 = 9;
int led3 = 10;

void setup() {
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
}

void loop() {
  digitalWrite(led1, HIGH); delay(300);
  digitalWrite(led1, LOW);
  digitalWrite(led2, HIGH); delay(300);
  digitalWrite(led2, LOW);
  digitalWrite(led3, HIGH); delay(300);
  digitalWrite(led3, LOW);
}`,
      h: "LED’lerin yanma sırasını değiştir ve ne olduğunu yaz."
    },
    {
      t: "Buton ile kontrol",
      s: "Dijital girişi okuyalım",
      k: ["Butonu devreye bağlayabilirim", "digitalRead ile buton durumunu okuyabilirim", "if ile karar verebilirim"],
      m: ["Buton", "10 kΩ direnç", "LED", "Jumper kablo"],
      c: `int buton = 2;
int led = 8;

void setup() {
  pinMode(buton, INPUT);
  pinMode(led, OUTPUT);
}

void loop() {
  if (digitalRead(buton) == HIGH) {
    digitalWrite(led, HIGH);
  } else {
    digitalWrite(led, LOW);
  }
}`,
      h: "Butona bastığında LED’in sönmesi için kodu değiştir."
    },
    {
      t: "Analog giriş ve seri ekran",
      s: "Potansiyometre ile değer okuyalım",
      k: ["analogRead ile 0–1023 arası değer okuyabilirim", "Serial Monitor’da değerleri izleyebilirim"],
      m: ["Potansiyometre", "Jumper kablo"],
      c: `void setup() {
  Serial.begin(9600);
}

void loop() {
  int deger = analogRead(A0);
  Serial.println(deger);
  delay(200);
}`,
      h: "Potansiyometreyi en sola ve en sağa çevirip okuduğun değerleri not al."
    },
    {
      t: "PWM ile parlaklık",
      s: "LED’in ışığını yavaş yavaş değiştirelim",
      k: ["PWM’in ne işe yaradığını açıklayabilirim", "analogWrite ile parlaklığı ayarlayabilirim", "for döngüsü kullanabilirim"],
      m: ["LED", "220 Ω direnç", "Potansiyometre"],
      c: `int led = 9;

void setup() {
  pinMode(led, OUTPUT);
}

void loop() {
  for (int p = 0; p <= 255; p += 5) {
    analogWrite(led, p);
    delay(30);
  }
}`,
      h: "LED’in parlaklığını potansiyometre ile ayarlayan kodu yaz."
    },
    {
      t: "Ultrasonik mesafe sensörü",
      s: "Robot engeli nasıl görür?",
      k: ["HC-SR04 sensörünün çalışma mantığını anlatabilirim", "Mesafeyi santimetre olarak ölçebilirim"],
      m: ["HC-SR04 sensör", "Jumper kablo"],
      c: `int trig = 7;
int echo = 6;

void setup() {
  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT);
  Serial.begin(9600);
}

void loop() {
  digitalWrite(trig, LOW);
  delayMicroseconds(2);
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig, LOW);
  long sure = pulseIn(echo, HIGH);
  int cm = sure * 0.034 / 2;
  Serial.println(cm);
  delay(300);
}`,
      h: "Cetvelle ölçtüğün mesafe ile sensörün ölçtüğünü karşılaştır."
    },
    {
      t: "Servo motor",
      s: "Kolu istediğimiz açıya çevirelim",
      k: ["Servo motoru karta bağlayabilirim", "Servo kütüphanesini kullanabilirim", "Motoru belirli açılara döndürebilirim"],
      m: ["Servo motor", "Jumper kablo"],
      c: `#include <Servo.h>
Servo kol;

void setup() {
  kol.attach(9);
}

void loop() {
  kol.write(0);
  delay(1000);
  kol.write(90);
  delay(1000);
  kol.write(180);
  delay(1000);
}`,
      h: "Servo 45° ve 135°’ye de dönsün diye kodu güncelle."
    },
    {
      t: "Mini proje: park sensörü",
      s: "Öğrendiklerimizi birleştirelim",
      k: ["Sensör, LED ve karar yapısını bir arada kullanabilirim", "Projemi arkadaşlarıma anlatabilirim"],
      m: ["HC-SR04 sensör", "LED", "Buzzer", "Breadboard"],
      c: `// Engel yakınsa buzzer ötsün
if (cm < 15) {
  digitalWrite(buzzer, HIGH);
} else {
  digitalWrite(buzzer, LOW);
}`,
      h: "Mesafe azaldıkça hızlanan bir uyarı sesi tasarla."
    },
  ],
  // Bilim Olimpiyatları · Ders Notları (t = konu, d = alt başlık/tarih, n = not, l = bağlantı)
  olimp: [
    {
      t: "Örnek: Bilişim olimpiyatı notu",
      d: "Algoritma ve mantık",
      n: `Ders notunu buraya yazabilirsiniz.
Satır başları olduğu gibi görünür.`,
      l: ""
    },
    {
      t: "C dilini öğreniyorum",
      d: "",
      n: ``,
      l: ""
    },
  ]
};
