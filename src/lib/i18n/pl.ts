// Polish copy. Mirror structure of en.ts exactly.
// PL: needs review — translations are functional drafts, not native-speaker polish.
import type { Copy } from './en';

export const pl: Copy = {
  meta: {
    title: 'NEX Engineering — Nowa rotacyjna architektura dla sprężonego powietrza',
    desc: 'Działający prototyp w pełni rotacyjnego sprężarki na poziomie TRL 5/6 z potwierdzonymi 30% oszczędnościami energii. Architektura gotowa do licencjonowania największym producentom sprężarek na świecie. Wielopaliwowy silnik wodorowy jako druga linia produktowa.'
  },

  nav: {
    sections: [
      { id: 'how',       label: 'Jak to działa' },
      { id: 'markets',   label: 'Rynki' },
      { id: 'evidence',  label: 'Dowody' },
      { id: 'team',      label: 'Zespół' },
      { id: 'roadmap',   label: 'Mapa drogowa' },
      { id: 'contact',   label: 'Kontakt' }
    ],
    cta: 'Data room dla inwestorów'
  },

  hero: {
    headlineLead: 'Nowa rotacyjna architektura',
    headlineMid: 'dla sprężonego powietrza',
    headlineTail: '— i silników, które za nią pójdą.',
    sub:
      'Działający w pełni rotacyjny sprężarka redukująca pobór energii elektrycznej o 30% w stosunku do standardu rotary-screw — na obciążeniu odpowiadającym około 10% globalnej energii elektrycznej. Ta sama architektura, z dodanym układem zapłonowym, działa jako wielopaliwowy silnik gotowy na wodór — przy mocy 104 kW na litr i 4,71 KM na kilogram.',
    ctaPrimary: 'Otwórz data room dla inwestorów',
    ctaSecondary: 'Porozmawiaj z zespołem',
    callouts: [
      { num: 'TRL 5/6', unit: 'Gotowość sprężarki',                        label: 'Działający prototyp na stanowisku w odpowiednim reżimie pracy' },
      { num: '30%',     unit: 'energii vs. rotary-screw',                  label: 'Potwierdzone w laboratorium przy zrównanym CFM i ciśnieniu — pomiar na zaciskach silnika', delta: 'mniej' },
      { num: '4',       unit: 'Komory robocze na obrót',                   label: 'Komora kulista podzielona przez dwa współobrotowe wirniki' },
      { num: '6',       unit: 'Rodzin patentowych · po PCT',               label: 'Po ekspertyzie PCT · wejście w fazę krajową w toku · rdzeń, czas bez zaworów, objętość robocza, wielopaliwowość, tryb sprężarki, uszczelnienie' }
    ]
  },

  verified: {
    eyebrow: 'Wynik potwierdzony',
    title: 'Liczba zmierzona, nie symulowana.',
    body:
      'Na działającym prototypie sprężarki — 550 L/min, ciśnienie wylotowe 8 bar, napęd 3,5 kW przy 1 400 RPM — pobór energii elektrycznej zmierzono na zaciskach silnika względem sprężarki rotary-screw o zrównanym CFM i ciśnieniu. Stan ustalony, po stabilizacji termicznej. Wynik: redukcja zużycia energii o 30%.',
    body2:
      'Dla sprężarki przemysłowej 100 KM przy typowym cyklu pracy oznacza to około 14 400 USD oszczędności rocznie — zwrot w miesiącach, nie latach. Niezależny retest ISO 1217 w TÜV SÜD / DEKRA / Bureau Veritas / Intertek / SGS to bramka G0 planu seed: pojedynczy najbardziej dźwigniowy moment w budowie wiarygodności.',
    statBoxes: [
      { num: '14,4 tys. $', label: 'Oszczędności na 100 KM / rok', sub: '~48 tys. $ typowy roczny rachunek za prąd przy 100 KM' },
      { num: '144 tys. $+', label: 'Oszczędności w 10 lat', sub: 'Na jednostkę przy przemysłowym cyklu pracy' },
      { num: '<12 mies.', label: 'Zwrot dla klienta', sub: 'Przy cenie premium względem rotary-screw' },
      { num: '~10%', label: 'Globalnej energii elektrycznej', sub: 'Sprężone powietrze; 70–80% kosztu cyklu życia sprężarki to prąd' }
    ]
  },

  how: {
    eyebrow: 'Jak to działa',
    title: 'Komora kulista, dwa współobrotowe wirniki, cztery komory robocze na jeden obrót.',
    pitch:
      'Każdy element ruchomy obraca się. Brak tłoków. Brak uszczelnień wierzchołkowych. Brak wału korbowego. Brak rozrządu. Dwa wirniki dzielą sferyczną objętość roboczą na cztery komory; każda wykonuje pełny cykl termodynamiczny w jednym obrocie. Synchronizacja faz jest geometryczna — nie ma nic, co mogłoby się zużyć, nic do paskowania, nic do regulacji.',
    points: [
      {
        h: 'Czas bez zaworów',
        p: 'Wlot, sprężanie, ekspansja, wylot — sterowane wyłącznie geometrią wirnika i stojana. Eliminuje zawory, wałki rozrządu, paski rozrządu i ich pasożytnicze straty. (Rodzina patentowa: P.450073)'
      },
      {
        h: '4× objętość robocza na obrót',
        p: 'Cztery komory na obrót względem pojedynczego tłoka o równoważnej pojemności skokowej. To stoi za gęstością mocy 104 kW/L i 4,71 KM/kg w wariancie silnikowym. (Rodzina patentowa: P.451815)'
      },
      {
        h: 'Uszczelnienie odsprzęgnięte od ścieżki obciążenia',
        p: 'Siła przenoszona jest przez osie wsparte na łożyskach, nie przez interfejs uszczelnienia. Stąd ≥30% niższe tarcie i ≥20% dłuższe interwały serwisowe — oraz praca bez oleju dla cleanroomów, sprężonego powietrza klasy spożywczej i farmaceutycznej. (Rodzina patentowa: P.451818)'
      },
      {
        h: 'Wielopaliwowość z założenia',
        p: 'Ten sam profil komory spalania pracuje na benzynie, oleju napędowym i wodorze. Bez wymiany głowicy, bez przeprojektowywania tłoka. Cywilny range-extender i wojskowy UAV na JP-8 dzielą tę samą platformę. (Rodzina patentowa: P.451816)'
      }
    ],
    notWankel:
      'To nie jest Wankel. Klasa awarii uszczelnień wierzchołkowych, która ograniczała architektury Wankela przez pięćdziesiąt lat, jest tu strukturalnie nieobecna — uszczelnienia NEX są odsprzęgnięte od głównych sił roboczych.'
  },

  products: {
    eyebrow: 'Dwie linie produktowe',
    title: 'Sprężarka dziś finansuje silnik jutro.',
    body:
      'Jedna platforma, dwie linie produktowe — i wchodzą na rynek w określonej kolejności. Sprężarka jest natychmiastowym źródłem przychodu i klinem licencyjnym do incumbentów OEM. Silnik to opcjonalność Series B, oparta na symulacji benchmarkowanej z prototypem sprężarki przy błędzie poniżej 5%.',
    products: [
      {
        tag: 'Produkt wiodący',
        name: 'Sprężarka rotacyjna',
        trl: 'TRL 5/6 — działający prototyp na stanowisku',
        bullets: [
          '550 L/min wydajności teoretycznej, ciśnienie wylotowe 8 bar, napęd 3,5 kW przy 1 400 RPM',
          '30% oszczędności energii względem rotary-screw (potwierdzone laboratoryjnie, retest ISO 1217 w G0)',
          '~60% lżejsza; ~100× niższa moc akustyczna względem tłokowej (~5–6× cichsza dla ucha ludzkiego); praca bez oleju lub przy minimum oleju',
          'Gotowa do licencjonowania: Atlas Copco, Ingersoll Rand, Kaeser, Howden, Doosan, MHI'
        ]
      },
      {
        tag: 'Opcjonalność Series B',
        name: 'Wielopaliwowy silnik rotacyjny',
        trl: 'TRL 3/4 — projekt gotowy, prototyp 4–6 tygodni po starcie Series A',
        bullets: [
          '104 kW/L gęstość mocy · 4,71 KM/kg stosunek mocy do masy',
          'Benzyna, olej napędowy, wodór na tym samym sprzęcie — bez wymiany głowicy',
          '~5–6× cichszy dla ucha ludzkiego względem tłokowego (~100× niższa wypromieniowana moc akustyczna); 10 000+ RPM zapasu obrotowego',
          'Model CFD i cyklu termodynamicznego benchmarkowany z pomiarami sprężarki przy błędzie <5%'
        ]
      }
    ]
  },

  markets: {
    eyebrow: 'Gdzie ląduje',
    title: 'Przemysł podstawowy. Klimat w konsekwencji. Obronność jako opcjonalność.',
    body:
      'Teza inwestycyjna to efektywność przemysłowa, która dekarbonizuje wypierając konkurencję ceną i wydajnością — klient adoptuje na podstawie ROI, wpływ klimatyczny jest produktem ubocznym. Kapitał dekarbonizacyjny twardo skupił się na tym wzorcu w ostatnich pięciu latach: Rondo (107–162 mln $, Aramco/Microsoft), Aeroseal (119 mln $, BEV/Aramco/Climate Investment), Antora (230 mln $, Decarbonization Partners), Mainspring (800+ mln $). NEX wpisuje się w tę samą formułę.',
    framings: [
      {
        tag: 'Podstawowe',
        h: 'Przemysł · 45 mld $',
        p: 'Sprężarki przemysłowe. Architektura gotowa do licencjonowania przez Atlas Copco (~25%), Ingersoll Rand (~15%), Kaeser, Howden, Sullair, Hitachi. Royalty 5–8% od globalnego wolumenu jednostek; ~95% marża brutto na książce licencyjnej.'
      },
      {
        tag: 'Wtórne',
        h: 'Klimat · skala Gt',
        p: 'Sprężone powietrze ≈10% globalnej energii elektrycznej (≈2 900 TWh/rok). Przy 8% udziale globalnym do 2040 r. ~32 Mt CO₂/rok uniknięte; baza 2025–2050 ≈550 Mt skumulowanie. Obronna ekonomia jednostkowa — adoptujący nie potrzebują dotacji.'
      },
      {
        tag: 'Opcjonalność',
        h: 'Obronność · wielopaliwowość',
        p: 'Wariant silnikowy gotowy na wodór: napęd UAV, APU pojazdów opancerzonych, sygnatura akustyczna patrolowców morskich, zasilanie ekspedycyjne. Przychód z cywilnej sprężarki redukuje ryzyko czasowe silnika. Historia Series B.'
      }
    ]
  },

  evidence: {
    eyebrow: 'Dowody',
    title: '1,1 mln € wdrożone. Sześć rodzin patentowych po PCT. Działająca maszyna na stanowisku.',
    body:
      'Dwadzieścia lat symulacji i iteracji prof. Henryka Sobczuka, plus środki założycielskie na precyzyjną budowę, instrumentowane stanowisko testowe i sześć rodzin patentowych — zgłoszenia priorytetowe w Urzędzie Patentowym RP, wszystkie po ekspertyzie PCT, wejście w fazę krajową w toku. Implikowany wskaźnik burn jest poniżej norm hardware deep-tech — to świadomy wybór na pojedynczy instrumentowany prototyp zamiast wieloitercacyjnej budowy.',
    items: [
      { k: '1,1 mln €+', v: 'Inwestycja założycieli — niefakturowane R&D wynalazcy plus budowa prototypu' },
      { k: '20 lat', v: 'Projektu, symulacji i iteracji architektury rotacyjnej przez prof. Henryka Sobczuka' },
      { k: '6',     v: 'Rodzin patentowych · po ekspertyzie PCT, wejście w fazę krajową w toku · rdzeń, czas bez zaworów, objętość robocza, wielopaliwowość, tryb sprężarki, uszczelnienie' },
      { k: 'TRL 5/6', v: 'Działający prototyp sprężarki potwierdzony w odpowiednim reżimie pracy' },
      { k: '<5%',  v: 'Błąd symulacji silnika względem pomiarów sprężarki — podstawa predykcji w trybie silnikowym' },
      { k: '8 bar', v: 'Ciśnienie tłoczenia na prototypie przy 550 L/min, 1 400 RPM, napęd 3,5 kW' }
    ],
    measured: {
      h: 'Zmierzone vs. modelowane',
      rows: [
        { claim: '30% oszczędności energii (vs. rotary-screw, zrównane CFM/ciśnienie)', state: 'Zmierzone' },
        { claim: '550 L/min @ 8 bar, 3,5 kW, 1 400 RPM', state: 'Zmierzone' },
        { claim: '≥6 dB redukcji akustycznej', state: 'Stanowisko w toku' },
        { claim: '≥60% redukcji masy', state: 'Wbudowane · potwierdzone' },
        { claim: '≥30% niższe tarcie; ≥20% dłuższy serwis', state: 'Modelowane · stanowisko w A' },
        { claim: '104 kW/L gęstość mocy · 4,71 KM/kg (silnik)', state: 'Symulacja · walidacja w A' },
        { claim: 'Wielopaliwowość benzyna / ON / H₂', state: 'Architekturalne · kwalifikacja w A' }
      ]
    }
  },

  team: {
    eyebrow: 'Zespół',
    title: 'Trzech założycieli, strukturalnie ustawionych przeciw trzem sposobom, w jakie ginie hardware deep-tech.',
    body:
      'Nauka u wynalazcy. Komercjalizacja u operatora. Strategia kapitałowa u inwestora. Henryk i Wojciech to rodzina — koszt rozjechanych bodźców między współzałożycielami, który zabija wiele par na tym etapie, jest tu istotnie niższy na styku nauka / komercjalizacja.',
    founders: [
      {
        monogram: 'HS',
        name: 'Prof. Henryk Sobczuk',
        role: 'Wynalazca i CTO',
        bio:
          'Doktor fizyki, profesor nauk technicznych Politechniki Lubelskiej. 200+ publikacji naukowych. 10+ wcześniejszych patentów oprócz sześciu zgłoszeń NEX. Odznaczony Złotym Krzyżem Zasługi przez Prezydenta RP (2010) za wkład w naukę i inżynierię. Współtwórca aparatury wysokoczęstotliwościowej i urządzeń TDR (Time Domain Reflectometry) używanych w fizyce gleby i sensoryce przemysłowej — to praca instrumentacyjna, dzięki której liczba oszczędności energii prototypu jest obronialna. Dwadzieścia lat projektowania, symulacji i iteracji maszyny rotacyjnej NEX.',
        owns: 'Odpowiada za naukę, architekturę, symulację, portfel patentowy i program inżynieryjny.'
      },
      {
        monogram: 'WS',
        name: 'Wojciech Sobczuk',
        role: 'Współzałożyciel i CEO',
        bio:
          'Seryjny przedsiębiorca deep-tech, dwadzieścia lat na trzech kontynentach (Europa, Izrael, USA). Zbudował szyfrowany komunikator dla armii izraelskiej. Uruchomił sieć społecznościową z 2 mln użytkowników z inwestycją Intel Capital (2004). Zbudował infrastrukturę billingową dla Egnyte (zaplecze Google). Współzałożyciel i CTO VentureDevs (inżynieria produktu dla Doliny Krzemowej). Członek Forbes Technology Council. Mentor: MassChallenge, ReaktorX, MIT Enterprise Forum (MITEF). Doradca strategiczny w obszarze cyberbezpieczeństwa dla sektora rządowego i prywatnego.',
        owns: 'Odpowiada za komercjalizację, fundraising, partnerstwa strategiczne, strategię produkcji i go-to-market.'
      },
      {
        monogram: 'PG',
        name: 'Patrick Gajda',
        role: 'Inwestor i doradca strategiczny',
        bio:
          'Dziesięć lat restrukturyzacji, modernizacji i skalowania spółek w wielu sektorach. Członek European Business Angel Network (EBAN). Założyciel Incidium.Space oraz SC Space & Data Inc. (infrastruktura datacenter na Księżycu). Aktywny inwestor w Space, Fintech, IT i blockchain. Inwestor założycielski NEX — kapitał obok doradztwa. Wielosektorowe doświadczenie wprost mapuje się na dual-use surface platformy NEX.',
        owns: 'Odpowiada za relacje z inwestorami, strukturę kapitałową, strategię fundraisingu i tworzenie wartości w długim horyzoncie.'
      }
    ]
  },

  roadmap: {
    eyebrow: 'Mapa drogowa',
    title: 'Osiem bramek od działającego prototypu do operacyjnego break-even.',
    body:
      '3,5 mln € seed → 22 mln € Series A → 55 mln € Series B. Skumulowanie ~80 mln € do operacyjnego break-even przy ~450 jednostek/rok (mix własnej produkcji i kanału OEM). Benchmarkowane wobec Aeroseal (119 mln $ / 13 lat) i Antora (230 mln $); poniżej Mainspring (800+ mln $) i Sunfire (487+ mln $).',
    gates: [
      { id: 'G0', label: 'Niezależny retest ISO 1217', when: 'Mies. 3–5', why: 'Pojedynczy moment najsilniej budujący wiarygodność — potwierdza 30% na akredytowanym stanowisku.' },
      { id: 'G1', label: 'First Article Inspection · komercyjny Rev A', when: 'Mies. 6–10', why: 'Zamrożenie projektu; ±5% nominalnych parametrów; skany CMM zarchiwizowane.' },
      { id: 'G2', label: 'Dokumentacja techniczna CE', when: 'Mies. 8–14', why: 'Dyrektywa Maszynowa 2006/42/WE + zgodność z Rozporządzeniem 2023/1230.' },
      { id: 'G4', label: 'Pierwszy płatny pilot u klienta', when: 'Mies. 18–28', why: 'Zamówienie po pełnej cenie; 3+ miesiące pomiarów własnych klienta.' },
      { id: 'G5', label: 'Trzech klientów referencyjnych · 30% powtórzone', when: 'Mies. 28–40', why: 'Trzy segmenty końcowego użytkowania, podpisane case studies, prawa do wskazywania jako referencja.' },
      { id: 'G7', label: 'Pierwsza umowa OEM-as-CM lub licencyjna', when: 'Mies. 42–60', why: 'Atlas Copco / Ingersoll Rand / Kaeser / Howden — niewyłączna w segmencie.' },
      { id: 'G8', label: 'Produkcja seryjna · 350–1 050 jedn./rok mix', when: 'Mies. 54–78', why: 'Operacyjny break-even przy ~450 jedn./rok; ≥30% zagregowanej marży brutto.' }
    ]
  },

  cta: {
    eyebrow: 'Dwoje drzwi',
    titleLeft: 'Dla inwestorów',
    bodyLeft:
      'Data room dla inwestorów zawiera pełny brief technologiczny, sześć rodzin patentowych (po PCT, faza krajowa w toku), ścieżkę kapitałową z wykorzystaniem środków na każdej bramce, projekcję P&L na 5 lat, benchmarki transakcji porównywalnych i 4-minutowy pitch wynalazcy. Zabezpieczone hasłem.',
    btnLeft: 'Otwórz data room',
    titleRight: 'Dla corp-dev OEM i klientów',
    bodyRight:
      'Atlas Copco, Ingersoll Rand, Kaeser, Howden, Sullair, MHI, Doosan, Hitachi — oraz odbiorcy sprężonego powietrza w rozlewniach, lakierniach motoryzacyjnych, przetwórstwie żywności, fabrykach elektroniki, szpitalach. Bezpośrednia rozmowa, NDA na życzenie.',
    btnRight: 'Porozmawiaj z zespołem'
  },

  contact: {
    eyebrow: 'Kontakt',
    name: 'Wojciech Sobczuk',
    role: 'Współzałożyciel i CEO',
    email: 'wojtek@nexngn.com',
    vdrLabel: 'Data room dla inwestorów',
    vdrHref: 'https://vdr.nexngn.com'
  },

  footer: {
    rights: '© 2026 NEX Engineering. Wszelkie prawa zastrzeżone.'
  }
};

export default pl;
