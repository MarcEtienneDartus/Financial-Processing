---
id: filter
title: Transformée en Z d’un signal discret 
---

<iframe src="https://giphy.com/embed/MMWA9EJgz6MRG" height="150" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>

## La transformée en Z

![](assets/filter/image001.png)

C’est un outil mathématique qui est l’équivalent discret de la transformation de Laplace. Elle permet de transformer un signal x(n) discret en une suite mathématique.  
 
Elle possède de plus un lien avec la transformée de Fourier à Temps Discret TFTD :  

En effet X(z) = X(f) pour z=e^(j2πfTe) avec Te=1/Fe et Fe la fréquence du signe d’échantillonnage de la suite {xn} .
Comme dit précédemment, cet outil mathématique permet de faciliter le traitement des signaux discret comme la synthèse des filtres numériques ou la prise en compte des retards.  


## Condition d’existence de la TZ

La TZ existe si l'équtation suivante converge.  
![](assets/filter/image003.png)

D’où d’après le critère de Cauchy : la TZ existe si:
![](assets/filter/image005.png)

## Propriétés

La TZ est linéaire càd :
```
TZ(a*x(n)+y(n))=a*TZ(x(n))+TZ(y(n)) 
```
Nous pouvons retarder un signal de n0Te en multipliant la transformée par z^(-n0).  

La TZ transforme une convolution en produit simple :
![](assets/filter/image007.png)

## TZ usuelles :  


Suites | Transformée en Z | Domaine de convergence
|:---:|:---:|:---:|
`u0=1 et un=0 si n>0`  | `1` | `ℂ` 
`uk=1 et un=0 si n!=k` | `z^-k` | `ℂ*`
`1` | ![](assets/filter/image009.png) | <code>&#124;z&#124;>1</code>
`n` | ![](assets/filter/image011.png) | <code>&#124;z&#124;>1</code>
`a^n` | ![](assets/filter/image013.png) | <code>&#124;z&#124;>a</code>
`n*a^n` | ![](assets/filter/image015.png) | <code>&#124;z&#124;>a</code>
`cos(wn)` | ![](assets/filter/image017.png) | <code>&#124;z&#124;>1</code>
`sin(wn)` | ![](assets/filter/image019.png) | <code>&#124;z&#124;>1</code>
`a^n*cos(wn)` | ![](assets/filter/image021.png) | <code>&#124;z&#124;>a</code>
`a^n*sin(wn)` | ![](assets/filter/image023.png) | <code>&#124;z&#124;>a</code>

## La transformée en Z inverse : TZ^-1 :  

![](assets/filter/image025.png)

Pour trouver le signal x(n) à partir de sa transformée en z, nous allons procéder par décomposition en fractions partielles :  

TZ est souvent sous forme de fraction rationnelle -> Décomposition en éléments simple puis recherche des fonctions inverses d’après le tableau des TZ usuelles.  


## Equation aux différences :  

Les systèmes réalisables vérifient une équation appelée équation aux différences qui relie l’entrée et la sortie du système. Nous avons la relation:
![](assets/filter/image048.gif) 

> Exemple : </br>
> Cette équation permet alors de construire la fonction de transfert, ici :  </br>
> ![](assets/filter/image033.png)
> Car la fonction de transfert est de la forme H(z) = Y(Z)/X(Z). 


