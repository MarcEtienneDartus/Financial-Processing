---
id: python-setup
title: Analyses simples avec python
---
## Présentation

> Pour avoir le template du TP faites **Copier sur Drive** depuis ce lien : [Google Colab](https://colab.research.google.com/github/MarcEtienneDartus/Financial-Processing-Lab/blob/master/simple_analysis.ipynb)

Pour notre étude nous allons utiliser les retours journaliers d’un stock du marché américain.
Nous allons mettre en place, grapher et calculer quelques données afin de nous familiariser avec Python.

## Bibliothèques

``` python
import pandas as pd
import datetime
import pandas_datareader.data as web
from pandas import Series, DataFrame
import matplotlib.pyplot as plt
from matplotlib import style
import matplotlib as mpl
import numpy as np
```

## Fonctions utilisées

- Pour les dates : `datetime()`
- Pour récupérer les données : `web.DataReader()`
- Pour calculer les returns : `pct_change()`

## Exercices

1.	Récupérer les prix de fermetures
2.	Calculer les retours journaliers
3.	Afficher les retours journaliers sur un graph
4.	Calculer les retours mensuels
5.	Afficher les retours mensuels sur un graph

## Questions

- Quelle est son return journalier moyen ?
- Quel est l’écart-type de son return journalier ?
- Le signal semble-t-il périodique ?