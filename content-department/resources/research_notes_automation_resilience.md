# Research Notes: Security Automation & Cyber Resilience

## Source 1: Veeam - 2025 Ransomware Trends and Proactive Strategies Report
**URL:** https://www.veeam.com/blog/ransomware-trends.html
**Date:** April 23, 2025

### Key Ransomware Statistics

**Attack Prevalence:**
- **69% of organizations experienced at least one ransomware attack** in the past 12 months (down from 75% in 2023)
- **7 out of 10 organizations still experienced an attack** despite improved defenses
- **98% of organizations have a ransomware playbook**, but less than half have essential elements to execute it

**Recovery Statistics (The Most Critical):**
- **Only 10% of attacked organizations recovered more than 90% of their data**
- **57% recovered less than 50% of their data**
- Organizations that prioritize data resilience **recover up to 7 times faster**
- Organizations with weak recovery strategies experience significantly higher data loss rates

**Preparedness Gap:**
- **69% believed they were prepared before being attacked**
- Confidence **plummeted by over 20% after the attack**, revealing significant gaps in planning
- **CIOs experienced 30% decline** in preparedness rating post-attack
- **CISOs experienced 15% decline**, suggesting CISOs have clearer grasp of security posture

**Essential Elements Missing from Playbooks:**
- **44% lack backup verifications and frequencies**
- **30% lack pre-defined chain of command** for response
- Organizations need: backup copies with assured cleanliness, alternative infrastructure arrangements, containment/isolation plans

**Ransom Payment Trends:**
- **36% of affected organizations opted not to pay ransom** (up from 27% in previous report)
- **25% of non-payers were able to recover their data anyway**
- Of those that paid: **82% paid less than initial ransom**, **60% paid less than half**
- Organizations working with third parties paid fewer ransoms or had lesser payments overall

**Budget and Investment:**
- **94% of organizations that experienced ransomware are increasing recovery budget**
- **95% plan to boost spending on prevention**
- Despite increases, significant gap remains in investment relative to growing threat landscape

### Six Major Ransomware Trends for 2025

**1. Law Enforcement Forces Threat Actors to Adapt**
- Coordinated law enforcement crackdowns acted as deterrent for large targets
- Probable disbanding of Black Basta after concerns about law enforcement scrutiny
- Rise of smaller groups and "lone wolf" independent attackers
- Groups now targeting small and medium enterprises who lack resources

**2. Data Exfiltration Attacks Grow**
- Number of exfiltration victims that paid ransom rose during Q4
- Threat actors threatening to disclose sensitive data
- Attack pattern: compromise → lateral movement → identify weaknesses → exfiltration → encryption
- Threat actors reducing dwell time between initial compromise and attack (often just hours)

**3. Ransomware Payments are Decreasing**
- Organizations paying fewer ransoms in 2024 vs 2023
- Total value of ransomware payments fell in 2024
- Organizations with robust recovery strategies can avoid paying

**4. Emerging Legal Consequences of Ransom Payments**
- International Counter Ransomware Initiative (CRI) launched with 68 countries
- 40 countries pledged to discourage ransom payments
- Some governments ban public sector organizations from paying
- U.S. Treasury Department points to potential sanctions risks

**5. Collaboration Reinforces Resilience**
- Organizations breaking down barriers between IT operations and security teams
- **52% of organizations need significant improvement** to align IT and security teams
- Enhanced communication proven vital in fortifying defenses
- Partnerships with law enforcement and industry players critical

**6. Budgets Rise for Security, but More is Needed**
- Clear recognition that combatting ransomware requires adequate funding
- Investment must cover both prevention AND recovery

### Post-Attack Actions by Successful Organizations

Organizations that recovered successfully took these steps:
- Improving employee training and awareness programs
- Updating software policies to guard against vulnerabilities
- Implementing new backup and recovery solutions
- Transitioning backups to cloud or managed services

### The 3-2-1-1-0 Data Resilience Rule
- **3** copies of data
- **2** different media types
- **1** copy offsite
- **1** copy immutable (air-gapped or isolated)
- **0** errors in backup verification (backups must be malware-free before restoration)

### Key Insight from Veeam CEO

**Anand Eswaran, CEO of Veeam:**
> "Organizations are improving their defenses against cyber-attacks, yet 7 out of 10 still experienced an attack in the past year. And of those attacked, only 10% recovered more than 90% of their data, while 57% recovered less than 50%. Our latest findings clearly indicate that the threat of ransomware will continue to challenge organizations throughout 2025 and beyond. As the nature and timing of attacks evolve, it is essential for every organization to transition from reactive security measures to proactive data resilience strategies."

### Report Methodology
- **1,300 organizations surveyed**
- **900 experienced at least one ransomware attack** resulting in encryption or exfiltration in past 12 months
- Respondents: CISOs, security professionals, IT leaders
- Geographic coverage: Americas, Europe, Australia

---

## Source 2: Security Automation ROI Research
**URL:** https://www.splunk.com/en_us/form/measuring-the-roi-of-soar.html

### SOAR (Security Orchestration, Automation and Response) ROI Metrics

**Time Savings:**
- **40 seconds to respond to phishing email** (down from 90 minutes)
- **~70 hours saved per day** through automation
- **~$900k saved per year** in operational costs

**Efficiency Gains:**
- Response time reduction of **90%** for common security tasks
- Higher volume of security alerts processed efficiently
- Elimination of alert fatigue through automated triage

**Financial Impact:**
- Organizations can save **$2.4M annually** through comprehensive security automation
- ROI realized through reduced manual work, faster response times, and improved analyst productivity

### Benefits of Security Automation

**Operational Benefits:**
- Process higher volume of security alerts efficiently
- Reduce mean time to detect (MTTD) and mean time to respond (MTTR)
- Free analysts from repetitive, low-value tasks
- Enable focus on high-value threat hunting and analysis

**Business Benefits:**
- Reduced breach costs through faster response
- Improved security posture through consistent execution
- Better resource allocation and analyst retention
- Scalability without proportional headcount increases

---

## Source 3: Cyber Resilience vs Disaster Recovery
**URL:** https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-160v2r1.pdf (NIST SP 800-160 Vol. 2 Rev. 1)

### Key Distinction

**Disaster Recovery (DR):**
- About **restoring the past**
- Focus on returning to previous operational state
- Assumes disruption is temporary and environment is restorable
- Traditional backup and restore processes
- Time-based recovery objectives (RTO/RPO)

**Cyber Resilience (CR):**
- About **ensuring you have a future**
- Focus on maintaining operations during disruption
- Assumes adversary may persist in environment
- Requires ability to adapt and continue mission
- Outcome-based resilience objectives

### NIST Definition of Resilience
From DHS Risk Lexicon: "The ability to resist, absorb, recover from or successfully adapt to adversity or a change in conditions."

### Why DR is Obsolete for Cyber Threats

**Modern Ransomware Attack Pattern:**
- Attackers specifically target backup infrastructure
- Discovery and destruction of backups is primary objective
- Production data is no longer the only target
- Traditional DR assumes backups are safe and available

**Cyber Resilience Requirements:**
- **Immutable backups** that cannot be encrypted or deleted
- **Isolated recovery environments** (air-gapped or logically separated)
- **Automated testing** of backup integrity and recoverability
- **Verified, malware-free** restoration paths
- **Minimum Viable Business (MVB)** definition and testing

### Content Angles for Articles

**The Automation Paradox:**
- Fear of automation causing disruptions
- Need for "automation guardrails" (PPPM layer)
- Start with low-risk, high-value tasks (alert enrichment)
- Goal: give analysts back their time, not replace them

**The Gains Analysis Framework:**
- Identify repetitive task
- Measure current pain (time, errors, cost)
- Automate the task
- Measure gain (time saved, errors eliminated, cost reduced)
- Build data-driven business case for automation

**Modern Ransomware Kill Chain:**
- Initial access (phishing, vulnerability exploitation)
- Credential theft and privilege escalation
- Lateral movement and discovery
- **Backup discovery and destruction** (the critical new step)
- Data exfiltration
- Encryption and ransom demand

**The Backup Targeting Problem:**
- 94% of ransomware attacks target backups (need to verify this stat)
- Attackers know recovery is the escape hatch
- Traditional backups are accessible from production network
- Need for immutable, isolated backup infrastructure

### Questions for Further Research
- What is the Gains Analysis framework in detail?
- How do you implement immutable backups?
- What is a Minimum Viable Business (MVB)?
- How do you test backup integrity without exposing them to production network?
- What are best practices for isolated recovery environments?
