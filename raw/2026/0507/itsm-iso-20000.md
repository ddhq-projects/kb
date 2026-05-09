---
source: https://www.iso.org/standard/70636.html, https://www.schellman.com/blog/iso-certifications/iso-20000-1-an-introduction, https://iso-docs.com/blogs/iso-20000-standard/clause-8-operation-of-the-service-management-system, https://www.novelvista.com/blogs/quality-management/iso-iec-20000-1-clauses
title: "ISO/IEC 20000 ITSM Standard — Detailed Overview"
date: 2026-05-07
---

# ISO/IEC 20000 — Detailed Overview

ISO/IEC 20000 is the international standard for IT service management (ITSM), specifying requirements for establishing, implementing, maintaining, and continually improving a service management system (SMS).

**Current version:** ISO/IEC 20000-1:2018, with Amendment 1 in 2024.

## Structure Overview

The 2018 edition follows the High-Level Structure (Annex SL) common to all ISO management system standards, making it compatible with ISO 9001 (quality), ISO 27001 (information security), ISO 22301 (business continuity), etc.

10 clauses total. Clauses 1-3 are informative (scope, normative references, terms). Clauses 4-10 are auditable requirements.

---

## Clause 4: Context of the Organization

Understand the organization's context before establishing the SMS.

**Requirements:**
- Understand external and internal issues relevant to the SMS purpose
- Understand the needs and expectations of interested parties (customers, users, suppliers, shareholders, regulators)
- Determine the scope of the SMS (which services, which locations, which processes)
- Establish the SMS and its processes according to the scope

**Key point:** The scope must consider the services provided and the locations/service delivery points included.

## Clause 5: Leadership

Top management must demonstrate leadership and commitment to the SMS.

**Requirements:**
- Demonstrate leadership and commitment (accountability, policy, objectives, resource provision)
- Establish an SMS policy that:
  - Is appropriate to the purpose of the SMS
  - Includes a commitment to satisfy applicable requirements
  - Includes a commitment to continual improvement
  - Provides a framework for setting and reviewing service management objectives
  - Is communicated, understood, and applied within the organization
  - Is available to interested parties as relevant
- Assign organizational roles, responsibilities, and authorities

## Clause 6: Planning

**Requirements:**
- Determine risks and opportunities that need to be addressed to ensure the SMS achieves intended outcomes
- Plan actions to address these risks and opportunities
- Integrate and implement actions into SMS processes
- Evaluate effectiveness of these actions
- Establish service management objectives at relevant functions and levels
- Plan how to achieve objectives (what will be done, resources, responsibilities, timelines, evaluation)
- Update objectives when needed

## Clause 7: Support

**Requirements:**
- Determine and provide resources needed for the SMS
- Determine the necessary competence of persons doing work under its control
- Ensure persons are competent through education, training, or experience
- Make persons aware of the SMS policy, objectives, their contribution, implications of nonconformity
- Establish internal and external communications relevant to the SMS
- Create, update, and control documented information (procedures, records, policies)
- Ensure documented information is available, protected, and retained

## Clause 8: Operation — Core ITSM Processes

This is the operational heart of the standard. Contains requirements for specific service management processes.

### 8.1 Operational Planning and Control

- Plan, implement, and control processes needed to meet SMS requirements
- Establish performance criteria based on requirements
- Implement process controls according to performance criteria
- Maintain documented information as evidence
- Ensure outsourced processes are controlled (organization retains accountability)

### 8.2 Service Portfolio Management

- Define and maintain a service portfolio including:
  - Services in operation
  - Services being transitioned
  - Services being developed/considered
- Ensure each service has defined:
  - Service requirements (business, operational)
  - Service acceptance criteria
  - Critical success factors and KPIs

### 8.3 Service Level Management

- Establish SLAs for all services in scope
- Define, agree, document, and manage SLAs with customers
- Define, agree, and manage OLAs (Operational Level Agreements) with internal groups
- Define, agree, and manage underpinning contracts with suppliers
- Monitor, review, and report on service performance against SLAs
- Conduct regular service reviews with customers
- Manage complaints and disputes about service levels

### 8.4 Relationship Management

- Establish and maintain relationships with customers and stakeholders
- Identify customer requirements and expectations
- Regularly review customer satisfaction
- Manage escalation procedures

### 8.5 Supply Chain Management

- Establish agreements with suppliers that support the achievement of SLAs
- Monitor and review supplier performance
- Manage changes to supplier agreements
- Ensure supplier performance is reported and reviewed

### 8.6 Service Demand Management

- Monitor and forecast service demand
- Establish patterns of business activity (PBA)
- Align capacity with forecasted demand
- Manage demand exceptions

### 8.7 Service Design and Transition

#### New Service or Significant Change
- Design services according to customer requirements
- Identify and assess risks for new/changed services
- Build, test, and deploy services in a controlled manner
- Establish service acceptance criteria
- Obtain customer acceptance before going live
- Manage early life support for new/changed services

#### Change Management
- Document all proposed changes including:
  - Change dates and schedules
  - Identified risk levels
  - Rollback/failback plans
- Obtain approval from all relevant parties before implementation
- Criteria for determining major impact changes:
  - Risk to service availability
  - Risk to data integrity
  - Impact on multiple services or customers
  - Regulatory or contractual implications
- Emergency changes: documented and reviewed post-implementation

#### Release and Deployment Management
- Plan releases (what, when, how)
- Test releases before deployment
- Obtain approval for deployment
- Record and track all releases
- Verify successful deployment
- Manage rollback if needed

### 8.8 Service Desk and Incident Management

#### Service Desk
- Be the single point of contact between the service provider and users
- Log all incidents and service requests
- Record all relevant information about incidents
- Escalate incidents according to agreed procedures
- Keep users informed about progress and resolution

#### Incident Management
- **Purpose:** restore normal service operation as quickly as possible, minimizing adverse impact
- Key requirements:
  - Establish clear incident categorization scheme (impact, urgency, priority)
  - Log and track all incidents
  - Prioritize based on impact and urgency
  - Escalate according to defined procedures
  - Conduct root cause analysis for significant incidents
  - Implement standardized resolution procedures
  - Integrate automation where applicable
  - Define incident management roles and responsibilities
  - Report on incident performance (resolution time, volume trends)

### 8.9 Service Request Management

- Handle user-initiated requests (information, advice, standard change, access)
- Log all service requests
- Provide a self-service catalog for standard requests
- Fulfill requests according to defined procedures and timelines
- Record and report on service request performance

### 8.10 Service Continuity

- Establish and maintain a service continuity plan
- Conduct business impact analysis (BIA) to determine critical services
- Define recovery time and recovery point objectives (RTO/RPO)
- Test the continuity plan regularly
- Review and update plans after tests or actual incidents

### 8.11 Problem Management

- **Purpose:** identify root causes of incidents and prevent recurrence
- Key requirements:
  - Identify problems from recurring incidents, major incidents, or proactive analysis
  - Conduct thorough root cause analysis (techniques: 5 Whys, Ishikawa, fault tree)
  - Record identified issues as **known errors** with documented workarounds
  - Implement permanent resolutions
  - Document workarounds to minimize disruption while permanent fixes are developed
  - Prevent future disruptions through continual improvement
  - Known error management provides evidence of control during audits
  - Report on problem management performance

### 8.12 Change Management (detailed)

- **All changes** must be documented, including:
  - Description and justification
  - Planned implementation date
  - Risk level assessment
  - Rollback/failback plan
  - Authorization/approval records
- **Authorization:** all relevant parties must approve before implementation (executives, SMEs, stakeholders)
- **Categories of change:**
  - Standard changes (pre-approved, low risk)
  - Normal changes (full assessment and approval)
  - Emergency changes (minimal assessment, implemented immediately, reviewed post-implementation)
- **Policy must include criteria for major impact changes**

### 8.13 Configuration Management

- Identify, control, and record configuration items (CIs) and their relationships
- Maintain a configuration management database (CMDB)
- Verify that configuration records accurately reflect the live environment
- Control changes to configuration items

### 8.14 Service Validation and Testing

- Ensure services meet requirements before release
- Plan and execute tests
- Record test results
- Obtain acceptance from relevant parties

## Clause 9: Performance Evaluation

- **Monitor, measure, analyze, and evaluate** SMS performance and process effectiveness
- Establish metrics aligned with service objectives
- Conduct internal audits at planned intervals to verify SMS conforms to requirements
- Perform management review (at planned intervals) to ensure continuing suitability, adequacy, and effectiveness
- Management review inputs: audit results, customer satisfaction, performance, nonconformities, improvement opportunities

## Clause 10: Improvement

- Determine opportunities for improvement
- Implement improvements
- Handle nonconformities and corrective actions:
  - React to nonconformity and take action to control/correct
  - Evaluate need for action to eliminate causes
  - Implement corrective actions
  - Review effectiveness of corrective actions
- Continually improve the SMS (suitability, adequacy, effectiveness)

## Certification Process

1. **Gap analysis** — assess current state against ISO 20000 requirements
2. **SMS implementation** — design, document, and implement processes
3. **Internal audit** — verify readiness before external audit
4. **Stage 1 audit** — documentation review by certification body
5. **Stage 2 audit** — full compliance audit (on-site)
6. **Certification** — if compliant, certificate issued (valid 3 years)
7. **Surveillance audits** — annual monitoring audits
8. **Recertification** — every 3 years

## Key Differences: ITIL vs ISO 20000

| Aspect | ITIL 4 | ISO 20000 |
|--------|--------|-----------|
| Type | Framework (guidance, best practices) | Standard (certifiable, auditable) |
| Focus | How to do ITSM well | Prove you do ITSM well |
| Mandatory? | No (adopt what you need) | Yes (all requirements mandatory, no exclusions) |
| Certification | Individual (Foundation, etc.) | Organizational |
| Scope | Broad, flexible | Defined SMS scope |
| Relationship | Provides guidance for implementation | Provides requirements to certify against |
| Complementary | Use ITIL to implement → certify with ISO 20000 |

## ISO 20000 Parts

| Part | Content |
|------|---------|
| Part 1:2018 | SMS Requirements (certifiable) |
| Part 2 | Guidance on application of Part 1 |
| Part 3 | Scope definition and applicability |
| Part 4 | Process reference model |
| Part 5 | Exemplar implementation plan |
| Part 6 | Requirements for bodies providing audit and certification |
| Part 7 | Guidance on integrated use of ISO 20000-1 and ISO 27001 |
| Part 8 | Cloud service implementation guidance |
| Part 9 | SMS requirements for ISO 20000-1 compliance |
| Part 10 | Concepts and vocabulary |
| Part 11 | Guidance on relationship between ISO 20000-1 and service management frameworks (ITIL, COBIT) |

## Sources

- ISO/IEC 20000-1:2018 (https://www.iso.org/standard/70636.html)
- Amendment 1:2024
- https://www.schellman.com/blog/iso-certifications/iso-20000-1-an-introduction
- https://iso-docs.com/blogs/iso-20000-standard/clause-8-operation-of-the-service-management-system
- https://www.novelvista.com/blogs/quality-management/iso-iec-20000-1-clauses
- https://www.theknowledgeacademy.com/blog/iso-20000-incident-management/
