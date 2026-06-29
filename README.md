# ONGarde — Cybersécurité éthique pour ONG

ONGarde est un projet de démo day cybersécurité visant à concevoir une organisation cyber réaliste pour une ONG disposant de moyens limités mais manipulant des données sensibles.

## Objectifs

- Protéger les données sensibles : bénéficiaires, bénévoles, donateurs, documents internes.
- Maintenir la continuité d'activité en cas d'incident.
- Segmenter le réseau et réduire l'exposition.
- Centraliser les identités avec Samba Active Directory.
- Superviser les événements avec Wazuh.
- Préparer une stratégie de sauvegarde et de reprise.

## Répartition de l'équipe

- Jean : pfSense, firewall, routage, redondance, flux réseau.
- Muriel : Wazuh, agents Wazuh, supervision, détection, alertes.
- Valentina : base de données, Nextcloud, services collaboratifs.
- Franck : Samba Active Directory, site web ONGarde, DMZ, Nginx.

## Architecture cible

L'architecture cible repose sur deux sites, Lyon et Marseille, avec VPN inter-site, segmentation réseau, pfSense, Samba AD, Wazuh, Nextcloud, base de données, serveur web en DMZ, sauvegardes 3-2-1 et logique PRA/PCA.

## Limites du lab

L'environnement GNS3 a imposé des contraintes de ressources, de routage et de stabilité réseau. Le projet distingue l'architecture cible, les briques maquettées, les éléments validés et la roadmap d'évolution.

## Contenu du dépôt

- livrables/ : rapports, scripts de présentation, documents PDF.
- presentation/ : support de présentation.
- schema/ : cartographies et schémas réseau.
- screenshots/ : preuves techniques et captures.
- scripts/ : commandes, configurations et notes techniques.
