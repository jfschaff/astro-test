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

**Il est particulièrement important de savoir que les patients sont susceptibles de recevoir, après leur passage au CHU, un message les informant de la réutilisation de leurs données. Ce message peut être transmis par email, SMS ou via la messagerie sécurisée intégrée à Mon Espace Santé (MSS Citoyenne).**

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

### 1.5 Sécurisation des données identifiantes, pseudonymisation et réidentification des patients

Toutes les données de l'EDS La Réunion ne sont pas traitées de la même façon.

#### Chiffrement des données identifiantes

Celles qui permettent d'identifier directement un patient — nom, prénoms, date de naissance exacte, etc. — bénéficient d'une protection renforcée : elles font l'objet d'un chiffrement cryptographique supplémentaire par rapport aux autres données de l'entrepôt.

*Liens avec le référentiel EDS :* [5.2.1.1](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#5.2.1.1), [5.8](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#5.8), [SEC-LOG-4](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#SEC-LOG-4)

#### Pseudonymisation

Pour pouvoir malgré tout relier entre elles les données d'un même patient sans exposer son identité aux utilisateurs de l'EDS, l'EDS attribue à chaque patient un identifiant unique, le pseudonyme. Ce pseudonyme remplace les données identifiantes partout ailleurs dans l'entrepôt.

Différents pseudonymes sont utilisés pour sécuriser l'identité des patients : les pseudonymes vus par les chercheurs ne sont pas les mêmes que ceux du cœur de l'entrepôt.

*Liens avec le référentiel EDS :* [SEC-PSE](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#SEC-PSE), [SEC-ESP-2](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#SEC-ESP-2)

#### Réidentification

L'EDS est conçu de manière qu'il ne soit pas possible à ses utilisateurs, hors de certains usages autorisés, de réidentifier les patients, c'est-à-dire de retrouver leur identité.

L'accès aux données identifiantes est donc très restreint : il n'est ouvert qu'aux personnes qui en ont besoin pour l'une des raisons autorisées ainsi que, par dérogation propre à l'EDS La Réunion, à l'équipe de soin d'un patient pour les besoins de sa prise en charge.

*Liens avec le référentiel EDS :* [6.2](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#6.2)

Ces raisons de recontacter un patient sont détaillées au point [5.5 du référentiel de la CNIL](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#5.5).

#### Réidentification au bénéfice d'un patient

**Notez qu'une procédure spécifique de réidentification existe en cas d'urgence médicale ou si cette réidentification bénéficie au patient, par exemple pour lui proposer des mesures de prévention ou de soin.**

**Si vous êtes utilisateur de l'EDS et que vous identifiez une telle situation, pensez donc à vous poser la question de la pertinence de déclencher cette procédure.**

*Liens avec le référentiel EDS :* [5.5](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#5.5), [SEC-REI-3](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#SEC-REI-3)

### 1.6 Export de données hors de l'EDS

Sauf exception, aucune donnée ne peut sortir de l'EDS La Réunion sans avoir été anonymisée au préalable, c'est-à-dire rendue impossible à relier, même indirectement, à un patient identifié.

**En pratique, les données qui peuvent être exportées hors de l'EDS sont surtout des données agrégées (statistiques, figures d'un article, etc.).**

*Liens avec le référentiel EDS :* [SEC-EXP-1](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#SEC-EXP-1)

L'EDS La Réunion bénéficie toutefois d'une dérogation : des données pseudonymisées peuvent être exportées vers un autre système présentant un niveau de conformité et de sécurité équivalent, par exemple un autre entrepôt de données de santé autorisé.


## Partie 2 — Guide d'utilisation

Cette partie du guide s'adresse aux utilisateurs de l'EDS La Réunion, c'est-à-dire aux personnes qui possèdent un compte pour avoir accès et analyser des données.

### 2.1 Les types d'utilisateurs de l'EDS La Réunion

Il existe trois types d'utilisateurs de l'EDS La Réunion :
1. utilisateurs de l'EDS : agents du CHU, chercheurs et collaborateurs, etc.
2. utilisateurs avancés : par exemple les agents du DIM qui peuvent être destinataires de données pseudonymisées dans le cadre de leurs missions ;
3. administrateurs : membres de l'équipe opérationnelle et administrateurs systèmes, qui possèdent des accès privilégiés à l'EDS et/ou aux bases de données et/ou machines dans le cadre de leurs missions.

Par ailleurs, la plateforme Arkhn comporte les profils types suivants :
- "Data user" pour les utilisateurs de l'EDS ;
- "Data manager" pour les utilisateurs avancés et administrateurs ;
- "Data engineer" pour certains administrateurs.

Cette partie du guide s'adresse aux utilisateurs et utilisateurs avancés de l'EDS. La partie 3 — "Guide d'administration" s'adresse aux administrateurs.

En tant qu’utilisateur, vous vous engagez à respecter les règles exposées ci-dessous.

*Liens avec le référentiel EDS :* [6.4](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#6.4), [SEC-HAB-1](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#SEC-HAB-1), [SEC-HAB-4](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#SEC-HAB-4)

### 2.2 L'équipe EDS

Le fonctionnement de l'EDS est possible car y est associée une équipe pluriprofessionnelle dédiée alliant médecins, ingénieurs et spécialistes des données.

Celle-ci est composée des personnes suivantes.

#### Dr Delphine POUSSIN – Cheffe de service du Département d'Information Médicale (DIM), Responsable de l'EDS La Réunion

En tant que cheffe de service du DIM, le Dr POUSSIN est responsable de l'EDS. Elle joue notamment un rôle clé dans les orientations stratégiques de l'EDS (préparation du Comité Stratégique) et, en tant que responsable du DIM, sur les sujets sensibles, comme par exemple la réidentification des patients.

#### Dr Michel BOHRER – Ancien chef de service du Département d'Information Médicale, Ancien responsable de l'EDS La Réunion

Le projet de construction de l'EDS a été initié conjointement par la Direction de la Recherche et de l'Innovation et par le Dr BOHRER lorsqu'il était chef de service. À ce titre, le Dr BOHRER a joué un rôle clé dans de nombreux choix stratégiques, d'architecture et de fonctionnement de l'EDS.

#### M. Jean-François SCHAFF, _PhD_ – Responsable opérationnel de l'EDS La Réunion

M. SCHAFF anime l'équipe opérationnelle de l'EDS. À ce titre, il est garant du bon fonctionnement du système dans son ensemble (opérations) et contribue à faire évoluer l'EDS dans le sens d'une amélioration du service rendu à ses utilisateurs. Il joue un rôle de chef de projet sur différents projets d'utilisation ou d'évolution de l'EDS. Il est aussi responsable des questions de conformité et de sécurité de l'EDS, en lien avec les directions contributrices (DSI, RSSI).

#### Dr Romain MORTIER – Médecin de santé publique EDS

Le Dr MORTIER est particulièrement impliqué dans les questions des données intégrées à l'EDS La Réunion.

#### M. Stanislas BRODIN – Ingénieur EDS

M. BRODIN est ingénieur de formation et a une longue expérience de développement web. Il joue un double rôle opérationnel (fonctionnement courant de l'EDS) et de chef de projet technique pour l'évolution de l'EDS : intégration de nouvelles sources de données, amélioration des systèmes existants, montée en charge, etc.

#### Contacts clés

Pour contacter l'équipe opérationnelle de l'EDS, utilisez l'adresse <eds@chu-reunion.fr>.

Autres contacts :
- Dr Delphine POUSSIN – Responsable de l'EDS La Réunion – <delphine.poussin@chu-reunion.fr>
- Jean-François SCHAFF, _PhD_ – Responsable opérationnel de l'EDS La Réunion – <jean-francois.schaff@chu-reunion.fr>
- Dr Romain MORTIER – Médecin de santé publique EDS – <romain.mortier@chu-reunion.fr>

### 2.3 Les deux interfaces principales de l'EDS La Réunion

L'EDS La Réunion comporte deux interfaces principales : « Arkhn Explore » et les « _Data Clean Rooms_ » (aussi appelées « bulles sécurisées »).

#### Arkhn Explore

Explore permet d'afficher des données statistiques et agrégées de l'EDS (par exemple un nombre ou une distribution de patients satisfaisant à des critères donnés). À ce titre, cette interface est la moins sensible car elle n'expose aucune donnée permettant d'identifier les patients. Elle est donc utilisable assez largement par les agents du CHU de La Réunion.

Cette interface est aussi limitée : elle permet essentiellement de réaliser un premier dénombrement des patients potentiellement intéressants à inclure dans une étude sur données (pré-screening).

#### Les _Data Clean Rooms_ (DCR)

Une data clean room est un espace cloisonné dédié à une étude particulière, dans lequel les données nécessaires à l'étude sont intégrées après validation par le CSER. Cet espace permet aux investigateurs de travailler sur les données sans que celles-ci ne quittent l'EDS.

En pratique, il s'agit d'un système Linux Debian accessible via un navigateur web. Des applications d'analyse de données y sont déjà installées, comme par exemple LibreOffice Calc (copie Open Source d'Excel), Python, R ou Jamovi.

Les DCR contiennent potentiellement des données sensibles, et font donc l'objet de mesures de sécurité spécifiques. L'import et l'export de données y sont contrôlés par les administrateurs de l'EDS.

### 2.4 Règles d'accès à l'EDS La Réunion

Tout agent du CHU de La Réunion peut demander un accès à l'EDS. Par défaut, cet accès permettra de visualiser les données agrégées (donc non identifiantes) présentées par le module Arkhn Explore (statistiques).

*Liens avec le référentiel EDS :* [6.1](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#6.1), [SEC-HAB-2](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#SEC-HAB-2)

Les personnes externes qui collaborent avec des investigateurs du CHU de La Réunion sur des projets qui ont été approuvés par le CSER sont aussi autorisées à accéder à l'EDS La Réunion.

*Liens avec le référentiel EDS :* [6.3](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#6.3)

En tant qu'utilisateur de l'EDS, il vous est strictement interdit de partager votre accès à un tiers. Tout contournement volontaire de cette mesure de sécurité pourra provoquer la révocation immédiate de votre accès à l'EDS.

Si vous pensez que vos accès à l'EDS ont été compromis, vous vous engagez à en informer l'équipe opérationnelle dans les plus brefs délais à l'adresse eds@chu-reunion.fr ou par téléphone. Vos accès seront alors réinitialisés et une vérification sera faite pour s'assurer qu'aucun accès illégitime n'a eu lieu.

### 2.5 Règles d'utilisation des DCR

#### 2.5.1 Création d'une DCR

La création d'une DCR se fait sur demande de l'investigateur principal, qui indique quels membres de l'équipe projet doivent y avoir accès.

L'investigateur principal doit être salarié du CHU de La Réunion. Il est garant du bon respect des règles d'accès par les membres de son équipe.

Pour les internes, c'est le directeur de thèse, ou une personne du CHU qui le représente, qui fait la demande d'ouverture de la DCR.

*Liens avec le référentiel EDS :* [SEC-ESP-1](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#SEC-ESP-1)

#### 2.5.2 Accès à une DCR

Une fois une DCR créée, seules les investigateurs identifiés lors de la demande d'avis éthique sont autorisés à accéder à la DCR.

En cas de départ d'une personne de l'équipe projet, l'investigateur principal s'engage à informer l'équipe opérationnelle de l'EDS de ce départ pour que l'accès correspondant soit révoqué.

En cas de besoin d'ajout d'une nouvelle personne à une équipe projet déjà constituée, l'investigateur principal adresse une demande à l'équipe opérationnelle de l'EDS par adresse email eds@chu-reunion.fr en précisant le rôle de la nouvelle personne dans l'équipe.

En cas de doute, l'équipe opérationnelle pourra consulter le CSER pour valider la modification de l'équipe projet.

*Liens avec le référentiel EDS :* [SEC-HAB-3](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#SEC-HAB-3), [SEC-HAB-6](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#SEC-HAB-6)

#### 2.5.3 Fonctionnement des DCR

Vous accédez aux DCR par un porotocole de bureau à distance (RDP pour _Remote Desktop Protocol_). Celui-ci est simple d'utilisation car accessible via un explorateur internet standard (Google Chrome, Microsift Edge, etc.) sans installation de votre part.

à l'exception de cet accès, les DCR sont des espaces cloisonés du monde extérieur pour faciliter leur sécurisation et le respect du référentiel EDS de la CNIL.

Internet n'est donc pas disponible depuis les DCR.

En tant qu'utilisteur vous vous engagez :
- à faire remonter vos difficultés à tarvailler des les DCR à l'équipe opérationnelle EDS ;
- à ne pas tenter de contourner les mesures de cloisonnement mises en place, notamment accès à internet ;
- à ne pas exécuter de solutions d'intelligence artificielles dans une DCR (notamment des agents basés sur des LLM).

En cas de doute, vous vous engagez à contacter l'équipe opérationnelle EDS qui fera de son mieux pour vous aider à pouvoir travailler efficacement dans les DCR.

*Liens avec le référentiel EDS :* [SEC-ESP-1](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#SEC-ESP-1), [SEC-RES-1](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#SEC-RES-1)

#### 2.5.4 Export et import de données dans une DCR

Les données strictement nécessaires à l'étude, et dont l'accès a été validé par le CSER, sont mises à votre disposition par l'équipe opérationnelle de l'EDS.

*Liens avec le référentiel EDS :* [6.3](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#6.3)

Pour récupérer les données, vous devez 
@TODO description de la manirer dont on récupère les données.

Il vous est possible de copier / coller du texte de l'extérieur de la DCR vers la DCR, par exemple du code informatique.

En utilisant l'EDS, vous vous engagez à respecter les règles suivantes :
- ne pas importer de données sensibles dans une DCR sans avoir vérifié, si besoin avec l'équipe opérationnelle de l'EDS, de la légalité de cet import ;
- ne pas exporter de données personnelles hors de la DCR, notamment des données pseudonymisées, et ne pas tenter de contourner les freins techniques existants à de tels exports.

Vous vous engagez à n'exporter que des données anonymes, comme par exemple des résultats statistiques obtenus sur un ensemble de patients, ne permettant pas la réidentification desdits patients, ou des figures générées à partir de données comparables pour la publication de vos résultats.

Étant entendu que le simple retrait d'une clé pseudonyme d'un jeu de données ne constitue pas nécessairement une anonymisation fiable et conforme des données, vous vous engagez à ne pas tenter une telle anonymisation en autonomie.

Si un tel besoin est identifié, vous vous engagez à contacter l'équipe opérationnelle pour travailler avec elle à l'anonymisation de votre jeu de données.

*Liens avec le référentiel EDS :* [SEC-EXP-1](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#SEC-EXP-1), [SEC-EXP-2](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#SEC-EXP-2), [SEC-EXP-3](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#SEC-EXP-3)

Tout contournement ou tentative de contournement de ces mesures de protection des données personnelles pourra provoquer la révocation immédiate de votre accès à l'EDS.

### 2.6 Accès pour les utilisateurs avancés

@TODO



- interdire les tentatives de réidentification dans les DCR




## Partie 3 — Guide d'administration

à prévoir :
- procédure de révocation des accès à des personnes ne respectant pas les règles
- procédure de réidentification
- procédure de réidentification d'urgence
- procédure de réinitialition d'un compte compromis



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


## Procédure de révocation des accès

@TODO


## Procédure de réinitialisation d'un compte compromis

@TODO


## PROC-REID-URG Procédure de réidentification en cas d'urgence médicale

*Liens avec le référentiel EDS :* [5.5](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#5.5), [SEC-REI-3](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#SEC-REI-3), [SEC-REI-4](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#SEC-REI-4), [SEC-REI-5](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#SEC-REI-5)

### Qui déclenche la procédure de réidentification en cas d'urgence médicale ?

Tout utilisateur ou administrateur de l'EDS qui a accès à des données pseudonymisées dans l'exercice de ses missions peut déclencher la procédure de réidentification en cas d'urgence médicale.

### Dans quelles conditions envisager de déclencher la procédure de réidentification en cas d'urgence médicale ?

Vous :
- identifiez un "risque sanitaire auquel [une personne de votre cohorte] est exposée" ou
- découvrez, chez une personne de votre cohorte, des "caractéristiques génétiques pouvant être responsables d’une affection justifiant des mesures de prévention ou de soins à leur bénéfice ou au bénéfice de leur famille" ou
- faites des "découvertes annexes liées à l’identification de facteurs de risques et/ou d’identification syndromiques à même de modifier leur prise en charge (thérapeutique ou de suivi)".

Vous estimez que cela pourrait justifier de recontacter la personne pour lui proposer une prise en charge adaptée.

### Comment déclencher la procédure ?

Vous contactez la Cheffe de Service du DIM par email à l'adresse <delphine.poussin@chu-reunion.fr> et lui exposez la découverte que vous avez faite.

### Quelles suites sont données ?

Une fois les échanges entre vous terminés (email, téléphone, etc.), la Cheffe de Service établit un rapport succinct indiquant sa décision, qui peut être :
1. de ne pas recontacter la personne ;
2. de réidentifier la personne pour la contacter et lui proposer une prise en charge.

Une explication succincte de la logique de cette décision est inscrite dans le rapport.

Si la réidentification est décidée, la Cheffe de Service du DIM contacte l'équipe opérationnelle EDS en indiquant qu'une décision de réidentification a été prise suite à l'alerte d'un utilisateur, ainsi que les données identifiantes utiles pour recontacter la personne et la prendre en charge (nom, prénom, date de naissance, IPP, etc.).

L'équipe opérationnelle contacte l'utilisateur pour obtenir les informations nécessaires à la réidentification (DCR concernée, clé de pseudonymisation, etc.) et transmet l'identité de la personne à la Cheffe de Service du DIM, qui inscrit les données dans le rapport de réidentification.

La Cheffe de Service du DIM prend contact avec les services de l'hôpital concernés pour déclencher la prise en charge. Elle informe l'utilisateur de l'issue de son alerte. Elle archive le rapport de réidentification.

Dans le respect du secret médical, le rapport n'est pas transmis à l'équipe opérationnelle de l'EDS.


## PROC-DROITS Procédure d'exercice des droits

*Liens avec le référentiel EDS :* [9.2](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#9.2), [9.4](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#9.4), [9.5](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#9.5), [9.7](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#9.7), [SEC-REI-1](/astro-test/ressources/referentiel-entrepot-de-donnees-de-sante-de-la-cnil#SEC-REI-1)

### Qui déclenche la procédure d'exercice des droits ?

Le Délégué à la Protection des Données du CHU de La Réunion (DPO) est la seule personne habilitée à déclencher la procédure.

Si une telle demande est adressée directement à une autre personne que le DPO (par exemple à un membre de l'équipe opérationnelle EDS), la personne demandeuse doit être redirigées vers le DPO.

### Dans quelles conditions envisager de déclencher la procédure d'exercice des droits ?

Le DPO du CHU de La Réunion reçoit une demande d'exercice de droits relative à l'EDS (accès, rectification, effacement, limitation du traitement, opposition).

L'EDS sait gérer l'opposition, c'est-à-dire tient une liste de patients s'étant opposés à l'intégration de leurs données, et est aussi en mesure d'exporter les données relatives à une personne (droit d'accès), mais ne peut pas techniquement rectifier (modifier) les données qui y sont inscrites, car celles-ci sont des données issues du SIH qui sont traitées en masse (même code pour tous les patients, même codes pour tous les professionnels) sans possibilité de traitement individualisé (pas d'exception personne par personne). Aussi, en cas de demande de modification de données, il convient de se demander s'il y a lieu de modifier les données à la source (DPI, GAM, etc.) et non celles de l'EDS. Les éventuelles modification à la source seraient automatiquement répercutées dans l'EDS.

L'EDS n'est pas en mesure de gérer techniquement une demande de limitation du traitement.

En cas d'incapacité à répondre favorablement à la demande de limitation du traitement, la personne pourra donc être inscrite comme s'étant opposée, de sorte que ses données ne soient plus intégrées à l'EDS.

### Comment déclencher la procédure d'exercice des droits ?

Le DPO contacte l'équipe opérationnelle de l'EDS à l'adresse <eds@chu-reunion.fr> en indiquant l'identité du patient :
- nom
- prénoms
- sexe
- date de naissance complète
- IPP si vous en avez connaissance

et, s'il y a lieu d'exporter des données, lesquelles (cas du droit d’accès) ou s'il faut inscrire le patient comme s'étant opposé (en cas de demande d'opposition, d'effacement, ou de limitation du traitement ne pouvant être satisfaite).

### Quelles suites sont données ?

L'équipe opérationnelle vérifie :
- si la personne demandeuse est déjà inscrite sur la liste d'opposition ;
- si ce n'est le cas, si des données relatives à cette personne sont inscrites dans l'EDS.

#### Demande d’accès

Si des données relatives à la personne demandeuse sont intégrées à l'EDS, l'équipe opérationnelle exporte les données demandées de la base pivot de l'EDS et les transmet de manière sécurisée au DPO.

Sinon, elle informe le DPO qu'aucune donnée relative à cette personne ne se trouve dans l'EDS.

#### Demande de limitation du traitement ne pouvant être satisfaite, d'opposition ou d'effacement

Si ce n'est déjà fait, l'équipe opérationnelle inscrit la personne sur la liste d'opposition.

Elle transmet un compte-rendu de l'opération au DPO indiquant notamment le délai d'effacement des éventuelles données de l'EDS (typiquement 24h, le temps que la tâche "run_all" s'exécute).

Le DPO communique avec la personne concernée.
