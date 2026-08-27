// Reale Schweizer Kantone und Städte, nach Sprachregion gruppiert.
// Wird für die sichtbare "Einzugsgebiet"-Anzeige sowie für strukturierte
// Daten (areaServed) verwendet, um die geografische Relevanz für
// Patientinnen und Patienten aus der ganzen Schweiz abzubilden.

export const swissCantons = [
  'Zürich', 'Bern', 'Luzern', 'Uri', 'Schwyz', 'Obwalden', 'Nidwalden', 'Glarus',
  'Zug', 'Freiburg', 'Solothurn', 'Basel-Stadt', 'Basel-Landschaft', 'Schaffhausen',
  'Appenzell Ausserrhoden', 'Appenzell Innerrhoden', 'St. Gallen', 'Graubünden',
  'Aargau', 'Thurgau', 'Tessin', 'Waadt', 'Wallis', 'Neuenburg', 'Genf', 'Jura',
]

export const germanSwissCities = [
  'Zürich', 'Winterthur', 'Uster', 'Dübendorf', 'Dietikon', 'Wetzikon', 'Wädenswil',
  'Horgen', 'Volketswil', 'Illnau-Effretikon', 'Kloten', 'Bülach', 'Opfikon',
  'Wallisellen', 'Regensdorf', 'Adliswil', 'Bern', 'Köniz', 'Thun', 'Biel/Bienne',
  'Ostermundigen', 'Spiez', 'Steffisburg', 'Langenthal', 'Burgdorf', 'Luzern',
  'Kriens', 'Emmen', 'Horw', 'Zug', 'Baar', 'Cham', 'Steinhausen', 'Aarau', 'Baden',
  'Wettingen', 'Wohlen', 'Rheinfelden', 'Muttenz', 'Reinach', 'Liestal', 'Pratteln',
  'Allschwil', 'Basel', 'Riehen', 'Solothurn', 'Grenchen', 'Olten', 'St. Gallen',
  'Wil', 'Gossau', 'Rapperswil-Jona', 'Frauenfeld', 'Kreuzlingen', 'Amriswil',
  'Schaffhausen', 'Chur', 'Landquart', 'Glarus', 'Altdorf', 'Stans', 'Sarnen',
  'Appenzell', 'Herisau', 'Küsnacht', 'Zollikon', 'Rüti',
]

export const frenchSwissCities = [
  'Genève', 'Vernier', 'Lancy', 'Meyrin', 'Onex', 'Carouge', 'Lausanne', 'Renens',
  'Morges', 'Nyon', 'Vevey', 'Montreux', 'Yverdon-les-Bains', 'Fribourg', 'Bulle',
  'Neuchâtel', 'La Chaux-de-Fonds', 'Sion', 'Martigny', 'Monthey', 'Sierre',
  'Delémont', 'Porrentruy',
]

export const italianSwissCities = [
  'Lugano', 'Bellinzona', 'Locarno', 'Chiasso', 'Mendrisio', 'Massagno',
]

export const swissLocationGroups = [
  { label: 'Kantone', items: swissCantons },
  { label: 'Deutschschweiz', items: germanSwissCities },
  { label: 'Suisse romande', items: frenchSwissCities },
  { label: 'Svizzera italiana', items: italianSwissCities },
]

export const swissLocations = Array.from(new Set([
  ...swissCantons, ...germanSwissCities, ...frenchSwissCities, ...italianSwissCities,
]))
