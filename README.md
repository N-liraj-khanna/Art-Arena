<h1 align="center">
  <br>
  <img src="/Frontend/assets/icons/logo_app.png" alt="Blind-AI" width="200">
  <br>
  Blind AI
  <br>
</h1>

<h4 align="center">An app to make the lives of visually impaired people a little more ordinary.</h4>


<p align="center">
  <a href="#introduction">Introduction</a> •
  <a href="#installation">Installation</a> •
  <a href="#application-structure">Application Structure</a> •
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a> •
  <a href="#support">Support</a> •
  <a href="#contributors">Contributors</a> •
  <a href="#license">License</a>
</p>

<p align="center">
<img width = 30% src="https://user-images.githubusercontent.com/73516876/193432075-1e0bcc3c-0681-441d-bab5-4d185f25c974.jpeg" alt="App">
</p>

## Introduction

The development of tools and technology hasn't resulted in the development of applications that could aid those with visual impairments. With the development of Data Modelling techniques, which can be used to give even basic computers a bit of "intelligence," and the ease of accessibility, this "intelligence" can be extended to our smartphones to aid those who are blind in navigating their surroundings and going about their daily lives. By utilising the power of Deep Learning, which can be made accessible even on low-end devices with a clear User-Interface that would precisely allow them to better grasp the world around, our application seeks to close the gap between them and the visible world.

This app enables the community of blind and visually impaired people to correctly identify objects they come across in everyday life without the need for sighted assistance.

## Installation

Install with pip:

```
$ pip install -r requirements.txt
```

## Application Structure

```
.
blind_ai/
├─ Frontend/
├─ calibration/
│  ├─ Ref_image.png
├─ currency-detection/
│  ├─ currencies/
├─ yolo_v3/
│  ├─ coco.names
│  ├─ yolov3-tiny.cfg
│  ├─ yolov3-tiny.weights
├─ app.py
├─ curr_det.py
├─ requirements.txt
├─ utils.py
├─ .gitignore
├─ Procfile
```

## Key Features

⭐️ SOS - Quickly send alerts to your emergency contacts.

⭐️ Object detection - Detects the object in front of you and the distance you are from it.

⭐️ Currency detection - Detects currecny denominations.

⭐️ Read text - Reads the text for you.

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Flutter](https://flutter.dev/).

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Nilavan/Blind-AI-Backend/

# Go into the repository
$ cd Blind-AI-Backend

# Install dependencies
$ pip install -r requirements.txt

# Run the app
$ flask run
```

## Credits

This software uses the following open source packages:

- [Flutter](https://flutter.dev/)
- [Python](https://www.python.org/)
- [Python Anywhere](https://www.pythonanywhere.com/)
- [Twilio](https://www.twilio.com/)
- [Flask](https://flask.palletsprojects.com/en/2.2.x/)



## 🤝 Contributors

[@N-liraj-khanna](https://github.com/N-liraj-khanna) &nbsp;&middot;&nbsp;
[@ajith-m-doodlebug](https://github.com/ajith-m-doodlebug) &nbsp;&middot;&nbsp;
[@calicartels](https://github.com/calicartels/) &nbsp;&middot;&nbsp;
[@Nilavan](https://github.com/Nilavan) &nbsp;&middot;&nbsp;

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License


MIT

---


> Copyright © 2023 [@N-liraj-khanna](https://github.com/N-liraj-khanna) &nbsp;&middot;&nbsp;

