<>

# NestJs Project

~using with RabbitMQ, MongoDB and Docker

## Description

- Generates fake data with Nest.js and rabbitMQ. Then it saves them in mongo database. In the next step, when the instance shuts down, it displays the benchmark result of the speed of writing the data from mq to the database at the point where it receives SIGINT. The whole system runs on docker.

<img src="/assets/consumer_timespent.jpeg"/>
<p>The time spent writing to the database.</p>

<img src="/assets/consumer_SIGINT.jpeg"/>
<p>Benchmark of writes that occurred before the system was shut down.</p>

## Running the app with Docker

```bash
# running app
$ npm run start

# building app with Docker
$ docker-compose build

# running app with Docker
$ docker-compose up
```

## Stay in touch

- Author - [Ezgi İmamoğlu](https://github.com/Ezgimamoglu)
- Documention - [https://nestjs.com](https://nestjs.com/)
