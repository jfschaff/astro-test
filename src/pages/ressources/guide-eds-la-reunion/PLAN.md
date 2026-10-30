# PLAN.md — Plan du Guide EDS La Réunion

Ce fichier décrit la structure du guide et la répartition des points du référentiel CNIL entre ses parties.

Il est la **référence de travail pendant la rédaction**. Le plan n'est pas figé : il peut évoluer, mais toute évolution doit être répercutée ici dans le même commit que la modification du guide.

Les conventions d'écriture (nommage, ton, format des renvois) sont dans `CLAUDE.md`.

---

## Vue d'ensemble

| Partie | Public | Ton | Points couverts |
|---|---|---|---|
| 1 — Notions clés | Tous, internes comme externes | Vulgarisé en restant formel, « vous » | 25 |
| 2 — Guide d'utilisation | Porteurs de projet, équipes de recherche internes et externes | Pratique, « vous » | 13 |
| 3 — Guide d'administration | Administrateurs et usagers particuliers de l'EDS | Opérationnel, 3ᵉ personne | 27 |

Les parties 1 et 2 sont destinées à la publication. Le statut de la partie 3 n'est pas arrêté. Il sera au moins publié en interne du CHU (c'est à dire presque public) mais pas forcément sur le site web de l'EDS.

Certains points apparaissent dans plusieurs parties, avec un angle différent à chaque fois. C'est voulu — voir *Points traités plusieurs fois*.

---

## Partie 1 — Notions clés

Comprendre ce qu'est l'EDS La Réunion, ce qu'il permet, ce qu'il interdit, et comment les données y sont protégées. Aucun prérequis. Le détail juridique va en annexe si nécessaire.

### 1.1 L'EDS La Réunion : un cadre réglementaire précis

| Point | Objet |
|---|---|
| 1.3 | L'EDS entre dans le champ du référentiel CNIL |
| 4 | Base légale : la mission d'intérêt public du CHU de La Réunion |

### 1.2 Finalités et usages autorisés de l'EDS La Réunion

| Point | Objet |
|---|---|
| 3.1.1 | Finalité : permettre la réutilisation des données |
| 3.1.2 | Les usages autorisés — renvoie vers l'annexe *Finalités de l'EDS La Réunion*, qui reproduit intégralement `finalités.md`, sans reformulation |
| 3.1.3 | La recherche (F7 de l'annexe) traitée comme un usage à part, au même renvoi que le 3.1.2 |

#### Exemples d'usages interdits

| Point | Objet |
|---|---|
| 3.1.4 | Exemples d'usages interdits : promotion de produits de santé, sélection assurantielle |

### 1.3 Droits et informations des personnes

| Point | Objet |
|---|---|
| 8.1 | Les patients sont informés du versement de leurs données |
| 8.2.2.1 | Information individuelle des patients admis après la mise en place de l'entrepôt (message après passage au CHU : email, SMS, MSS Citoyenne) |
| 8.4 | Un portail de transparence publie chaque réutilisation des données à des fins de recherche, d'étude ou d'évaluation |
| 8.5.1 | Les professionnels sont informés individuellement |
| 9.1 | Campagne d'information publique préalable à la mise en place de l'entrepôt, avec délai avant le début du traitement |
| 9.2 | Les droits RGPD : accès, rectification, effacement, limitation, opposition |

### 1.4 Gouvernance des données

| Point | Objet |
|---|---|
| 3.2.1 | Une gouvernance encadre le fonctionnement de l'EDS |
| 3.2.2 | Le Comité Stratégique détermine les orientations stratégiques et scientifiques de l'entrepôt |
| 3.2.3 | Le CSER rend un avis préalable systématique sur chaque projet |
| 5.4 | Toute demande justifie les catégories de données sollicitées |

### 1.5 Sécurisation des données identifiantes, pseudonymisation et réidentification des patients

#### Chiffrement des données identifiantes

| Point | Objet |
|---|---|
| 5.2.1.1 | Les données identifiantes sont stockées à part |
| 5.8 | Elles sont, avec les tables de correspondance et les données génétiques ou de localisation, chiffrées séparément des données pseudonymisées |
| SEC-LOG-4 | Séparation cryptographique des données identifiantes et des tables de correspondance |

#### Pseudonymisation

| Point | Objet |
|---|---|
| `SEC-PSE` | Le pseudonyme unique : ce que c'est, à quoi il sert — renvoi vers la sous-partie du référentiel, pas un point précis |
| SEC-ESP-2 | Un pseudonyme distinct est généré pour chaque espace de travail (chercheurs) par rapport au cœur de l'entrepôt |

#### Réidentification

| Point | Objet |
|---|---|
| 6.2 | Les données identifiantes ne sont accessibles que pour les finalités du 5.5, et, par dérogation (`DER-6.2`), à l'équipe de soin des patients concernés |
| 5.5 | Renvoi vers les quatre raisons de recontacter un patient (détail laissé au référentiel, pas reformulé dans le guide) |

#### Réidentification au bénéfice d'un patient

| Point | Objet |
|---|---|
| 5.5 | Rappel : la réidentification au bénéfice direct du patient fait partie des quatre raisons autorisées |
| SEC-REI-3 | Une réidentification reste possible en urgence médicale |

### 1.6 Export de données hors de l'EDS

| Point | Objet |
|---|---|
| SEC-EXP-1 | Rien ne sort de l'EDS sans anonymisation, sauf dérogation (`DER-SEC-EXP-1`) : les données pseudonymisées peuvent être exportées vers des systèmes présentant un niveau de conformité et de sécurité équivalent (p. ex. d'autres EDS autorisés) |

---

## Partie 2 — Guide d'utilisation

Ce qu'un porteur de projet peut faire avec les données, ce qu'il doit demander, et à quelles conditions. Couvre aussi bien les équipes internes au CHU de La Réunion que les équipes externes.

### 2.1 Les types d'utilisateurs de l'EDS La Réunion

Trois profils (utilisateurs, utilisateurs avancés, administrateurs) et leur correspondance avec les profils Arkhn (Data user / Data manager / Data engineer).

| Point | Objet |
|---|---|
| 6.4 | Personnel interne habilité (utilisateurs avancés), destinataire de données pseudonymisées |
| SEC-HAB-1 | Profils d'habilitation différenciés |
| SEC-HAB-4 | Accès privilégiés (administrateurs) réservés à une équipe restreinte |

### 2.2 L'équipe EDS

Présentation nominative de l'équipe pluriprofessionnelle de l'EDS (DIM, responsable opérationnel, ingénieur, médecin de santé publique) et contacts clés. Pas de point de référentiel associé — contenu organisationnel.

### 2.3 Les deux interfaces principales de l'EDS La Réunion

Présentation technique d'« Arkhn Explore » (données agrégées, pré-screening) et des *Data Clean Rooms* (espaces de travail cloisonnés). Pas de point de référentiel associé — contenu descriptif, pas une exigence de conformité.

### 2.4 Règles d'accès à l'EDS La Réunion

| Point | Objet |
|---|---|
| 6.1 | Attention particulière à la gestion des droits d'accès |
| SEC-HAB-2 | Granularité des accès : accès par défaut limité aux données agrégées (Arkhn Explore) |
| 6.3 | Équipes de recherche externes habilitées, sur projets approuvés par la gouvernance |

Les règles « ne pas partager son accès » et « signaler un accès compromis » n'ont pas de point de référentiel précis associé — engagements de bon usage, pas une exigence formulée telle quelle dans le référentiel.

### 2.5 Règles d'utilisation des DCR

Regroupe ce qui était les anciens 2.1/2.2/2.3 (qui accède, où l'on travaille, ce qu'on en sort), présenté comme le cycle de vie d'un projet dans une DCR.

#### 2.5.1 Création d'une DCR

| Point | Objet |
|---|---|
| SEC-ESP-1 | Espace de travail spécifique à chaque projet de recherche |

#### 2.5.2 Accès à une DCR

| Point | Objet |
|---|---|
| SEC-HAB-3 | Habilitation individuelle validée par une instance de gouvernance |
| SEC-HAB-6 | Retrait immédiat des permissions dès le départ d'un membre de l'équipe |

#### 2.5.3 Fonctionnement des DCR

| Point | Objet |
|---|---|
| SEC-ESP-1 | Espaces de travail étanches avec la base de l'entrepôt et étanches les uns des autres (pas d'accès internet) |
| SEC-RES-1 | Cloisonnement réseau des flux spécifiques à l'entrepôt |

#### 2.5.4 Export et import de données dans une DCR

| Point | Objet |
|---|---|
| 6.3 | Données pseudonymisées mises à disposition des équipes habilitées |
| SEC-EXP-1 | Seuls des jeux de données anonymes peuvent être exportés |
| SEC-EXP-2 | Validation préalable d'un responsable pour tout export |
| SEC-EXP-3 | Surveillance des exports et mise en quarantaine en cas de non-conformité |

### 2.6 Accès pour les utilisateurs avancés

Contenu non rédigé (`@TODO` dans le guide). Points pressentis : 6.4, SEC-HAB-2.

---

## Partie 3 — Guide d'administration

Comment on administre l'EDS au quotidien : qui fait quoi, selon quelle procédure, à quelle fréquence.

### 3.1 Données : contenu de l'EDS et cycle de vie

| Point | Objet |
|---|---|
| 5.1 | Origine admise des données versées |
| 5.3 | Justification scientifique de la collecte initiale |
| 5.7 (a) | Réévaluation périodique de la pertinence par la gouvernance |
| 5.7 (b) | Suppression des données devenues inutiles |
| 7.2 | Purge à 20 ans des données sensibles — rattachement à confirmer |

### 3.2 Habilitations et accès

| Point | Objet |
|---|---|
| 6.2 | Restriction d'accès aux données directement identifiantes |
| 6.4 | Habilitation du personnel interne non chercheur |
| SEC-HAB-1 | Profils d'habilitation différenciés |
| SEC-HAB-2 | Granularité des accès par profil |
| SEC-HAB-3 | Procédure d'habilitation individuelle et validation |
| SEC-HAB-4 | Accès privilégiés réservés à une équipe restreinte |
| SEC-HAB-5 | Revue au moins annuelle et en fin de projet |
| SEC-HAB-6 | Retrait immédiat des permissions |

### 3.3 Espaces de travail et exports

| Point | Objet |
|---|---|
| SEC-ESP-2.1 | Minimisation des jeux importés dans un espace projet |
| SEC-EXP-1 | Processus d'anonymisation documenté et démontrable |
| SEC-EXP-2 | Circuit de validation des exports |

### 3.4 Réidentification

Existence de cette sous-partie à confirmer — voir *Sujets ouverts*.

| Point | Objet |
|---|---|
| SEC-REI-1 | Procédure sécurisée pour l'exercice des droits |
| SEC-REI-2 | Procédure de recontact pour proposer une recherche |
| SEC-REI-3 | Procédure en urgence médicale |
| SEC-REI-4 | Équipe restreinte, habilitée et spécifiquement formée |
| SEC-REI-5 | Maîtrise des risques et vérification de la légitimité de la demande |

### 3.5 Traitement des demandes de droits

| Point | Objet |
|---|---|
| 9.2 | Droits RGPD exerçables |
| 9.4 | Opposition par tout moyen, dès l'information |
| 9.5 | Personne formée et habilitée (DPO), coordonnées publiées |

### 3.6 Hébergement, sous-traitance, transferts

| Point | Objet |
|---|---|
| 11.3 | Sous-traitants relevant de l'UE ou d'un pays adéquat |
| 12.2 | Aucun transfert hors UE |

### 3.7 Maintien de la conformité

| Point | Objet |
|---|---|
| 13.4 | Réexamen et mise à jour régulière de l'AIPD |

---

## Annexes

Organisation non arrêtée — voir *Sujets ouverts*.

Contenu pressenti : les listes exhaustives et les formulations juridiques précises que le corps du texte résume.

| Annexe | Contenu | Points sources |
|---|---|---|
| A | *Finalités de l'EDS La Réunion* — reproduction intégrale de `finalités.md` (F1 à F9), sans reformulation | 3.1.2, 3.1.3, dérogations F6/F8/F9 (`derogations.md`) — statut de F5 à confirmer, voir *Sujets ouverts* |
| B | Les catégories de données pouvant figurer dans l'EDS | 5.2.1.1, 5.2.1.2, 5.2.2 |

---

## Procédures (PROC-*)

Fiches opérationnelles détaillées, à plat après l'Annexe A dans le guide (pas de numérotation `### 3.x` — même statut que les annexes : contenu de référence, pas de vulgarisation). Ne sont pas comptées dans les décomptes ci-dessous, par cohérence avec le traitement des annexes.

| Procédure | Points |
|---|---|
| PROC-REID-URG — Procédure de réidentification en cas d'urgence médicale | 5.5, SEC-REI-3, SEC-REI-4, SEC-REI-5 |
| PROC-DROITS — Procédure d'exercice des droits | 9.2, 9.4, 9.5, 9.7, SEC-REI-1 |

Recoupent largement les points déjà pressentis pour 3.4 (SEC-REI-1 à 5) et 3.5 (9.2, 9.4, 9.5) — voir *Sujets ouverts*. Seul point réellement nouveau : 9.7 (pérennité du droit d'opposition via les mécanismes d'alimentation).

---

## Points traités plusieurs fois

Ces points sont abordés dans plusieurs parties. Chaque occurrence est rédigée pour son public : la partie 1 explique le principe, la partie 2 ce que l'utilisateur doit faire, la partie 3 comment on l'administre. Les trois versions doivent rester cohérentes entre elles.

| Point | Notions clés | Utilisateurs | Administration |
|---|---|---|---|
| 6.2 | pourquoi les données identifiantes sont à part | — | comment cloisonner et contrôler |
| 6.4 | — | ce à quoi vous avez droit | comment habiliter |
| 9.2 | quels sont vos droits | — | comment les instruire |
| 5.5 | les quatre raisons de vous recontacter | — | via la sous-partie réidentification |
| SEC-EXP-1 | rien ne sort sans anonymisation | ce que vous faites avant d'exporter | comment le processus est outillé |
| SEC-REI-3 | on peut vous retrouver en urgence | — | procédure et habilitations |
| SEC-HAB-1 | — | vos différents profils d'accès (types d'utilisateurs) | comment les définir |
| SEC-HAB-2 | — | ce que votre profil vous permet de voir (accès par défaut) | comment calibrer la granularité |
| SEC-HAB-3 | — | comment votre accès à une DCR est validé | comment habiliter individuellement |
| SEC-HAB-4 | — | accès administrateurs, équipe restreinte | comment restreindre les accès privilégiés |
| SEC-HAB-6 | — | révocation en cas de départ de l'équipe projet | comment retirer les permissions |

---

## Sujets ouverts

Reprend les éléments de plan non tranchés. Les sujets techniques et éditoriaux figurent dans `CLAUDE.md`.

- ~~**Libellé du 3.1.2.**~~ **Résolu, par édition directe du guide.** La section 1.2 renvoie à l'annexe *Finalités de l'EDS La Réunion* (reproduction de `finalités.md`, F1 à F9) sans détailler les finalités dans le corps du texte, et son renvoi au référentiel cite désormais le 3.1.2 et le 3.1.3 côte à côte — la recherche (F7) y est donc bien traitée comme un usage à part, sans qu'il ait fallu choisir entre « quatre finalités » et « cinq usages ». Le plan (1.2 et Annexe A) reflète cette résolution.
- **Statut de F5 dans `finalités.md`.** F5 (« concourir à la qualité, à la sécurité des soins et à la gestion des risques ») ne correspond à aucun des quatre items du 3.1.2 du référentiel, ni à une dérogation listée dans `derogations.md`. Fondement à clarifier avant de finaliser l'annexe A.
- ~~**Doublon 8.4.**~~ **Résolu.** Un seul paragraphe de la section 1.3 couvre à la fois l'existence du portail de transparence et la publication de chaque réutilisation, avec un seul renvoi [8.4].
- **Doublon 5.7.** Ce numéro porte deux exigences distinctes (réévaluation périodique de la pertinence, suppression des données devenues inutiles). Un paragraphe couvrant les deux, ou deux paragraphes avec le même renvoi ?
- **Sous-partie 3.4 « Réidentification ».** Section autonome du guide d'administration, ou répartition des exigences SEC-REI dans les sections existantes (3.2 pour les habilitations, 3.5 pour les droits) ? Élément nouveau : SEC-REI-1, 3, 4, 5 sont désormais couverts par les procédures `PROC-REID-URG` et `PROC-DROITS` (voir *Procédures*), écrites à plat plutôt que dans une sous-partie 3.4 — ce qui penche pour la répartir/supprimer plutôt que la maintenir. Seul SEC-REI-2 (recontact pour proposer une recherche) n'a encore aucune procédure associée.
- **Point 7.2.** Retiré de la partie 1 (1.5/1.6/1.7 restructurées ne le couvrent plus) ; il ne reste traité qu'en partie 3, où le rattachement n'est pas tranché : à 3.1 (cycle de vie des données) comme actuellement, ou à une section « conservation » distincte ?
- **Annexes.** Une annexe par partie, ou une annexe unique en fin de guide ? Le tableau ci-dessus suppose la seconde option, sans que ce soit arrêté. L'Annexe A, telle qu'écrite dans le guide, utilise un titre `## Annexe A — <titre>` à plat (pas de section `## Annexes` englobante) : à confirmer comme convention pour les annexes suivantes.

---

## Décomptes

- Partie 1 : 25 points (+1 : ajout du 3.2.2, Comité Stratégique ; +1 : ajout du 3.1.3, recherche ; -1 : fusion de 8.4 (a)/(b) en un seul point ; +2 : ajout du 8.2.2.1 et du 9.1, information individuelle et campagne publique préalable ; -1 : retrait du 7.2, restructuration de 1.5 en 1.5/1.6 ; +4 : détail de 1.5 en quatre sous-parties, ajout du 5.8, SEC-LOG-4, SEC-LOG-5, SEC-LOG-6 ; +1 : ajout du SEC-ESP-2, pseudonyme par espace de travail ; -2 : retrait de SEC-LOG-5 et SEC-LOG-6, relatifs aux habilitations plutôt qu'au chiffrement)
- Partie 2 : 13 points (+6 : refonte complète en 2.1-2.6 — équipe EDS, types d'utilisateurs, interfaces, règles d'accès, règles DCR, utilisateurs avancés ; ajout du 6.1, SEC-HAB-1, SEC-HAB-2, SEC-HAB-3, SEC-HAB-4, SEC-HAB-6, ces cinq derniers déjà comptés en partie 3 — voir *Points traités plusieurs fois* ; +2 : ajout du 2.5.3 « Fonctionnement des DCR », SEC-ESP-1 (déjà compté en 2.5.1) et SEC-RES-1 (nouveau) ; +1 : ajout du SEC-EXP-3 en 2.5.4)
- Partie 3 : 27 points
- Total, occurrences uniques : 52 points (+1 : ajout du 6.1, seul point réellement nouveau lors de la refonte de la partie 2 — les autres ajouts de cette refonte sont des répétitions de points déjà comptés en partie 3 ; +2 : SEC-RES-1 et SEC-EXP-3, nouveaux dans le guide, ajoutés en 2.5.3 et 2.5.4)

Ces chiffres correspondent à l'état de la checklist au moment de l'établissement du plan. La checklist n'étant pas connectée au dépôt, ils ne se mettent pas à jour seuls et doivent être revérifiés à la main si le plan évolue.
