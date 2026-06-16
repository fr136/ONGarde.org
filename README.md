# ONGarde.org
Protecting those who protect other

# ONGarde

## Cybersecurity Infrastructure for Non-Governmental Organizations

ONGarde is a fictional non-profit organization created as part of the Jedha Cyber Full Stack final project.

Our mission is to help humanitarian organizations improve their cybersecurity posture through secure, open-source and cost-effective technologies.

The project focuses on designing, deploying, securing, documenting and presenting a realistic IT infrastructure adapted to the needs of NGOs.

---

## Project Objectives

* Build a secure and scalable infrastructure
* Centralize identity and access management
* Provide secure file sharing and collaboration
* Monitor security events and system activity
* Ensure backup and recovery capabilities
* Implement defense-in-depth security controls
* Demonstrate cybersecurity best practices using open-source technologies

---

## Infrastructure Overview

### Core Components

| Component                    | Technology             |
| ---------------------------- | ---------------------- |
| Firewall                     | pfSense                |
| Identity Management          | Samba Active Directory |
| Web Server                   | Nginx                  |
| Database                     | PostgreSQL             |
| File Sharing & Collaboration | Nextcloud              |
| Security Monitoring          | Wazuh                  |
| VPN                          | WireGuard              |
| Backup Solution              | Restic                 |
| Operating System             | Ubuntu Server / Debian |

---

## Network Architecture

### Headquarters (Lyon)

* Nginx Reverse Proxy
* PostgreSQL Database
* Nextcloud Collaboration Platform
* Samba Active Directory
* Wazuh SIEM

### Branch Office (Marseille)

* Nextcloud Replica
* Samba Domain Services
* Wazuh Agent
* WireGuard VPN Connection

---

## Security Controls

* Centralized authentication
* Role-based access control (RBAC)
* Firewall filtering
* VPN encrypted communications
* TLS encryption
* Security monitoring with Wazuh
* Log collection and auditing
* Daily backups
* Fail2ban protection
* Principle of least privilege

---

## Compliance Considerations

The project follows security principles inspired by:

* NIST Cybersecurity Framework
* CIS Controls
* GDPR requirements
* NGO cybersecurity best practices

---

## Project Deliverables

* Technical Specification Document
* Network Architecture Diagram
* Infrastructure Deployment
* Risk Assessment
* Technology Watch Report
* Penetration Test Report
* Final Presentation

---

## Team

Equal Project Leads

* Franck Rouane
* Valentina Masiello
* Jean Dovy
* Muriel Has

---

## Repository Structure

```text
Architecture/
Documentation/
Infrastructure/
Pentest/
Presentation/
Screenshots/
Website/
```

---

## Project Timeline

| Phase     | Description                  |
| --------- | ---------------------------- |
| Days 1-5  | Infrastructure Deployment    |
| Days 6-8  | Security Assessment          |
| Days 9-10 | Documentation & Presentation |

---

## Project Statement

Protecting those who protect others.

ONGarde demonstrates how a modern NGO can build a secure, resilient and cost-effective infrastructure using open-source technologies while maintaining strong cybersecurity practices.

