# CLAUDE.md — Rédaction du Guide EDS La Réunion

## Objet de ce chantier

Rédiger le **Guide EDS La Réunion** au format Markdown, dans ce dépôt.

Le guide explique le fonctionnement de l'entrepôt de données de santé du CHU de La Réunion, notamment certaines procédures et règles à suivre, et la manière dont il se conforme au référentiel de la CNIL relatif aux entrepôts de données de santé.

À ce stade, **on se concentre sur le contenu, pas sur la mise en forme**. Pas de travail sur les styles, les composants Astro ou le rendu. Le texte d'abord au format Markdown.

---

## Emplacement et organisation

- Dossier : `guide-eds-la-reunion/`
- **Un seul fichier** pour l'ensemble du guide dans un premier temps. On découpera plus tard si nécessaire.
- Travail sur une **branche dédiée**. Ne pas commiter sur la branche principale. La pull request sera ouverte manuellement par le mainteneur quand le travail sera suffisamment avancé.

---

## Structure du guide

Le guide comporte trois parties :

1. **Notions clés** — lue par tous, ton vulgarisé.
2. **Guide utilisateurs** — porteurs de projet et équipes de recherche.
3. **Guide d'administration** — angle opérationnel.

Le plan détaillé (répartition des points du référentiel entre les parties et sous-parties) est maintenu **séparément**, dans `PLAN.md`. Ne pas dupliquer ce plan ici ni dans le guide lui-même.

Le plan n'est pas figé : il peut évoluer en cours de rédaction. Toute évolution doit être répercutée dans `PLAN.md` dans le même commit.

---

## Public visé

Ce guide s'adresse aux **usagers de l'EDS** : professionnels de santé, chercheurs, porteurs de projet, personnels habilités du CHU de La Réunion et de ses partenaires. **Il ne s'adresse pas aux patients** dont les données figurent dans l'entrepôt — un contenu dédié aux patients existera séparément et n'est pas traité dans ce document.

Le « vous » employé dans les parties 1 et 2 (voir *Ton et personne grammaticale*) désigne donc cet usager professionnel, jamais un patient. Attention en particulier aux formulations comme « vos données » ou « vos soins », qui laisseraient entendre que le lecteur est le patient concerné : les patients doivent toujours être désignés à la troisième personne (« les patients », « les données des patients », « la prise en charge des patients »).

Les parties **Notions clés** et **Guide utilisateurs** s'adressent aussi aux **équipes de recherche externes** au CHU de La Réunion, pas seulement aux personnels internes. Elles ont vocation à être publiées.

Il faut donc éviter tout implicite qui supposerait que le lecteur travaille au CHU : ne pas renvoyer à l'intranet, à des outils internes ou à des interlocuteurs désignés par leur seul prénom ou trigramme.

---

## Nommage

| Ce qu'on désigne | Ce qu'on écrit |
|---|---|
| L'entrepôt | **EDS La Réunion** |
| L'entrepôt, en reprise proche | **l'EDS** |
| Le responsable de traitement | **le CHU de La Réunion** |
| La seconde instance de gouvernance (3.2.3) | **le Comité Scientifique, Ethique et Recherche**, ou **CSER** |

Règles :

- On écrit **EDS La Réunion** par défaut. Si le nom complet devient lourd — plusieurs occurrences dans une même phrase ou dans deux phrases voisines — on écrit simplement **l'EDS**.
- On écrit **le CHU de La Réunion** pour le responsable de traitement. Éviter « l'établissement », « le RT », « le responsable de traitement » comme désignation courante dans le corps du texte. Le terme juridique « responsable de traitement » reste employable quand on cite ou explique le référentiel.
- **« La Réunion » s'écrit toujours avec deux majuscules**, y compris en milieu de phrase. Jamais « la Réunion », jamais « la réunion ».
- **« Comité Scientifique, Ethique et Recherche »** s'écrit toujours ainsi, **sans accent sur le E majuscule d'Ethique**. En reprise proche, on écrit simplement **CSER**.

---

## Ton et personne grammaticale

**Parties 1 (Notions clés) et 2 (Guide utilisateurs)** : le lecteur est le plus souvent interpellé à la deuxième personne du pluriel — « vous » — notamment quand on lui explique ce qu'il peut ou doit faire.

> Vous avez interdiction d'exporter des données personnelles de l'EDS.

Ce n'est pas une règle stricte pour autant. Un passage descriptif ou général (une introduction, une définition) peut rester à la troisième personne neutre si le « vous » y sonnerait artificiel ou mettrait indûment l'accent sur un point qu'on préfère ne pas souligner à ce stade. Éviter en revanche de mélanger les deux tons à l'intérieur d'un même paragraphe.

**Partie 3 (Guide d'administration)** : on désigne les personnes à la troisième personne, par leur rôle — « l'administrateur », « le responsable de l'EDS », « le DPO », « l'équipe habilitée ».

> L'administrateur retire les permissions d'accès dès le retrait de l'habilitation.

Autres consignes de style :

- La partie 1 est **vulgarisée**. On peut rester approximatif sur les formulations juridiques, à condition de ne pas être faux. Le détail exact va en annexe.
- Phrases courtes, vocabulaire courant. Expliquer un terme technique la première fois qu'il apparaît (pseudonymisation, anonymisation, base légale).
- Pas de jargon administratif inutile. Préférer « Les données sont conservées 20 ans au maximum » à « la durée de conservation est fixée à 20 ans à compter de la collecte ».

---

## Renvois au référentiel CNIL

Après chaque paragraphe ou section du guide traitant d'un ou plusieurs point(s) du référentiel, on ajoute une ligne en italique :

```markdown
*Liens avec le référentiel EDS :* [3.1.1](LIEN), [3.1.2](LIEN)
```

### Construction des liens

Le référentiel est transcrit dans une page de ce même dépôt :

```
/referentiel-entrepot-de-donnees-de-sante-de-la-cnil/
```

Chaque point du référentiel y porte une ancre dont l'identifiant est **exactement le numéro du point**. Le libellé du lien est ce même numéro.

| Point | Ancre |
|---|---|
| 3.1.2 | `#3.1.2` |
| 5.2.1.1 | `#5.2.1.1` |
| 8.4 | `#8.4` |
| SEC-REI-1 | `#SEC-REI-1` |
| SEC-EXP-1 | `#SEC-EXP-1` |

La règle est donc mécanique : le numéro du point sert à la fois de texte du lien et d'ancre.

### Chemin de base

Le guide et le référentiel seront à terme déplacés vers le site internet de l'EDS. Pour la rédaction dans ce dépôt temporaire, les liens peuvent coder en dur le préfixe `/astro-test`. Il sera ensuite supprimé une fois ces pages intégrées dans le site cible.

### Vérification

Si on travaille dans un environnement où le site peut être construit (build), avant tout commit touchant aux renvois, lancer le build et vérifier qu'aucun lien du guide ne pointe vers une ancre inexistante dans la page du référentiel. Si ce n'est pas le cas, donner comme instruction au mainteneur de tester lui-même une fois les modifications réalisées.

---

## Source des exigences

La checklist de conformité vit dans une base Airtable. **Elle n'est pas connectée à ce dépôt et ne doit pas l'être.** La cohérence entre la checklist et le guide est maintenue à la main par le mainteneur.

Ne pas tenter de lire, écrire ou synchroniser Airtable depuis ce dépôt.

Pour le contenu des exigences, la source de vérité est la **page de transcription du référentiel présente dans ce dépôt**, pas une reformulation issue d'ailleurs. En cas d'écart entre un libellé résumé et le texte du référentiel, c'est le référentiel qui prime — et l'écart doit être signalé au mainteneur plutôt que corrigé silencieusement.

---

## Annexes

Les développements détaillés — listes exhaustives de finalités, de catégories de données, formulations juridiques précises — vont en **annexe**, pas dans le corps du texte des parties 1 et 2. Le corps du texte donne le sens ; l'annexe donne la lettre.

L'organisation des annexes n'est pas tranchée (voir ci-dessous).

---

## Sujets non tranchés

À ne pas décider seul. Signaler au mainteneur quand la rédaction bute dessus.

**Contenu et exactitude**

- **3.1.2 / 3.1.3.** Le libellé résumé de la checklist fusionne les deux points. Dans le référentiel, le 3.1.2 ne liste que quatre finalités (indicateurs et pilotage, qualité de l'information médicale et codage PMSI, aide au diagnostic et à la prise en charge, études de faisabilité). La recherche relève du **3.1.3**, point distinct, assorti de formalités propres. Le guide doit-il présenter quatre finalités plus la recherche à part, ou cinq usages ? Le plan mentionne encore « cinq usages » : à corriger une fois la question tranchée.
- **Doublons 5.7 et 8.4.** Chacun de ces numéros correspond à deux exigences distinctes dans la checklist. Un paragraphe couvrant les deux, ou deux paragraphes portant le même renvoi ?

**Plan**

- **Sous-partie « Ré-identification ».** Existe-t-elle comme section autonome du guide d'administration, ou les exigences SEC-REI se répartissent-elles ailleurs ?
- **Point 7.2.** Rattaché à la sous-partie Données du guide d'administration, ou à une section « conservation » distincte ?
- **Annexes.** Une annexe par partie, ou une annexe unique en fin de guide ?

**Technique et publication**

- **Publication différenciée.** Les parties 1 et 2 seront publiées. La partie 3 sera peut-être privée, tout en restant versionnée ici. Cela entre en tension avec le choix d'un fichier unique : il faudra soit scinder le fichier au moment de publier, soit exclure la partie 3 du build. À arbitrer avant que le guide ne devienne trop volumineux.

---

## Ce qu'il ne faut pas faire

- Ne pas travailler la mise en forme, les styles ou les composants tant que le contenu n'est pas stabilisé.
- Ne pas commiter sur la branche principale ni ouvrir de pull request.
- Ne pas connecter Airtable.
- Ne pas inventer de convention de nommage de fichiers non validée.
- Ne pas trancher seul un sujet listé ci-dessus.
