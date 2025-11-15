# Research Notes: OT Security & Critical Infrastructure

## Source 1: Fortinet - 2023 State of Operational Technology and Cybersecurity Report
**URL:** https://www.fortinet.com/corporate/about-us/newsroom/press-releases/2023/fortinet-global-report-finds-75-percent-ot-organizations-experienced-intrusion-last-year
**Date:** May 24, 2023

### Key OT Security Statistics

**Attack Prevalence:**
- **75% of OT organizations experienced at least one intrusion** in the last year (2023)
- Only **25% did not incur a cybersecurity intrusion** (improved from 6% in 2022)
- **32% were victims of ransomware attack** in the last year (unchanged from 2022)
- Nearly **one-third (31%) reported more than six intrusions** in the last year (up from 11% the year before)

**The IT/OT Convergence Problem:**
- **32% of respondents indicated both IT and OT systems were impacted** by a cyberattack (up from only 21% in 2022)
- This represents a **52% increase year-over-year** in attacks crossing the IT/OT boundary
- **83% of OT breaches originate in the IT network** (from 2025 report referenced in Pillar 4 document)

**Attack Vectors:**
- **56% experienced intrusions from malware** (most common)
- **49% experienced intrusions from phishing** (second most common)
- Both IT and OT systems increasingly impacted simultaneously

**Security Maturity Assessment:**
- In 2023, number of respondents who consider their organization's OT security posture as "highly mature" fell to **13%** (down from 21% the year before)
- This suggests cybersecurity practitioners are becoming more realistic about their capabilities
- Nearly **one-third (32%) of respondents indicated both IT and OT tools were assessed** in their organizations' cybersecurity capabilities

**Connected Device Complexity:**
- Nearly **80% of respondents reported having greater than 100 enabled OT devices** in their OT environment
- This highlights the significant challenge for security teams to secure an ever-expanding threat landscape
- **76% of professionals continue to add the access and flexibility** (68%) needed to address the growing cybersecurity skills shortage

**ICS Systems Age:**
- Majority of organizations (**74%**) report that ICS systems across their organization are **between 6 and 10 years old**
- This creates challenges for consistently incorporating, employing, and enforcing policy across IT/OT convergence landscape
- Aging systems compound with aging problems, making security more difficult

**CISO Responsibility Shift:**
- **95% of organizations expect OT cybersecurity responsibility to shift from directors and managers to CISOs** in the next 12 months
- This represents a major organizational change
- Nearly every organization (**95%**) plans to place responsibility for OT cybersecurity under a chief information security officer (CISO) within 12 months
- Findings suggest OT cybersecurity professionals now come from IT security leadership rather than product management
- Influence on cybersecurity decisions is shifting away from operations to other leaders, especially CISO/CSO roles

### Key Insight from Fortinet EVP

**John Maddison, EVP Products and CMO at Fortinet:**
> "Fortinet's 2023 State of Operational Technology and Cybersecurity Report shows that while OT organizations have improved their overall cybersecurity posture, they also have continued opportunity for improvement. Networking and IT teams are under extraordinary pressure to adapt and become more OT-aware, and organizations are shifting to find and employ solutions that implement security across their entire IT/OT environment to reduce their overall security risk."

---

## Source 2: CISA - Volt Typhoon Advisory (AA24-038A)
**URL:** https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-038a
**Date:** February 7, 2024

### Volt Typhoon Threat Overview

**Threat Actor Profile:**
- **PRC (People's Republic of China) state-sponsored actors**
- Focus on **pre-positioning** in U.S. critical infrastructure
- Goal: Establish persistent access for potential future disruption during conflicts

**Attack Characteristics:**
- Use of **Living Off the Land (LOTL) techniques** as hallmark of their activity
- Rely on **valid accounts** and leverage **strong operational security**
- Combined approach allows for **long-term undiscovered persistence**
- U.S. agencies have observed Volt Typhoon actors **maintaining access for at least five years** in some victim IT environments

**Attack Methodology:**
- Conduct **extensive pre-exploitation reconnaissance** to learn about target organization
- **Tailor TTPs to the victim's environment**
- **Dedicate ongoing resources** to maintaining persistence and understanding target environment over time
- Continue monitoring and access even after initial compromise

**Targeted Sectors:**
- Water and Wastewater Systems
- Communications
- Energy
- Transportation Systems
- Other critical infrastructure sectors

**Why This Matters:**
- **Most dangerous adversary may not be demanding ransom today**, but the one **quietly waiting in your network for a conflict tomorrow**
- Pre-positioning allows for rapid disruption when geopolitical tensions escalate
- Traditional detection methods struggle with LOTL techniques that use legitimate tools

### Living Off the Land (LOTL) Techniques

**Definition:**
- Using legitimate system tools and processes already present in the environment
- Blends in with normal administrative activity
- Harder to detect than traditional malware

**Why It's Effective:**
- Avoids deploying custom malware that could be detected
- Uses trusted, signed binaries already in the environment
- Appears as legitimate administrative activity
- Bypasses traditional signature-based detection

**CISA Guidance:**
- Joint guide: "Identifying and Mitigating Living Off the Land Techniques"
- Urges critical infrastructure organizations to hunt for similar malicious activity
- Emphasizes need for behavioral analytics, not just signature detection

---

## Source 3: The Air Gap Myth

### Why the Air Gap is a Myth

**Traditional Belief:**
- Physical, impenetrable barrier separating ICS from IT
- Foundation of OT security for decades
- "If it's not connected, it can't be hacked"

**Reality:**
- **The air gap is broken the moment anything bridges your environment to the outside**
- Not intentionally or maliciously, but slowly and quietly

**How Air Gaps Get Bridged:**
- **USB drives** - Stuxnet's original attack vector
- **Vendor laptops** - Technicians connecting to both IT and OT
- **Remote access** - For monitoring, maintenance, diagnostics
- **Data analytics** - Pulling OT data into IT-based platforms
- **Shared infrastructure** - Routers, switches, Active Directory
- **Human element** - Engineers using same workstations for both IT and OT

**Historical Precedent:**
- **Stuxnet attack** (over a decade ago) used infected USB drive on IT network to reach supposedly isolated OT environment
- **15 years later, this remains the primary vector for OT compromise**

### The IT/OT Convergence Reality

**Drivers of Convergence:**
- Remote access for monitoring and maintenance
- Data analytics for production optimization and predictive maintenance
- Shared infrastructure (routers, switches, Active Directory)
- Human element (same laptops/workstations for both environments)
- Business efficiency and data-driven insights

**Security Implications:**
- **75% of OT security incidents originate from IT network breach** (Fortinet)
- **83% of OT breaches originate in IT environment** (referenced in Pillar 4)
- IT network becomes the "superhighway of risk" directly into OT
- Traditional perimeter security model is obsolete

**The Architectural Flaw:**
- High-trust relationship between IT and OT environments
- "Soft, chewy center protected by hard, crunchy shell"
- Once attacker breaches IT shell, clear and trusted path to OT core
- Fundamental violation of Zero Trust principles at IT/OT boundary

---

## Content Angles for Articles

**The 75% Problem:**
- 75% of OT incidents originate from IT network
- Securing OT doesn't start at factory floor, starts in corporate data center
- That's where your adversary will start too

**The Air Gap Illusion:**
- Decades-old principle that has become dangerous myth
- False sense of security while ignoring the superhighway of risk
- Stuxnet proved this 15 years ago, yet problem persists

**IT/OT Convergence:**
- Not a trend, but the new reality
- Driven by business necessity (efficiency, analytics, remote access)
- Creates perfect storm for security
- Can't stand in way of progress, must enable it safely

**The Zero Trust Gap:**
- Core flaw: lack of Zero Trust at IT/OT boundary
- Assume breach, verify explicitly, least privilege access
- Not about building bigger wall, but smarter gate

**Pre-Positioning Threat:**
- Nation-state actors not interested in immediate disruption
- Quietly establishing footholds for future conflicts
- Living-off-the-land techniques make detection extremely difficult
- May already be in your network for years

**The Blueprint for IT/OT Security:**
- Establish Industrial DMZ between IT and OT
- Implement centralized access policy (PPPM layer)
- Leverage Identity Fabric for all identities (human and machine)
- Continuous monitoring with purpose-built SAIL layer
- From wall of separation to bridge of control

### Statistics Summary Table

| Metric | Value | Source |
|--------|-------|--------|
| OT organizations experiencing intrusion | 75% | Fortinet 2023 |
| OT breaches originating in IT network | 75-83% | Fortinet/Pillar 4 |
| Attacks impacting both IT and OT | 32% (up from 21%) | Fortinet 2023 |
| Ransomware victims in OT | 32% | Fortinet 2023 |
| Organizations with 100+ OT devices | 80% | Fortinet 2023 |
| ICS systems 6-10 years old | 74% | Fortinet 2023 |
| Organizations moving OT security to CISO | 95% | Fortinet 2023 |
| Volt Typhoon persistence duration | 5+ years | CISA 2024 |

### Questions for Further Research
- What is an Industrial DMZ architecture?
- How do you implement Zero Trust at IT/OT boundary?
- What are specific LOTL techniques used by Volt Typhoon?
- How do you detect pre-positioned threats?
- What is the CeDeSec pattern for OT security?
- How do you balance safety/reliability with security in OT?
