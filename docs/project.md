---
id: project
title: Projet final appliqué à la Finance
---
## Description du projet

Après la crise financière due au coronavirus, JP Morgan a vu le prix de son action passer de 138$ à 79$ par part.
En vous basant sur les données de 1998 à aujourd’hui rédiger un programme permettant à JP Morgan d’évalué son nouvel ES ( expected shortfall ), puis tracer l’évolution de l’ES de JP Morgan en fonction du temps.
Retirer les fluctuations afin de tirer une tendance de l’ES, l’avenir semble t’il plus ou moins volatile.
Quelles périodes particulière avez-vous remarquées lors de votre étude. 

> **ES :** La moyenne des returns inferieur à  la VaR

> **VaR :** Le montant de pertes qui ne devrait être dépassé avec une probabilité donnée sur un horizon temporel donné.
Pour notre étude nous utiliserons la VaR 99% sur 20 jours.

## Importation

> Pour avoir le template du TP faites **Copier sur Drive** depuis ce lien : [Google Colab](https://colab.research.google.com/github/MarcEtienneDartus/Financial-Processing-Lab/blob/master/final_project.ipynb)

## Les grandes étapes
1. Récupérer les returns
2. Calculer la VaR 99% ( sur les 20 dernier jours)
3. Calculer l’ES de cette année
4. Récupérer les VaR 99% (sur 20 jours depuis 1998)
5. Récupérer les ES depuis 1998
6. Tracer la courbe de l’ES depuis 1998
7. Débruiter cette courbe
8. En tirer une tendance
9. Observer et conclure.
