int digitalsensor = 7;  
int analogsensor =A0;

void setup() {
  // put your setup code here, to run once:

  Serial.begin(9600);
  pinMode(digitalsensor, INPUT); //set mode of digital pin to 7

}

void loop() {
  // put your main code here, to run repeatedly:
   while(Serial.available()){
  int digitalsensorValue = digitalRead(digitalsensor);
  int analogsensorValue = analogRead(analogsensor);
  
  Serial.println(digitalsensorValue);
   }
}
