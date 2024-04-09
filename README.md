# Countdown Timer Service

The Countdown Timer Service is a web application that allows users to create and manage countdown timers.

## Installation & Run Locally

Clone the repository:

```bash
git clone https://github.com/your-username/countdown-timer-service.git
```

Navigate to the project directory:

```bash
cd countdown-timer-service
```

Install dependencies:

```bash
npm install
```

Set up environment variables:

Create a .env file in the root directory of the project and specify the following environment variables:

```bash
PORT=8000
MONGODB_URI=mongodb://localhost/countdown_timer_db
```

Start the server:

```bash
npm start
```

## API Reference

#### Get all counters

```http
  GET /counter
```

#### Add a counter

```http
  POST /counter
```

| Parameter    | Type     | Description                      |
| :----------- | :------- | :------------------------------- |
| `timerName`  | `string` | **Required**. Name of the timer  |
| `timerValue` | `string` | **Required**. Value of the timer |

#### Update the counter

```http
  PUT /counter
```

| Parameter             | Type     | Description                              |
| :-------------------- | :------- | :--------------------------------------- |
| `activeTimeInSeconds` | `number` | **Optional**. Active time of counter     |
| `deletionDate`        | `date`   | **Optional**. Deletion date of the timer |
