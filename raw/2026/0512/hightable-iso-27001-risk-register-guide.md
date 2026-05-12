# ISO 27001 Risk Register — Implementation Guide

**Source:** https://hightable.io/risk-register/
**Fetched:** 2026-05-12

## What is an ISO 27001 Risk Register?

A Risk Register is a living document — a spreadsheet — that helps track and manage risks to your information. You list the risks, figure out how likely they are to happen, what their impact would be, and what you're doing to fix them.

## Risk Register Implementation Overview

| Dimension | Requirement & Best Practice |
|---|---|
| Why | Foundation of ISO 27001 certification. Proves to auditors you have identified potential threats and established a treatment plan |
| When | Commence at the start of the ISO 27001 journey. Update regularly (at least every six months) or whenever significant business changes occur |
| Who | Collaborative effort. While one person "owns" the register, IT, Sales, and Operations contribute specific domain risks |
| Where | Stored in a safe, central location — secured shared drive or dedicated ISMS platform |
| How | Four-step process: 1. Identification, 2. Analysis (Likelihood vs Impact), 3. Treatment (Mitigation strategy), 4. Documentation |

## Step-by-Step Implementation

### 1. Provision the Spreadsheet Architecture
Create two distinct tabs: "Document Control" for governance and "Risk Register" for active threat logging.

### 2. Formalise Document Markup and Version Control
Add classification "Internal" in header/footer. On Document Control tab: Author, Date, Reason for Change, Version Number.

### 3. Establish Reference Identifiers
Add "Reference" field for unique internal IDs and "External Reference" field to map risks to sources (Helpdesk tickets, audit numbers, Annex A controls, GDPR clauses).

### 4. Enumerate Assets and Technical Risk Descriptions
"Asset" field for the specific data set, system, or physical resource. "Risk Description" field with digestible summary of threat scenario.

### 5. Map Threats, Vulnerabilities, and Business Outcomes
Three fields: "Threat" (potential cause of harm), "Vulnerability" (weakness or lack of control), "Outcome" (realized impact — financial penalties, loss of revenue, reputational damage).

### 6. Quantify CIA Impact and Existing Control Efficacy
"CIA" field (Confidentiality, Integrity, Availability). "Current Control" field. "Impact" and "Likelihood" fields using 1, 3, 9 scoring.

### 7. Automate Risk Scoring and Treatment Strategy
"Risk Score" formula = Impact × Likelihood. "Treatment" field: Accept, Transfer, or Reduce. "Treatment Plan" field for specific remediation actions.

### 8. Assign Ownership and Measure Residual Risk
"Treatment Owner," "Treatment Date," and "Residual Risk" fields. Assigning specific individuals ensures accountability.

## Sector-Specific Threat Examples

| Sector | Example Threat | Treatment |
|---|---|---|
| Small Businesses | Stolen laptop → Exposed PII | Enforce full-disk encryption |
| Tech Startups | Code leak on public GitHub → IP theft | Mandatory peer code reviews |
| AI Companies | Biased training data → Reputational/Legal damage | Regular bias audits |
