---
id: filter-basics
title: Les bases du filtrage
---

<iframe src="https://giphy.com/embed/TrUEzfsUTPEBi" height="150" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>

## Principe de stabilité

On dit que le système est stable si pour une entrée bornée, la sortie reste bornée quelles que soient les perturbations
L’entrée est bornée si : 
![](assets/filter/image2.png)
 
Avec une réponse du système  
![](assets/filter/image4.png)
On montre que la sortie est bornée si   
![](assets/filter/image6.png)
Ainsi, un système est stable uniquement si sa réponse impulsionnelle est intégrable.

![](assets/filter/image7.png)
 
## Principe de filtrage
Un filtre linéaire est, en traitement du signal, un système qui applique un opérateur linéaire à un signal d'entrée.
Le filtrage a comme objectif de contrôler et sélectionner certaines fréquences du signal et éliminer les autres.

Les filtres les plus communs sont les suivants : 
- Les filtres passe-bas font passer les basses fréquences et coupent les hautes
- Les filtres passe-haut font passer les hautes fréquences et coupent les basses
- Les filtres passe-bande ne laissent passer qu'une bande de fréquence limitée
- Les filtres coupe-bande ou Notch, à l'inverse, laissent passer toutes les fréquences, sauf une bande spécifique

![](assets/filter/image9.png)


