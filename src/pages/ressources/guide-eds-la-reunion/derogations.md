# Dérogations au référentiel

## DER-3.1.2

Les finalités de l'EDS La Réunion sont celles définies dans le référentiel EDS de la CNIL, auxquelles sont ajoutées les finalités suivantes qui dérogent au référentiel :
- F6 Servir de socle technique sécurisé et conforme à tout projet médical nécessitant l’exploitation de données
- F8 Servir de socle technique sécurisé et conforme à tout projet de recherche nécessitant l’exploitation de données
- F9 Exporter des données pseudonymisées vers d’autres EDS ou d’autres systèmes conformes ou autorisés par la CNIL

### Justification

Les finalités F6 et F8 actent un point qui n'est pas explicitement discuté par le référentiel : d'autres sous-systèmes de l'EDS pourront être développés, par exemple dédiés à des métiers, ou spécialités spécifiques, et pourront puiser des données des bases de l'EDS et les traiter.

L'opportunité de réaliser une demande d'autorisation spécifique à chacun des nouveaux sous-systèmes en question sera étudiée au cas par cas.

à date, un unique tel sous-système est prévu : Arkhn Assistant utilisé exclusivement pour identifier les patients atteints de maladie rénale chronique (MRC).

La finalité F9 permet d'envisager l'export hors de l'EDS La Réunion vers des systèmes assurant un niveau de sécurité et de conformité comparable à l'EDS.

## DER-5.2.1.1

Les données suivantes sont intégrées directement à l'entrepôt, et non dans un espace distinct :
- le sexe des personnes
- les mois et années de naissance (date de naissance sans le jour)
- la région française de naissance (si né en France), ou le pays de naissance
- l'IRIS (Insee) dans lequel se trouve l'adresse de résidence
- les mois et années de décès
- la commune ou l'hôpital de décès

### Justification

Ces dérogations sont pensées pour permettre de réaliser facilemetn des étdes de faisabilité sur ces variables, qui sont intéressantes notamment pour les chercheurs.

Dans tous les cas, l'interface permettant d'accéder facilement à des statistiques de la population de l'EDS (Arkhn Explore) n'affiche pas de résultat si le cardinal de la popuation après filtrage est inférieur à N (à confirmer). Cela limite le risque de réidentification.

#### Sexe

Les chercheurs interrogés ont été unanimes sur le besoin de connaitre le sexe dans une grande majorité des études réalisées. Aussi, nous décidons de ne pas inscrire le sexe seulement dans l'espace chiffré, mais aussi dans la base principale de l'EDS.

Le sexe ne permet pas d'identifier les personnes car il divise en moyenne les populations par 2.

Cela permettra esenteillement de filtrer les patients sur cette variable dans l'interface Arkhn Expore, et cela sans avoir à exporter manuellement un jeu de données dans lequel la variable sexe aura été réintégrée depuis l'espace chiffré.

#### Mois et année de naissance

#### IRIS (Insee) dans lequel se trouve l'adresse de résidence

#### Informations relatives au décès

Le RGPD ne s'applique pas aux personnes décédées, et il n'y a donc pas d'obstacle à inscrire ces informations non-identifiantes dans l'EDS.

## DER-5.5

On autorise la réidentification des personnes pour les raisons listées au point 5.5 du référentiel, mais aussi pour afficher, si nécessaire, l'identité d'un patient à un professionnel de santé qui a déjà le droit d'accéder aux données de ce patient car il fait partie de son équipe de soin.

### Justification

Pour certaines applications proches du soin, l'équipe de soin, à ce titre déjà habilitée à accéder aux données identifiantes du patient, peut être amené à accéder à l'identité du patient via une interface fournie par un sous-système de l'EDS. Cela implique la réidentification du patient.

Les mesures mises en place pour garantir la sécurité sont un acces authentiféi à de tels sous-systèmes, et une gestion des comptes utilisateurs garantissant que seules les personnes de l'équipe de soin peuvent accéder aux informations.

## DER-6.2

L'accès et l'usage des données directement identifiantes sont restreints aux finalités listées au point 5.5, aux seules personnes chargées de la réalisation des opérations nécessaires à l’accomplissement de ces finalités, mais aussi, et en dérogation au référentiel, à l'équipe de soin des patients.

### Justification

Cf. justification de DER-5.5.

## DER-SEC-EXP-1

On autorise l'export de données pseudonymisées de l'EDS vers des systèmes présentant un même niveau de conformité et de sécurité, comme par exemples d'autres EDS autorisés.

