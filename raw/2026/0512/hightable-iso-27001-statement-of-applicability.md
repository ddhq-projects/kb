# ISO 27001 Statement of Applicability — Detailed Guide

**Source:** https://hightable.io/statement-of-applicability-iso-27001/
**Fetched:** 2026-05-12

## What is the ISO 27001 Statement of Applicability?

A Statement of Applicability (SoA) is a checklist for your company's information security. When you want to get ISO 27001 certified, the SoA is where you list all the security controls you've chosen to use. You also explain why you picked those and why you left others out.

The SoA is one of the **first documents an auditor will normally ask for**.

### Compliance Aspect Overview

| Compliance Aspect | Strategic Description |
|---|---|
| Why You Need It | Vital for the ISO 27001 certification process; documents security decisions, demonstrates technical compliance to auditors |
| When You Need It | Created immediately following the risk assessment phase |
| Who Needs It | Any organisation seeking ISO 27001 certification — from SMEs to global corporations |
| Where You Need It | Maintained as a 'living' internal document within the ISMS |
| How to Write It | Inventory all 93 controls from ISO 27001:2022, determine applicability, provide technical rationales |

## ISO 27001:2013 vs 2022 SoA Comparison

| Feature | ISO 27001:2013 (Old) | ISO 27001:2022 (New) |
|---|---|---|
| Total Controls | 114 Controls | 93 Controls |
| Structure | 14 Control Domains (A.5 to A.18) | 4 Themes (Organisational, People, Physical, Tech) |
| New Controls | None | 11 New Controls (Threat Intel, Cloud Services, etc.) |
| Control Attributes | Static descriptions | Includes #Tags (e.g., #Prevention, #Detection, #Cyber) |
| Transition Focus | Legacy focus on physical perimeter | Modern focus on Cloud, Privacy, and Data Deletion |

## The 11 New ISO 27001:2022 Controls

| ID | Control Name | Requirement | Required Audit Evidence |
|---|---|---|---|
| 5.7 | Threat Intelligence | Collect and analyse threat data | Vetted source list, sample reports, firewall/EDR action logs |
| 5.23 | Cloud Services Security | Protect data throughout cloud lifecycle | Cloud Security Policy, Shared Responsibility Matrix, provider ISO 27001/SOC2 cert reviews |
| 5.30 | ICT Readiness | Ensure ICT systems recoverable within RTO/RPO | BCP/DR plans with specific targets and documented failover/recovery test results |
| 7.4 | Physical Monitoring | Detect unauthorised physical access | CCTV maintenance logs, server room access logs |
| 8.9 | Configuration Management | Manage security configurations | Hardened baselines (CIS), change management logs, drift detection reports |
| 8.10 | Information Deletion | Delete data when no longer required | Data Retention Schedule, deletion logs, physical destruction certs |
| 8.11 | Data Masking | Protect sensitive data via pseudonymisation | Data Masking Policy, technical implementation records |
| 8.12 | Data Leakage Prevention | Detect and prevent unauthorised disclosure | DLP tool configuration, logs of blocked transfers |
| 8.16 | Monitoring Activities | Monitor for anomalous behaviour | SIEM/Log alerts, activity baselines vs. anomalies |
| 8.23 | Web Filtering | Manage access to external websites | Web filtering policy, blocked category logs |
| 8.28 | Secure Coding | Apply secure coding principles | Secure Coding Standards (OWASP), peer review logs, SAST/DAST reports |

## ISO 27001 Annex A Control Owner Matrix

| Department / Role | Primary Annex A Themes | Typical Evidence Required |
|---|---|---|
| Human Resources (HR) | Theme 6 (People Controls) | Screening records, signed NDAs, training logs, termination checklists |
| IT / DevOps | Theme 8 (Technological Controls) | System logs, encryption configs, backup reports, SAST results |
| Facilities / Office Mgmt | Theme 7 (Physical Controls) | CCTV logs, maintenance records, physical access visitor logs |
| Legal & Compliance | Theme 5 (Organisational Controls) | Legal registers, supplier contracts, DPIAs, IP registers |
| C-Suite / Leadership | Theme 5 (Governance) | Management Review Meeting (MRM) minutes, signed SoA approval |

## Compliance Roadmap: Where the SoA Fits

1. **Gap Analysis & Scoping** — Identify what you have and define ISMS boundaries
2. **Risk Assessment** — Identify specific threats to your assets (can't write SoA without this)
3. **Statement of Applicability (SoA)** — The "Golden Thread." Link risks to 93 Annex A controls
4. **Internal Audit** — Test controls against SoA promises
5. **External Certification** — Stage 1 & Stage 2 audits where Lead Auditor uses SoA as primary audit map
