export interface KnowledgeSection {
  id: string
  title: string
  keywords: string[]
  content: string
}

const sections: KnowledgeSection[] = [
  {
    id: 'about-kwasaca',
    title: 'About KWASACA',
    keywords: ['KWASACA', 'agency', 'about', 'Kwara', 'HIV', 'AIDS', 'state', 'government', 'control', 'apex', 'body'],
    content: `KWASACA (Kwara State AIDS Control Agency) is the apex state body coordinating HIV/AIDS response in Kwara State, Nigeria.
- Established to lead, coordinate, and monitor HIV/AIDS activities across the state
- Supervised by the Kwara State Deputy Governor
- Covers all 16 Local Government Areas (LGAs) of Kwara State
- Kwara State HIV prevalence is 1.0% — below the national average of 1.5%
- Partners with NACA (National Agency for the Control of AIDS), UNAIDS, PEPFAR, Global Fund, World Bank, SFH Nigeria, WHO, and UNICEF`,
  },
  {
    id: 'contact',
    title: 'Contact Information',
    keywords: ['contact', 'address', 'location', 'phone', 'email', 'office', 'Ilorin', 'visit', 'reach', 'call', 'reach us'],
    content: `KWASACA Contact Information:
- Office Location: Ilorin, Kwara State, Nigeria
- Website: kwasaca.kw.gov.ng
- For complaints or enquiries, visit the Contact page on the website
- File a complaint through the Contact page with the "Complaint" type selected`,
  },
  {
    id: 'hiv-testing',
    title: 'HIV Testing & Counseling',
    keywords: ['test', 'testing', 'counseling', 'HIV test', 'screening', 'status', 'know your status', 'check', 'diagnosis', 'results', 'free', 'confidential'],
    content: `HIV Testing & Counseling services offered by KWASACA:
- HIV testing is FREE and CONFIDENTIAL at all KWASACA-supported facilities
- Testing centers available across all 16 LGAs of Kwara State
- Services include: HIV Testing & Counseling (HTC), Prevention of Mother-to-Child Transmission (PMTCT)
- Encourages everyone to know their HIV status
- Results are handled with strict confidentiality
- Trained counselors provide pre-test and post-test counseling`,
  },
  {
    id: 'art-treatment',
    title: 'ART (Antiretroviral Therapy) Treatment',
    keywords: ['ART', 'treatment', 'antiretroviral', 'therapy', 'medicine', 'drugs', 'medication', 'ARV', 'viral load', 'suppression', 'adherence', 'care', 'treat'],
    content: `Antiretroviral Therapy (ART) services provided by KWASACA:
- ART is available at KWASACA-supported health facilities across Kwara State
- Antiretroviral drugs help suppress the HIV virus and prevent progression to AIDS
- Treatment is life-long and requires daily adherence
- Viral load monitoring is conducted to track treatment effectiveness
- People on effective ART with undetectable viral load cannot transmit HIV (U=U: Undetectable = Untransmittable)
- Free ART drugs provided at government health facilities`,
  },
  {
    id: 'pmtct',
    title: 'PMTCT — Prevention of Mother-to-Child Transmission',
    keywords: ['PMTCT', 'mother', 'child', 'pregnancy', 'baby', 'prevention', 'transmission', 'infant', 'breastfeeding', 'pregnant', 'antenatal', 'delivery', 'vertical'],
    content: `Prevention of Mother-to-Child Transmission (PMTCT) program:
- Prevents HIV transmission from HIV-positive mothers to their babies during pregnancy, delivery, and breastfeeding
- Services include: antenatal HIV testing, ART for pregnant women, safe delivery practices, infant prophylaxis, and safe infant feeding counseling
- With proper PMTCT, the risk of mother-to-child transmission is less than 5%
- Early testing and treatment during pregnancy is critical
- Follow-up care for both mother and infant is provided`,
  },
  {
    id: 'ovc-support',
    title: 'OVC Support — Orphans & Vulnerable Children',
    keywords: ['OVC', 'orphan', 'vulnerable', 'children', 'child', 'support', 'care', 'social', 'welfare', 'orphans'],
    content: `Orphans and Vulnerable Children (OVC) Support program:
- Provides care and support for children orphaned or made vulnerable by HIV/AIDS
- Services include: educational support, psychosocial support, nutrition support, and referral to health services
- Aims to improve the well-being and resilience of affected children and their caregivers
- Community-based approach with local case workers`,
  },
  {
    id: 'community-outreach',
    title: 'Community Outreach & Prevention',
    keywords: ['outreach', 'community', 'prevention', 'awareness', 'education', 'mobilization', 'sensitization', 'campaign', 'workshop', 'advocacy', 'volunteer'],
    content: `Community Outreach and HIV Prevention programs:
- Community mobilization and sensitization on HIV/AIDS prevention
- Distribution of condoms and educational materials
- Awareness campaigns in schools, markets, religious centers, and communities
- HIV prevention education including ABC approach (Abstinence, Be faithful, Condom use)
- Targeted interventions for key populations and high-risk groups
- Community dialogue and advocacy with traditional and religious leaders`,
  },
  {
    id: 'hiv-basics',
    title: 'Basic HIV/AIDS Information',
    keywords: ['HIV', 'AIDS', 'virus', 'symptoms', 'transmission', 'spread', 'how', 'what is', 'difference', 'cure', 'prevent', 'information', 'basic', 'cd4'],
    content: `Basic HIV/AIDS Information:
- HIV (Human Immunodeficiency Virus) attacks the body's immune system, specifically CD4 cells
- AIDS (Acquired Immunodeficiency Syndrome) is the most advanced stage of HIV infection
- HIV is transmitted through: unprotected sexual contact, sharing of needles/syringes, mother-to-child during pregnancy/delivery/breastfeeding, and contaminated blood transfusion
- HIV is NOT transmitted through: hugging, handshake, sharing food, mosquito bites, coughing, or sneezing
- There is currently no cure for HIV, but effective treatment (ART) allows people living with HIV to live long, healthy lives
- HIV can be prevented through: condom use, regular testing, PrEP, voluntary medical male circumcision (VMMC), and avoiding needle sharing
- Early detection through testing is crucial — know your status!`,
  },
  {
    id: 'testing-locations',
    title: 'Testing Center Locations',
    keywords: ['location', 'centers', 'facilities', 'hospital', 'clinic', 'where', 'near me', 'LGA', 'local government', 'find', 'nearby', 'closest', 'testing center'],
    content: `HIV testing centers are available across all 16 Local Government Areas (LGAs) of Kwara State. Testing is free and confidential at all KWASACA-supported facilities.
The 16 LGAs of Kwara State are: Asa, Baruten, Edu, Ekiti, Ifelodun, Ilorin East, Ilorin South, Ilorin West, Irepodun, Isin, Kaiama, Moro, Offa, Oke-Ero, Oyun, and Pategi.
For the nearest testing center, contact KWASACA office in Ilorin or visit the Contact page for specific facility locations.`,
  },
  {
    id: 'programs-overview',
    title: 'Programs Overview',
    keywords: ['programs', 'services', 'offer', 'what we do', 'initiatives', 'key programs', 'activities'],
    content: `KWASACA's key programs and services:
1. HIV Prevention — awareness campaigns, condom distribution, prevention education
2. HIV Testing & Counseling (HTC) — free confidential testing across all 16 LGAs
3. Antiretroviral Therapy (ART) — treatment and care for people living with HIV
4. Prevention of Mother-to-Child Transmission (PMTCT) — protecting babies from HIV
5. Orphans and Vulnerable Children (OVC) Support — care for children affected by HIV
6. Community Outreach — mobilization, sensitization, and advocacy
7. Strategic Information — surveillance, data collection, and research`,
  },
  {
    id: 'stigma',
    title: 'HIV Stigma & Discrimination',
    keywords: ['stigma', 'discrimination', 'mental health', 'disclosure', 'acceptance', 'support', 'judgment', 'confidentiality', 'human rights'],
    content: `HIV Stigma and Discrimination:
- Stigma refers to negative attitudes, beliefs, and stereotypes about people living with HIV
- Discrimination occurs when people are treated unfairly due to their HIV status
- KWASACA is committed to zero discrimination against people living with HIV
- HIV is a medical condition — it does not define a person
- People on effective treatment cannot transmit HIV (U=U)
- Everyone deserves respect, dignity, and compassion regardless of HIV status
- KWASACA encourages open conversations to break the silence around HIV
- If you experience discrimination based on HIV status, report it to KWASACA`,
  },
  {
    id: 'prep',
    title: 'PrEP (Pre-Exposure Prophylaxis)',
    keywords: ['PrEP', 'pre-exposure', 'prophylaxis', 'prevention pill', 'daily pill', 'prevent', 'negative', 'at risk', 'exposure'],
    content: `PrEP (Pre-Exposure Prophylaxis):
- PrEP is a daily medication that HIV-negative people take to prevent getting HIV
- When taken consistently, PrEP is highly effective (over 99% effective)
- PrEP is recommended for people at higher risk of HIV exposure
- PrEP does not protect against other STIs or pregnancy — condoms are still recommended
- Available at select health facilities — ask your healthcare provider about PrEP
- PEP (Post-Exposure Prophylaxis) is emergency medication taken within 72 hours of possible HIV exposure`,
  },
  {
    id: 'partners',
    title: 'Partner Organizations',
    keywords: ['partners', 'NACA', 'UNAIDS', 'PEPFAR', 'Global Fund', 'World Bank', 'SFH', 'WHO', 'UNICEF', 'donors', 'sponsors', 'collaboration'],
    content: `KWASACA collaborates with the following partner organizations:
- NACA (National Agency for the Control of AIDS) — national coordination body
- UNAIDS — Joint United Nations Programme on HIV/AIDS
- PEPFAR (US President's Emergency Plan for AIDS Relief) — US government initiative
- Global Fund to Fight AIDS, Tuberculosis and Malaria
- World Bank
- Society for Family Health (SFH) Nigeria
- World Health Organization (WHO)
- UNICEF — United Nations Children's Fund`,
  },
  {
    id: 'lgas',
    title: 'Local Government Areas (LGAs) in Kwara State',
    keywords: ['LGA', 'local government', '16', 'areas', 'districts', 'Asa', 'Baruten', 'Edu', 'Ekiti', 'Ifelodun', 'Ilorin', 'Irepodun', 'Isin', 'Kaiama', 'Moro', 'Offa', 'Oke-Ero', 'Oyun', 'Pategi', 'Kwara'],
    content: `Kwara State has 16 Local Government Areas (LGAs):
1. Asa
2. Baruten
3. Edu
4. Ekiti
5. Ifelodun
6. Ilorin East
7. Ilorin South
8. Ilorin West
9. Irepodun
10. Isin
11. Kaiama
12. Moro
13. Offa
14. Oke-Ero
15. Oyun
16. Pategi

KWASACA operates across all 16 LGAs with testing centers and health facilities in each area.`,
  },
]

export function getRelevantContext(query: string, maxSections = 5): string {
  const words = query.toLowerCase().split(/\s+/)

  const scored = sections.map(section => {
    let score = 0
    for (const word of words) {
      if (word.length < 2) continue
      if (section.keywords.some(kw => kw.toLowerCase().includes(word))) {
        score += 2
      }
      if (section.content.toLowerCase().includes(word)) {
        score += 1
      }
    }
    return { section, score }
  })

  const topSections = scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxSections)
    .map(s => `## ${s.section.title}\n${s.section.content}`)

  if (topSections.length === 0) {
    const allContent = sections
      .slice(0, 3)
      .map(s => `## ${s.title}\n${s.content}`)
      .join('\n\n')
    return allContent
  }

  return topSections.join('\n\n')
}

export function getAllKnowledge(): string {
  return sections.map(s => `## ${s.title}\n${s.content}`).join('\n\n')
}

export function getKnowledgeTopics(): string[] {
  return sections.map(s => s.title)
}
