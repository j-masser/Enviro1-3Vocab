/* The study set. Each line is [term, definition].
   To add a term, add it to the END of the list (adding in the middle shifts
   saved progress onto the wrong terms), then add its name to one of the
   GROUPS below so it gets similar answer choices. */
(function () {
  const PAIRS = [
    ["Environmental science", "study of the interaction of humans with the natural environment."],
    ["Law of Unintended Consequences", "states that the actions of people and governments always have unexpected effects."],
    ["Unsustainability", "condition that cannot continue at its current rate."],
    ["Safe Drinking Water Act", "Regulates the testing and contents of municipal tap water."],
    ["Clean Water Act", "Restricts pollution of surface waters."],
    ["Clean Air Act", "Restricts pollution of the atmosphere."],
    ["Resource Conservation and Recovery Act", "Describes rules for handling toxic and hazardous waste."],
    ["Endangered Species Act", "Lists species at risk for extinction and plans for their recovery."],
    ["CERCLA", "Funds the cleanup of hazardous waste sites"],
    ["Environmental Policy Act", "All federal projects must assess environmental impacts"],
    ["Antiquities Act", "Enabled creation of National Parks"],
    ["Environmental Protection Agency (EPA)", "Charged with enforcing environmental laws."],
    ["hazardous waste", "Compounds that are especially dangerous to the environment and human health."],
    ["famine", "Extreme scarcity of food."],
    ["biodiversity", "Amount of variation of species and genes within an area."],
    ["extinction", "A species disappears from the Earth completely."],
    ["persistent pollutants", "Resist normal environmental degradation."],
    ["Biodegradable pollutants", "Decompose over time."],
    ["water pollution", "Contamination of lakes, rivers, oceans, and groundwater."],
    ["carcinogenic", "Increased the risk of cancer."],
    ["air pollution", "Introduction of particles or gases into the atmosphere that are harmful to living organisms."],
    ["invasive species", "Species that overpopulate in its new environment and outcompete or harm native species."],
    ["Inexhaustible", "resources cannot be used up. Ex. Sunlight."],
    ["Renewable", "resources can be replaced, but the process may take a long time. Ex. Timber, soil."],
    ["Nonrenewable", "consumed faster than they replenish, as their formation took millions of years. Ex. Coal, oil, natural gas."],
    ["Recyclable nonrenewable", "not replaced at the rate they are used, but can be used more than once. Ex. Iron, aluminum, copper."],
    ["Anthropocentrism", "human-centered philosophy that protects and promotes human interests or well-being at the expense of all other factors."],
    ["Ecocentrism", "nature-centered philosophy that places intrinsic value on ecosystems regardless of their usefulness to humans."],
    ["environmental ethics", "the moral relationship that humans have with the environment."],
    ["National Parks", "Preserved areas that are relatively unaltered from their original state. No fishing, logging, commercial hunting, or livestock grazing can occur."],
    ["National Forests", "federally-managed, but do allow commercial logging and recreational hunting and fishing."],
    ["National Wildlife Refuges", "do not allow commercial activities, but may allow recreational hunting and fishing."],
    ["resource depletion", "where a resource is consumed faster than it can be replaced"],
    ["Commons", "areas that are shared and not owned"],
    ["Tragedy of the Commons", "areas that are shared and not owned, are likely to be depleted as individuals pursue their own self-interests"],
    ["conservationists", "Those who advocate for the sustainable use and management of natural resources."],
    ["preservationists", "Those who attempt to maintain in their present condition areas of the Earth that are to be untouched by humans."]
  ];

  /* Similar terms are grouped so multiple-choice options come from the same kind of term. */
  const GROUPS = {
    law: ["Safe Drinking Water Act", "Clean Water Act", "Clean Air Act", "Resource Conservation and Recovery Act", "Endangered Species Act", "CERCLA", "Environmental Policy Act", "Antiquities Act", "Environmental Protection Agency (EPA)"],
    land: ["National Parks", "National Forests", "National Wildlife Refuges"],
    resource: ["Inexhaustible", "Renewable", "Nonrenewable", "Recyclable nonrenewable", "resource depletion", "Commons", "Tragedy of the Commons", "Unsustainability"],
    ethics: ["Anthropocentrism", "Ecocentrism", "environmental ethics", "conservationists", "preservationists", "Environmental science", "Law of Unintended Consequences"],
    problem: ["hazardous waste", "famine", "biodiversity", "extinction", "persistent pollutants", "Biodegradable pollutants", "water pollution", "carcinogenic", "air pollution", "invasive species"]
  };
  const GROUP_NAMES = { law: "Laws & agencies", land: "Protected lands", resource: "Resources", ethics: "Ethics & ideas", problem: "Environmental problems" };
  /* Where to borrow extra answer choices when a group has fewer than 3 other terms. */
  const RELATED = { land: ["ethics", "law"], law: ["land"], resource: ["ethics"], ethics: ["resource"], problem: ["resource"] };

  const CAT = {};
  for (const [g, names] of Object.entries(GROUPS)) names.forEach(n => (CAT[n] = g));

  const terms = PAIRS.map(([t, d], i) => ({
    id: i,
    t: t.trim(),
    d: d.trim().replace(/^./, c => c.toUpperCase()),
    cat: CAT[t.trim()] || "problem"
  }));

  window.STUDY_SET = { terms, groupNames: GROUP_NAMES, related: RELATED };
})();
