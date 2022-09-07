FROM openjdk:17.0-jdk

RUN mkdir /app
COPY SingleFileJavaApplication.class /app
WORKDIR /app

CMD ["java","-Dtarget=demo","SingleFileJavaApplication","fail"]
