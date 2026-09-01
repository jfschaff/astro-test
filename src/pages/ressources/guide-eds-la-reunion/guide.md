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

Pour en savoir plus sur les dérogations voir notamment @TODO : ajouter un lien.

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

### 1.3 Droits et informations des personnes

Le RGPD repose sur deux exigences essentielles envers les personnes dont les données sont traitées : elles doivent être informées de ce traitement, et elles disposent de droits qu'elles peuvent exercer sur leurs données. L'EDS La Réunion décline ces deux exigences en mesures concrètes, aussi bien pour les patients que pour les professionnels de santé dont les données figurent dans l'entrepôt.

Les patients sont informés, lors de leur prise en charge et via des campagnes de communication, que les données recueillies sont susceptibles d'être versées dans l'EDS La Réunion.

**Il est particulièrement important pour tous de savoir que les patients sont susceptibles de recevoir, après leur passage au CHU, un message les informant de la réutilisation de leurs données. Ce message peut être transmis par email, SMS ou via la messagerie sécurisée intégrée à Mon Espace Santé (MSS Citoyenne).**

*Liens avec le référentiel EDS :* [8.1](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#8.1), [8.2.2.1](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#8.2.2.1), [9.1](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#9.1) 

Cette information initiale est complétée par un dispositif de transparence continue : un « portail de transparence », accessible sur le [site internet de l'EDS La Réunion](https://eds.chu-reunion.fr), publie chaque réutilisation des données à des fins de recherche, d'étude ou d'évaluation.

*Liens avec le référentiel EDS :* [8.4](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#8.4)

Les professionnels de santé dont les données sont elles aussi versées dans l'entrepôt, dans le cadre de leur activité, sont informés individuellement de ce traitement.

*Liens avec le référentiel EDS :* [8.5.1](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#8.5.1)

Au-delà de cette information, les personnes concernées — patients comme professionnels — disposent des droits prévus par le RGPD sur les données qui les concernent : droit d'accès, droit de rectification, droit à l'effacement, droit à la limitation du traitement, et droit d'opposition.

Les modalités d'exercice des droits sont détaillées sur le [site internet de l'EDS La Réunion](https://eds.chu-reunion.fr).

*Liens avec le référentiel EDS :* [9.2](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#9.2)

### 1.4 Gouvernance des données

La réutilisation des données de l'EDS La Réunion n'est pas laissée à la seule appréciation des personnes impliquées : elle est encadrée par une gouvernance dédiée, juste et équitable.

*Liens avec le référentiel EDS :* [3.2.1](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#3.2.1)

Cette gouvernance repose sur deux instances. La première, le Comité Stratégique EDS, détermine les orientations stratégiques et scientifiques de l'EDS La Réunion. Elle joue notamment un rôle clé dans le choix des données qui sont intégrées à l'EDS.

*Liens avec le référentiel EDS :* [3.2.2](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#3.2.2)

**La seconde, le Comité Scientifique, Ethique et Recherche (CSER) du CHU de La Réunion, valide les accès aux données de l'EDS. Elle s'assure notamment du respect de la réglementation ainsi que de la légitimité des études menées et des données nécessaires.**

*Liens avec le référentiel EDS :* [3.2.3](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#3.2.3)

Enfin, toute demande adressée à la gouvernance doit justifier, catégorie de données par catégorie de données, les données dont le projet a réellement besoin, dans le respect du principe de minimisation inscrit dans le RGPD.

*Liens avec le référentiel EDS :* [5.4](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#5.4)

### 1.5 Sécurisation des données identifiantes, pseudonymisation et ré-identification des patients

Toutes les données de l'EDS La Réunion ne sont pas traitées de la même façon.

#### Chiffrement des données identifiantes

Celles qui permettent d'identifier directement un patient — nom, prénoms, date de naissance exacte, etc. — bénéficient d'une protection renforcée : elles font l'objet d'un chiffrement cryptographique supplémentaire par rapport aux autres données de l'entrepôt.

*Liens avec le référentiel EDS :* [5.2.1.1](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#5.2.1.1), [5.8](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#5.8), [SEC-LOG-4](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#SEC-LOG-4)

#### Pseudonymisation

Pour pouvoir malgré tout relier entre elles les données d'un même patient sans exposer son identité aux utilisateurs de l'EDS, l'EDS attribue à chaque patient un identifiant unique, le pseudonyme. Ce pseudonyme remplace les données identifiantes partout ailleurs dans l'entrepôt.

Différents pseudonymes sont utilisés pour sécuriser l'identité des patients : les pseudonymes vus par les chercheurs ne sont pas les mêmes que ceux du cœur de l'entrepôt.

*Liens avec le référentiel EDS :* [SEC-PSE](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#SEC-PSE), [SEC-ESP-2](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#SEC-ESP-2)

#### Ré-identification

L'EDS est conçu de manière qu'il ne soit pas possible à ses utilisateurs, hors de certains usages autorisés, de ré-identifier les patients, c'est-à-dire de retrouver leur identité.

L'accès aux données identifiantes est donc très restreint : il n'est ouvert qu'aux personnes qui en ont besoin pour l'une des raisons autorisées ainsi que, par dérogation propre à l'EDS La Réunion, à l'équipe de soin d'un patient pour les besoins de sa prise en charge.

*Liens avec le référentiel EDS :* [6.2](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#6.2)

Ces raisons de recontacter un patient sont détaillées au point [5.5 du référentiel de la CNIL](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#5.5).

#### Ré-identification au bénéfice d'un patient

**Notez qu'une procédure spécifique de ré-identification existe en cas d'urgence médicale ou si cette ré-identification bénéficie au patient, par exemple pour lui proposer des mesures de prévention ou de soin.**

**Si vous êtes utilisateur de l'EDS et que vous identifiez une telle situation, pensez donc à vous poser la question de la pertinence de déclencher cette procédure.**

*Liens avec le référentiel EDS :* [5.5](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#5.5), [SEC-REI-3](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#SEC-REI-3)

### 1.6 Export de données hors de l'EDS

Sauf exception, aucune donnée ne peut sortir de l'EDS La Réunion sans avoir été anonymisée au préalable, c'est-à-dire rendue impossible à relier, même indirectement, à un patient identifié.

**En pratique, les données qui peuvent être exportées hors de l'EDS sont surtout des données agrégées (statistiques, figures d'un article, etc.).**

*Liens avec le référentiel EDS :* [SEC-EXP-1](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#SEC-EXP-1)

L'EDS La Réunion bénéficie toutefois d'une dérogation : des données pseudonymisées peuvent être exportées vers un autre système présentant un niveau de conformité et de sécurité équivalent, par exemple un autre entrepôt de données de santé autorisé.


## Partie 2 — Guide utilisateur

Cette partie du guide s'adresse aux utilisateurs de l'EDS La Réunion, c'est-à-dire aux personnes qui possèdent un compte.

En tant qu'utilisateur de l'EDS, vous vous engagez à respecter les règles de fonctionnement de l'EDS.


@TODO : clarifier les types d'utilisateurs. Ex. médecin DIM ? Voir si on les met dans Partie 2 ou Partie 3 ou autre.


### 2.1 Les deux interfaces principales de l'EDS La Réunion

L'EDS La Réunion comporte deux interfaces principales : « Arkhn Explore » et les « _Data Clean Rooms_ » (ou « bulles sécurisées »).

#### Arkhn Explore

Explore permet d'afficher des données statistiques et agrégées de l'EDS (par exemple un nombre ou une distribution de patients satisfaisant à des critères donnés). À ce titre, cette interface est la moins sensible car elle n'expose aucune donnée permettant d'identifier les patients. Elle est donc utilisable assez largement par les agents du CHU de La Réunion.

Cette interface est aussi limitée : elle permet essentiellement de réaliser un premier dénombrement des patients potentiellement intéressants pour une étude donnée (pré-screening).

#### Les _Data Clean Rooms_ (DCR)

Une data clean room est un espace cloisonné dédié à une étude particulière, dans lequel les données nécessaires à l'étude sont intégrées après validation par le CSER. Cet espace permet aux investigateurs de travailler sur les données sans que celles-ci ne quittent l'EDS.

En pratique, il s'agit d'un système Linux Debian accessible via un navigateur web. Des applications d'analyse de données y sont déjà installées, comme par exemple LibreOffice Calc (copie Open Source d'Excel), Python 3, R ou Jamovi.

Les DCR contiennent potentiellement des données sensibles, et font donc l'objet de mesures de sécurité spécifiques. L'import et l'export de données y sont contrôlés par les administrateurs de l'EDS.

### 2.2 Règles d'utilisation des DCR



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
