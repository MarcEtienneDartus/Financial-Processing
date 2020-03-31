---
id: project-var
title: Aide sur la VaR
---

La VaR se doit d'etre defini. Dans notre cas nous allons chercher la VaR sur 1 an avec un risque d'erreur de 1 %.

## Importation des bibliotèques

```python
from scipy.stats import norm
```

## Récuperation des returns & calcul de la moyenne et l'écart type

```python
daily_return = data1.pct_change(1)
mean = np.mean(daily_return)
std_dev = np.std(daily_return)

print("mean = " + "%.4f" % mean + " %" + " | std = " + "%.3f" % std_dev + " %")
```

## Calcul de la VaR parametrique

```python
VaR_param = norm.ppf(0.01, mean, std_dev)*100
print("VaR = " + "%.3f" % VaR_param + " %")
```

## Calcul de l'Expected shortfall

L'expected shortfall represente la moyenne des pertes supérieures à la VaR. C'est une mesure assez récente en risk de marché qui a su compléter l'analyse de VaR.

```python
somme = 0
cpt = 0
for i in range(0,len(daily_return)):
  if daily_return[i] < VaR_param:
    somme=daily_return[i]+somme
    cpt = cpt + 1

ES_param = somme/cpt*100
print("Expected Shortfall (paramatrique) = " + "%.3f" % ES_param + " %")
```