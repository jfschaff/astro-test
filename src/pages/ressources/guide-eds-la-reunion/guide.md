---
layout: ../../../layouts/ArticleLayout.astro
title: "Guide EDS La Réunion"
description: ""
---

## Partie 1 — Notions clés

Cette partie explique ce qu'est l'EDS La Réunion, ce qu'il permet et comment les données qu'il contient sont protégées. Elle ne suppose aucune connaissance préalable et s'adresse à toute personne qui utilise l'EDS d'une maniere ou d'une autre (professionnel de santé, chercheur, administrateur, etc.)

### 1.1 L'EDS La Réunion : un cadre réglementaire précis

L'Entrepôt de Données de Santé de La Réunion (EDS La Réunion) est l'entrepôt de données de santé mis en place par le CHU de La Réunion. Il rassemble, dans un même système, des données de santé recueillies au cours de la prise en charge des patients, afin qu'elles puissent être ensuite réutilisées dans des conditions strictement encadrées, que ce guide détaille dans les parties suivantes.

Parce qu'il traite des données de santé à grande échelle, l'EDS ne peut pas fonctionner sans encadrement. Il est soumis à un texte précis publié par la CNIL, l'autorité chargée de protéger les données personnelles en France : le [référentiel relatif aux entrepôts de données de santé](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil). Ce texte fixe, point par point, ce que l'EDS permet de faire et les garanties qu'il doit respecter. C'est ce référentiel qui sert de fil conducteur à ce guide.

Notons que l'EDS La Réunion n'est pas strictement conforme à tous les points du référentiel. Il a été autorisé par la CNIL suite à une demande d'autorisation listant notamment les non-conformités en les justifiant.

Pour en savoir plus sur les dérogations voir notamment TODO : ajouter un lien.

*Liens avec le référentiel EDS :* [1.3](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#1.3), [2.3](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#2.3)

L'EDS repose par ailleurs sur une base légale précise : la mission d'intérêt public du CHU de La Réunion. Le règlement européen sur la protection des données (RGPD) autorise un organisme public à traiter des données personnelles lorsque c'est nécessaire à l'exercice d'une mission d'intérêt général qui lui est confiée, ici, notamment, l'amélioration des soins et le développement de la recherche en santé. C'est cette base légale qui permet au CHU de La Réunion de constituer l'EDS, sans avoir à recueillir le consentement individuel de chaque patient pour chaque réutilisation de ses données.

*Liens avec le référentiel EDS :* [4](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#4)

### 1.2 Finalités et usages autorisés de l'EDS La Réunion

L'EDS La Réunion existe pour permettre la réutilisation des données qu'il contient. C'est sa finalité même : rassembler des données de santé pour qu'elles servent ensuite à d'autres usages que celui pour lequel elles ont été initialement recueillies (prise en charge).

*Liens avec le référentiel EDS :* [3.1.1](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#3.1.1)

Cette réutilisation n'est pas libre : elle est limitée à une liste précise d'usages autorisés : les finalités. Ces usages relèvent de deux grandes catégories : ceux réservés à l'usage exclusif du CHU de La Réunion (pilotage de l'activité, amélioration de la prise en charge, qualité des soins, etc.), et ceux ouverts à des projets de recherche menés par des équipes internes ou partenaires. La liste exhaustive des finalités autorisées est reproduite en *Annexe A — Finalités de l'EDS La Réunion*.

*Liens avec le référentiel EDS :* [3.1.2](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#3.1.2), [3.1.3](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#3.1.3)

#### Exemples d'usages interdits

À l'inverse, certains usages restent exclus, quelles que soient les circonstances. Les données de l'EDS ne peuvent notamment jamais servir à faire la promotion de produits de santé auprès de professionnels ou d'établissements, ni à exclure une personne d'une garantie d'assurance ou à moduler une cotisation ou une prime en fonction de son état de santé.

*Liens avec le référentiel EDS :* [3.1.4](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#3.1.4)

## Annexe A — Finalités de l'EDS La Réunion

Ce document définit les finalités de l'EDS La Réunion.

Pour l’usage exclusif du responsable de traitement :
- **F1** Réaliser des études de faisabilité (pré-screening)
- **F2** Piloter l’activité et produire des indicateurs d’activité
- **F3** Mettre en œuvre des outils d’aide à la prise en charge ou d’aide au diagnostic médical
- **F4** Permettre l’amélioration de la qualité de l'information médicale ou l’optimisation du codage dans le cadre du programme de médicalisation des systèmes d’information (PMSI)
- **F5** Concourir à la qualité, à la sécurité des soins et à la gestion des risques
- **F6** Servir de socle technique sécurisé et conforme à tout projet médical nécessitant l’exploitation de données

Pour des recherches réalisées par les professionnels du responsable de traitement ou par des partenaires du responsable de traitement (établissements de santé, instituts de recherches, universités, industriels du médicament et des dispositifs médicaux, etc.) :
- **F7** Réaliser des recherches, des études ou évaluations dans le domaine de la santé
- **F8** Servir de socle technique sécurisé et conforme à tout projet de recherche nécessitant l’exploitation de données

Par ailleurs, l’EDS sera utilisé pour
- **F9** Exporter des données pseudonymisées vers d’autres EDS ou d’autres systèmes conformes ou autorisés par la CNIL
