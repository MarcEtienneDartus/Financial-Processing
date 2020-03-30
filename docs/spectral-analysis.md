---
id: spectral-analysis
title: Analyse spectrale d’un signal
---

## Importation

> Pour avoir le template du TP faites **Copier sur Drive** depuis ce lien : [Google Colab](https://colab.research.google.com/github/MarcEtienneDartus/Financial-Processing-Lab/blob/master/spectral_analysis.ipynb)

## Bibliothèques utilisées : 

```python
import math 
import numpy as np 
from matplotlib.pyplot import * 
from numpy.fft import fft  
```
## Exercices :
 
### Question 1 : 
Pour ce td nous aurons besoin d’un signal signal périodique, pour pouvoir avoir les mêmes résultats nous allons définir ce signal comme ceci : 
```
0.2 + 2 * cos(2*pi*t) + cos(3*2*pi*t) + 0.5*sin(4*2*pi*t) + 0.25*sin(5*2*pi*t)
```

### Question 2 :
Échantillonner le signal : le choix de l'origine du temps est sans importance | La fréquence d'échantillonnage soit être supérieure au double de la plus grande fréquence du signal, ici 5 donc supérieure à 10.

### Question 3 :
Faites la transformée de Fourier de ce signal échantillonné, pour cela utiliser la fonction fft.

### Question 4 :
Observez le résultat en affichant le spectre de ce signal. 

### Question 5 :
Pourquoi n’avons-nous pas fait de DSF sur des données financière ?