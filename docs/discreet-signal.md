---
id: discreet-signal
title: Les signaux discrets
---

## Importation

> Pour avoir le template du TP faites **Copier sur Drive** depuis ce lien : [Google Colab](https://colab.research.google.com/github/MarcEtienneDartus/Financial-Processing-Lab/blob/master/discreet_signal.ipynb)

Les bibliothèques à importer

```python
import numpy as np
import matplotlib.pyplot as plt
from numpy.fft import fft
```

## EXERCICE 1

### Echantillonnage


*   Créer un signal simple (un sinus ou cosinus), de fréquence f = 1. On peut utiliser np.pi qui permet de modifier le modulo de la fonction
*   Définir une durée (2 périodes) ainsi qu'une fréquence d'échantillonnage (fe)
*   Placer les points du signal échantillonné (on utilise la fonction np.linspace)
*   Tracer et affiche le signal échantillonné et le signal réel à l'aide de plt.plot
*   ATTENTION à respecter le théorème de Shannon: `f < fe/2`

### Importance du théorème de Shannon-Nyquist

Le théorème de Shannon Nyquist indique que la fréquence f du signal (ou celles de ses composantes) doit vérifier:  `f<fe/2`

*   Utiliser le même signal que précédemment
*   Essayer un échantillonnage qui ne respecte pas ce théorème, fe ne doit pas respecter l'égalité précédente
*   Visualiser les deux siganux (échantilloné et réel)
*   Analyser le conséquences du non respect de ce théorème, quel impact a-t-il ?

## EXERCICE 2

### Sampler une fonction periodique et sa TFD

*  Créer un signal `y(t) = 0.1 + cos(2*pi*t)+0.5*cos(2*2*pi*t)\+0.25*sin(6*pi*t)+0.01*sin(8*pi*t)`, avec la période égale à 1 (T)
*  Ajuster la durée D >> T (la période)
*  Poser et initialiser Fe, la fréquence d'échantillonnage
*  Calculer la transformée de Fourier discrète puis sa norme (spectre) en utilisant `np.fft`
*  Construire l'échelle des fréquences. L'espacement de deux points de la TFD est l'inverse de la durée T
*  Tracer le spectre pour des fréquences allant de zéro à la moitié de Fe

## EXERCICE 3

### Travail sur les différentes représentation

*  Afficher la représentation en décibel du signal précédent afin de rendre visible l'harmonique de rang 4
*  Ajouter des zéros avant et après le signal pour avoir une représentation propre
*  Montrer la raie du fondamental