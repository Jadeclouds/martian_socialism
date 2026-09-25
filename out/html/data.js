const tooltipList = [
  {
    searchString: ["SPM", "spm"],
    mainText: "Socialist Party of Mars",
    subText: "Socialist and Democratic",
    img: "img/parties/logo_spm.svg",
    ledBy: "spm_leader",       // Pulls $Q.spm_leader dynamically from Dendry state
    ideology: "spm_ideology",   // Pulls $Q.spm_ideology dynamically from Dendry state
  },
  {
    searchString: ["MNLP", "mnlp"],
    mainText: "Martian National Liberal Party",
    img: "img/parties/logo_mnlp.svg",
    ledBy: "mnlp_leader",
    ideology: "mnlp_ideology",
  }
];

const colourList = [
  { words: ["SPM", "spm"], colour: "#ED7158", style: "font-weight: bold;", transform: "SPM" },
  { words: ["MNLP", "mnlp"], colour: "#D3C24D", style: "font-weight: bold;", transform: "MNLP" },
  { words: ["PLFM", "plfm"], colour: "#540808", style: "font-weight: bold;", transform: "PLFM" },
  { words: ["FfM", "ffm"], colour: "#5C3F1A", style: "font-weight: bold;", transform: "FfM" },
  { words: ["P", "p"], colour: "#12DB95", style: "font-weight: bold;", transform: "P" },
  { words: ["PEC", "pec"], colour: "#22275C", style: "font-weight: bold;", transform: "PEC" },
];
