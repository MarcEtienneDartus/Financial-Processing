# Financial Processing Explenation 🚀

## Introduction 📚

This course aims to complement traditional signal processing courses. It covers the entire introduction to signal processing, from defining a signal, to intermediate concepts, such as filtering.

The aim of this course, as a complement, is not to dig deep in the theoretical and "boring" part of the different concepts. Rather, it aims to give meaning and illustrations to the concepts of signal processing.

To better illustrate the concepts of signal processing, what's better than applications ?!

Theses applications simply allow you to exercise signal processing on financial data. It goes from the very basics analysis to more complex ones.
It's about showing how this powerful tool can get information out of a signal.

To do this, most of the applications are based on real financial data.

The statements will guide you on the use of Python and its signal processing libraries. Python is a very affordable, very powerful language, increasingly present in many engineering fields (Big data, finance, IoT, etc.).

In order to be able to work without worrying about installing anything, the statements will also guide you on the use of [Google Colab](https://colab.research.google.com/), which is a python development environment already counting a lot of libraries useful for signal processing.

## Roadmap 📝

To do these applications you will find all the informations on the [financial processing website](https://financial-processing.onrender.com/).

To try the exercices click in this list bellow and then click on **Copy on Drive** button.

We recommend you to follow the exercice in that order:
- ⭐️ [Simple analysis](https://colab.research.google.com/github/MarcEtienneDartus/Financial-Processing-Lab/blob/master/simple_analysis.ipynb)
- ⭐️ [Spectral analysis](https://colab.research.google.com/github/MarcEtienneDartus/Financial-Processing-Lab/blob/master/spectral_analysis.ipynb)
- ⭐️⭐️ [Moving average](https://colab.research.google.com/github/MarcEtienneDartus/Financial-Processing-Lab/blob/master/moving_average.ipynb) 
- ⭐️⭐️[Filtering NASDAQ](https://colab.research.google.com/github/MarcEtienneDartus/Financial-Processing-Lab/blob/master/filter_nasdaq.ipynb)
- ⭐️⭐️ [Kalman filter](https://colab.research.google.com/github/MarcEtienneDartus/Financial-Processing-Lab/blob/master/kalman.ipynb)
- ⭐️⭐️⭐️ [Final project](https://colab.research.google.com/github/MarcEtienneDartus/Financial-Processing-Lab/blob/master/final_project.ipynb)

If you need the solution send me an email at **marcetienne@dartus.fr** 😉

# How the website works 🕵️‍♂️

## Installation 👨‍🔧

To modify the webiste, you have to follow theses steps:

1. Clone the repo
```
git clone https://github.com/MarcEtienneDartus/Financial-Processing.git
```

2. Go to the website
```
cd Financial-Processing
```

4. Intall the dependencies
```
npm install
```

3. Run the website
```
npm start
```

Now you can access the website in local http://localhost:3000

## Website content 💻

Main files and folder:
- You will find all the courses and lab in the `docs` folder.
- The main page configuration is in `website/pages/en/index.js` file.
- The footer configuration is in `website/core/Footer.js` file.
- The sidebars configuration is in `website/sidebars.js` file.
- All website configuration is in `website/siteConfig.js` file.

If you need more information you can find evrything on [Docusaurus](https://docusaurus.io/) website !

## How to update the website ? 🛠

You only need to do a pull request to this repo and the website will be automaticaly updated !