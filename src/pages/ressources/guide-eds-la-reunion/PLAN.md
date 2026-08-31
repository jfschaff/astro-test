# PLAN.md — Plan du Guide EDS La Réunion

Ce fichier décrit la structure du guide et la répartition des points du référentiel CNIL entre ses parties.

Il est la **référence de travail pendant la rédaction**. Le plan n'est pas figé : il peut évoluer, mais toute évolution doit être répercutée ici dans le même commit que la modification du guide.

Les conventions d'écriture (nommage, ton, format des renvois) sont dans `CLAUDE.md`.

---

## Vue d'ensemble

| Partie | Public | Ton | Points couverts |
|---|---|---|---|
| 1 — Notions clés | Tous, internes comme externes | Vulgarisé en restant formel, « vous » | 20 |
| 2 — Guide utilisateurs | Porteurs de projet, équipes de recherche internes et externes | Pratique, « vous » | 5 |
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
| 8.4 (a) | Un portail de transparence existe sur le site du CHU de La Réunion |
| 8.4 (b) | Chaque réutilisation y est publiée |
| 8.5.1 | Les professionnels sont informés individuellement |
| 9.2 | Les droits RGPD : accès, rectification, effacement, limitation, opposition |

### 1.4 Gouvernance des données

| Point | Objet |
|---|---|
| 3.2.1 | Une gouvernance encadre le fonctionnement de l'EDS |
| 3.2.2 | Le Comité Stratégique détermine les orientations stratégiques et scientifiques de l'entrepôt |
| 3.2.3 | Le CSER rend un avis préalable systématique sur chaque projet |
| 5.4 | Toute demande justifie les catégories de données sollicitées |

### 1.5 Les données et comment elles sont protégées

| Point | Objet |
|---|---|
| 5.2.1.1 | Les données identifiantes sont stockées à part |
| SEC-PSE-1.2 | Le pseudonyme unique : ce que c'est, à quoi il sert |
| 6.2 | Les données identifiantes ne sont accessibles que pour les finalités du 5.5 |
| 5.5 | Les quatre seules raisons de recontacter un patient |
| SEC-REI-3 | Une ré-identification reste possible en urgence médicale |
| SEC-EXP-1 | Rien ne sort de l'EDS sans anonymisation |
| 7.2 | Durée de conservation : 20 ans maximum |

---

## Partie 2 — Guide utilisateurs

Ce qu'un porteur de projet peut faire avec les données, ce qu'il doit demander, et à quelles conditions. Couvre aussi bien les équipes internes au CHU de La Réunion que les équipes externes.

### 2.1 Qui peut accéder aux données

| Point | Objet |
|---|---|
| 6.3 | Équipes de recherche habilitées, données strictement nécessaires au projet |
| 6.4 | Personnel interne habilité, hors recherche |

### 2.2 Où l'on travaille

| Point | Objet |
|---|---|
| SEC-ESP-1 | Espaces de travail projet, étanches entre eux et vis-à-vis de l'EDS |

### 2.3 Faire sortir des résultats

| Point | Objet |
|---|---|
| SEC-EXP-1 | Seuls des jeux anonymes peuvent sortir |
| SEC-EXP-2 | Tout export est validé au préalable par un responsable |

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

### 3.4 Ré-identification

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

## Points traités plusieurs fois

Ces points sont abordés dans plusieurs parties. Chaque occurrence est rédigée pour son public : la partie 1 explique le principe, la partie 2 ce que l'utilisateur doit faire, la partie 3 comment on l'administre. Les trois versions doivent rester cohérentes entre elles.

| Point | Notions clés | Utilisateurs | Administration |
|---|---|---|---|
| 6.2 | pourquoi les données identifiantes sont à part | — | comment cloisonner et contrôler |
| 6.4 | — | ce à quoi vous avez droit | comment habiliter |
| 7.2 | combien de temps on garde | — | comment purger |
| 9.2 | quels sont vos droits | — | comment les instruire |
| 5.5 | les quatre raisons de vous recontacter | — | via la sous-partie ré-identification |
| SEC-EXP-1 | rien ne sort sans anonymisation | ce que vous faites avant d'exporter | comment le processus est outillé |
| SEC-REI-3 | on peut vous retrouver en urgence | — | procédure et habilitations |

---

## Sujets ouverts

Reprend les éléments de plan non tranchés. Les sujets techniques et éditoriaux figurent dans `CLAUDE.md`.

- ~~**Libellé du 3.1.2.**~~ **Résolu, par édition directe du guide.** La section 1.2 renvoie à l'annexe *Finalités de l'EDS La Réunion* (reproduction de `finalités.md`, F1 à F9) sans détailler les finalités dans le corps du texte, et son renvoi au référentiel cite désormais le 3.1.2 et le 3.1.3 côte à côte — la recherche (F7) y est donc bien traitée comme un usage à part, sans qu'il ait fallu choisir entre « quatre finalités » et « cinq usages ». Le plan (1.2 et Annexe A) reflète cette résolution.
- **Statut de F5 dans `finalités.md`.** F5 (« concourir à la qualité, à la sécurité des soins et à la gestion des risques ») ne correspond à aucun des quatre items du 3.1.2 du référentiel, ni à une dérogation listée dans `derogations.md`. Fondement à clarifier avant de finaliser l'annexe A.
- **Doublons 5.7 et 8.4.** Chacun de ces numéros porte deux exigences distinctes. Un paragraphe couvrant les deux, ou deux paragraphes avec le même renvoi ?
- **Sous-partie 3.4 « Ré-identification ».** Section autonome du guide d'administration, ou répartition des exigences SEC-REI dans les sections existantes (3.2 pour les habilitations, 3.5 pour les droits) ?
- **Point 7.2.** Rattaché à 3.1 (cycle de vie des données) comme actuellement, ou à une section « conservation » distincte ?
- **Annexes.** Une annexe par partie, ou une annexe unique en fin de guide ? Le tableau ci-dessus suppose la seconde option, sans que ce soit arrêté. L'Annexe A, telle qu'écrite dans le guide, utilise un titre `## Annexe A — <titre>` à plat (pas de section `## Annexes` englobante) : à confirmer comme convention pour les annexes suivantes.

---

## Décomptes

- Partie 1 : 22 points (+1 : ajout du 3.2.2, Comité Stratégique ; +1 : ajout du 3.1.3, recherche)
- Partie 2 : 5 points
- Partie 3 : 27 points
- Total, occurrences uniques : 46 points

Ces chiffres correspondent à l'état de la checklist au moment de l'établissement du plan. La checklist n'étant pas connectée au dépôt, ils ne se mettent pas à jour seuls et doivent être revérifiés à la main si le plan évolue.
