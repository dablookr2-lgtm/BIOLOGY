/* ================= TOPIC + SET DATA ================= */
const allTopics = {

cell: {
set1: [
{q:"Which of the following is NOT a part of the structural organisation of a cell?",options:["Cytoplasm","Heart","Mitochondria","Cell wall"],answer:1,exp:"Heart is an organ, not a structural component of a cell."},

{q:"Which of the following is an INCORRECT statement about the endoplasmic reticulum?",options:["The rough endoplasmic reticulum (RER) has ribosomes attached to its surface, which help in protein synthesis.","The endoplasmic reticulum stores genetic material in it.","The endoplasmic reticulum helps in the transport of materials within the cell, especially between the cytoplasm and the nucleus.","The smooth endoplasmic reticulum (SER) is involved in the synthesis of lipids (fat molecules)."],answer:1,exp:"Genetic material is stored in the nucleus, not in the endoplasmic reticulum."},

{q:"Which of the following statements is NOT correct regarding the nucleus?",options:["Nucleus contains chromosomes.","Nuclear membrane is a double-layered structure.","Nuclear membrane is a non-porous and rigid structure.","Nucleus plays a central role in cellular reproduction."],answer:2,exp:"The nuclear membrane contains pores and is not rigid."},

{q:"Each polynucleotide of DNA is made up of small units called _____________.",options:["Nucleotide","Nuclear membrane","Nuclei","Nucleus"],answer:0,exp:"DNA is composed of repeating nucleotide units."},

{q:"_______ are unicellular elongated structures found in epidermal cells that absorb water and minerals from the soil.",options:["Root follicles","guard cells","stomata","hypoderm"],answer:0,exp:"Root follicles (root hairs) absorb water and minerals from the soil."},

{q:"Which type of wall is present in the closed system?",options:["Permeable wall","Semi-permeable wall","Adiabatic wall","Diathermal wall"],answer:2,exp:"An adiabatic wall does not allow heat transfer."},

{q:"Which of the following lacks membrane?",options:["Plant cell","Fungi cell","Viruses","Animal cell"],answer:2,exp:"Viruses are acellular and lack cellular membranes in the usual sense."},

{q:"Select the statement regarding the cytoplasm of a cell that is INCORRECT.",options:["Cytoplasm is the fluid-filled region inside plasma membrane.","Cytoplasm contains many cell organelles.","In a plant cell, cytoplasm is found between cell wall and plasma membrane.","Cytoplasm is present in both eukaryotic and prokaryotic cells."],answer:2,exp:"Cytoplasm lies within the plasma membrane, not between the cell wall and plasma membrane."},

{q:"Genes that control the characteristics of a trait are located on:",options:["chromosomes","vacuoles","endoplasmic reticulum","lysosome"],answer:0,exp:"Genes are located on chromosomes."},

{q:"Plant cell walls are composed of:",options:["cytosol","cytoplasm","glucose","cellulose"],answer:3,exp:"Plant cell walls are primarily made of cellulose."},

{q:"Which of the following scientists made the following statement? 'All cells arise from preexisting cells.'",options:["Rudolf Virchow","Robert Brown","Purkinje","Robert Hooke"],answer:0,exp:"Rudolf Virchow proposed that all cells arise from pre-existing cells."},

{q:"The number of mitochondria in a cell varies depending on which of the following?",options:["The age of the organism","The size of the nucleus","The amount of DNA present in the cell","The physiological activity of the cell"],answer:3,exp:"More active cells generally contain more mitochondria."},

{q:"Why is the plasma membrane called selectively permeable?",options:["It allows only certain substances to pass in or out.","It dissolves unwanted materials.","It allows all substances to pass freely.","It blocks all substances from entering."],answer:0,exp:"The plasma membrane selectively controls movement of substances."},

{q:"The symbol of a battery is:",options:["one long and one short line","a rectangle with arrows","several cells joined together","a circle with a dot"],answer:2,exp:"A battery is represented by several cells joined together."},

{q:"Which of the following activities CANNOT be taken as a defining characteristic of life?",options:["Visible movement like walking or running","Breathing and internal maintenance of cells","Molecular movement within the cells","Growth-related movement of plants"],answer:0,exp:"Visible movement alone is not a defining characteristic of life."},

{q:"The external layer of pollen is made of Exine _________, which is a highly resistant organic matter.",options:["Microcolonin","Intine","Sporopollenin","Microscope Tetraed"],answer:2,exp:"Sporopollenin is a highly resistant organic substance present in the exine of pollen grains."},

{q:"When plant cells lose water by osmosis, the contents shrink away from the cell wall; this process is known as __________.",options:["Diffusion","Plasmolysis","Active Transport","Passive Transport"],answer:1,exp:"Plasmolysis occurs when water leaves a plant cell causing the cytoplasm to shrink."},

{q:"In which part of a neuron is information acquired?",options:["Axon","Dendrite","Cell body","Nerve ending"],answer:1,exp:"Dendrites receive signals and acquire information from other neurons."},

{q:"Meristematic tissue contributes to plant growth because its cells:",options:["Have thick secondary walls","Continuously divide throughout life","Contain large central vacuoles","Are permanently differentiated"],answer:1,exp:"Meristematic cells remain actively dividing throughout life."},

{q:"Select the correct statement related to the characteristics of prokaryotic cell.",options:["It has more than one chromosome.","It has a single chromosome.","Nuclear region is well defined and surrounded by nuclear membrane.","Membrane bound cell organelles are present."],answer:1,exp:"Prokaryotic cells generally possess a single circular chromosome."},

{q:"Variation is useful for the survival of species over time. These variations occur due to errors in:",options:["formation of red blood cells","DNA copying","differentiation of white blood cells","formation of neurons"],answer:1,exp:"Variations arise mainly because of errors during DNA replication."},

{q:"Which of the following explains how vacuoles help maintain the structure of plant cells?",options:["By aiding in cell division","By storing chlorophyll","By providing turgidity and rigidity","By expelling excess water"],answer:2,exp:"Vacuoles maintain turgor pressure which gives rigidity to plant cells."},

{q:"What is the primary function of the cell wall in plant cells?",options:["Control cellular respiration","Transport nutrients","Control cell division","Provide rigidity and protection"],answer:3,exp:"The cell wall provides structural support and protection."},

{q:"The cytoplasmic strands that connect one cell to the other are known as ________.",options:["Spindle Fibre","Endoplasmic Reticulum","Centriole","Plasmodesmata"],answer:3,exp:"Plasmodesmata are channels connecting adjacent plant cells."},

{q:"The principal function of the plasma membrane is to:",options:["Regulate movement of substances across the cell.","Store the cell’s genetic material.","Serve as the site of ATP synthesis.","Provide rigid support and prevent cell swelling."],answer:0,exp:"The plasma membrane selectively regulates movement of materials."},

{q:"Which of the following are present only in plant cells?",options:["Golgi apparatus","Nucleus","Plastids","Mitochondrion"],answer:2,exp:"Plastids are unique to plant cells and absent in animal cells."},

{q:"Which of the following features enables simple squamous epithelium to efficiently carry out diffusion?",options:["Presence of multiple layers of cells","Cells with cilia for movement","Flat, thin, and closely packed cells","Thick cytoplasm with large nuclei"],answer:2,exp:"Its thin structure facilitates rapid diffusion."},

{q:"What similarities do plastids share with mitochondria?",options:["Both contain their own DNA and ribosomes.","Both produce ATPs.","Both are present only in plant cells.","Both contain chlorophyll."],answer:0,exp:"Both plastids and mitochondria possess their own DNA and ribosomes."},

{q:"Which organelle is responsible for photosynthesis in plants?",options:["Mitochondria","Chloroplast","Leucoplast","Chromoplast"],answer:1,exp:"Photosynthesis occurs in chloroplasts."},

{q:"Which cells present in the retina are sensitive to bright and normal light, and gives colour sensation?",options:["Blind cells","Rods or rod shaped cells","Cones or cone shaped cells","Bright cells"],answer:2,exp:"Cone cells are responsible for colour vision and function in bright light."}
],
set2: [
{q:"Which of the following cell organelles have cisterns and is involved in the formation of lysosomes?",options:["Leucoplast","Golgi apparatus","Chromoplast","Mitochondria"],answer:1,exp:"Golgi apparatus contains cisternae and helps in lysosome formation."},

{q:"The part of the muscle which shortens to create contraction is the-",options:["Actin","Epimysium","Fasciculi","Myosin"],answer:0,exp:"Actin filaments slide during muscle contraction causing shortening."},

{q:"A neuron receives nerve impulse from another neuron through ____.",options:["Axon","Synapse","Dendrite","Cell body"],answer:2,exp:"Dendrites receive nerve impulses from other neurons."},

{q:"Which property of connective tissue enables it to bind and support different body parts?",options:["Presence of cilia","Presence of contractile proteins","Presence of extracellular matrix","Presence of nerve endings"],answer:2,exp:"The extracellular matrix provides support and binding functions."},

{q:"Cardiomyocytes rely heavily on which mechanism to maintain their membrane potential and ensure proper contraction?",options:["Passive diffusion through gap junctions only","A combination of voltage-gated ion channels and active ion pumps","Facilitated diffusion of nutrients exclusively","Endocytosis of extracellular fluid"],answer:1,exp:"Cardiac muscle cells depend on ion channels and pumps for electrical activity and contraction."},

{q:"Which of the following are small-sized in animal cells while in plant cells these are very large in size?",options:["Lysosomes","Plastids","Golgi apparatus","Vacuoles"],answer:3,exp:"Plant cells usually have a large central vacuole, whereas animal cell vacuoles are smaller."},

{q:"What is the shape of the Cocci bacteria?",options:["Rod shaped","Spherical","Spiral","Comma-shaped"],answer:1,exp:"Cocci are spherical-shaped bacteria."},

{q:"ATP is broken down giving rise to a fixed amount of energy that can drive the endothermic reactions taking place in which cell organelle of a cell?",options:["Ribosome","Lysosome","Mitochondria","Chloroplast"],answer:2,exp:"Mitochondria are the major sites of ATP production and energy release."},

{q:"______ are the structures found in the epidermis of leaves that regulate the process of transpiration and gaseous transfer.",options:["Striated","Willy","Stomata","Chromatin"],answer:2,exp:"Stomata regulate gas exchange and transpiration in leaves."},

{q:"Who first described the nucleus as a cell organelle in 1831?",options:["Rudolf Virchow","Robert Hooke","Anton van Leeuwenhoek","Robert Brown"],answer:3,exp:"Robert Brown discovered and described the nucleus in 1831."},

{q:"During a nerve impulse transmission, neurotransmitters are released from one neuron and received by another. Which part of neurons are primarily involved in this chemical communication?",options:["Axon terminal → Dendrite of another neuron","Axon → Myelin sheath of nerve","Dendrite → Axon terminal of same neuron","Cell body → Axon of same neuron"],answer:0,exp:"Neurotransmitters travel from the axon terminal of one neuron to the dendrite of another."},

{q:"Which of the following best explains the division of labour seen in multicellular organisms?",options:["Each body part is made up of a single cell","Different cells have specialized functions","All cells perform the same function in an organism","Multicellular organisms have only one type of cell"],answer:1,exp:"Different cell types perform specialized functions in multicellular organisms."},

{q:"Which of the following cell structures helps amoeba to acquire its food material?",options:["Flagella","Nuclear membrane","Plasma membrane","Cilia"],answer:2,exp:"Amoeba engulfs food through extensions of the plasma membrane."},

{q:"Which of the following is the correct function of the Golgi body in a plant cell?",options:["Providing protection to the cell.","Supporting the formation of lysosomes.","Maintaining the shape of the cell.","Helping in the synthesis of proteins."],answer:1,exp:"Golgi bodies package materials and help in lysosome formation."},

{q:"Which cell organelle is responsible for releasing energy in the form of ATP, which enables various metabolic functions in an animal cell?",options:["Endoplasmic reticulum","Mitochondria","Lysosome","Nucleus"],answer:1,exp:"Mitochondria are known as the powerhouse of the cell."},

{q:"The action of transpiration in the leaves is done mainly by __________.",options:["Stomata","Acne","Micro Fibers","Plasmod"],answer:0,exp:"Stomata are the main structures responsible for transpiration in leaves."},

{q:"The dense structure inside the nucleus that produces ribosomes is called the _____.",options:["nucleolus","lysosome","centrosome","mitochondria"],answer:0,exp:"Nucleolus is responsible for ribosome formation."},

{q:"Choose a term to complete the analogy. Apical Meristem : Length :: Lateral Meristem : _____.",options:["Tips of stems","Nodes","Girth","Cell differentiation only"],answer:2,exp:"Lateral meristem increases the girth of plants."},

{q:"Which of the following is NOT correctly matched, with regard to plant and animal cells?",options:["Plastids - Absent in animal cells","Vacuoles - Very large and present in plant cells","Plastids - Present in plant cells","Cell wall - Present in animal cells"],answer:3,exp:"Animal cells do not possess a cell wall."},

{q:"Which of the following is the longest cell in our body?",options:["Nerve cell","Ovum","Blood cell","Fat cell"],answer:0,exp:"Nerve cells are the longest cells in the human body."},

{q:"What conclusion can be drawn from the microscopic observation of onion peel cells?",options:["All onions are made up of similar small structures called cells","Onion bulbs contain different cell types for different functions","Each onion peel contains cells of different composition","The size of the onion decides the shape of its individual cells"],answer:0,exp:"Observations show that onions are made up of many similar cells."},

{q:"Which of the following cell organelles is filled with digestive enzymes and helps to keep the cell clean by digesting any foreign material as well as worn out cell organelles?",options:["Ribosome","Lysosomes","Chloroplast","Chromoplast"],answer:1,exp:"Lysosomes contain digestive enzymes and act as the cell's cleaning system."},

{q:"Which of the following is a primary reason why all multi-cellular organisms do not reproduce by fragmentation?",options:["Their cells are loosely organised.","They are unicellular.","They have a random arrangement of cells.","They have specialised cells organised into tissues and organs."],answer:3,exp:"Complex tissue organization prevents fragmentation-based reproduction."},

{q:"Which of the following statements correctly describes plastids in plant cells?",options:["They are present in both plant and animal cells in equal amount","They are found in prokaryotic cells like bacteria for photosynthesis","They are present only in plant cells and absent in animal cells","They are present only in animal cells and absent in plant cells"],answer:2,exp:"Plastids occur only in plant cells."},

{q:"Which tissue is responsible for transportation of water in plants?",options:["Chloroplast","Ribosome","Xylem","Cytoplasm"],answer:2,exp:"Xylem transports water and minerals in plants."},

{q:"Which of the following statements about lysosomes is correct?",options:["Lysosomes synthesise fats.","Lysosomes contain digestive enzymes.","Lysosomes contain growth hormones.","Lysosomes synthesise proteins."],answer:1,exp:"Lysosomes are membrane-bound sacs containing digestive enzymes."},

{q:"The nucleus is separated from the cytoplasm by ______",options:["Nucleus Wall","Endocrine glands","Cell wall","Nucleus membrane"],answer:3,exp:"The nuclear membrane separates the nucleus from the cytoplasm."},

{q:"Which of the following do not have membrane-bound cell organelles bound to the membrane?",options:["Eukaryotes","Prokaryotes","Prokaryotes and eukaryotes","None of the above"],answer:1,exp:"Prokaryotes lack membrane-bound organelles."},

{q:"Which part of the neuron is responsible for acquiring information?",options:["Dendritic tip","Axon","Cell body","Synapse"],answer:0,exp:"Dendritic tips receive information from receptors or other neurons."},

{q:"Why are vesicles important in the functioning of the Golgi apparatus?",options:["They carry materials to and from the Golgi apparatus","They generate energy needed for packaging in Golgi apparatus","They help in forming the nucleus","They digest waste materials"],answer:0,exp:"Vesicles transport materials between Golgi and other cell structures."},
],
set3: [
{q:"__________ are known as the powerhouse of the cell.",options:["Nucleus","Cytoplasm","Mitochondria","Endoplasmic Reticulum"],answer:2,exp:"Mitochondria produce ATP and are called the powerhouse of the cell."},

{q:"If the concentration of carbon dioxide is higher inside the cell than outside, how will CO₂ move across the plasma membrane?",options:["CO2 will remain inside the cell","CO2 will be converted into oxygen","CO2 will move out of the cell by diffusion","CO2 will move into the cell by active transport"],answer:2,exp:"CO₂ moves from higher concentration to lower concentration by diffusion."},

{q:"Cytoplasm is made up of an aqueous ground substance called:",options:["chromoplasm","nucleoplasm","cytosol","lysosomal fluid"],answer:2,exp:"Cytosol is the aqueous component of cytoplasm."},

{q:"Which of the following outcomes identifies meiosis rather than mitosis?",options:["Many cells, same number","One larger cell, double number","Two identical cells, same number","Four cells, half number"],answer:3,exp:"Meiosis produces four haploid cells with half the chromosome number."},

{q:"_____ is found as chromatin material in a non-dividing cell's structure.",options:["RNA","Nucleus","DNA","Ribosome"],answer:2,exp:"Chromatin mainly consists of DNA in non-dividing cells."},

{q:"A neuron consists of a cell body, a nucleus, and many short, branched parts called ________.",options:["dendrites","villi","flagella","cilia"],answer:0,exp:"Dendrites are short branched projections of neurons."},

{q:"The making of new cells in organisms is called ___________.",options:["Cell secretion","Cell respiration","Cell division","Cell fusion"],answer:2,exp:"New cells are formed through cell division."},

{q:"If lysosomes are also known as the 'suicide bags' of the cell, then which of the following is the powerhouse of the cell?",options:["Endoplasmic reticulum","Mitochondria","Plastids","Vacuoles"],answer:1,exp:"Mitochondria are known as the powerhouse of the cell."},

{q:"Who discovered free living cells in pond water for the first time?",options:["Robert Hooke in 1665","Leeuwenhoek in 1674","Robert Brown in 1831","Virchow in 1855"],answer:1,exp:"Antonie van Leeuwenhoek first observed free-living cells in pond water."},

{q:"Which of the following correctly compares the cell wall and cell membrane in plant and animal cells?",options:["Both plant and animal cells have a cell wall but only plant cells have a cell membrane.","Plant cells have both a rigid cell wall and a cell membrane, while animal cells only have a flexible cell membrane.","Neither plant nor animal cells have a cell wall, but both have a cell membrane.","Animal cells have both a rigid cell wall and a cell membrane, while plant cells only have a flexible cell membrane."],answer:1,exp:"Plant cells have both cell wall and membrane, whereas animal cells have only membrane."},

{q:"Select the statement regarding cell organelles that is INCORRECT.",options:["Each cell organelle performs a special function.","They are found in Prokaryotic cells.","They are found in Eukaryotic cells.","They are membrane-bound structures."],answer:1,exp:"Membrane-bound organelles are absent in prokaryotic cells."},

{q:"Which cell has changing shapes?",options:["Smooth muscle","Nerve cell","Amoeba","Ovum"],answer:2,exp:"Amoeba continuously changes shape using pseudopodia."},

{q:"Plastids are absent in which of the following cells?",options:["Muscle cells","Stem cells","Root cells","Leaf cells"],answer:0,exp:"Animal muscle cells do not contain plastids."},

{q:"Where does the following reaction take place in a cell? The breakdown of glucose, a six-carbon molecule, into a three-carbon molecule.",options:["In the mithochondria","In the nucleus","In the golgi apparatus","In the cytoplasm"],answer:3,exp:"Glycolysis occurs in the cytoplasm."},

{q:"Which of the following characteristics correctly describes skeletal (striated) muscles?",options:["Spindle-shaped, uninucleate cells, involuntary control","Branched, uninucleate cells, involuntary control","Short, cylindrical, branched cells with intercalated discs","Long, cylindrical, unbranched, multinucleate cells, voluntary control"],answer:3,exp:"Skeletal muscles are long, cylindrical, multinucleate and under voluntary control."},

{q:"Which of the following are cells of phloem?",options:["Sieve cells and vessels","Tracheids and vessels","Sieve tubes and companion cells","Tracheids and companion cells"],answer:2,exp:"Phloem is mainly composed of sieve tubes and companion cells."},

{q:"Which of the following cell organelle is present ONLY in animal cells but not in plant cells?",options:["Vacuole","Golgi apparatus","Mitochondria","Centrosome"],answer:3,exp:"Centrosome is present in animal cells and absent in higher plant cells."},

{q:"Which of the following cell organelles release adenosine triphosphate (ATP)?",options:["Vacuole","Lysosomes","Endoplasmic reticulum","Mitochondria"],answer:3,exp:"Mitochondria produce ATP and are called the powerhouse of the cell."},

{q:"Dendrons are parts of -",options:["Nephron","Cartilage","Muscle Cell","Neuron"],answer:3,exp:"Dendrons are branched projections of a neuron."},

{q:"Which of the following cell organelles do NOT have their own DNA?",options:["Lysosomes","Nucleus","Mitochondria","Plastids"],answer:0,exp:"Lysosomes do not contain their own DNA."},

{q:"In a multicellular organism, how does each cell support the survival of the organism?",options:["By converting itself into a complete organ","By trying to carry out all life functions by itself","By working independently without interacting with other cells","By following division of labour"],answer:3,exp:"Cells perform specialized functions through division of labour."},

{q:"Who coined the term ‘protoplasm’ for the fluid substance of the cell?",options:["Virchow","Robert Brown","Purkinje","Robert Hooke"],answer:2,exp:"J.E. Purkinje coined the term protoplasm."},

{q:"What is the term used for the division of cytoplasm following nuclear division?",options:["Chromatin condensation","Karyokinesis","Cytokinesis","Interphase"],answer:2,exp:"Cytokinesis is the division of cytoplasm after nuclear division."},

{q:"The fluid content inside the plasma membrane is named:",options:["Chromatin","Genes","Cytoplasm","Chromosomes"],answer:2,exp:"Cytoplasm is the jelly-like fluid inside the plasma membrane."},

{q:"The efficiency of gas exchange in the alveoli is primarily attributed to which structural characteristic?",options:["Thick epithelial lining to protect from pathogens","Abundance of mucus-secreting cells","A robust elastic network to maintain alveolar shape","Large surface area combined with a thin alveolar-capillary barrier"],answer:3,exp:"Alveoli provide a large surface area and thin walls for efficient gas exchange."},

{q:"Rough endoplasmic reticulum (RER) bears _____ for protein synthesis, while smooth endoplasmic reticulum (SER) synthesizes _____.",options:["Enzymes; sugars","Ribosomes; lipids","Lysosomes; DNA","Pores; RNA"],answer:1,exp:"RER contains ribosomes while SER synthesizes lipids."},

{q:"Which of the following cell organelles releases Adenosine Tri Phosphate (ATP) molecules needed for life activities?",options:["Mitochondria","Vacuoles","Golgi apparatus","Lysosomes"],answer:0,exp:"ATP is produced in mitochondria during respiration."},

{q:"What specialisation is commonly found in the epidermal cells of plant roots to aid in their primary function?",options:["Irregularly thickened corners","Large air cavities (aerenchyma)","A thick, waxy coating of cutin","Long, hair-like extensions"],answer:3,exp:"Root hairs increase surface area for absorption."},

{q:"What unique feature allows mitochondria to produce some of their own proteins?",options:["They contain their own DNA and ribosomes","They have two membranes","They produce ATP","Their outer membrane is porous"],answer:0,exp:"Mitochondria possess their own DNA and ribosomes."},

{q:"Name the scientist who first discovered the cell in 1665.",options:["Matthias Jakob Schleiden","Theodor Schwann","Antonie van Leeuwenhoek","Robert Hooke"],answer:3,exp:"Robert Hooke discovered cells in cork in 1665."},

{q:"Who first observed the densely stained reticular structures near the nucleus, now known as Golgi bodies?",options:["Robert Hooke","Camillo Golgi","Matthias Schleiden","Anton van Leeuwenhoek"],answer:1,exp:"Golgi bodies were discovered by Camillo Golgi."},

{q:"Which of the following represents a group of similar cells performing a specific function?",options:["Organelles","Plasmids","Cytoplasm","Tissues"],answer:3,exp:"A tissue is a group of similar cells performing a common function."},

{q:"Which of the following organelles is the first to divide during binary fission in Amoeba?",options:["Cell wall","Cytoplasm","Nucleus","Vacuole"],answer:2,exp:"Nuclear division occurs before cytoplasmic division."}

],
set4: [
{q:"The smallest unit of life capable of independent existence is:",options:["Protoplasm","Cytoplasm","Cell","Vacuoles"],answer:2,exp:"Cell is the basic structural and functional unit of life."},

{q:"The cell wall of plant cells is formed of:",options:["Cellulose","Cell wall membrane","The nucleus membrane","Molecular membrane"],answer:0,exp:"Plant cell walls are mainly composed of cellulose."},

{q:"In multicellular organisms like humans, digestion occurs in:",options:["Food vacuoles","Entire cell surface","Nucleus","Specialised digestive organs"],answer:3,exp:"Humans digest food through specialised digestive organs."},

{q:"Which of the following statements correctly compares vacuoles in plant and animal cells?",options:["Vacuoles are absent in both plant and animal cells","Animal cells have larger vacuoles than plant cells","Plant cells have large vacuoles, animal cells have small ones","Both plant and animal cells have equal-sized vacuoles"],answer:2,exp:"Plant cells usually have a large central vacuole."},

{q:"Which of the following is INCORRECT about meristematic tissues?",options:["Lack of vacuoles","Thin walled","Presence of vacuoles","Actively dividing cells"],answer:2,exp:"Meristematic cells generally lack vacuoles."},

{q:"Which cell organelles in a leaf contain chlorophyll necessary for photosynthesis?",options:["Nucleus","Chloroplasts","Mitochondria","Vacuole"],answer:1,exp:"Chloroplasts contain chlorophyll for photosynthesis."},

{q:"Which of the following cell organelles stores starch, oil and protein granules?",options:["All plastids","Leucoplast","Chromoplast","Chloroplast"],answer:1,exp:"Leucoplasts store food materials like starch, oils and proteins."},

{q:"Which organelle is called the 'suicidal bag' of the cell?",options:["Ribosome","Golgi body","Mitochondria","Lysosome"],answer:3,exp:"Lysosomes contain digestive enzymes that can digest cell components."},

{q:"Why can tiny molecules like oxygen easily pass through the cell membrane, but not the big ones like starch or proteins?",options:["Small molecules have special energy to push through","Big molecules have to break down for entry","The cell membrane is permeable to selective substances","The cell membrane is completely solid"],answer:2,exp:"The plasma membrane is selectively permeable."},

{q:"Which of the following statements is INCORRECT?",options:["In Amoeba, splitting can take place in any plane","Yeast forms buds that separate and grow","Plasmodium divides into many daughter cells simultaneously by binary fission","Binary fission occurs in a definite orientation in Leishmania"],answer:2,exp:"Plasmodium reproduces by multiple fission, not binary fission."},

{q:"If multiple fission :: many cells, then binary fission :: ______.",options:["Two cells","Three cells","Four cells","One cell"],answer:0,exp:"Binary fission produces two daughter cells."},

{q:"What is the main purpose of cell division in multicellular organisms?",options:["Growth, repair, and replacement of damaged or old cells","Absorption of nutrients and release of wastes","Transport of substances through the cell membrane","Formation of vacuoles and maintenance of turgidity"],answer:0,exp:"Cell division helps in growth, repair and replacement."},

{q:"When a living plant cell loses water through osmosis, what happens to the cell contents?",options:["They remain unchanged","They dissolve","They swell and burst","They contract and move away from the cell wall"],answer:3,exp:"Loss of water causes plasmolysis."},

{q:"Which of the following cells change shape by changing the amount of water in them?",options:["Smooth muscle cell","Striated muscle cell","Cardiac muscle cell","Plant cell"],answer:3,exp:"Plant cells change shape due to changes in turgor pressure."},

{q:"Which structure is present in plant cells but absent in animal cells?",options:["Cell wall","Mitochondria","Endoplasmic reticulum","Cytoplasm"],answer:0,exp:"Animal cells do not possess a cell wall."},

{q:"The study of different types of tissues is called:",options:["Cytology","Cell physiology","Cell biology","Histology"],answer:3,exp:"Histology is the study of tissues."},

{q:"Which statement is INCORRECT regarding prokaryotic organism?",options:["Nuclear region is defined","Primitive form of organism","Membrane-bound organelles are absent","Single chromosome is present"],answer:0,exp:"Prokaryotes lack a true nucleus."},

{q:"Prokaryotic cells differ from eukaryotic cells in having which of the following?",options:["Membrane-bound organelles","No membrane-bound nucleus","A true nucleus","Ribosomes"],answer:1,exp:"Prokaryotes do not have a membrane-bound nucleus."},

{q:"The plant cell wall is primarily composed of:",options:["Cellulose","Chitin","Suberin","N-Acetyl glucosamine"],answer:0,exp:"Cellulose is the main component of plant cell walls."},

{q:"The double-layered covering of the nucleus is called as ______.",options:["Cell wall","Nuclear membrane","Chromatin wall","Plasma membrane"],answer:1,exp:"The nucleus is enclosed by a double-layered nuclear membrane."},

{q:"Which cell organelle is known as the 'suicide bag'?",options:["Ribosome","Lysosome","Centrosome","Cytoplasm"],answer:1,exp:"Lysosomes contain hydrolytic enzymes."},

{q:"The cellular organelles are suspended in a jelly called _________.",options:["Cytoplasm","Lumen","Stroma","Nucleoplasm"],answer:0,exp:"Cell organelles remain suspended in the cytoplasm."},

{q:"Which is the largest organelle in a cell?",options:["Mitochondria","Endoplasmic reticulum","Nucleus","Golgi body"],answer:2,exp:"The nucleus is usually the largest organelle in eukaryotic cells."},

{q:"Which of the following is the characteristic of striated muscles?",options:["Cylindrical, branched and multinucleate","Spindle-shaped, unbranched and multinucleate","Spindle-shaped, unbranched and uninucleate","Cylindrical, unbranched and multinucleate"],answer:3,exp:"Striated muscles are cylindrical, unbranched and multinucleate."},

{q:"Why is the plasma membrane called a selectively permeable membrane?",options:["It prevents all materials from entering or leaving the cell","It controls energy production for the entire cell","It allows only certain substances to pass through while restricting others","It allows free and equal movement of all substances"],answer:2,exp:"Only selected substances can cross the plasma membrane."},

{q:"When observing onion peel and cheek cells under a microscope, which part appears lightly stained and contains many organelles?",options:["Nucleus","Cytoplasm","Cell membrane only","Cell wall only"],answer:1,exp:"The cytoplasm contains most cell organelles."},

{q:"Organisms whose cells lack a nuclear membrane are called _______.",options:["Eukaryotes","Prokaryotes","Cytoplasm","Chromatin"],answer:1,exp:"Prokaryotes do not have a nuclear membrane."},

{q:"By which process do plants release water from hydathodes on leaf margins?",options:["Guttation","Wilting","Cytomixis","Cavitation"],answer:0,exp:"Guttation is the loss of water through hydathodes."},

{q:"Which of the following features are displayed by all cells under a microscope?",options:["Only nucleus and cytoplasm","Plasma membrane, nucleus and cytoplasm","Only plasma membrane and nucleus","Only plasma membrane and cytoplasm"],answer:3,exp:"All cells possess plasma membrane and cytoplasm."},

{q:"Where is glucose converted into pyruvate?",options:["Ribosome","Cytoplasm","Golgi complex","Mitochondria"],answer:1,exp:"Glycolysis occurs in the cytoplasm."},

{q:"Which of the following is present only in plant cell?",options:["Cell wall","Vacuoles","Nucleus","Endoplasmic reticulum"],answer:0,exp:"Cell wall is absent in animal cells."},

{q:"Which of the following statements is correct regarding mitochondria in a plant cell?",options:["Mitochondria does not have its own DNA","Mitochondria performs photosynthesis","Mitochondria has a single membranous covering","The mitochondrial inner membrane is deeply folded"],answer:3,exp:"The inner membrane forms cristae to increase surface area."},

{q:"Which cell organelle is associated with generation of ATP?",options:["Lysosomes","Mitochondria","Chloroplast","Endoplasmic reticulum"],answer:1,exp:"Mitochondria are the powerhouse of the cell."},

{q:"When salt solution is applied to boiled Rhoeo leaf peels, it fails to show plasmolysis due to:",options:["Chlorophyll takes up water","Walls block salts","Nuclei stop diffusion","Dead cells cannot osmoregulate"],answer:3,exp:"Plasmolysis occurs only in living cells."},

{q:"Which of the following is true about trichomes on the stem?",options:["They are present only in roots","They never function in water retention","They are always unbranched and unicellular","They are multicellular and may be secretory"],answer:3,exp:"Stem trichomes may be multicellular and secretory."},

{q:"Every cell has a _________ around it to keep its contents separate from the external environment.",options:["Mitochondria","Cell wall","Membrane","Nucleus"],answer:2,exp:"The plasma membrane separates cell contents from the environment."},

{q:"The deeply folded inner membrane of mitochondria helps to increase the _________ for ATP generation.",options:["Surface area","Cell wall thickness","Colour","Volume"],answer:0,exp:"Cristae increase the surface area for respiration."},

{q:"Due to presence of which particle does Rough Endoplasmic Reticulum look rough under a microscope?",options:["Centrosome","Lysosome","Ribosome","Peroxisome"],answer:2,exp:"Ribosomes attached to RER make it appear rough."},

{q:"In the respiratory tract, columnar epithelium possesses cilia. What is the primary function of these cilia?",options:["To move and push mucus forward to clear it","To provide only mechanical support","To secrete substances","To increase surface area for absorption"],answer:0,exp:"Cilia help remove mucus and trapped particles."},

{q:"Why does the growth of an onion root stop after its tip is cut?",options:["The intercalary meristem starts working","The apical meristem that produces new cells is removed","The lateral meristem gets damaged","The meristematic cells lose their vacuoles"],answer:1,exp:"Root growth occurs due to the apical meristem."},

{q:"Which cell organelle is responsible for packaging and dispatching materials within or outside the cell?",options:["Mitochondria","Ribosome","Nucleus","Golgi apparatus"],answer:3,exp:"Golgi apparatus packages and transports materials."},

{q:"What is the gap between two neurons called?",options:["Stroma","Synapse","Lumen","Intermembrane space"],answer:1,exp:"Signals pass between neurons through a synapse."},

{q:"Which of the following is NOT the characteristic of epithelial tissue?",options:["Cells have no intercellular spaces","Skin and kidney tubules are made of epithelial tissue","Cells are loosely arranged","Cells form a continuous sheet"],answer:2,exp:"Epithelial cells are tightly packed, not loosely arranged."},

{q:"In which of the following organisms is fragmentation common?",options:["Only a few multicellular organisms","In all unicellular organisms","In all multicellular organisms","Only in few unicellular organisms"],answer:0,exp:"Fragmentation occurs in some multicellular organisms like Spirogyra."},

{q:"Chloroplast is present in which of the following parts of a cell?",options:["Nucleoplasm","Peroxisome","Cytoplasm","Endoplasmic reticulum"],answer:2,exp:"Chloroplasts are suspended in the cytoplasm."},

{q:"In a hypotonic solution, which statement is correct for animal tissues compared with plant tissues?",options:["Animal cells resist swelling due to a rigid wall","Animal cells have thicker cellulose walls than plants","Animal cells are more likely to lyse without an external wall","Animal cells shrink more than plant cells"],answer:2,exp:"Animal cells may burst because they lack a rigid cell wall."},

{q:"Which description correctly characterises parenchyma cells in the pith of a mature stem?",options:["Large, loosely arranged living cells for storage","Tightly packed dead cells aiding support and conduction","Thick-walled lignified cells for strength","Sclerenchyma fibers forming a protective cylinder"],answer:0,exp:"Parenchyma cells are living storage cells."},

{q:"Meristematic tissue in plants is mainly characterized by:",options:["Permanent storage cells","Mature cells with thick walls","Small, actively dividing cells with thin walls","Large, highly vacuolated cells"],answer:2,exp:"Meristematic cells divide actively and have thin walls."},
],
set5:[

{q:"What is the primary component of the plant cell wall?",options:["Lignin","Cutin","Suberin","Cellulose"],answer:3,exp:"Cellulose is the main structural component of plant cell walls."},

{q:"Glucose molecule breaks down into _______.",options:["Pyruvic acid","Lactic acid","Cytoplasm","Mitochondria"],answer:0,exp:"Glucose is converted into pyruvic acid during glycolysis."},

{q:"Which of the following describes a key function of lysosomal enzymes?",options:["Breaking down proteins, lipids, and carbohydrates","Creating new proteins for the cell","Transporting molecules across the membrane","Storing genetic material"],answer:0,exp:"Lysosomal enzymes digest complex biological molecules."},

{q:"In glycolysis, which enzyme catalyses the rate-limiting phosphorylation of fructose-6 phosphate?",options:["Phosphofructokinase-1 (PFK-1)","Pyruvate kinase","Hexokinase","Glyceraldehyde-3-phosphate dehydrogenase"],answer:0,exp:"PFK-1 is the key regulatory enzyme of glycolysis."},

{q:"Which of the following is true about the cells of meristematic tissue?",options:["They are loosely packed, mature cells with large intercellular spaces","They are active cells with dense cytoplasm, thin walls, prominent nuclei and no vacuoles","They are inactive with large vacuoles and thick walls","They are dead cells with no nucleus or cytoplasm"],answer:1,exp:"Meristematic cells actively divide and lack vacuoles."},

{q:"When onion bulbs of different sizes are viewed under a microscope, all show similar rectangular structures. This proves that _________.",options:["Only big onions have cells","Cells differ in an onion","Cork cells are living","All living things are made of cells"],answer:3,exp:"Cell theory states that all living organisms are made of cells."},

{q:"Which of the following is the rod-shaped structure found in the nucleus only when the cell is about to divide?",options:["Mitochondria","Lysosomes","Chromosomes","Chromatin"],answer:2,exp:"Chromosomes become visible during cell division."},

{q:"Cells of the meristematic tissue lack vacuoles because:",options:["Meristematic cells are actively dividing and need a dense cytoplasm","Vacuoles cause cell death","Meristematic cells are dead and do not need vacuoles","Vacuoles block respiratory enzymes"],answer:0,exp:"Dense cytoplasm supports rapid cell division."},

{q:"In phloem, which of the following cells are dead cells?",options:["Companion cells","Phloem fibres","Sieve cells","Phloem parenchyma"],answer:1,exp:"Phloem fibres are dead supportive cells."},

{q:"A large central vacuole is a characteristic feature of which of the following cells?",options:["Protozoan cells","Bacterial cells","Plant cells","Animal cells"],answer:2,exp:"Plant cells contain a large central vacuole."},

{q:"During an experiment, a cell is damaged and its lysosomes burst, releasing digestive enzymes into the cytoplasm. What is most likely to happen next?",options:["The cell will grow in size","The mitochondria will produce more energy","The nucleus will divide rapidly","The cell will destroy itself and die"],answer:3,exp:"Lysosomal enzymes can digest the cell itself."},

{q:"What is the reason for the formation of a bud in Hydra?",options:["Cell cycle","Mutation","Repeated cell division at one specific site","Overgrowth of the whole body"],answer:2,exp:"Budding occurs due to repeated mitotic divisions at a specific site."},

{q:"Which of the following is absent in cells of meristematic tissue?",options:["Nuclei","Vacuoles","Cell walls","Cytoplasm"],answer:1,exp:"Meristematic cells generally lack vacuoles."},

{q:"The branch of science that studies cells is called ________.",options:["Cytology","Entomology","Homoplastic","Hormonology"],answer:0,exp:"Cytology is the study of cells."},

{q:"Which cell organelle utilizes light energy during photosynthesis?",options:["Golgi body","Mitochondria","Ribosome","Chloroplasts"],answer:3,exp:"Chloroplasts trap light energy for photosynthesis."},

{q:"Two cylindrical structures found in the cytoplasm are called centriole, which together form the following:",options:["Cilia","Flagella","Centrosome","Ribosome"],answer:2,exp:"A pair of centrioles forms a centrosome."},

{q:"Membrane bound organelles are NOT present in:",options:["Neither eukaryotic nor prokaryotic cells","Only eukaryotic cells","Both eukaryotic and prokaryotic cells","Only prokaryotic cells"],answer:3,exp:"Prokaryotic cells lack membrane-bound organelles."},

{q:"Axon : Single long process :: Dendrite : ____________",options:["Many short, branched parts","Protective connective tissue","Cell body with nucleus","Rapid stimulus transmission"],answer:0,exp:"Dendrites are short and highly branched."},

{q:"Which of the following is responsible for the conversion of stored fats into sugars in plant cell?",options:["Oxysome","Glyoxysome","Golgi body","Ribosome"],answer:1,exp:"Glyoxysomes convert fats into sugars in germinating seeds."},

{q:"In onion peel and human cheek cells, the lightly stained region enclosed by the cell membrane is called:",options:["Vacuole","Nucleus","Cytoplasm","Cell wall"],answer:2,exp:"The cytoplasm is the lightly stained region inside the membrane."},

{q:"Which process ensures half the amount of DNA in reproductive cells as compared to non-reproductive cells?",options:["Cytokinesis","Amitosis","Mitosis","Meiosis"],answer:3,exp:"Meiosis reduces chromosome number by half."},

{q:"Which of the following cell organelles have their own DNA and ribosomes?",options:["Golgi apparatus","Lysosomes","Endoplasmic reticulum","Mitochondria"],answer:3,exp:"Mitochondria possess their own DNA and ribosomes."},

{q:"Which of the following is NOT a function of the cell wall?",options:["Providing shape to the cell","Protecting the cell from mechanical damage","Synthesising proteins for the cell","Helping in cell-to-cell interaction"],answer:2,exp:"Protein synthesis occurs on ribosomes, not in the cell wall."},

{q:"Which cell organelle is responsible for the manufacture of lipids in the cell?",options:["Rough Endoplasmic Reticulum","Golgi Apparatus","Mitochondria","Smooth Endoplasmic Reticulum"],answer:3,exp:"SER is the major site of lipid synthesis."},

{q:"In the presence of oxygen in _________, the pyruvate dissolution occurs.",options:["Endoplasmic Reticulum","Mitochondria","Cytoplasm","Lysosome"],answer:1,exp:"Aerobic breakdown of pyruvate occurs in mitochondria."},

{q:"Muscle cells show higher mitochondrial activity after exercise. The result indicates which of the following?",options:["More energy is required during activity","Cell division stops","Mitochondria cause fatigue","Cells are becoming larger"],answer:0,exp:"Exercise increases cellular energy demand."},

{q:"Which of the following is the fluid content inside the plasma membrane?",options:["Ribosomes","Nuclear membrane","Cytoplasm","Cell wall"],answer:2,exp:"Cytoplasm is the fluid matrix of the cell."},

{q:"Which statement is NOT true about smooth muscles?",options:["They control involuntary movements","They have striations","They are uninucleate","They are spindle-shaped cells"],answer:1,exp:"Smooth muscles are non-striated."},

{q:"What is the network of tiny tubular structures found in the cytoplasm of eukaryotic cells called?",options:["Mitochondria","Lysosome","Golgi apparatus","Endoplasmic reticulum"],answer:3,exp:"The ER forms a network of membranous tubules."},

{q:"Which part of the food-conducting complex tissue in plants is tubular and has perforated walls?",options:["Sieve plate","Phloem parenchyma","Companion cell","Sieve tube"],answer:3,exp:"Sieve tubes conduct food in plants."},

{q:"Which part of a neuron carries the nerve impulse away from the cell body?",options:["Axon","Synapse","Nucleus","Dendrite"],answer:0,exp:"Axons transmit impulses away from the cell body."},

{q:"Which cell organelle serves as a channel for transport of material between various regions of cytoplasm?",options:["Mitochondria","Lysosomes","Endoplasmic reticulum","Chloroplast"],answer:2,exp:"The ER transports materials within the cell."},

{q:"Which of the following processes allows carbon dioxide to move out of a cell?",options:["Endocytosis","Diffusion","Osmosis","Active transport"],answer:1,exp:"Carbon dioxide moves across membranes by diffusion."},

{q:"The process by which the water content of a living plant decreases due to osmosis, resulting in the shrinkage of the plant, is called?",options:["Plasmolysis","Situation","Blastolysis","Hemolysis"],answer:0,exp:"Plasmolysis occurs when plant cells lose water by osmosis."}

],
set6:[
{q:"Crocodiles have a ________ heart.",options:["Six-chambered","Four-chambered","One-chambered","Two-chambered"],answer:1,exp:"Crocodiles are reptiles with a four-chambered heart."},

{q:"Cells differ in shape and size according to the work they perform in living organisms. Which of the following correctly compares a cell’s shape with its function?",options:["Amoeba – Irregular in shape, helps in movement and capturing food","Nerve cell – Round in shape, stores food","Muscle cell – Flat and disc-shaped, carries oxygen","Red blood cell – Long and branched, transmits messages"],answer:0,exp:"Amoeba changes shape for movement and food capture."},

{q:"What is the function of the nuclear membrane in a cell?",options:["It regulates the transfer of material between nucleus and cytoplasm","It prevents the entry of gases and water molecules into the nucleus","It provides energy for nuclear division during mitosis","It stores digestive enzymes for chromosomal activities"],answer:0,exp:"The nuclear membrane controls exchange between nucleus and cytoplasm."},

{q:"Most mature plant cells have a _____ that helps to maintain the turgidity of the cell and store important substances including wastes.",options:["Large central vacuole","Chromoplasts","Leucoplasts","Small ribosome"],answer:0,exp:"A large central vacuole maintains cell turgidity and storage."},

{q:"Organisms having only one cell are called ______.",options:["Unicellular","Multicellular","Singular","Unisexual"],answer:0,exp:"Unicellular organisms consist of a single cell."},

{q:"Which of the following cell contents is scattered independently in cytoplasm or connected to the membranes of endoplasmic reticulum?",options:["Mitochondria","Plastid","Ribosome","Lysosome"],answer:2,exp:"Ribosomes may be free in cytoplasm or attached to ER."},

{q:"Where in the body would you expect to find a single layer of extremely thin, flat epithelial cells designed for gas exchange?",options:["Lining of kidney tubules","Inner lining of intestine","Lining of lung alveoli","Skin"],answer:2,exp:"Alveoli contain simple squamous epithelium for gas exchange."},

{q:"The outermost layer of skin is called-",options:["Epidermis","Cutin","Dermis","Keratin"],answer:0,exp:"The epidermis forms the outer protective layer of skin."},

{q:"Why do cells in a multicellular organism exhibit a wide range of shapes and sizes?",options:["Their structure is adapted to perform specific functions","Variation has no functional significance","Cell shape is random","Each cell type contains a different genome"],answer:0,exp:"Cell shape is related to its specialized function."},

{q:"Which type of cell has very small vacuoles?",options:["Plant cell","Bacterial cell","Fungal cell","Animal cell"],answer:3,exp:"Animal cells generally have small temporary vacuoles."},

{q:"Which of the following is the primary function of the cell membrane?",options:["Synthesising proteins","Regulating the passage of substances in and out of the cell","Storing genetic information","Providing structural support"],answer:1,exp:"The plasma membrane controls movement of substances."},

{q:"Purkinje fibres are specialized ________.",options:["Cells in blood","Neurons in the brain","Cells in bone marrow","Muscle fibres in the heart"],answer:3,exp:"Purkinje fibres conduct electrical impulses in the heart."},

{q:"Which of the following is the longest cell in our body?",options:["Fat cell","Ovum","Blood cell","Nerve cell"],answer:3,exp:"Nerve cells can extend over very long distances."},

{q:"Which of the following features is seen in every cell under a microscope?",options:["Lysosome","Mitochondria","Cell membrane","Chromosome"],answer:2,exp:"Every cell is bounded by a cell membrane."},

{q:"Covalent bonds are formed by the sharing of electrons between two atoms so that both can achieve a completely filled _______ shell.",options:["Outermost","Innermost","Centre","Proper"],answer:0,exp:"Atoms share electrons to complete their outermost shell."},

{q:"Which description best defines cytoplasm?",options:["Rigid layer outside the plasma membrane providing support","Genetic material present in the form of chromatin","Fluid content inside the plasma membrane containing organelles","Network of tubes involved in protein transport"],answer:2,exp:"Cytoplasm is the fluid matrix containing organelles."},

{q:"Who discovered the cell?",options:["Theodor Schwann","Matthias Schleiden","Robert Hooke","Rudolf Virchow"],answer:2,exp:"Robert Hooke discovered cells in cork in 1665."},

{q:"Which of the following cell organelles have enough surface area for ATP-generating chemical reactions?",options:["Mitochondria","Lysosomes","Vacuoles","Cell wall"],answer:0,exp:"Cristae in mitochondria provide a large surface area."},

{q:"Which of the following statements about vacuoles is INCORRECT?",options:["Vacuoles help provide turgidity and rigidity","Vacuoles store amino acids, sugars and proteins","Plant cells usually have a large central vacuole","Vacuoles are responsible for protein synthesis"],answer:3,exp:"Protein synthesis occurs on ribosomes, not vacuoles."},

{q:"What distinguishes rough ER (RER) from smooth ER (SER)?",options:["Presence of ribosomes on RER, absence on SER","Presence of chlorophyll on RER","Absence of membranes in RER","Absence of proteins in RER"],answer:0,exp:"RER has ribosomes attached to its surface."},

],
set7:[
{q:"In multicellular organisms, why can't simple diffusion alone meet the requirements of all cells?",options:["Because all cells are directly exposed to air","Because diffusion only transports oxygen","Because diffusion requires light","Because body size and complexity increase"],answer:3,exp:"Large multicellular organisms need specialized transport systems."},

{q:"Which of the following is true about nuclear membranes and other cell organelles in cells?",options:["All cytoplasmic organelles are present in prokaryotic cells","The nuclear membrane is present in prokaryotic cells","The nuclear membrane is absent in eukaryotic cells","The nuclear membrane is absent in prokaryotic cells"],answer:3,exp:"Prokaryotes lack a true nucleus and nuclear membrane."},

{q:"Which of the following statements is INCORRECT regarding the shape and function of different cell types?",options:["White blood cells can change shape to move through tissues","Nerve cells are long and branched to carry messages","Red blood cells are biconcave to increase oxygen-carrying capacity","Muscle cells are flat and circular to help them flow in blood"],answer:3,exp:"Muscle cells are elongated and contractile, not flat and circular."},

{q:"Which of the following option is INCORRECT about plasma membrane?",options:["It is outermost covering of the cell","Plasma membrane is made up of lipid and protein","It is selectively permeable","It is rigid in nature"],answer:3,exp:"The plasma membrane is flexible, not rigid."},

{q:"Which structural-functional issue in a plant root would hinder gas exchange but not significantly impact water absorption?",options:["Endodermal cells without suberin","Mutated epiblema cells lacking vacuole","Disrupted stomatal apparatus on aerial organs","Absence of root hairs due to epidermal deformation"],answer:2,exp:"Stomata are involved in gas exchange rather than water absorption by roots."},

{q:"The inner lining of the small intestine has numerous finger like projections that are called:",options:["Enzymes","Tissues","Villi","Cells"],answer:2,exp:"Villi increase the surface area for absorption."},

{q:"The rigid outer covering present outside the plasma membrane in plants is called the:",options:["Cell envelope","Selectively permeable membrane","Cell wall","Nuclear membrane"],answer:2,exp:"The cell wall provides rigidity and protection."},

{q:"Which of the following events happens when lysosomes in a cell burst?",options:["Enzymes digest foreign particles only","Cell division increases","Cell becomes more active","Enzymes digest the cell’s own components"],answer:3,exp:"Lysosomal enzymes can digest the cell itself."},

{q:"Lysosomes are also known as:",options:["Control centers","Energy powerhouses","Suicidal bags of the cell","Protein factories"],answer:2,exp:"Lysosomes contain digestive enzymes and are called suicidal bags."},

{q:"Which cell has changing shapes?",options:["Smooth Muscle","Ovum","Amoeba","Nerve cell"],answer:2,exp:"Amoeba constantly changes shape using pseudopodia."},

{q:"Plastids are easily observed under a microscope because:",options:["They are large and contain pigments","They contain DNA","They are very small","They are colourless"],answer:0,exp:"Pigmented plastids are easily visible under a microscope."},

{q:"Bone is classified as connective tissue primarily because it:",options:["Transports oxygen","Produces nerve impulses","Contains cells dispersed in a mineralised extracellular matrix","Lacks any matrix substance"],answer:2,exp:"Bone cells are embedded in a hard extracellular matrix."},

{q:"________ are a kind of waste disposal system of the cell. They help to keep the cell clean by digesting any foreign materials as well as worn-out cell organelles.",options:["Mitochondria","Plastids","Lysosomes","Golgi"],answer:2,exp:"Lysosomes digest waste materials and damaged organelles."},

{q:"In which part of the neurons, is the first electrical impulse created?",options:["Cell body","Nerve ending","Axon","Dendrite"],answer:3,exp:"Dendrites receive stimuli and initiate nerve impulses."},

{q:"What is the name of the glycoprotein produced in the liver that plays a crucial role in blood clotting?",options:["Fibrinogen","Cadherin","Mucins","Selectin"],answer:0,exp:"Fibrinogen is converted into fibrin during clot formation."},

{q:"Which of these is found only in plants?",options:["Nuclei","Cell Structure","Cell membrane","Cell wall"],answer:3,exp:"The cell wall is a unique feature of plant cells."},

{q:"How does a plant move its leaves in response to touch?",options:["By changing the amount of nucleic acid in them","By changing the amount of protein in them","By changing the amount of lipid in them","By changing the amount of water in them"],answer:3,exp:"Leaf movements occur due to changes in turgor pressure."},

{q:"Which of the following examples best illustrates the real-life role of lysosomes in action?",options:["A nerve cell passing signals","A white blood cell swallowing and breaking down harmful bacteria","A green leaf making food by photosynthesis","A red blood cell delivering oxygen"],answer:1,exp:"Lysosomes digest bacteria engulfed by white blood cells."},

{q:"Which organelle is the powerhouse of the cell?",options:["Golgi apparatus","Plastids","Mitochondria","Endoplasmic reticulum"],answer:2,exp:"Mitochondria generate most of the cell's ATP."},

{q:"Which of the following organelles helps to keep the cell clean by digesting any foreign material as well as worn out cell organelles?",options:["Mitochondria","Endoplasmic reticulum","Golgi apparatus","Lysosome"],answer:3,exp:"Lysosomes act as the cleaning system of the cell."},

{q:"What is the primary function of lysosomes in a cell?",options:["Synthesis of proteins and lipids","Digestion of foreign materials and worn-out organelles","Production of ATP","Regulation of water and mineral balance"],answer:1,exp:"Lysosomes digest cellular waste and foreign substances."},

{q:"Complex tissues are made up of:",options:["Only one cell","One type of cells","More than one type of cells","No cells"],answer:2,exp:"Complex tissues contain multiple cell types working together."},

{q:"Cytoplasm is a jelly-like fluid that is present between:",options:["Nucleus and organelles","Nerves and cells","Fats and tissues","Nucleus and cell membrane"],answer:3,exp:"Cytoplasm fills the space between nucleus and cell membrane."},

{q:"Which organ is responsible for the opening and closing of stomata in plants?",options:["Stigma","Guard cells","Leaves","Stomata"],answer:1,exp:"Guard cells regulate stomatal opening and closing."},

{q:"Which cytoskeletal protein is the major component of neurofilaments that helps maintain the caliber and integrity of large axons?",options:["Keratin protein","Actin protein","Tubulin protein","Neurofilament protein"],answer:3,exp:"Neurofilament proteins provide structural support to axons."},

{q:"Which plastids contain pigments that give plants their yellow, orange or red colours?",options:["Amyloplasts","Leucoplasts","Chloroplasts","Chromoplasts"],answer:3,exp:"Chromoplasts contain carotenoid pigments."},

{q:"Choose a term to complete the analogy. Prokaryotic cell : Small and simple :: Eukaryotic cell : _______",options:["Same size and complexity","Irregular and simple","Smaller and simple","Larger and complex"],answer:3,exp:"Eukaryotic cells are larger and more complex than prokaryotic cells."},   

],
set8:[{q:"थार?",options:["रेगिस्तान","नदी","पहाड़","झील"],answer:0,exp:"रेगिस्तान"},{q:"लोकतंत्र?",options:["जनता","राजा","सेना","धर्म"],answer:0,exp:"जनता"}],
set9:[{q:"हिमालय?",options:["पहाड़","नदी","समुद्र","रेगिस्तान"],answer:0,exp:"पहाड़"},{q:"बिहार?",options:["राज्य","देश","नगर","द्वीप"],answer:0,exp:"राज्य"}],
set10:[{q:"थार?",options:["रेगिस्तान","नदी","पहाड़","झील"],answer:0,exp:"रेगिस्तान"},{q:"लोकतंत्र?",options:["जनता","राजा","सेना","धर्म"],answer:0,exp:"जनता"}],
},

animalkingdom: {
set1: [
{q:"In which simple multi-cellular organism does sporangia develop on hyphae and spore formation occurs in sporangia?",options:["Rhizopus","Leishmania","Yeast","Amoeba"],answer:0,exp:"Rhizopus reproduces through spores formed in sporangia present on hyphae."},

{q:"Which of the following are cultivated for the pearls they make?",options:["Sardines","Prawns","Pomfrets","Oysters"],answer:3,exp:"Pearls are produced by oysters and cultivated through pearl culture."},

{q:"Which of the following breeds of cows is resistant to diseases?",options:["Jersey","Red Sindhi","Brown Swiss","Aseel"],answer:1,exp:"Red Sindhi is an indigenous breed known for disease resistance."},

{q:"The members of phylum ________ are exclusively free-living marine animals.",options:["Mollusca","Nematoda","Arthropoda","Echinodermata"],answer:3,exp:"Echinoderms such as starfish and sea urchins are exclusively marine animals."},

{q:"Which of the following animals shows the power of regeneration?",options:["Earthworm","Tick","Planaria","Leech"],answer:2,exp:"Planaria can regenerate a complete body from body fragments."},

{q:"Select a term to complete the given analogy. Binary Fission : Bacteria :: Fragmentation : _________.",options:["Birds","Algae","Mammals","Insects"],answer:1,exp:"Fragmentation is a common mode of reproduction in algae like Spirogyra."},

{q:"In which of the following organisms are chromoplasts present?",options:["Rose","Amoeba","Hydra","Star fish"],answer:0,exp:"Chromoplasts are pigment-containing plastids found in plants like rose."},

{q:"What is the common name of Periplaneta americana?",options:["American Frog","American Cockroach","American Flatworm","American Earthworm"],answer:1,exp:"Periplaneta americana is the scientific name of the American cockroach."},

{q:"Through the phenomenon of biological magnification, which of the following has the maximum concentration of pesticides?",options:["Grasshopper","Grass","Snake","Frog"],answer:2,exp:"Top consumers like snakes accumulate the highest concentration of pesticides."},

{q:"Which single-celled organism divides into many daughter cells simultaneously by multiple fission?",options:["Amoeba","Plasmodium","Yeast","Leishmania"],answer:1,exp:"Plasmodium reproduces asexually through multiple fission."},

{q:"Which of the following causes kala-azar?",options:["Fungi","Virus","Bacteria","Protozoa"],answer:3,exp:"Kala-azar is caused by the protozoan parasite Leishmania."},

{q:"Which of the following organisms does NOT show asexual reproduction by means of fission?",options:["Leishmania","Amoeba","Earthworm","Plasmodium"],answer:2,exp:"Earthworm reproduces sexually and not through fission."},

{q:"Which of these animals has a coat of spines to protect itself?",options:["Giant Panda","Antelope","Reindeer","Hedgehog"],answer:3,exp:"Hedgehogs possess protective spines on their bodies."},

{q:"A poultry farmer wants birds that consume less feed, tolerate high heat, and produce quality chicks. Which strategy should he follow?",options:["Shift to fish farming","Use only indigenous birds","Cross-breed exotic and local poultry","Feed birds twice a day"],answer:2,exp:"Cross-breeding combines desirable traits of both local and exotic breeds."},

{q:"Which of these insects have teeth?",options:["Butterflies","Wasps and Beetles","Flies","Bees"],answer:1,exp:"Many beetles and wasps possess strong chewing mouthparts."}
],
set2: [
{q:"Which of the following organisms shows the phenomenon of regeneration?",options:["Mosquito","Planaria","House fly","Honey bee"],answer:1,exp:"Planaria has remarkable regenerative ability and can regrow its body from fragments."},

{q:"Who/What are the natural hosts of Nipah virus?",options:["Birds","Pigs","Goats","Fruit bats"],answer:3,exp:"Fruit bats of the genus Pteropus are the natural reservoir hosts of Nipah virus."},

{q:"An organism feeding on multiple hosts in its lifetime is called-",options:["Parasitoid","Parasite","Saprophyte","Predator"],answer:3,exp:"Predators feed on multiple prey organisms during their lifetime."},

{q:"In which phylum are the animals warm blooded?",options:["Pisces","Aves","Amphibians","Reptiles"],answer:1,exp:"Birds (Aves) are warm-blooded animals."},

{q:"Which creature usually makes a web to trap its victims?",options:["Cockroach","Caterpillar","Spider","Silkworm"],answer:2,exp:"Spiders spin webs to catch insects and other prey."},

{q:"Which of the following living organisms have bones that help in body movements?",options:["Snake","Cockroach","Earthworm","Snail"],answer:0,exp:"Snakes are vertebrates and possess a skeletal system with bones."},

{q:"The member of which group is usually called a sponge?",options:["Ctenophora","Coelenterata","Porifera","Platyhelminthes"],answer:2,exp:"Animals belonging to phylum Porifera are commonly known as sponges."},

{q:"Use of regenerative cells in the process of budding is present in:",options:["Planaria","Amoeba","Spirogyra","Hydra"],answer:3,exp:"Hydra reproduces by budding using regenerative cells."},

{q:"Hormones are normally absent in-",options:["Rats","Monkeys","Cats","Bacteria"],answer:3,exp:"Bacteria do not possess endocrine glands and hence hormones are absent."},

{q:"Which of the following is/are NOT a parasitic organism?",options:["Ticks","Cuscuta","Amoeba","Lice"],answer:2,exp:"Amoeba is generally free-living and not parasitic in this context."},

{q:"Which of the following is commonly known as the Indian bee?",options:["Apis mellifera","Apis cerana indica","Apis florea","Apis dorsata"],answer:1,exp:"Apis cerana indica is commonly known as the Indian honey bee."},

{q:"In India, cows are classified under which scientific species name?",options:["Bos bubalis","Bubalus bubalis","Bos taurus","Bos indicus"],answer:3,exp:"Indian cattle belong to the species Bos indicus."},

{q:"Which of the following organisms reproduces by binary fission?",options:["Planaria","Spirogyra","Hydra","Amoeba"],answer:3,exp:"Amoeba reproduces asexually through binary fission."},

{q:"In cattle farming, milk-producing buffaloes are called _______.",options:["Broilers","Milch","Layers","Shellfish"],answer:1,exp:"Milch animals are reared primarily for milk production."},

{q:"Which of the following fish production methods are done in the region of Kashmir?",options:["Pearl Culture","Marine Fisheries","Aqua Culture","Brackish Water Fisheries"],answer:2,exp:"Aquaculture is commonly practiced in Kashmir for fish production."}
],
set3: [
{q:"Which creature grows again after it is cut into half?",options:["Earthworm","Cockroach","Lizard","Frog"],answer:0,exp:"Earthworms can regenerate lost body parts to some extent."},

{q:"What distinguishes broilers from layers in poultry farming?",options:["Layers are raised for meat; broilers for eggs","Both are raised equally for meat and eggs","Only broilers lay eggs","Broilers are raised for meat; layers for eggs"],answer:3,exp:"Broilers are bred for meat production while layers are bred for egg production."},

{q:"Ghana Vadya or idiophone instruments are those non-drum percussion musical instruments that do not require any tuning. _________ is an example of a Ghana Vadya.",options:["Pungi","Sarangi","Ghatam","Shehnai"],answer:2,exp:"Ghatam is a traditional clay-pot percussion instrument classified as a Ghana Vadya."},

{q:"Which of the following terms best describes the biological study of animal behaviour?",options:["Ethology","Ethnology","Entomology","Etiology"],answer:0,exp:"Ethology is the scientific study of animal behaviour."},

{q:"Which of the following reproduces by budding?",options:["Algae","Hydra","Mosquito","Liver fluke"],answer:1,exp:"Hydra commonly reproduces asexually through budding."},

{q:"Which of the following is abiotic factor responsible for storage losses in agricultural produce?",options:["Rodents","Moisture","Insects","Fungi"],answer:1,exp:"Moisture is an abiotic factor that can damage stored agricultural products."},

{q:"Sleeping sickness is caused by:",options:["Mosquito","House fly","Sand Fly","Tsetse Fly"],answer:3,exp:"Sleeping sickness is transmitted by the bite of the tsetse fly."},

{q:"Which of the following is related to the study of fungi?",options:["Ornithology","Mycology","Reptilian","Fisheries"],answer:1,exp:"Mycology is the branch of biology that deals with fungi."},

{q:"The poultry birds grown for the purpose of meat production are called _________.",options:["Layers","Broilers","Fowls","Cocks"],answer:1,exp:"Broilers are poultry birds specifically reared for meat production."},

{q:"The constellation Ursa Minor contains the group of stars commonly called the-",options:["Little lion","Big dipper","Hunter","Little dipper"],answer:3,exp:"Ursa Minor is commonly known as the Little Dipper."},

{q:"'A camel is called the ship of the desert' is drawn from the assumption:",options:["Camels have humps","Camels are used for transportation in deserts","Camels are mammals","The shape of a camel is like a ship"],answer:1,exp:"Camels are widely used for transportation across deserts, hence the analogy."},

{q:"Which of the following types of animal husbandry helps us in honey production?",options:["Cattle farming","Culture fishery","Bee-keeping","Poultry"],answer:2,exp:"Bee-keeping (apiculture) is practiced for honey production."},

{q:"In which of the following organisms can individuals change sex, indicating that sex is NOT genetically determined?",options:["Snails","Lizards","Frogs","Ostriches"],answer:0,exp:"Many snails are hermaphroditic and can change sex during their lifetime."},

{q:"Rana tigrina is the scientific name of which animal?",options:["Tiger","Wolf","Leopard","Asian Frog"],answer:3,exp:"Rana tigrina refers to the Indian/Asian bullfrog."},

{q:"Which of the following is a breed of milch animals?",options:["Hallakkar","Nagori","Sahiwal","Harda Wadi"],answer:2,exp:"Sahiwal is a famous Indian milch cattle breed known for high milk yield."},
],
set4: [
{q:"Which of the following is an example of ectoparasite?",options:["Mosquito","Tape worm","Bacteria","Hook worm"],answer:0,exp:"Mosquito lives on the external surface of the host and feeds on blood, making it an ectoparasite."},

{q:"The study of birds is called ________.",options:["Herpetology","Ornithology","Anthropology","Ophthalmology"],answer:1,exp:"Ornithology is the branch of zoology concerned with the study of birds."},

{q:"Which of the following is a host in the life cycle of tape worm?",options:["Pig","Monkey","Fish","Rabbit"],answer:0,exp:"Pig acts as an intermediate host in the life cycle of Taenia solium."},

{q:"Which of the following is NOT an agent of dispersal of seeds?",options:["Wind","Sunlight","Animal","Water"],answer:1,exp:"Sunlight does not help in seed dispersal, whereas wind, animals and water do."},

{q:"Which of the following unicellular organism change their shape?",options:["Yeast","Bacteria","Paramecium","Amoeba"],answer:3,exp:"Amoeba changes its shape continuously using pseudopodia."},

{q:"Animals whose cells are arranged in the embryo layer between the outer and internal membrane, are called ________.",options:["Monoblastic Beast","Triploblastic Beast","Symmetrical animals","Diploblastic Beast"],answer:3,exp:"Diploblastic animals possess two germ layers: ectoderm and endoderm."},

{q:"Which of the following is NOT a class of sub phylum vertebrata?",options:["Arachnida","Mammals","Reptilia","Aves"],answer:0,exp:"Arachnida belongs to Arthropoda, not Vertebrata."},

{q:"'Ichthyophis beddomei', a worm-like amphibian that can swim, belongs to which genus?",options:["Long hind limbs amphibia","Reduced forelimbs amphibia","Limbless amphibia","Short limbs amphibia"],answer:2,exp:"Ichthyophis is a limbless amphibian belonging to the order Gymnophiona."},

{q:"Which of the following organisms has NO genetically predetermined sex?",options:["Human","Dogs","Pigeon","Snail"],answer:3,exp:"Snails can change sex and do not always have genetically fixed sex determination."},

{q:"Which of the following is NOT a marine fish?",options:["Mackerel","Bhetki","Pomfret","Rohu"],answer:3,exp:"Rohu is a freshwater fish, unlike the others which are marine fishes."},

{q:"What is the rearing of honey bees called?",options:["Vermiculture","Apiculture","Silviculture","Sericulture"],answer:1,exp:"Apiculture refers to the rearing and management of honey bees."},

{q:"In which of the following groups of organisms does sex determination occur due to environmental temperature?",options:["Few reptiles","All fishes","All birds","Human beings"],answer:0,exp:"Temperature-dependent sex determination is observed in some reptiles."},

{q:"Which of the following comes under the ‘amphibia’ class of animals?",options:["Pigeon","Turtle","Toad","Cat"],answer:2,exp:"Toads belong to the class Amphibia."},

{q:"To which phylum do round worms belong?",options:["Annelida","Ctenophora","Aschelminthes","Platyhelminthes"],answer:2,exp:"Roundworms are classified under phylum Aschelminthes (Nematoda)."},

{q:"The splitting of the two cells during division can take place in any plane. Such patterns of fission have been observed in which protozoan?",options:["Plasmodium","Leishmania","Hydra","Amoeba"],answer:3,exp:"Amoeba undergoes simple binary fission in any plane."},
],
set5: [
{q:"Mule is a hybrid derived by crossing-",options:["Female donkey and a male horse","Donkey and zebra","Horse and zebra","Male donkey and a female horse"],answer:3,exp:"A mule is produced by crossing a male donkey (jack) with a female horse (mare)."},

{q:"Which animal is known to communicate using infrasound?",options:["Rat","Bat","Rhinoceros","Dolphin"],answer:2,exp:"Rhinoceroses use low-frequency infrasound signals for communication."},

{q:"Which of the following animals has a three-chambered heart?",options:["Sting Ray","Salamander","Rohu","Sparrow"],answer:1,exp:"Amphibians like salamanders possess a three-chambered heart."},

{q:"Which of the following phyla of animals have jointed legs?",options:["Arthropod","Echinodermata","Annelida","Nematode"],answer:0,exp:"Arthropods are characterized by jointed appendages and segmented bodies."},

{q:"Which of the following is an example of endoparasite?",options:["Head lice","Body lice","Ticks","Tape worm"],answer:3,exp:"Tapeworms live inside the host body and are endoparasites."},

{q:"Invertebrates do NOT include:",options:["Molluscs","Reptiles","Arachnids","Insects"],answer:1,exp:"Reptiles are vertebrates because they possess a backbone."},

{q:"Saccharomyces cerevisiae is the scientific name of which of the following?",options:["A species of amoeba","A type of virus","A type of bacteria","A species of yeast"],answer:3,exp:"Saccharomyces cerevisiae is commonly known as baker's yeast."},

{q:"What is the group of fragmented organisms with bilateral symmetry?",options:["Sponge","Annelida","Arthropoda","Mollusca"],answer:1,exp:"Annelids are segmented animals with bilateral symmetry."},

{q:"What happens to the irregularities of the two surfaces which causes static friction?",options:["Sliding","Interlocking","Vanishing","Rolling"],answer:1,exp:"Static friction arises due to interlocking of surface irregularities."},

{q:"Tuberculosis or TB disease is caused by ________.",options:["Protozoa","Fungus","Virus","Bacterial"],answer:3,exp:"Tuberculosis is caused by the bacterium Mycobacterium tuberculosis."},

{q:"Which of these creatures do NOT have teeth?",options:["Turtles","Pigs","Dogs","Horses"],answer:0,exp:"Turtles lack true teeth and instead possess a beak-like structure."},

{q:"Identify the incorrect statement about mammals.",options:["Normally mammals have hair.","Some mammals lay eggs","Heart is three chambered.","Mammary gland is present to feed young ones"],answer:2,exp:"Mammals have a four-chambered heart, not a three-chambered heart."},

{q:"Pisces are exclusively aquatic animals. Which of the following is NOT a characteristic of them?",options:["Their hearts have only two chambers.","They obtain oxygen dissolved in water by using their gills.","They are warm-blooded.","Their skin is covered with scales."],answer:2,exp:"Fishes are cold-blooded animals, not warm-blooded."},

{q:"What is the generic name given to members of the cat family?",options:["Canine","Bovine","Caprine","Feline"],answer:3,exp:"Members of the cat family are collectively referred to as felines."},

{q:"Which of the following is/are used in poultry farming?",options:["Catla","Prawns","Leghorn breed","Sardines"],answer:2,exp:"Leghorn is a well-known poultry breed used for egg production."},
],
set6: [
{q:"Which poultry are birds farmed to produce eggs?",options:["Milch","Broilers","Common carp","Layers"],answer:3,exp:"Layers are poultry birds specially reared for egg production."},

{q:"Which organism uses regenerative cells for reproduction in the process of budding?",options:["Leishmania","Yeast","Amoeba","Hydra"],answer:3,exp:"Hydra reproduces by budding with the help of regenerative cells."},

{q:"Identify the single cell organism.",options:["Amoeba","Seaweed","Leech","Liver fluke"],answer:0,exp:"Amoeba is a unicellular organism."},

{q:"Which of the following organisms does NOT show asexual reproduction by means of fission?",options:["Plasmodium","Earthworm","Amoeba","Leishmania"],answer:1,exp:"Earthworm reproduces sexually and does not reproduce by fission."},

{q:"Which of the following fishes has no head, bone, eyes or nose?",options:["Starfish","Jellyfish","Alaska fish","Cat fish"],answer:0,exp:"Starfish lacks a distinct head, bones, eyes and nose."},

{q:"Pseudopodia are finger-like extensions on:",options:["Amoeba","Paramecium","Earthworms","Hydra"],answer:0,exp:"Amoeba uses pseudopodia for movement and feeding."},

{q:"In which of the following organisms do both fragmentation and spore formation occur?",options:["Amoeba","Planaria","Yeast","Fungi"],answer:3,exp:"Many fungi reproduce through both fragmentation and spore formation."},

{q:"Which of the following groups of organisms exhibit the phenomenon of haploid-dominant life cycle?",options:["The amphibians","The fungi","The angiosperms","The mammals"],answer:1,exp:"Fungi generally show a haploid-dominant life cycle."},

{q:"Which class of vertebrates possesses cold-blooded characteristics and scaly skin?",options:["Reptilia","Mammalia","Aves","Amphibia"],answer:0,exp:"Reptiles are cold-blooded animals with dry scaly skin."},

{q:"Which of the following is NOT classified under Kingdom Animalia?",options:["Metazoa","Protozoa","Choanozoa","Pipiens"],answer:1,exp:"Protozoa are generally placed outside Kingdom Animalia."},

{q:"Some organisms show binary fission by division in any plane but some shows division in a definite orientation. Which of the following shows definite orientation of binary fission?",options:["Paramecium","Leishmania","Plasmodium","Amoeba"],answer:1,exp:"Leishmania divides longitudinally in a definite plane."},

{q:"Which of the following organisms reproduces by budding?",options:["Earthworm","Hydra","Frog","Cockroach"],answer:1,exp:"Hydra reproduces asexually by budding."},

{q:"In a school garden, butterflies often visit flowers while squirrels feed on nuts. What types of consumers are these organisms?",options:["Butterflies – herbivores, Squirrels – herbivores","Butterflies – carnivores, Squirrels – omnivores","Butterflies – parasites, Squirrels – decomposers","Butterflies – omnivores, Squirrels – carnivores"],answer:0,exp:"Both butterflies and squirrels primarily feed on plant products."},

{q:"Which of the following organisms exhibits both autotrophic and heterotrophic modes of nutrition?",options:["Amoeba","Euglena","Plasmodium","Paramecium"],answer:1,exp:"Euglena can photosynthesize and also feed heterotrophically."},

{q:"The common name for Apis florae is:",options:["The giant bee","The dwarf bee","The Asian bee","The little bee"],answer:3,exp:"Apis florea is commonly called the little bee."},
],
set7: [
{q:"Which of the following helps Paramoecium move food to the specific spot in the cell to obtain nutrition?",options:["Parapodia","Cilia","Pseudopodia","Flagella"],answer:1,exp:"Cilia sweep food particles toward the oral groove."},

{q:"What is special about a sword-billed hummingbird?",options:["It is the largest bird in the world","Its bill is longer than rest of its body","It lives only in Antarctica","It cannot fly"],answer:1,exp:"The sword-billed hummingbird has a bill longer than its body."},

{q:"Which organism is a key indicator of a healthy aquatic ecosystem?",options:["Cockroach","Fish","Lichen","Earthworm"],answer:1,exp:"Healthy fish populations often indicate a healthy aquatic ecosystem."},

{q:"What is the modern name of Phillame Colentrates?",options:["Nidaria (jellyfish)","Neemato (Roundcat)","Anilida (Nupurak)","Platyhelminthes (Patti K)"],answer:0,exp:"The modern name of Coelenterata is Cnidaria."},

{q:"Corals are marine invertebrates within the class Anthozoa of the phylum__________.",options:["Arthropoda","Cnidaria","Mollusca","Nematoda"],answer:1,exp:"Corals belong to phylum Cnidaria and class Anthozoa."},

{q:"Which breed of cattle is primarily used for dairy purposes in India?",options:["Sahiwal","Ongole","Gir","Kankrej"],answer:0,exp:"Sahiwal is a well-known dairy breed in India."},

{q:"Which of the following is also known as the 'tree frog'?",options:["Rana tigrina","Hyla","Salamandar","Toad"],answer:1,exp:"Hyla is commonly called the tree frog."},

{q:"Which of the following is a unicellular ciliary organism?",options:["Paramecium","Ticks","Leeches","Amoeba"],answer:0,exp:"Paramecium is a unicellular organism that moves with cilia."},

{q:"Which of the following is NOT known to reproduce through fission?",options:["Hydra","Paramecium","Leishmania","Amoeba"],answer:0,exp:"Hydra reproduces mainly through budding, not fission."},

{q:"Which of the following shows movement but not locomotion?",options:["Dog","Bird","Plant","Human"],answer:2,exp:"Plants show movement but do not move from one place to another."},

{q:"Which of the following is commonly called a sponge?",options:["Nematoda","Coelenterata","Porifera","Platyhelminthes"],answer:2,exp:"Members of phylum Porifera are commonly known as sponges."},

{q:"Animals often blend in with their surroundings for protection. Which of the following do that?",options:["Chameleons","Turtles","Cats","Jerboa"],answer:0,exp:"Chameleons are famous for camouflage."},

{q:"Which organisms cause infectious diseases?",options:["Worms","Viruses","All of the options","Protozoa"],answer:2,exp:"Viruses, protozoa and worms can all cause infectious diseases."},

{q:"Use of regenerative cells in the process of budding is present in:",options:["Planaria","Amoeba","Spirogyra","Hydra"],answer:3,exp:"Hydra reproduces by budding using regenerative cells."},

{q:"A government scheme promotes the rearing of fish in artificially controlled freshwater ponds. What is this type of fishing called?",options:["Culture fishing","Capture fishing","Marine fishing","Saltwater fishing"],answer:0,exp:"Culture fishing involves rearing fish under controlled conditions."},
],
set8: [
{q:"Seeds that are dispersed by animals often:",options:["have hooks or edible flesh","are very small and light weight","can float easily in water","have wings or parachutes"],answer:0,exp:"Seeds dispersed by animals often have hooks or fleshy fruits that attract animals."},

{q:"In which of the following organisms is spore formation seen?",options:["Paramecium","Plasmodium","Amoeba","Rhizopus"],answer:3,exp:"Rhizopus reproduces asexually through spore formation."},

{q:"Which of the following is the carrier of dengue virus?",options:["Male Anopheles Mosquito","Female Aedes Mosquito","Male Andes Mosquito","Female Anopheles Mosquito"],answer:1,exp:"Dengue is transmitted by the female Aedes mosquito."},

{q:"Which one of the following is addressed as 'Alfalfa'?",options:["Fossils","Memel","Sativa","Fish"],answer:2,exp:"Alfalfa refers to Medicago sativa."},

{q:"Which bee variety is commonly known as the Indian bee and is used for commercial honey production?",options:["Apis mellifera","Apis dorsata","Apis florae","Apis cerana indica"],answer:3,exp:"Apis cerana indica is known as the Indian bee."},

{q:"Which of the following organisms have three-chambered hearts?",options:["Mammals","Birds","Amphibians","Fishes"],answer:2,exp:"Most amphibians possess a three-chambered heart."},

{q:"Which of the following organisms may help in pollination of a flower?",options:["Honey bee","Amoeba","Plasmodium","Euglena"],answer:0,exp:"Honey bees are important pollinators."},

{q:"Name the only bird that can fly backwards.",options:["Penguin","Wood pecker","Sparrow","Humming Bird"],answer:3,exp:"Hummingbirds can fly backward due to their unique wing movement."},

{q:"Which of the following is a popular marine fish variety found in India?",options:["Mrigal","Pomfret","Catla","Rohu"],answer:1,exp:"Pomfret is a well-known marine fish in India."},

{q:"Which of the following animals produces infrasound?",options:["Horses and cows","Birds and snakes","Dogs and cats","Whales and elephants"],answer:3,exp:"Whales and elephants communicate using infrasound."},

{q:"Which one of the following insects cannot be called a ‘social insect’?",options:["Bees","Crickets","Termites","Ants"],answer:1,exp:"Crickets do not live in organized social colonies like ants, bees, and termites."},

{q:"Leech belongs to the phylum:",options:["annelida","platyhelminthes","mollusca","protochordata"],answer:0,exp:"Leeches are segmented worms belonging to phylum Annelida."},

{q:"The term ‘Sericulture’ is related to which of the following?",options:["Silk farming","Fish farming","Bird farming","Bee farming"],answer:0,exp:"Sericulture is the rearing of silkworms for silk production."},

{q:"Which of the following organisms will accumulate maximum concentration of DDT?",options:["Goat","Spider","Grass","Human"],answer:3,exp:"Due to biological magnification, humans may accumulate the highest concentration."},

{q:"In which organism does cell division or fission lead to the creation of new individuals?",options:["Mammals","Plants","Unicellular organisms","Reptiles"],answer:2,exp:"In unicellular organisms, cell division directly produces new individuals."},
],
set9: [
{q:"Which breed of cattle is used for two purposes?",options:["Deoni","Saheehwal","Fall","Ongole"],answer:3,exp:"Ongole is considered a dual-purpose cattle breed."},

{q:"What are animals used for tilling, irrigation and carting referred to as?",options:["Milch animals","Wild animals","Draught animals","Carnivorous animals"],answer:2,exp:"Animals used for agricultural work are called draught animals."},

{q:"External fertilisation is found in which of the following organisms?",options:["Fish","Hen","Human","Cow"],answer:0,exp:"Most fishes exhibit external fertilization."},

{q:"Which of the following creatures does NOT usually lay eggs in its own nest?",options:["Sparrow","Cuckoo","Parrot","Pigeon"],answer:1,exp:"The cuckoo lays its eggs in the nests of other birds."},

{q:"'Triticum aestivum' is the scientific name of_____________.",options:["monkey","mango","wheat","human"],answer:2,exp:"Triticum aestivum is the scientific name of common wheat."},

{q:"In fish production, which of the following comes under the category of shellfish?",options:["Bombay duck","Molluscs","Silver carp","Tuna"],answer:1,exp:"Molluscs are classified under shellfish."},

{q:"Which of the following are invertebrates?",options:["Mammals","Arthropods","Reptiles","Fish"],answer:1,exp:"Arthropods are invertebrates because they lack a backbone."},

{q:"Which of the following pairs (Species - Category) is correct with respect to India?",options:["Asiatic Elephant - Endemic","Black Buck - Rare","Great Hornbill - Vulnerable","Nicobar Pigeon - Endangered"],answer:2,exp:"Great Hornbill is categorized as Vulnerable."},

{q:"The fragmentation method of reproduction is shown in ______",options:["Amoeba","Spirogyra","Hydra","Plasmodium"],answer:1,exp:"Spirogyra reproduces asexually through fragmentation."},

{q:"Which of the following organisms reproduce by spore formation?",options:["Earthworm","Hydra","Rhizopus","Leishmania"],answer:2,exp:"Rhizopus reproduces through spores formed in sporangia."},

{q:"Archimedes principle is used to design which of the following?",options:["Cars","Aircraft","Submarines","Trucks"],answer:2,exp:"Submarines operate based on buoyancy principles explained by Archimedes."},

{q:"Which is the second largest phylum among the following?",options:["Mollusca","Arthropoda","Aschelminthes","Annelida"],answer:0,exp:"Mollusca is the second largest animal phylum after Arthropoda."},

{q:"Cutaneous respiration takes place in -",options:["Earthworm","Fish","Man","Birds"],answer:0,exp:"Earthworms respire through their moist skin."},

{q:"The quality and taste of honey mainly depends on which of the following factors?",options:["Age of the bees","Type of beehive","Type and availability of flowers","Number of worker bees in the colony"],answer:2,exp:"Honey quality and flavor largely depend on the floral source available to bees."},
],
set10: [
{q:"राष्ट्रपति?",options:["राज्य प्रमुख","सैनिक","किसान","व्यापारी"],answer:0,exp:"राज्य प्रमुख"},
{q:"संविधान?",options:["कानून","धर्म","नदी","योजना"],answer:0,exp:"कानून"}
],
},

circulatorysystem: {
set1: [
{q:"Which chamber of the heart sends deoxygenated blood to the lungs for oxygenation?",options:["Left ventricle","Right atrium","Right ventricle","Left atrium"],answer:2,exp:"The right ventricle pumps deoxygenated blood to the lungs through the pulmonary artery."},

{q:"Which type of blood vessel has thick, elastic walls to withstand high pressure?",options:["Capillary","Vein","Venule","Artery"],answer:3,exp:"Arteries have thick elastic walls to tolerate high blood pressure."},

{q:"On reaching an organ or tissue, arteries divide into smaller and smaller vessels. The smallest vessels have walls that are one cell thick and are called:",options:["Capillaries","Veins","Arteries","Arterioles"],answer:0,exp:"Capillaries are one-cell-thick vessels where exchange of materials occurs."},

{q:"Blood pressure is recorded as two values: _________ pressure, measured when the heart contracts, and ___________ pressure, measured when the heart relaxes.",options:["Systolic; Diastolic","Diastolic; Venous","Maximum; Systolic","Diastolic; Systolic"],answer:0,exp:"Systolic pressure occurs during contraction and diastolic during relaxation."},

{q:"Which of the following correctly explains why veins have valves but arteries do not?",options:["Veins carry blood at low pressure and need valves to prevent backflow","Veins carry blood under high pressure, so valves prevent it from bursting","Arteries carry oxygenated blood and do not need valves","Arteries are located deep inside the body and are supported by muscles"],answer:0,exp:"Valves in veins prevent backflow because blood flows at low pressure."},

{q:"Which of the following carries blood from the heart to the kidneys?",options:["Vena cava","Renal vein","Renal artery","Coronary artery"],answer:2,exp:"The renal artery carries oxygenated blood from the heart to the kidneys."},

{q:"Thicker muscular walls are present in the ventricles of the heart due to which of the following reasons?",options:["To store blood before it enters the atria","To pump blood with high pressure","To receive blood from the body and lungs","To control heartbeat and rhythm"],answer:1,exp:"Ventricles need strong muscular walls to pump blood forcefully."},

{q:"What is the function of insulin in the human body?",options:["It supplies oxygen to the lungs","It regulates the flow of blood","It regulates how the body uses and stores glucose and fat","It supplies filtered blood to the heart"],answer:2,exp:"Insulin regulates glucose metabolism and storage."},

{q:"What is the process by which autotrophs take in substance from outside and in the presence of sunlight, convert them into stored forms of energy?",options:["Circulation","Movement","Digestion","Photosynthesis"],answer:3,exp:"Photosynthesis converts solar energy into chemical energy."},

{q:"Metabolic activities that generate nitrogenous waste material in human being are removed by:",options:["The vascular system","The excretory system","The circulatory system","The respiratory system"],answer:1,exp:"The excretory system removes nitrogenous wastes from the body."},

],
set2: [
{q:"Kidney failure is treated periodically on a kidney machine. The process is known as ________.",options:["Excretion","Metabolism","Hemodialysis","Circulation"],answer:2,exp:"Hemodialysis filters waste products from the blood artificially."},

{q:"The tissue found between the upper and lower epidermis of a bi-cephal leaf is called-",options:["Circulatory System","Mesophil","Answers","Pulp"],answer:1,exp:"Mesophyll tissue lies between the upper and lower epidermis."},

{q:"Which of the following controls bladder pressure?",options:["Kidneys","Heart","Nervous system","Blood Pressure"],answer:2,exp:"The nervous system regulates bladder filling and emptying."},

{q:"Which of the following statements is INCORRECT?",options:["Blood protects the body from disease","Blood carries oxygen from the lungs to the other parts of the body","Blood helps in sensory inputs","Blood carries carbon dioxide from the body cells to the lungs"],answer:2,exp:"Sensory inputs are handled by the nervous system, not blood."},

{q:"AIDS virus destroys the body's -",options:["Red blood corpuscles","Circulatory system","Liver","Immune system"],answer:3,exp:"HIV attacks and weakens the immune system."},

{q:"Which observation best supports the statement that humans have double circulation of blood?",options:["Blood passes through the heart twice in one complete circulation","Blood flows only once through the heart in one complete cycle","Right side of the heart pumps oxygenated blood","Oxygenated and deoxygenated blood mix in the heart"],answer:0,exp:"In double circulation, blood passes through the heart twice in one cycle."},

{q:"Through which of the following structures does urine go into the urinary bladder from kidneys?",options:["Artery","Vein","Vena cava","Ureters"],answer:3,exp:"Ureters carry urine from the kidneys to the urinary bladder."},

{q:"What is the function of plasma in human blood?",options:["It carries oxygen from lungs to all parts of the body","It maintains the oxygen-rich blood supply to tissues","It transports food, carbon dioxide and waste materials","It helps in clotting blood during injuries"],answer:2,exp:"Plasma transports nutrients, wastes, hormones and gases."},

{q:"Which of the following is NOT a part of the circulatory system?",options:["Large intestine","Blood","Heart","Arteries"],answer:0,exp:"The large intestine belongs to the digestive system."},

{q:"Where does the oxygen-rich blood from the lungs come into the heart?",options:["The pulmonary arteries","The left ventricle","The pulmonary veins","The left atrium"],answer:3,exp:"Pulmonary veins bring oxygenated blood to the left atrium."},
],
set3: [
{q:"Which of the following statements correctly describes the transportation of blood from the heart to the lungs?",options:["Deoxygenated blood is pumped from the left ventricle to the lungs","Oxygenated blood is carried from the lungs to the right atrium","Oxygenated blood flows from the left ventricle to the lungs for purification","Deoxygenated blood is pumped from the right ventricle to the lungs"],answer:3,exp:"The right ventricle sends deoxygenated blood to the lungs."},

{q:"Which of the following statements is NOT TRUE about fishes?",options:["Fishes have only two chambers to their hearts","Blood goes only once in one cycle through the heart of a fish","Fishes have double circulation","Blood is pumped through the fishes' gills and gets oxygenated"],answer:2,exp:"Fishes show single circulation, not double circulation."},

{q:"Why do epithelial tissues have very little space between their cells?",options:["To facilitate movement of muscles","To enable them to transmit electrical signals","To create an effective barrier regulating permeability of substances","To allow rapid blood flow"],answer:2,exp:"Closely packed cells form a protective barrier."},

{q:"Blood pressure is the force:",options:["Inside the veins","Inside the artery during ventricular diastole","Inside the artery during ventricular systole","That blood exerts against the wall of a vessel"],answer:3,exp:"Blood pressure is the force exerted by blood on vessel walls."},

{q:"Which of the following is the main function of skeletal muscles in a human body?",options:["Movement in our body","Circulation","Excretion","Respiration"],answer:0,exp:"Skeletal muscles help in body movement and locomotion."},

{q:"If the bicuspid (mitral) valve fails to close properly, which immediate effect is most likely during ventricular contraction?",options:["Backflow of blood from the left ventricle to the left atrium","Backflow of blood from the right ventricle to the right atrium","Mixing of oxygenated and deoxygenated blood in the ventricles","Reduced flow of blood to the lungs"],answer:0,exp:"Mitral valve failure causes blood to flow back into the left atrium."},

{q:"Which of the following is the primary use of ultrasound in echocardiography?",options:["Examine the structure and function of the heart","Cleaning or removing arterial blockages","Measuring blood sugar levels","Determining body weight"],answer:0,exp:"Echocardiography uses ultrasound to visualize heart structure and function."},

{q:"Which blood vessel carries oxygenated blood from the lungs to the heart?",options:["Pulmonary artery","Pulmonary vein","Aorta","Vena cava"],answer:1,exp:"Pulmonary vein is the only vein that carries oxygenated blood."},

{q:"Which chamber of the human heart has the thickest muscular wall?",options:["Right atrium","Left atrium","Right ventricle","Left ventricle"],answer:3,exp:"Left ventricle pumps blood to the entire body and has the thickest wall."},

{q:"The pacemaker of the human heart is:",options:["AV node","Bundle of His","SA node","Purkinje fibers"],answer:2,exp:"The sinoatrial (SA) node initiates and regulates heartbeat."},
],
set4: [

{q:"Digestion of food by means of gastric glands and hydrochloric acid takes place in which part of the body?",options:["Pancreas","Stomach","Small intestine","Large intestine"],answer:1,exp:"Gastric glands and HCl are present in the stomach."},

{q:"Which human organ contains the 'Islets of Langerhans'?",options:["The gall bladder","The pancreas","The brain","The liver"],answer:1,exp:"Islets of Langerhans are endocrine cells present in the pancreas."},

{q:"Where is the part of the middle of the small intestine, which is the main site for absorption of nutrients, located?",options:["Duodenum","Diaphragm","Ileum","Jejunum"],answer:3,exp:"Jejunum is the major site of nutrient absorption."},

{q:"Select the INCORRECT pair related to digestive glands and their enzymes.",options:["Liver — bile juice","Gastric gland — pepsin","Salivary gland — trypsin","Pancreas — pancreatic juice"],answer:2,exp:"Trypsin is produced by the pancreas, not salivary glands."},

{q:"Where is ammonia converted into urea?",options:["Kidney","Pancreas","Liver","Stomach"],answer:2,exp:"The liver converts toxic ammonia into urea."},

{q:"Which of the following is a part of the central nervous system of our body?",options:["Spinal cord","Pancreas","Stomach","Liver"],answer:0,exp:"The spinal cord is a component of the central nervous system."},

{q:"Gastric glands present in the wall of the stomach do NOT release:",options:["Pepsin","Saliva","Hydrochloric acid","Mucus"],answer:1,exp:"Saliva is secreted by salivary glands, not gastric glands."},

{q:"Which of the following organs protects the blood plasma from excessive acid or alkaline conditions by controlling ions?",options:["Abdomen","Kidney","Gall bladder","Intestines"],answer:1,exp:"Kidneys maintain acid-base balance by regulating ions."},

{q:"Which of the following is NOT a part of the alimentary canal of the human body?",options:["Rectum","Oesophagus","Pharynx","Trachea"],answer:3,exp:"The trachea belongs to the respiratory system."},

{q:"Which enzyme initiates carbohydrate digestion in the human mouth?",options:["Salivary amylase present in saliva","Pepsin secreted by gastric glands","Lipase secreted by liver","Trypsin released by pancreas"],answer:0,exp:"Salivary amylase begins starch digestion in the mouth."},

{q:"Which enzyme, secreted by the chief cells of the stomach, is crucial for initiating the digestion of proteins?",options:["Gastric lipase","Trypsinogen","Pepsinogen","Amylase"],answer:2,exp:"Pepsinogen is converted into pepsin for protein digestion."},

{q:"Which of the following best describes the nutrition process in amoeba?",options:["Ingestion → Digestion → Absorption → Egestion","Absorption → Ingestion → Digestion → Egestion","Ingestion → Egestion → Absorption → Digestion","Diffusion → Ingestion → Digestion → Absorption"],answer:0,exp:"Amoeba follows ingestion, digestion, absorption and egestion."},

{q:"Protein digesting enzyme pepsin is secreted in the:",options:["Ileum","Stomach","Mouth","Duodenum"],answer:1,exp:"Pepsin is secreted by gastric glands in the stomach."},

{q:"Which of the following is a process in which absorbed substances from alimentary canal are transported to different organs where they are used to build complex substances?",options:["Digestion","Photosynthesis","Transpiration","Assimilation"],answer:3,exp:"Assimilation is the utilization of absorbed nutrients."},

{q:"Among the major systems of human physiology, to which organ system does blood belong?",options:["Digestive system","Nervous system","Endocrine system","Circulatory system"],answer:3,exp:"Blood is a component of the circulatory system."},

{q:"What is the primary reason that roughage is included in a balanced human diet?",options:["It aids digestion and prevents constipation","It builds muscles","It helps in fat storage","It increases sugar absorption"],answer:0,exp:"Roughage promotes bowel movement and prevents constipation."},

{q:"What is the name of the food pipe?",options:["Bile duct","Diaphragm","Esophagus","Intestine"],answer:2,exp:"The esophagus carries food from mouth to stomach."},

{q:"Goblet cells play a crucial role in maintaining the health of various organs. Where are goblet cells primarily located in the human body?",options:["Liver","Digestive tract","Brain","Kidneys"],answer:1,exp:"Goblet cells secrete mucus in the digestive tract."},

{q:"What protects the inner lining of the stomach from the action of acid under normal conditions?",options:["Villi","Gastric Glands","Mucus","Enzymes"],answer:2,exp:"Mucus protects the stomach wall from HCl."},

{q:"The process of digestion of food in humans begins in _______ and is completed in ________.",options:["Food pipe; small intestine","Stomach; large intestine","Food pipe; large intestine","Mouth; small intestine"],answer:3,exp:"Digestion starts in the mouth and is completed in the small intestine."},

{q:"Out of the four organs listed, three are alike in some manner and one is different. Select the odd one.",options:["Liver","Stomach","Large Intestine","Kidney"],answer:3,exp:"Kidney belongs to the excretory system, not the digestive system."},

{q:"Which of the following is an enzyme that is secreted in the stomach during the process of digestion?",options:["Trypsin","Pepsin","Mucus","Amylase"],answer:1,exp:"Pepsin is the main protein-digesting enzyme of the stomach."},

{q:"Which of the following is about 23 feet long in an average adult human being?",options:["Liver","Large intestine","Appendix","Small intestine"],answer:3,exp:"The small intestine is about 6–7 meters long."},

{q:"What is the function of guard cells of the stomata?",options:["Stool-emission","Hygiene & support","Opening and closing","Digestion"],answer:2,exp:"Guard cells regulate the opening and closing of stomata."},

{q:"In the context of digestion, bolus is best described by which of the following options?",options:["A mixture of food and saliva formed during chewing","A digestive fluid secreted by glands in the intestinal mucosa","A type of enzyme produced by the pancreas","A hormone released by the stomach to stimulate digestion"],answer:0,exp:"Bolus is the chewed mass of food mixed with saliva."},

{q:"Which organ in the human body regulates the sugar content in the blood?",options:["Stomach","Liver","Gall bladder","Pancreas"],answer:3,exp:"The pancreas regulates blood sugar through insulin and glucagon."},

{q:"Which enzyme is responsible for the breakdown of complex sugar molecules into simple glucose in human beings?",options:["Lipase","Amylase","Pepsin","Bile Juice"],answer:1,exp:"Amylase breaks down starch into simpler sugars."},

{q:"Where is insulin produced in the human body?",options:["Bile duct","Liver","Spleen","Pancreas"],answer:3,exp:"Insulin is produced by beta cells of the pancreas."},

{q:"Which of the following organs of the digestive system has the shape similar to the English alphabet 'J'?",options:["Liver","Mouth","Stomach","Intestine"],answer:2,exp:"The stomach is a J-shaped organ."},

{q:"Which of the following is NOT a part of the digestive system?",options:["Stomach","Heart","Liver","Mouth"],answer:1,exp:"The heart belongs to the circulatory system."},

{q:"Select the INCORRECT pair related to digestive glands and their enzymes.",options:["Liver — bile juice","Gastric gland — pepsin","Pancreas — pancreatic juice","Salivary gland — trypsin"],answer:3,exp:"Trypsin is secreted by the pancreas, not salivary glands."},

{q:"Enzyme ptyalin is seen in -",options:["Gastric juice","Pancreatic juice","Intestinal juice","Saliva"],answer:3,exp:"Ptyalin is another name for salivary amylase."},

{q:"Which of the following chemical secretions helps our body in control and coordination?",options:["Sebum","Hormones","Gastric mucosa","Saliva"],answer:1,exp:"Hormones regulate and coordinate body functions."},

{q:"Which of the following is the correct order of movement of food in the digestive tract?",options:["Oesophagus - Mouth - Stomach","Oesophagus - Stomach - Mouth","Mouth - Oesophagus - Stomach","Mouth - Stomach - Oesophagus"],answer:2,exp:"Food moves from mouth to oesophagus and then to stomach."},

{q:"Gastric glands produce the enzyme ________ during digestion, which digests proteins.",options:["Lactase","Helicase","Trypsin","Pepsin"],answer:3,exp:"Pepsin is the protein-digesting enzyme of the stomach."},
],
set5:[
{q:"Which of the following systems is NOT found in nematodes?",options:["Digestive system","Excretory system","Reproductive system","Respiratory system"],answer:3,exp:"Nematodes lack a specialized respiratory system."},

{q:"When we eat something we like, our mouth waters by a fluid called saliva. In this situation, which enzymes break starch into simple sugar?",options:["Amylase enzymes","Pancreatic enzymes","Pepsin enzymes","Trypsin enzymes"],answer:0,exp:"Salivary amylase breaks down starch into simpler sugars."},

{q:"What does Vitamin K deficiency lead to?",options:["Problem in digestion","Problem in calcium metabolism","Problem in blood coagulation","All of the options"],answer:2,exp:"Vitamin K is essential for blood clotting."},

{q:"Which organ in the human body produces bile juice?",options:["Small intestine","Pancreas","Liver","Stomach"],answer:2,exp:"The liver produces bile juice for fat digestion."},

{q:"Acid secretion is a characteristic of -",options:["Buccal cavity","Large intestine","Stomach","Small intestine"],answer:2,exp:"Hydrochloric acid is secreted by the stomach."},

{q:"What is the main function of bile in human digestion?",options:["To convert glucose into glycogen in the liver","To digest proteins completely in the stomach","To make food alkaline and break down large fat globules","To mix food with saliva for easy swallowing"],answer:2,exp:"Bile emulsifies fats and neutralizes acidic chyme."},

{q:"What is the role of peristaltic movements in the human digestive system?",options:["To absorb nutrients into the blood","To push food forward along the digestive tract","To digest proteins in the stomach","To produce digestive enzymes"],answer:1,exp:"Peristalsis moves food through the alimentary canal."},

{q:"The enzyme present in gastric juice is ________.",options:["Trypsin","Pepsin","Amylase","Ptyalin"],answer:1,exp:"Pepsin is the protein-digesting enzyme of gastric juice."},

{q:"Which organ of the human body pumps blood?",options:["Pancreas","Heart","Stomach","Liver"],answer:1,exp:"The heart pumps blood throughout the body."},

{q:"Which of the following glands secretes trypsin enzyme?",options:["Gastric gland","Salivary gland","Pancreas","Liver"],answer:2,exp:"Trypsin is secreted by the pancreas."},

{q:"Which one of the following is the correct sequence of steps in Digestive System?",options:["Absorption, Egestion, Digestion, Ingestion","Egestion, Ingestion , Absorption , Digestion","Ingestion, Digestion, Absorption, Egestion","Ingestion, Absorption, Egestion, Digestion"],answer:2,exp:"Digestion follows ingestion, digestion, absorption and egestion."},

{q:"Which of the following enzymes is present in saliva?",options:["Salivary Amylase","Salivary Lipase","No enzyme","Salivary Protease"],answer:0,exp:"Salivary amylase starts carbohydrate digestion in the mouth."},

{q:"Which primary feature allows mitochondria to be called the 'powerhouse of the cell'?",options:["They contain digestive enzymes","They control protein synthesis","They store calcium ions","They synthesise energy as ATP"],answer:3,exp:"Mitochondria generate ATP, the energy currency of cells."},

{q:"Which enzyme present in saliva helps break down starch?",options:["Amylase","Pepsin","Lipase","Trypsin"],answer:0,exp:"Amylase converts starch into simpler sugars."},

{q:"Which of the following is the longest part of the alimentary canal?",options:["Stomach","Food pipe","Large intestine","Small intestine"],answer:3,exp:"The small intestine is the longest part of the digestive tract."},

{q:"In the digestive system, which of the following releases hydrochloric acid, a protein digesting enzyme called pepsin, and mucus?",options:["Pancreas","Gall bladder","Gastric glands","Salivary glands"],answer:2,exp:"Gastric glands secrete HCl, pepsin and mucus."},

{q:"Why is intracellular digestion suitable for unicellular organisms?",options:["They lack digestive enzymes.","They lack specialized digestive organs.","They depend on external digestion.","They have large body cavities."],answer:1,exp:"Unicellular organisms do not possess specialized digestive organs."},

{q:"The tongue helps in digestion mainly by _________.",options:["mixing food with saliva","crushing food into smaller pieces","absorbing nutrients","secreting digestive enzymes"],answer:0,exp:"The tongue mixes food with saliva and helps swallowing."},

{q:"Pepsin is an enzyme secreted in the-",options:["Liver","Mouth","Kidney","Stomach"],answer:3,exp:"Pepsin is secreted by gastric glands in the stomach."},

{q:"Bile is secreted by the _______.",options:["pancreas","gall bladder","stomach","liver"],answer:3,exp:"The liver secretes bile, which is stored in the gall bladder."},

{q:"In which of the following parts of the human body do the epithelial cells have cilia?",options:["Buccal cavity","Respiratory tract","Stomach wall","Food pipe"],answer:1,exp:"Ciliated epithelium lines the respiratory tract."},

{q:"Which are the two main organs in the human body where the magnetic field produced is significant?",options:["Stomach and intestines","Liver and gallbladder","Lungs and liver","Heart and brain"],answer:3,exp:"The heart and brain generate measurable bioelectric magnetic fields."},

{q:"Blood brings carbon dioxide from the rest of the body for release into the:",options:["intestines","oesophaugus","stomach","alveoli"],answer:3,exp:"Carbon dioxide is released from blood into the alveoli."},

{q:"Which major discovery helps to design drugs in the treatment of hyperacidity?",options:["The role of enzymes in digestion","The use of antibiotics to neutralize stomach acid","Hydrochloric acid present in the stomach","Histamine stimulates acid secretion in the stomach"],answer:3,exp:"Knowledge of histamine-mediated acid secretion led to anti-ulcer drugs."},

],
set6:[
{q:"The nucleus contains chromosomes, which appear as rod-shaped structures only when the cell is about to divide. These chromosomes are composed of _____.",options:["RNA and lipids","Amino acids and carbohydrates","DNA and proteins","Glucose and enzymes"],answer:2,exp:"Chromosomes are made of DNA wrapped around proteins called histones."},

{q:"If two daughter cells produced by cell division show minor differences in their structure, which process during DNA copying most likely caused these variations?",options:["Errors in protein synthesis after DNA copying","Minor variations occur during DNA copying due to the inherent unreliability of biochemical reactions","The separation of DNA copies into new cells is incomplete","The absence of DNA blueprints in the nucleus"],answer:1,exp:"Small errors during DNA replication create variations."},

{q:"In eukaryotic cells, the smooth endoplasmic reticulum is mainly responsible for:",options:["Protein synthesis","Lipid synthesis and detoxification","Sugar breakdown","Genetic information storage"],answer:1,exp:"SER helps in lipid production and detoxification."},

{q:"What determines the sex of a child?",options:["Blood group of father","Rh factor of the parents","Blood group of mother","Chromosomes"],answer:3,exp:"Sex is determined by the sex chromosomes inherited."},

{q:"Name the scientist who developed the process of deciphering the genetic code in the living cells in the 1960s.",options:["Archibald Garrod","Marshall Nirenberg","Wilhelm Johannsen","Erich von Tschermak"],answer:1,exp:"Marshall Nirenberg helped decode the genetic code."},

{q:"Why is it important for DNA to be accompanied by a cellular apparatus in a reproducing cell during DNA copying?",options:["To ensure energy is stored in the new cell","To maintain life processes in the new cell","To help DNA avoid mutations","To provide structural support to the DNA only"],answer:1,exp:"Cellular machinery is needed to sustain life functions."},

{q:"Name the separate entity that controls the symptoms in the rule of effectiveness?",options:["Test Cross","Phenotype","Factors","Genotype"],answer:2,exp:"Mendel called hereditary units factors."},

{q:"Which of the following statements is INCORRECT about DNA copies produced during the process of reproduction?",options:["DNA copying is a completely error-free process.","Copying of DNA is a pre-requisite for reproduction.","DNA copies generated are similar but not identical.","DNA copies are single stranded."],answer:0,exp:"DNA replication can introduce occasional errors."},

{q:"Carbon has the unique ability to form bonds with other atoms of carbon. This property is known as _____.",options:["allotropes","homologus","catenation","Cyclisation"],answer:2,exp:"Carbon atoms can link together by catenation."},

{q:"What are the units of inheritance, which Mendel referred to as 'factors,' now called?",options:["Chromosomes","DNA","Genes","Traits"],answer:2,exp:"Genes are the hereditary units controlling traits."},

{q:"What is the function of the anaphase-telophase transition in mitosis?",options:["Separation of chromatids and reformation of the nuclear envelope","Condensation of chromosomes","Synthesis of new DNA strands","Initiation of DNA replication"],answer:0,exp:"Chromatids separate and new nuclei begin forming."},

{q:"What is the meaning of the phrase 'the DNA copies generated will be similar, but may not be identical'?",options:["Each DNA copy is totally unrelated.","DNA copies may have slight differences.","All DNA copies are identical clones.","The original DNA is destroyed after copying."],answer:1,exp:"Replication may produce minor genetic differences."},

{q:"What is the primary objective of launching India’s first National Biofoundry Network under the BioE3 policy in August 2025?",options:["Biomanufacturing","Skill training","Wildlife study","Gene editing"],answer:0,exp:"The initiative focuses on advancing biomanufacturing."},

{q:"The rough endoplasmic reticulum is associated with:",options:["Lipid synthesis","DNA replication","Protein synthesis","Enzyme breakdown"],answer:2,exp:"Ribosomes on RER synthesize proteins."},

{q:"Which type of RNA transports genetic information from the DNA in the nucleus to the ribosomes in the cytoplasm, where it directs protein synthesis?",options:["tRNA","snRNA","mRNA","rRNA"],answer:2,exp:"mRNA carries genetic instructions for protein synthesis."},

{q:"What is the primary mechanism through which sexual reproduction generates genetic diversity in the offspring?",options:["Frequent cell divisions during gamete formation","Inaccuracies in DNA copying during gamete formation in maternal and paternal parents","Random distribution of maternal or paternal chromosomes from each chromosome pair to the gametes","Variation in chromosome number among the gametes"],answer:2,exp:"Random assortment of chromosomes creates genetic diversity."},

{q:"Double helical model of DNA molecule was proposed by -",options:["Khorana","Watson and Crick","Morgan","Nirenberg"],answer:1,exp:"Watson and Crick proposed the DNA double helix model."},

{q:"Who is known as the 'Father of Modern Genetics'?",options:["Robert Brown","Rosalind Franklin","James Watson","Gregor Mendel"],answer:3,exp:"Gregor Mendel established the basic laws of inheritance."},

{q:"In which of the following methods, recombinant DNA is entered directly into the nucleus of the animal cells?",options:["Inner Inactive","Micro Injection","Bio Modification","Gene Spike"],answer:1,exp:"Microinjection inserts DNA directly into the cell nucleus."},

{q:"Which of the following best explains why uracil is used in RNA instead of thymine?",options:["Thymine is not recognized by ribosomes","Uracil enhances RNA splicing","Thymine inhibits transcription","Uracil is energetically cheaper to synthesise"],answer:3,exp:"Uracil requires less energy to produce than thymine."},

{q:"Which of the following statements about DNA and RNA is true?",options:["DNA is not present in viruses.","DNA acts only as a messenger molecule.","RNA has multiple roles including catalytic functions.","RNA acts solely as genetic material in all living organisms."],answer:2,exp:"RNA can function as a catalyst as well as genetic material."},

{q:"What determines the sex of a child in humans?",options:["Number of autosomes","Mitochondrial DNA","Mother’s ovum","Father’s sperm"],answer:3,exp:"The father's sperm contributes either X or Y chromosome."},

{q:"Plastids have their own __________ and __________, similar to mitochondria.",options:["DNA; ribosomes","vesicles; proteins","nucleus; chromosomes","enzymes; vacuoles"],answer:0,exp:"Plastids contain their own DNA and ribosomes."},

{q:"The plasma membrane is composed of _____________.",options:["DNA and lipids","lipids and proteins","sugars and lipids","proteins and sugars"],answer:1,exp:"The plasma membrane mainly consists of lipids and proteins."},

{q:"Who discovered the ribosomes in the cell?",options:["Dmitri Ivanovsky","Stephen Hales","George Emil Palade","Alec Jeffreys"],answer:2,exp:"George Emil Palade discovered ribosomes."},

{q:"What is the importance of sexual reproduction in creating variation in plant populations?",options:["It speeds up DNA copying errors.","It prevents any variations from occurring.","It copies DNA without any changes.","It mixes DNA from two parents to create new variations."],answer:3,exp:"Genetic material from two parents increases variation."},

{q:"Why are Indian poultry breeds cross-bred with exotic breeds to improve productivity?",options:["Developing poultry with high yield and local adaptability.","Produce genetically identical birds, thereby eliminating variation in the flock.","Alter genetics to reduce feed needs only of birds without considering their adaptability.","Create entirely new bird species to replace traditional poultry farming practices."],answer:0,exp:"Cross-breeding combines productivity with local adaptability."},

{q:"Which of the following represents a similarity between chloroplast and Mitochondria?",options:["Both perform photosynthesis.","Both perform respiration.","Both posses their own DNA and 70S Ribosome.","Both have chlorophyll."],answer:2,exp:"Both organelles contain their own DNA and 70S ribosomes."},

{q:"The smooth endoplasmic reticulum (SER) helps in the manufacture of ___________.",options:["proteins","lipids (fats)","DNA","starch"],answer:1,exp:"SER is involved in lipid synthesis."},

{q:"The other term for genetic engineering is:",options:["DNA fingerprinting","DNA editing","Recombinant DNA technology","Gene therapy"],answer:2,exp:"Genetic engineering is also known as recombinant DNA technology."},

{q:"What is the number of chromosomes present in human gametes (egg and sperm)?",options:["A set of chromosomes","22 pairs of chromosomes","Not a single chromosome","Three sets of chromosomes"],answer:0,exp:"Human gametes are haploid and contain one set of chromosomes."},
],
set7:[
{q:"Which one of the following correctly represents Mendel's conclusion about inheritance?",options:["Each trait is controlled by three genes.","Each traits is controlled by one factor.","Each trait is controlled by two factors.","Each trait is controlled by one chromosome."],answer:2,exp:"Mendel proposed that each trait is controlled by a pair of factors."},

{q:"Why does sexual reproduction result in greater variation among offspring?",options:["It produces exact replicas of the parent.","It allows combination of genetic material from two individuals.","It occurs only in humans.","It involves copying of identical DNA."],answer:1,exp:"Genetic material from two parents increases variation."},

{q:"What are the two versions of a gene controlling a trait called?",options:["Chromosomes","Proteins","Mutations","Alleles"],answer:3,exp:"Alternative forms of a gene are called alleles."},

{q:"Traits can be influenced by:",options:["by both paternal DNA and maternal DNA","only paternal DNA","only maternal DNA","only maternal grandparent DNA"],answer:0,exp:"Traits are usually influenced by genes from both parents."},

{q:"What is the advantage of combining DNA from two different individuals in sexually reproducing animals?",options:["It eliminates errors in DNA copying.","It increases genetic variation within the population.","It speeds up the reproduction process.","It reduces the need for specialized reproductive organs."],answer:1,exp:"Mixing DNA increases diversity within populations."},

{q:"What unique feature do the sex chromosomes in humans have compared to other chromosomes?",options:["They are the largest chromosomes in the body.","They are always perfectly paired.","They are not always a perfect pair in males.","They are identical in males and females."],answer:2,exp:"Male humans have XY sex chromosomes which are not identical."},

{q:"The combination of alleles at specific gene locations on an organism's chromosomes, representing its genetic constitution, is known as ______.",options:["genotype","DNA","double helix","phenotype"],answer:0,exp:"Genotype refers to the genetic makeup of an organism."},

{q:"Energy reserves are found in the form of chemical bonds in living beings, these chemicals of energy are called -",options:["Metabolism","Deoxyribonucleic Acid","Adenoset Tri - Phosphate","Ribonucleic Acid"],answer:2,exp:"ATP is the primary energy currency of cells."},

{q:"What is the first stage of gene deposition, in which enzyme RNA polymerase is copied to any particular segment of DNA in the RNA (especially mRNA)?",options:["DNA Replica","Central Dogma","Codon","Transcription"],answer:3,exp:"Transcription is the process of synthesizing RNA from DNA."},

{q:"What is the energy currency for most cellular processes?",options:["NAD","DNA","ATP","RNA"],answer:2,exp:"ATP provides energy for most cellular activities."},

{q:"The inability to isolate intact DNA for structural studies prior to the 1950s was primarily due to which molecular feature?",options:["DNA’s high melting point","DNA’s large polymeric nature and fragility","DNA’s interaction with histone proteins","DNA’s susceptibility to UV degradation"],answer:1,exp:"DNA is a large fragile polymer that was difficult to isolate intact."},

{q:"DNA polymerase catalyses the addition of nucleotides during DNA replication. Its main role is to:",options:["Ligate Okazaki fragments together","Synthesise new DNA strands complementary to the template","Unwind the DNA double helix","Remove RNA primers from the lagging strand"],answer:1,exp:"DNA polymerase builds new DNA strands using a template."},

{q:"Which of the following ensures that the DNA amount is NOT doubled in every generation?",options:["Consistency of DNA in gametes","Division of body cells","Reduction of DNA in gametes","Division of neurons"],answer:2,exp:"Gametes contain half the DNA, preventing doubling each generation."},

{q:"A complete set of nuclear DNA in an organism is called____________.",options:["Tissue","Chromosome","Organelle","Genome"],answer:3,exp:"The genome is the complete set of genetic material."},

{q:"Butane (C₄H₁₀) exists in two different forms: one with a straight chain and one with a branched chain. What is this phenomenon called?",options:["Isomerism","Catenation","Polymerisation","Sublimation"],answer:0,exp:"Compounds with the same formula but different structures show isomerism."},

{q:"What is the phenomenon of organisms in which female gamete develops to form new creatures without fertilization?",options:["Genome","Parthenogenesis","Monogamy","Syngamy"],answer:1,exp:"Parthenogenesis is development from an unfertilized egg."},

{q:"Which of the following statements is INCORRECT about aneuploids?",options:["One or more chromosomes of a chromosome set either missing or having more copies","Unequal distribution of chromosomes to opposite poles","Usually results from irregular meiotic division","Organisms having more than two sets of chromosomes in each cell"],answer:3,exp:"Having more than two complete chromosome sets is polyploidy, not aneuploidy."},

{q:"What is the study of heredity and variation called?",options:["Evolution","Mutation","Genetics","Biology"],answer:2,exp:"Genetics deals with heredity and variation."},

{q:"Which of the following is a branch of technology that deals with dimensions and tolerances of less than 100 nanometers, especially the manipulation of individual atoms and molecules?",options:["Biotechnology","Femtotechnology","Nanotechnology","Microtechnology"],answer:2,exp:"Nanotechnology works at the nanoscale level."},

{q:"The number of chromosomes in Cat is",options:["12 pairs","19 pairs","14 pairs","23 pairs"],answer:1,exp:"Domestic cats have 19 pairs of chromosomes."},

{q:"The complete sequencing of the human genome has marked the beginning of:",options:["genomics","immunology","cytogenetics","structural biology"],answer:0,exp:"Genome sequencing led to the rise of genomics."},

{q:"A segment of DNA that provides information to a protein, is called the __________ of that protein.",options:["Gene","Heredity","Enzyme","Chromosome"],answer:0,exp:"A gene contains instructions for making a protein."},

{q:"What are the number of chromosomes in a human male germ cell?",options:["46 pairs of Chromosomes","23 Chromosomes","23 pairs of Chromosomes","46 Chromosomes"],answer:1,exp:"Human germ cells are haploid and contain 23 chromosomes."},

{q:"Every trait in an organism is influenced by which of the following?",options:["Only maternal DNA","By both maternal and paternal DNA equally","More by paternal DNA than maternal DNA","Only paternal DNA"],answer:1,exp:"Traits are generally influenced by genes from both parents."},

{q:"What is the term used to describe the different forms of a gene?",options:["Allele","Phenotype","Genotype","Chromosome"],answer:0,exp:"Different forms of a gene are called alleles."},

{q:"Who demonstrates the multiplicative process of becoming amino acids from polypeptide?",options:["Translation","Transcription","Aminoceleasan","Regulation"],answer:0,exp:"Translation converts genetic information into proteins."},

{q:"Which of the following terms describe a change in the DNA sequence resulting in changes in the genotype and the phenotype of an organism?",options:["Segregation","Mutation","Dominance","Transcription"],answer:1,exp:"A mutation is a change in the DNA sequence."},

{q:"The intermediary that DNA molecules use to communicate with the rest of the cell is the:",options:["miRNA","tRNA","mRNA","rRNA"],answer:2,exp:"mRNA carries information from DNA to ribosomes."},

{q:"Which crop variety improvement method involves selecting parents with desirable traits and crossing them?",options:["Hybridisation","Mutation","Tissue Culture","Genetic Engineering"],answer:0,exp:"Hybridisation combines desirable traits from selected parents."},

{q:"Who is the full genetic formation of a person?",options:["Phenotype","Hybrid","Genotype (gene)","Dihybrid Cross"],answer:2,exp:"Genotype refers to the complete genetic makeup of an individual."},

{q:"Which of the following options best represents the predictions of a Punnett square?",options:["Genotype and phenotype probabilities","Genetic linkage relationships in siblings","Genetic mutations over several generations","DNA sequence in parents"],answer:0,exp:"Punnett squares predict genotype and phenotype probabilities."},

{q:"What are the different forms of a gene called?",options:["Chromosomes","Genotypes","Phenotypes","Alleles"],answer:3,exp:"Alternative forms of a gene are known as alleles."},

{q:"Which of the following best explains the functional diversity of RNA molecules in cells?",options:["Their linear sequence of deoxyribonucleotides","Their capability to act as adapter, structural and catalytic molecules","Their permanent role as genetic material","Their ability to form double-stranded helical structures"],answer:1,exp:"RNA performs structural, catalytic and information-carrying roles."},

{q:"________ chromosomes are found in the nucleus of human cells?",options:["23 Chromosome","100 Chromosome","46 pair chromosome","23 pair chromosome"],answer:3,exp:"Human somatic cells contain 23 pairs of chromosomes."},

{q:"Why are cross-breeding programmes between indigenous and exotic poultry breeds undertaken?",options:["To create hybrids with less attractive features","To create hybrids showing similarity with their ancestors","To develop new varieties with desirable traits","To increase only the egg size"],answer:2,exp:"Cross-breeding helps combine desirable characteristics."},

{q:"Which of the following best describes the impact of human genome sequencing?",options:["It marked a milestone toward transcriptional regulation.","It eliminated the need for classical genetics.","It clarified all RNA-related functions","It initiated a new scientific domain."],answer:3,exp:"Human genome sequencing launched the field of genomics."},

{q:"The mention of DNA as a long polymer of deoxyribonucleotides implies which structural characteristic?",options:["It is composed of a sugar-phosphate backbone and nitrogenous bases.","Each nucleotide is linked by hydrogen bonds in a parallel fashion.","The molecule consists of multiple independent short chains.","The sequence is circular and self-replicating."],answer:0,exp:"DNA consists of nucleotides linked through a sugar-phosphate backbone."},

{q:"What is the purpose of the Punnett square in genetics?",options:["Determining the phenotype of an individual","Predicting the outcomes of genetic crosses","Identifying the location of a gene on a chromosome","Analysing DNA replication"],answer:1,exp:"Punnett squares are used to predict inheritance patterns."},

{q:"What is the name of the semiconservative process in which DNA duplicates into two identical molecules?",options:["Translation","Mutation","Transcription","Replication"],answer:3,exp:"DNA replication produces two identical DNA molecules."},

{q:"Cut in special places in DNA by whom?",options:["Endonuclease","Plasmid","Exonuclease","Ricobinant DNA"],answer:0,exp:"Endonucleases cut DNA at specific recognition sites."},

{q:"In the context of inheritance of sex chromosomes in humans, which of the following statements is correct?",options:["All children inherit a Y chromosome from their father, and the sex is determined by the chromosome inherited from their mother.","All children inherit an X chromosome from their mother, and the sex is determined by the chromosome inherited from their father.","All children inherit a Y chromosome from their mother, and the sex is determined by the chromosome inherited from their father.","All children inherit an X chromosome from their father, and the sex is determined by the chromosome inherited from their mother."],answer:1,exp:"The mother always contributes X, while the father contributes X or Y."},

{q:"Which process must accompany DNA copying to ensure the formation of functional daughter cells?",options:["Chromosomal mutation","RNA transcription only","Protein synthesis only","Creation of additional cellular apparatus"],answer:3,exp:"New cells require cellular machinery along with copied DNA."},

{q:"In mitosis, how do the chromosomes in daughter cells compare with those in the parent cell?",options:["Daughter cells have the same number of chromosomes as the parent cell.","Daughter cells have half the number of chromosomes as the parent cell.","Daughter cells lose all chromosomes during division.","Daughter cells contain twice the number of chromosomes as the parent cell."],answer:0,exp:"Mitosis produces daughter cells with the same chromosome number."},

{q:"Select the option that is true regarding the following two statements labelled Assertion (A) and Reason (R). Assertion (A): Vegetative propagation helps grow plants that do not produce seeds. Reason (R): It uses flowers to grow new plants.",options:["A is true, but R is false","Both A and R are true, but R is not the correct explanation of A","A is false, but R is true","Both A and R are true, and R is the correct explanation of A"],answer:0,exp:"Vegetative propagation is true, but it does not use flowers for reproduction."},

],
set8:[
{q:"Recombinant proteins, often seen in the news, are _____.",options:["proteins synthesised in animal models","proteins synthesised by transgene in host cell by rDNA technology","natural proteins found in bacteria","proteins synthesised in mutated cell lines"],answer:1,exp:"Recombinant proteins are produced in host cells using recombinant DNA technology."},

{q:"Two children of the same parents resemble each other but are not exactly alike because ___________.",options:["they show different combinations of the genetic variation existing in their parents","their parents show very little genetic variation","each of them inherits all genetic characters from one parent only","each of them shows variation in their DNA copying mechanisms"],answer:0,exp:"Each child receives a unique combination of parental genes."},

{q:"Which of the following pairs of human male chromosome is mismatched in size?",options:["Thirteenth pair autosomes","First pair autosomes","Twentieth pair autosomes","Sex chromosomes"],answer:3,exp:"Male sex chromosomes X and Y differ significantly in size."},

],
set9:[{q:"हिमालय?",options:["पहाड़","नदी","समुद्र","रेगिस्तान"],answer:0,exp:"पहाड़"},{q:"बिहार?",options:["राज्य","देश","नगर","द्वीप"],answer:0,exp:"राज्य"}],
set10:[{q:"थार?",options:["रेगिस्तान","नदी","पहाड़","झील"],answer:0,exp:"रेगिस्तान"},{q:"लोकतंत्र?",options:["जनता","राजा","सेना","धर्म"],answer:0,exp:"जनता"}],
},

heredity: {
set1: [
{q:"'Theory of Natural selection' was proposed by -",options:["Charles Huxley","Charles Darwin","Erasmus Darwin","Morgan"],answer:1,exp:"Charles Darwin proposed the theory of natural selection."},

{q:"Which of the following statements about sexual reproduction is INCORRECT?",options:["It generates variations for species survival.","It helps organisms adapt to changing environments.","It produces identical clones.","It combines DNA from two parents."],answer:2,exp:"Sexual reproduction produces variation, not identical clones."},

{q:"Read the following statements carefully and select the correct option. Assertion (A): Keeping oily food in airtight containers prevents rancidity. Reason (R): Airtight containers slow down the oxidation of fats and oils.",options:["Both A and R are true, and R is the correct explanation of A.","A is false, but R is true.","A is true, but R is false.","Both A and R are true, and R is not the correct explanation of A."],answer:0,exp:"Airtight containers reduce oxidation and prevent rancidity."},

{q:"Name the scientist who defined elements as substances that CANNOT be broken down into simpler form by chemical reactions.",options:["Charles Darwin","Robert boyle","Antoine Laurent Lavoisier","Robert Hookie"],answer:2,exp:"Lavoisier defined elements as basic substances."},

{q:"Which of the following characteristics of pea was a dominant trait, used by Mendel in his experiments?",options:["Wrinkled Seeds","Tall Plants","Dwarf Plants","Green Seeds"],answer:1,exp:"Tallness is dominant over dwarfness in pea plants."},

{q:"What is the number of chromosome in the dog?",options:["23 pair","12 pairs","32 pair","39 pair"],answer:3,exp:"Dogs have 39 pairs of chromosomes."},

{q:"In a genetic lab, a fertilised human embryo is found to have XX chromosomes. Which of the following is true?",options:["The embryo will become a human female.","The embryo has an extra Y chromosome.","The embryo will become a human male.","The embryo lacks sex chromosomes."],answer:0,exp:"XX chromosome combination results in a female."},

{q:"Mendel had selected garden pea for certain favourable reasons. Which of the following is NOT a reason for his choice required for his experiments?",options:["They can be self-pollinated and cross-pollinated.","They produce many offsprings.","They have easily observable traits.","They have a long generation time."],answer:3,exp:"Pea plants actually have a short generation time."},

{q:"Which of the following factors is primarily responsible for survival of species?",options:["Variations","Temperature","Niche","Mutation"],answer:0,exp:"Variations help species adapt and survive."},

{q:"Which of the following crosses will produce all heterozygous offspring in the F1 generation?",options:["TT × TT","Tt × Tt","TT × tt","tt × tt"],answer:2,exp:"TT × tt produces all Tt offspring."},

{q:"Which of the following pairs are correctly matched as structural isomers? A) Pentane − 2-methylbutane B) Butane − 2-methylpropane C) Benzene − cyclohexene",options:["A and B only","B and C only","A and C only","A, B and C"],answer:0,exp:"Pentane/2-methylbutane and Butane/2-methylpropane are structural isomers."},

{q:"The most recently discovered link in human evolution is the discovery of fossils of:",options:["Lucy","Homo naledi","Homo sapiens","Austiopithelines"],answer:1,exp:"Homo naledi is a recently discovered human ancestor."},

{q:"What is the main purpose of creating DNA copies during reproduction?",options:["To change the structure of cells","To pass genetic information to offspring","To make organisms immune to diseases","To produce identical twins"],answer:1,exp:"DNA copies transfer hereditary information to offspring."},

{q:"What was Mendel’s contribution to genetics?",options:["Inheritance of Acquired Traits","Laws of Inheritance","Discovery of DNA","Theory of Evolution"],answer:1,exp:"Mendel established the laws of inheritance."},

{q:"Which scientist formulated 'the theory of Evolution'?",options:["Aristotle","Alexander Fleming","Charles Darwin","Issac Newton"],answer:2,exp:"Charles Darwin formulated the theory of evolution."},

{q:"Why do recessive traits like 't' for dwarfness in pea plants only show up when both alleles are recessive?",options:["Dominant alleles mask recessive alleles.","Recessive alleles are stronger.","Recessive alleles cannot be passed on.","Recessive alleles are never expressed."],answer:0,exp:"A dominant allele masks the expression of a recessive allele."},

{q:"In a large population of sweet pea plants growing in stable conditions, which of the following best explains why genetic variation through sexual reproduction is still crucial for their long-term survival?",options:["Genetic variation ensures uniform flower color and height across future generations.","Hidden (recessive) alleles in sweet peas may offer resistance against future environmental stress.","Sweet pea plants reproduce faster sexually than asexually, ensuring more biomass production.","Variation helps sweet pea plants avoid cross-pollination, maintaining purity of the parental line."],answer:1,exp:"Hidden genetic variations can help plants survive future environmental changes."},

{q:"The process of fission in an amoeba results in the formation of ____________.",options:["two similar sized, genetically identical daughter cells","a small daughter cell and a large mother cell that are genetically different","four genetically different daughter cells","a large number of small, genetically identical daughter cells"],answer:0,exp:"Binary fission in Amoeba produces two identical daughter cells."},

{q:"K-shell is the ___________ energy level.",options:["Fourth","First","Third","Second"],answer:1,exp:"K-shell is the first and innermost electron shell."},

{q:"The system of scientific naming or nomenclature of organism which we use today was introduced by which of the following scientists?",options:["George Washington Carver","Carolus Linnaeus","Marie Curie","Charles Darwin"],answer:1,exp:"Carolus Linnaeus introduced binomial nomenclature."},

{q:"A plant breeder crosses two pure-breeding pea plants—one producing round seeds and the other producing wrinkled seeds. Based on Mendel’s findings, what phenotype would all the seeds in the F₁ generation display?",options:["Half round, half wrinkled","A mix of round and wrinkled in varying proportions","Round seeds","Wrinkled seeds"],answer:2,exp:"Round seed trait is dominant over wrinkled seed trait."},

{q:"According to the laws of refraction, which of the following is/are true? (A) The incident ray, the refracted ray and the normal to the interface of two transparent media do not lie in the same plane. (B) For a given colour of light and a given pair of media, the ratio of the sine of angle of incidence to sine of angle of refraction is a constant.",options:["'A' is false and 'B' is true.","Both 'A' and 'B' are false.","'A' is true and 'B' is false.","Both 'A' and 'B' are true."],answer:0,exp:"Only statement B is correct according to Snell's law."},

{q:"Select the INCORRECT statement regarding variation in plants.",options:["They are produced during sexual reproduction.","Individuals within a population are unique due to the variations.","They are produced due to inaccuracy in the copying of DNA.","Asexual reproduction is a regular source of variations in a population."],answer:3,exp:"Asexual reproduction generally produces genetically identical offspring."},

{q:"Which of the following explains the absence of recessive traits in the F₁ generation and their reappearance in the F₂ generation in Mendal’s experiment?",options:["Recessive traits become dominant in F₂ generation.","Recessive alleles are hidden in F₁ but reappear in F₂ due to segregation.","Recessive traits skip generations randomly","Recessive traits are completely destroyed in the F₁ generation"],answer:1,exp:"Segregation of alleles allows recessive traits to reappear in F₂."},

{q:"The process by which traits are passed from parents to offspring is known as _____________.",options:["mutation","heredity","hybridisation","linkage"],answer:1,exp:"Heredity is the transmission of traits from parents to offspring."},

{q:"What is the main purpose of hybridisation in crop improvement programmes?",options:["To produce genetically identical plants through cloning","To combine desirable traits by crossing genetically dissimilar plants","To grow crops without using fertilizers or irrigation","To increase the natural mutation rate in crop plants"],answer:1,exp:"Hybridisation combines useful traits from different parent plants."},

{q:"Which tissue is responsible for the size of the roots of plants?",options:["Epical Meristem","Interactive Maristem","Backlinks","Parenting"],answer:0,exp:"Apical meristem is responsible for root growth in length."},

{q:"The system of scientific naming Organism was introduced by:",options:["Alexis Carrel","Carolus Linnaeus","Angel Cabrera","George Caley"],answer:1,exp:"Carolus Linnaeus introduced the modern naming system."},

{q:"Which of the following was the scientist who blended his knowledge of science and mathematics to arrive at the laws of inheritance?",options:["E Rutherford","Camillo Golgi","Gregor Johann Mendel","John Dalton"],answer:2,exp:"Gregor Mendel used mathematics to establish inheritance laws."},

{q:"Which of the following is true for mitosis but not for meiosis?",options:["Promotes genetic variation","Occurs in reproductive cells","Produces identical daughter cells","Results in haploid cells"],answer:2,exp:"Mitosis produces genetically identical daughter cells."},

{q:"Which scientist(s) established the laws of Inheritance?",options:["Watson and Crick","Gregor Johann Mendel","Charles Darwin","Thomas Hunt Morgan"],answer:1,exp:"Gregor Mendel established the laws of inheritance."},

{q:"In some reptiles, the sex of the offspring is determined by:",options:["Presence or absence of a Y chromosome","Temperature at which eggs are incubated","Hormonal levels in the mother","Sex chromosomes"],answer:1,exp:"In many reptiles, incubation temperature determines sex."},

{q:"Select the correct option regarding the following two statements labelled Assertion (A) and Reason (R). Assertion (A): Calcium oxide reacts vigorously with water to form calcium hydroxide. Reason (R): In a combination reaction, two or more substances combine to form one product.",options:["A is true, but R is false.","Both A and R are true, and R is the correct explanation of A.","Both A and R are true, and R is not the correct explanation of A.","A is false, but R is true."],answer:1,exp:"CaO and water combine to form a single product, Ca(OH)₂."},

{q:"In plants, how does sexual reproduction leads to better survival in offspring?",options:["Offspring are exact clones","Offspring do not show any variation","Offspring are born faster","Offspring show new genetic recombination"],answer:3,exp:"Genetic recombination creates variation that aids survival."},

{q:"Why is variation important in sexually reproducing plants?",options:["It decreases the genetic diversity within the population.","It limits the adaptability of the species to changing environments.","It increases the chances of survival by enabling adaptation to environmental changes.","It ensures all offspring are identical to the parent, maintaining uniformity."],answer:2,exp:"Variation improves adaptation and survival in changing environments."},

{q:"'The Origin of Species' was written by:",options:["Plato","Aristotle","Confucius","Charles Darwin"],answer:3,exp:"Charles Darwin authored 'The Origin of Species'."},

{q:"A child is born with one X chromosome from the mother and one Y chromosome from the father. Which statement accurately describes the consequence of this chromosomal combination?",options:["The child will develop as a male due to the presence of the Y chromosome.","The child will develop as a female because X chromosome is always dominant over Y chromosome.","The child will not develop male characteristics without two Y chromosomes.","The child’s sex is determined by the mother, as she provides the X chromosome."],answer:0,exp:"The presence of a Y chromosome leads to male development."},

{q:"Who is considered as 'The father of Biology' ?",options:["Leeuwenhoek","Carolus Linnaeus","Lankester","Aristotle"],answer:3,exp:"Aristotle is widely known as the Father of Biology."},

{q:"Which of the following includes genetic engineering?",options:["Gene revolution","Bloodless revolution","Globalisation","Green revolution"],answer:0,exp:"Gene revolution is based on genetic engineering techniques."},

{q:"Identify one example of change taking place at puberty that can signify sexual maturation.",options:["Mood swings","Behaving differently","New hair-growth patterns","Increase in height"],answer:2,exp:"Growth of body hair is a sign of sexual maturation."},

{q:"Who discovered Penicillin?",options:["Charles Darwin","Alexander Fleming","Gregor Mendel","Louis Pasteur"],answer:1,exp:"Alexander Fleming discovered penicillin in 1928."},
],
set2: [

{q:"Why is variation important in a population of organisms?",options:["It helps some individuals survive if environmental conditions change.","It prevents reproduction.","It causes extinction of all organisms.","It makes organisms identical."],answer:0,exp:"Variation helps organisms adapt and survive environmental changes."},

{q:"How many pairs of sex chromosomes are present in humans?",options:["Forty six pairs","One pair","Twenty two pairs","Two pairs"],answer:1,exp:"Humans have one pair of sex chromosomes."},

{q:"In sexually reproducing organisms, how many versions of each trait does a child inherit?",options:["One version from father only","One version from each parent","Two versions from the mother only","One version in total"],answer:1,exp:"A child inherits one allele from each parent."},

{q:"Which of the following is the first stage of karyokinesis of mitosis that follows the S and G2 phases of interphase?",options:["Anaphase","Telophase","Metaphase","Prophase"],answer:3,exp:"Prophase is the first stage of mitosis."},

{q:"Which of the following is a result of the genetic variation introduced by sexual reproduction?",options:["Production of genetically identical offspring","Evolution","Decreased chances of survival","Formation of identical twins"],answer:1,exp:"Genetic variation provides the basis for evolution."},

{q:"Who is the Father of Genetics?",options:["Punnet","Mendel","Castle","Morgan"],answer:1,exp:"Gregor Mendel is known as the Father of Genetics."},

{q:"The first fundamental factor for evolution is:",options:["competition among individuals","genetic variation","healthy offsprings","cell division for growth"],answer:1,exp:"Genetic variation is essential for evolution to occur."},

{q:"Which of the following hybridisation crossing is NOT used for the improvement in crop varieties?",options:["Intergeneric","Intraspecific","Interspecific","Intervarietal"],answer:1,exp:"Intraspecific crossing is not considered a hybridisation method for crop improvement."},

{q:"Why is vegetative propagation useful for agriculture purposes?",options:["It increases genetic variation","It requires seeds for every generation","It produces identical plants rapidly","It prevents diseases naturally"],answer:2,exp:"Vegetative propagation rapidly produces identical plants."},

{q:"In the context of plant and animal kingdoms, what does chemotaxonomy primarily focus on?",options:["The classification of organisms based on their ecological roles.","The classification of organisms based on their chemical composition.","The examination of genetic sequences in mitochondrial DNA.","The classification of organisms based on their morphological characteristics."],answer:1,exp:"Chemotaxonomy classifies organisms using chemical characteristics."},

{q:"Which pair of scientists first proposed the double-helix model for the structure of DNA?",options:["Darwin and Wallace","Mendel and Avery","Watson and Crick","Franklin and Chargaff"],answer:2,exp:"Watson and Crick proposed the DNA double-helix model."},

{q:"Select the option that is true regarding the following two statements labelled Assertion (A) and Reason (R). Assertion (A): Insulin helps lower blood glucose levels. Reason (R): Insulin converts glucose into glycogen for storage in the liver.",options:["Both A and R are true, and R is the correct explanation of A.","A is false, but R is true.","Both A and R are true, but R is not the correct explanation of A.","A is true, but R is false."],answer:0,exp:"Insulin lowers blood glucose by promoting glycogen formation."},

{q:"Who gave the term ‘homo sapiens’?",options:["G. J. Mendal","C. Linnaeus","Miller","Darwin"],answer:1,exp:"Carolus Linnaeus introduced the term Homo sapiens."},

{q:"What determines the sex of a child in humans?",options:["Genetic constitution","Environmental cues","The temperature at which fertilised eggs are placed","The fate of the embryo"],answer:0,exp:"Sex is determined by the genetic constitution of sex chromosomes."},

{q:"The ten percent law of energy transfer was given by:",options:["Charles Darwin","Thomas Morgan","Raymond Lindeman","Watson and Crick"],answer:2,exp:"Raymond Lindeman proposed the ten percent law."},

{q:"____________ is a kind of quantitative and qualitative process of change which cannot be measured.",options:["Growth","Evolution","Development","Progress"],answer:1,exp:"Evolution is a long-term biological change that cannot be measured directly."},

{q:"The laws of inheritance form the foundation of classical genetics. Who among the following first described the laws of inheritance?",options:["Gregor Mendel","Charles Darwin","Dmitri Mendeleev","Alfred Russel Wallace"],answer:0,exp:"Gregor Mendel first described the laws of inheritance."},

{q:"Which of the following actions is responsible for the survival of species over time?",options:["Conservation","Variation","Reproduction","Struggle"],answer:1,exp:"Variation helps species adapt and survive changing conditions."},

{q:"What happens when pea plants showing two different characteristics (the tall/short trait and the round seed/wrinkled seed trait), rather than just one are bred with each other?",options:["The tall/short trait and the round seed/wrinkled seed trait are independently inherited.","They are all tall and have round seeds in F2 generation.","Some F1 progeny are tall plants with round seeds, and some are short plants with wrinkled seeds.","The tall/short trait and the round seed/wrinkled seed trait are dependently inherited."],answer:0,exp:"Mendel's law of independent assortment states that traits are inherited independently."},

{q:"Read the given assertion (A) and reason (R) and select the most appropriate option. (A): Oral contraceptive pills are a permanent method of contraception. (R): They change hormone levels and prevent ovulation.",options:["Both A and R are true, but R is not the correct explanation of A","A is false, but R is true","Both A and R are false","Both A and R are true, and R is the correct explanation of A"],answer:1,exp:"Oral pills are temporary contraceptives but they do prevent ovulation."},

{q:"Which law did Mendel derive from his monohybrid cross?",options:["Law of Constant Proportion","Law of Evolution","Law of Segregation","Law of Independent Assortment"],answer:2,exp:"Monohybrid crosses led Mendel to formulate the Law of Segregation."},

{q:"In the context of genetics, what is the primary purpose of pedigree analysis?",options:["To measure the physical traits of individuals in a population","To analyse the nutritional requirements of different organisms","To track the inheritance of specific traits across generations within a family","To study the ecological interactions between species in an environment"],answer:2,exp:"Pedigree analysis traces inheritance patterns in families."},

{q:"Read the following statements carefully and select the correct option. Assertion (A): In the reaction of copper with oxygen, oxygen acts as the reducing agent. Reason (R): Oxygen adds to copper forming copper oxide.",options:["Both A and R are true, and R is the correct explanation of A.","A is true, but R is false.","A is false, but R is true.","Both A and R are true, and R is not the correct explanation of A."],answer:2,exp:"Oxygen acts as an oxidizing agent, though it does combine with copper."},

{q:"What is the ability to develop a whole plant by a cell or cortex?",options:["Totipotency","Mutation Reproduction","Microoprotection","Physical hybridization"],answer:0,exp:"Totipotency is the ability of a cell to develop into a complete plant."},

{q:"Who gave the term 'homo sapiens'?",options:["Miller","Darwin","G. J. Mendal","C. Linnaeus"],answer:3,exp:"Carolus Linnaeus coined the term Homo sapiens."},

{q:"What advantage does asexual reproduction provide in a stable environment?",options:["Genetic variation","Sexual diversity","Rapid and identical reproduction","Adaptation to new environment"],answer:2,exp:"Asexual reproduction quickly produces identical offspring."},

{q:"Read the given Assertion (A) and Reason (R) and select the most appropriate option. (A): A woman has normal ovulation and fertilisation, but the zygote is expelled without attaching to the uterine wall because implantation has failed. (R): Implantation is the process by which the blastocyst embeds in the endometrium to establish pregnancy.",options:["A is true, but R is false","Both A and R are true, but R is not the correct explanation of A","A is false, but R is true","Both A and R are true, and R is the correct explanation of A"],answer:3,exp:"Pregnancy cannot continue without successful implantation."},

{q:"In Mendel’s experiment, what did he observe in the F1 generation when he crossed a tall (TT) and a short pea (tt) plant?",options:["All were short","All were medium height","All were tall","Half were tall, half was short"],answer:2,exp:"All F1 plants were tall because tallness is dominant."},

{q:"Which of the following is a key feature of offsprings produced through vegetative propagation?",options:["They are genetically diverse from the parent plant.","They require fertilisation to develop.","They are genetically identical to the parent plant.","They always grow slower than seed-grown plants."],answer:2,exp:"Vegetative propagation produces genetically identical offspring."},

{q:"What is the advantage of fragmentation as a mode of reproduction in plants?",options:["Brings about rapid multiplication","Increases genetic diversity","Promotes bud formation","Forms spores for dispersal"],answer:0,exp:"Fragmentation allows rapid multiplication of organisms."},

{q:"Mendel studied traits such as flower colour and seed shape in pea plants. These traits are called as:",options:["genetic codes","dominant characteristics","progeny units","visible characters"],answer:3,exp:"These traits are observable or visible characters."},

{q:"Name the famous biologist with whom the Galapagos Islands is associated.",options:["Carl Linnaeus","Ernst Haeckel","Johann Gregor Mendel","Charles Darwin"],answer:3,exp:"Darwin's observations on the Galapagos Islands helped develop his theory of evolution."},

{q:"________ is a quantitative process of change of scale and size, which can be measured and aided by ethics and norms.",options:["Evolution","Development","Progress","Growth"],answer:1,exp:"Development involves measurable qualitative and quantitative changes."},

{q:"The number of chromosomes become half in a daughter cell by the process of:",options:["binary fission","meiosis","mitosis","amitosis"],answer:1,exp:"Meiosis reduces the chromosome number by half."},

{q:"Which of the following is NOT a typical characteristic of plants produced through vegetative propagation?",options:["They are genetically identical to the parent.","They flower and fruit earlier than seed-grown plants.","They do not require pollination.","They show variation in characteristics among offspring."],answer:3,exp:"Vegetative propagation usually produces genetically identical offspring."},

{q:"Which law of Mendel explains the separation of alleles during gamete formation?",options:["Law of Dominance","Law of Assortment","Law of Segregation","Law of Variation"],answer:2,exp:"The Law of Segregation states that allele pairs separate during gamete formation."},

{q:"In human beings, how is the sex of a child determined?",options:["By the inheritance of X or Y chromosome from the father","By the inheritance of an X chromosome from the mother","By the environmental conditions prevailing during development of the foetus","By the difference in number of chromosomes inherited by the child"],answer:0,exp:"The father's X or Y chromosome determines the sex of the child."},

{q:"The basic unit of classification of living organisms is called :",options:["order","genus","family","species"],answer:3,exp:"Species is the fundamental unit of biological classification."},

{q:"Select the correct option regarding the following two statements labelled Assertion (A) and Reason (R). Assertion (A): Excess accumulation of biodegradable waste can also create environmental problems. Reason (R): Slow decomposition may lead to foul smell and spread of disease.",options:["Both A and R are true, and R is the correct explanation of A","A is true, but R is false","Both A and R are true, but R is not the correct explanation of A","A is false, but R is true"],answer:0,exp:"Slow decomposition of waste can cause odor and disease spread."},

{q:"Every child inherits an X chromosome from their mother. Which reasoning best explains this biological certainty?",options:["Mothers pass both X and Y chromosomes.","Mothers selectively pass X or Y chromosomes.","X inheritance from mother depends on environment.","Mothers produce only X-bearing eggs."],answer:3,exp:"Female eggs always carry an X chromosome."},

{q:"In the process of binary fission in unicellular organisms such as bacteria and protozoa, which of the following is least likely to occur?",options:["Rapid population increase under favourable conditions","Unequal partition of genetic material","No need for a second parent","Formation of identical daughter cells"],answer:1,exp:"Binary fission generally produces equal genetic distribution."},

{q:"What is the primary purpose of pedigree analysis in the context of genetics?",options:["To track the inheritance of specific traits across generations within a family","To analyse the nutritional requirements of different organisms","To study the ecological interactions between species in an environment","To measure the physical traits of individuals in a population"],answer:0,exp:"Pedigree analysis helps trace inherited traits through generations."},

{q:"In terms of chromosome contribution, which of the following is correct?",options:["Mother always contributes X, father contributes X or Y","Father contributes only X chromosome","Mother can contribute X or Y","Both parents contribute either X or Y"],answer:0,exp:"The mother contributes X, while the father contributes X or Y."},

{q:"Which of the following is the basic unit of classification of living organisms?",options:["Species","Genus","Family","Order"],answer:0,exp:"Species is the smallest and basic classification unit."},

{q:"According to Mendel, when a tall pea plant (TT) is crossed with a short pea plant (tt), the F1 offspring will be:",options:["50% tall (Tt), 50% short (tt)","75% tall (TT/Tt), 25% short (tt)","all tall (Tt)","all short (tt)"],answer:2,exp:"All F1 offspring are tall heterozygous (Tt)."},

{q:"What does variation within a species ensure?",options:["Better adaptability and chances of survival","No mutations","Similar response to environmental changes","No evolution"],answer:0,exp:"Variation improves adaptability and survival in changing environments."},


{q:"राष्ट्रपति?",options:["राज्य प्रमुख","सैनिक","किसान","व्यापारी"],answer:0,exp:"राज्य प्रमुख"},
{q:"संविधान?",options:["कानून","धर्म","नदी","योजना"],answer:0,exp:"कानून"}
],
set3: [
{q:"न्यायपालिका?",options:["न्याय देती","कानून बनाती","टैक्स","सेना"],answer:0,exp:"न्याय देती"},
{q:"संसद?",options:["कानून बनाती","न्याय देती","लड़ाई","व्यापार"],answer:0,exp:"कानून बनाती"}
],
set4: [
{q:"मौलिक अधिकार?",options:["6","5","7","8"],answer:0,exp:"6"},
{q:"लोकतंत्र?",options:["जनता शासन","राजा","सेना","धर्म"],answer:0,exp:"जनता शासन"}
]
},

hormones: {
set1: [
{q:"Which of the following organs releases growth hormone releasing factor, which stimulates the pituitary gland to release growth hormone?",options:["Thymus","Adrenal glands","Pancreas","Hypothalamus"],answer:3,exp:"Hypothalamus releases GHRF which stimulates growth hormone secretion."},

{q:"Which of the following plant hormones helps in promoting growth?",options:["Auxin, Cytokinins and Abscisic acid","Gibberellins, Cytokinins and Abscisic acid","Auxin, Cytokinins and Gibberellins","Auxin, Abscisic acid and Gibberellins"],answer:2,exp:"Auxins, cytokinins and gibberellins promote plant growth."},

{q:"Which of the following is a type of steroid hormone that is secreted from the adrenal gland?",options:["Luteinizing Hormone","Folic Stimulation Hormone","Nor-Epinephrine","Glucocorticoid"],answer:3,exp:"Glucocorticoids are steroid hormones secreted by the adrenal gland."},

{q:"What is the function of growth hormones?",options:["It stimulates growth in all organs.","It stimulates development of female sex organs.","It regulates blood sugar level.","It regulates metabolism for body growth."],answer:0,exp:"Growth hormone promotes growth of body tissues and organs."},

{q:"Iodine is necessary for which gland to make the thyroxine hormone?",options:["Thymus","Pancreas","Pineal gland","Thyroid gland"],answer:3,exp:"The thyroid gland requires iodine to produce thyroxine."},

{q:"Which of the following is INCORRECT about plant hormones?",options:["Different plant hormones help to coordinate responses to the environment.","Different plant hormones help to coordinate growth and development.","All plant hormones except abscisic acid help in promoting growth.","All plant hormones except cytokinins promote cell division."],answer:3,exp:"Cytokinins specifically promote cell division, so the statement is incorrect."},

{q:"Which hormone triggers sexual maturation in boys?",options:["Estrogen","Oxytocin","Testosterone","Progesterone"],answer:2,exp:"Testosterone is responsible for male sexual maturation."},

{q:"Which of the following glands controls the rate of energy release inside the body?",options:["Thyroid","Parathyroid","Pineal","Pancreas"],answer:0,exp:"The thyroid gland regulates metabolic rate and energy release."},

{q:"What is the main function of carbohydrates in the body?",options:["It is crucial for growth.","It regulates hormones.","It provides energy","It insulates the body."],answer:2,exp:"Carbohydrates are the body's primary source of energy."},

{q:"The body of a squirrel has to prepare for either fighting or running away by using which of the following hormones?",options:["Adrenaline","Oestrogen","Testosterone","Thyroxin"],answer:0,exp:"Adrenaline prepares the body for fight-or-flight responses."},

{q:"Which of the following is an important female sex hormone?",options:["Nucleosome","Estrogen","Testosterone","Chromatin"],answer:1,exp:"Estrogen is a major female sex hormone."},

{q:"Fruits and seeds have a high concentration of which of the following plant hormones?",options:["Auxin","Gibberellin","Cytokinin","Abscisic acid"],answer:2,exp:"Cytokinins are abundant in fruits and seeds."},

{q:"In animals, which of the following hormones are secreted during a scary situation?",options:["Insulin","Adrenaline","Growth hormone","Thyroxin"],answer:1,exp:"Adrenaline is released during fear and stress situations."},

{q:"Which of the following hormones stimulates the growth of all organs?",options:["Adrenaline","Glucagon","Insulin","Growth hormone"],answer:3,exp:"Growth hormone stimulates overall body growth."},

{q:"Which hormone regulates the amount of sugar in human blood?",options:["Estrogen","Testosterone","Parathormone","Insulin"],answer:3,exp:"Insulin controls blood glucose levels."},

{q:"The concentration of which plant hormone is highest at the top of the plant and decreases as you get closer to the roots?",options:["Auxin","Cytokinin","Gibberellin","Ethylene"],answer:0,exp:"Auxin concentration is highest near the shoot tip."},
 
{q:"Which of the following endocrine glands secretes growth hormone?",options:["Pituitary","Thyroid","Pancreas","Adrenal"],answer:0,exp:"The pituitary gland secretes growth hormone."},

{q:"When the level of growth hormone is low, which releases growth hormone releasing factor and stimulates the pituitary gland to release growth hormone?",options:["Thyroid gland","Adrenal gland","Hypothalamus","Pancreas"],answer:2,exp:"The hypothalamus releases GHRF to stimulate growth hormone secretion."},

{q:"A male patient has low sperm motility. Which glands are most likely to be NOT functioning properly?",options:["Thyroxine and Pineal Glands","Pancreas and adrenal glands","Prostate gland and seminal vesicles","Testis and bladder"],answer:2,exp:"Prostate gland and seminal vesicles contribute fluids that support sperm motility."},

{q:"Which of the following is/are NOT present in the plasma?",options:["Salts","Proteins","Undigested food","Hormones"],answer:2,exp:"Undigested food is not normally present in blood plasma."},

{q:"Which of the following glands is an endocrine gland in the human body?",options:["Salivary","Pituitary","Prostate","Sweat"],answer:1,exp:"The pituitary gland is a major endocrine gland."},

{q:"Which of the following statements suits best for the role of chemical methods of birth control in family planning?",options:["They prevent sperm from entering the uterus by thickening the vaginal wall.","They mechanically block the fallopian tubes and suppress menstruation entirely.","They alter the hormone levels to inhibit ovulation and uterus preparation.","They increase estrogen levels to promote ovulation and make fertilisation less likely."],answer:2,exp:"Hormonal contraceptives prevent ovulation and prepare the uterus."},

{q:"Which of the following is a characteristic of the onset of puberty in boys?",options:["Growth of hairs on head","Growth of liver","Growth of a moustache","Growth of pineal gland"],answer:2,exp:"Growth of a moustache is a secondary sexual characteristic in boys."},

{q:"Which glands help to control blood pressure in the human body?",options:["Adrenal glands","Pituitary glands","Pancreas","Pineal gland"],answer:0,exp:"Adrenal glands secrete hormones involved in blood pressure regulation."},

{q:"Select the correct option related to the function regulated by ovaries.",options:["Stimulates growth in all organs","Regulates metabolism","Menstrual cycle","Stimulates pituitary glands"],answer:2,exp:"Ovaries regulate the menstrual cycle through hormone secretion."},

{q:"Sexual maturation in humans results in:",options:["Loss of reproductive capacity and growth","Development of reproductive organs and secondary sexual characteristics","Decrease in hormone levels and loss of reproductive organs","Only physical growth"],answer:1,exp:"Sexual maturation develops reproductive organs and secondary sexual traits."},

{q:"Which gland secretes the growth hormone (GH) in humans?",options:["Pancreas","Pituitary gland","Thyroid gland","Adrenal gland"],answer:1,exp:"Growth hormone is secreted by the pituitary gland."},

{q:"Trachea is a part of which of the following human systems?",options:["Excretory system","Circulatory system","Endocrine system","Respiratory system"],answer:3,exp:"The trachea is a component of the respiratory system."},

{q:"Which of the following is secreted directly into the blood and carried to different parts of the body?",options:["Saliva","Pancreatic juice","Bile juice","Adrenaline"],answer:3,exp:"Adrenaline is a hormone released directly into the bloodstream."},

{q:"Which one of the following is a Biological catalysts?",options:["Minerals","Hormones","Enzymes","Radiation"],answer:2,exp:"Enzymes act as biological catalysts in living organisms."},

{q:"The hormone thyroxine is commonly known as -",options:["T3","T4","PTH","TSH"],answer:1,exp:"Thyroxine is commonly referred to as T4."},

{q:"Many plants secrete a sticky milky fluid and use it for their defence mechanism. This fluid is known as ___________________.",options:["cell sap","enzyme","latex","plant hormone"],answer:2,exp:"Latex is a milky fluid used by many plants for defense."},

],
set2: [
{q:"What does the posterior pituitary gland secrete?",options:["Progesterone","Estrogen","Melatonin","Oxytocin"],answer:3,exp:"The posterior pituitary releases oxytocin into the bloodstream."},

{q:"Iodine is essential for the synthesis of ______.",options:["Cytokinin","Insulin","Thyroxine","Oestrogen"],answer:2,exp:"Iodine is required for the production of thyroxine hormone."},

{q:"Which gland in the human body secretes the growth hormone?",options:["Pituitary gland","Adrenal gland","Pancreas","Thyroid gland"],answer:0,exp:"Growth hormone is secreted by the pituitary gland."},

{q:"Which of the following releases the growth hormone?",options:["Pituitary gland","Adrenal gland","Liver","Pancreas"],answer:0,exp:"The pituitary gland releases growth hormone."},

{q:"Diabetes mellitus is caused by the inadequate secretion of which hormone?",options:["Estrogen","Insulin","Adrenaline","Thyroxine"],answer:1,exp:"Diabetes mellitus results from insufficient insulin secretion."},

{q:"Which gland secrete growth hormone?",options:["Adrenal gland","Pituitary gland","Ovaries","Thyroid gland"],answer:1,exp:"The pituitary gland secretes growth hormone."},

{q:"Which of the following is not a plant hormone?",options:["Gibberellins","Prolactin","Ethylene","Abscisic Acid"],answer:1,exp:"Prolactin is an animal hormone, not a plant hormone."},

{q:"Birth control pills contain",options:["Progesterone only","Estrogen only","Mixture of progesterone and estrogen derivative","Neither progesterone nor estrogen"],answer:2,exp:"Birth control pills usually contain estrogen and progesterone derivatives."},

{q:"Which of these hormones stimulates uterine contractions and dilation of the cervix?",options:["ADH","Oxytocin","Progesterone","Thyroxine"],answer:1,exp:"Oxytocin stimulates uterine contractions during childbirth."},

{q:"Which of the following glands secretes growth hormones in human beings?",options:["Pituitary gland","Thyroid","Pancreas","Pineal gland"],answer:0,exp:"Growth hormone is secreted by the pituitary gland."},

{q:"Which hormone regulates the blood sugar level in the body?",options:["Testosterone","Thyroid","Adrenaline","Insulin"],answer:3,exp:"Insulin maintains blood glucose levels."},

{q:"A person shows high blood sugar levels even after eating small amounts of food. What may be the cause?",options:["Excess growth hormone","Low thyroxine","Excess estrogen","Lack of insulin"],answer:3,exp:"Lack of insulin causes elevated blood sugar levels."},

{q:"What is known by the name of the site where the endocrine glands secrete hormones in the flow of blood to reach any particular organ?",options:["Hormonal site","Target site","Blood site","Endocrine site"],answer:1,exp:"Hormones act on specific target sites or target organs."},

{q:"What does the thyroid gland secrete?",options:["melanocyte-stimulating hormone","calcitonin","Oxytocin","Vasopressin"],answer:1,exp:"The thyroid gland secretes calcitonin among other hormones."},

{q:"Select the correct option related to the function regulated by ovaries.",options:["Regulates metabolism","Stimulates pituitary glands","Stimulates growth in all organs","Menstrual cycle"],answer:3,exp:"Ovaries regulate the menstrual cycle through hormone production."},

{q:"Which of the following best describes the process of sexual maturation in humans?",options:["It occurs suddenly and marks the end of body growth","It begins after adulthood and leads to immediate readiness for parenthood","It is a gradual process during adolescence involving physical and hormonal changes","It occurs only in females and stops once menstruation begins"],answer:2,exp:"Sexual maturation occurs gradually during adolescence."},

{q:"Which hormone regulates carbohydrate, protein and fat metabolism in the body and iodine is essential for the synthesis of it?",options:["Testosterone hormone","Insulin hormone","Adrenaline hormone","Thyroxin hormone"],answer:3,exp:"Thyroxine regulates metabolism and requires iodine for synthesis."},

{q:"Which gland secretes adrenaline?",options:["Thyroid gland","Adrenal gland","Pineal gland","Pituitary gland"],answer:1,exp:"The adrenal gland secretes adrenaline."},

{q:"What does the adrenal gland secrete?",options:["Thyroxine","Estrogen","Cortisol","THS"],answer:2,exp:"The adrenal gland secretes cortisol."},

{q:"Which hormone protects the blood glucose from going too low?",options:["Insulin","Oxytocin","Vasopressin","Glucagon"],answer:3,exp:"Glucagon raises blood glucose when it becomes too low."},

{q:"Which of the following is a plant hormone?",options:["Estrogen","Chlorophyll","Thyroxin","Auxin"],answer:3,exp:"Auxin is a plant hormone that promotes growth and cell elongation."},

{q:"Cushing's syndrome is caused by excess secretion of which hormone?",options:["Melatonin","Vasopressin","Erythropoietin","Cortisol"],answer:3,exp:"Cushing's syndrome results from prolonged excess cortisol secretion."},

{q:"Which hormone promotes RBC production in bone marrow?",options:["Cholecystokinin","Serotonin","Somatostatin","Erythropoietin"],answer:3,exp:"Erythropoietin stimulates red blood cell production in bone marrow."},

{q:"How do hormonal contraceptives prevent pregnancy?",options:["By blocking sperm physically","By killing sperm directly","By removing ova from ovaries","By changing the hormonal balance to prevent egg release"],answer:3,exp:"Hormonal contraceptives prevent ovulation by altering hormone levels."},

{q:"Which hormone is commonly called the 'stress hormone'?",options:["Insulin","Thyroxine","Oxytocin","Cortisol"],answer:3,exp:"Cortisol is known as the stress hormone."},

{q:"Which gland secretes melatonin?",options:["Pituitary gland","Thyroid gland","Adrenal gland","Pineal gland"],answer:3,exp:"The pineal gland secretes melatonin, which regulates sleep cycles."},

{q:"Which hormone regulates the sleep-wake cycle in humans?",options:["Adrenaline","Melatonin","Insulin","Glucagon"],answer:1,exp:"Melatonin helps regulate the body's circadian rhythm."},

{q:"Which hormone is secreted by the kidneys in response to low oxygen levels?",options:["Thyroxine","Cortisol","Insulin","Erythropoietin"],answer:3,exp:"Kidneys release erythropoietin when oxygen levels are low."},

{q:"Which hormone is responsible for maintaining water balance in the body?",options:["Insulin","Melatonin","Vasopressin","Cortisol"],answer:2,exp:"Vasopressin (ADH) regulates water balance in the body."},

{q:"Which endocrine gland is known as the master gland?",options:["Pineal gland","Adrenal gland","Pituitary gland","Pancreas"],answer:2,exp:"The pituitary gland controls many other endocrine glands."},

{q:"Which hormone helps lower blood glucose levels?",options:["Glucagon","Adrenaline","Insulin","Cortisol"],answer:2,exp:"Insulin lowers blood glucose by promoting its uptake by cells."},

{q:"Which hormone raises blood glucose levels when they become too low?",options:["Insulin","Glucagon","Melatonin","Oxytocin"],answer:1,exp:"Glucagon increases blood glucose levels by acting on the liver."},

{q:"Which hormone is released during emergency situations and prepares the body for fight or flight?",options:["Insulin","Adrenaline","Thyroxine","Progesterone"],answer:1,exp:"Adrenaline prepares the body for rapid action during stress."},

{q:"Which hormone stimulates uterine contractions during childbirth?",options:["Progesterone","Estrogen","Oxytocin","Insulin"],answer:2,exp:"Oxytocin stimulates contractions during labor."},

{q:"Which hormone is essential for normal metabolism and requires iodine for its synthesis?",options:["Insulin","Thyroxine","Cortisol","Melatonin"],answer:1,exp:"Thyroxine regulates metabolism and requires iodine."},

{q:"Which hormone deficiency is commonly associated with diabetes mellitus?",options:["Glucagon","Adrenaline","Insulin","Thyroxine"],answer:2,exp:"Diabetes mellitus is caused by insufficient insulin production or action."},
],
set3: [
{q:"नदी?",options:["गंगा","थार","हिमालय","रेगिस्तान"],answer:0,exp:"गंगा"},
{q:"मरुस्थल?",options:["थार","गंगा","यमुना","नर्मदा"],answer:0,exp:"थार"}
],
set4: [
{q:"भारत?",options:["लोकतंत्र","राजशाही","तानाशाही","साम्राज्य"],answer:0,exp:"लोकतंत्र"},
{q:"राजधानी?",options:["नई दिल्ली","मुंबई","पटना","कोलकाता"],answer:0,exp:"नई दिल्ली"}
]
},

june: {
set1: [
{q:"संविधान लागू?",options:["1950","1947","1952","1942"],answer:0,exp:"1950"},
{q:"लोकसभा?",options:["निचला","उच्च","न्यायालय","राज्य"],answer:0,exp:"निचला"}
],
set2: [
{q:"COP-29?",options:["जलवायु","युद्ध","व्यापार","कृषि"],answer:0,exp:"जलवायु"},
{q:"जलवायु सम्मेलन?",options:["COP","G20","BRICS","NATO"],answer:0,exp:"COP"}
],
set3: [
{q:"भारत नीति?",options:["विकास","युद्ध","कर","सेना"],answer:0,exp:"विकास"},
{q:"ONOS?",options:["ज्ञान","टैक्स","सेना","राजनीति"],answer:0,exp:"ज्ञान"}
],
set4: [
{q:"बिहार विजन 2047?",options:["विकास","युद्ध","राजनीति","धर्म"],answer:0,exp:"विकास"},
{q:"डिजिटल इंडिया?",options:["टेक","खेती","सेना","धर्म"],answer:0,exp:"टेक"}
]
},

july: {set1:[{q:"बिहार?",options:["राज्य","देश","जिला","नगर"],answer:0,exp:"राज्य"},{q:"गंगा?",options:["नदी","पहाड़","रेगिस्तान","झील"],answer:0,exp:"नदी"}],
set2:[{q:"हिमालय?",options:["पहाड़","नदी","समुद्र","रेगिस्तान"],answer:0,exp:"पहाड़"},{q:"राजस्थान?",options:["राज्य","देश","नगर","द्वीप"],answer:0,exp:"राज्य"}],
set3:[{q:"भारत?",options:["देश","राज्य","नगर","जिला"],answer:0,exp:"देश"},{q:"कोसी?",options:["नदी","पहाड़","झील","घाट"],answer:0,exp:"नदी"}],
set4:[{q:"डेल्टा?",options:["भूमि","जल","आग","हवा"],answer:0,exp:"भूमि"},{q:"लोकतंत्र?",options:["जनता","राजा","सेना","धर्म"],answer:0,exp:"जनता"}]
},

august: {set1:[{q:"भारत?",options:["देश","राज्य","नगर","द्वीप"],answer:0,exp:"देश"},{q:"गंगा?",options:["नदी","पहाड़","झील","रेगिस्तान"],answer:0,exp:"नदी"}],
set2:[{q:"हिमालय?",options:["पहाड़","नदी","समुद्र","रेगिस्तान"],answer:0,exp:"पहाड़"},{q:"बिहार?",options:["राज्य","देश","नगर","द्वीप"],answer:0,exp:"राज्य"}],
set3:[{q:"थार?",options:["रेगिस्तान","नदी","पहाड़","झील"],answer:0,exp:"रेगिस्तान"},{q:"लोकसभा?",options:["सदन","नदी","देश","राज्य"],answer:0,exp:"सदन"}],
set4:[{q:"संविधान?",options:["कानून","धर्म","नदी","पहाड़"],answer:0,exp:"कानून"},{q:"भारत दिवस?",options:["26 जनवरी","15 अगस्त","2 अक्टूबर","1 मई"],answer:0,exp:"26 जनवरी"}]
},

september: {set1:[{q:"गंगा?",options:["नदी","पहाड़","झील","रेगिस्तान"],answer:0,exp:"नदी"},{q:"भारत?",options:["देश","राज्य","नगर","द्वीप"],answer:0,exp:"देश"}],
set2:[{q:"हिमालय?",options:["पहाड़","नदी","समुद्र","रेगिस्तान"],answer:0,exp:"पहाड़"},{q:"बिहार?",options:["राज्य","देश","नगर","द्वीप"],answer:0,exp:"राज्य"}],
set3:[{q:"थार?",options:["रेगिस्तान","नदी","पहाड़","झील"],answer:0,exp:"रेगिस्तान"},{q:"लोकतंत्र?",options:["जनता","राजा","सेना","धर्म"],answer:0,exp:"जनता"}],
set4:[{q:"संविधान?",options:["कानून","धर्म","नदी","पहाड़"],answer:0,exp:"कानून"},{q:"भारत दिवस?",options:["26 जनवरी","15 अगस्त","2 अक्टूबर","1 मई"],answer:0,exp:"26 जनवरी"}]
},

october: {set1:[{q:"गंगा?",options:["नदी","पहाड़","झील","रेगिस्तान"],answer:0,exp:"नदी"},{q:"भारत?",options:["देश","राज्य","नगर","द्वीप"],answer:0,exp:"देश"}],
set2:[{q:"हिमालय?",options:["पहाड़","नदी","समुद्र","रेगिस्तान"],answer:0,exp:"पहाड़"},{q:"बिहार?",options:["राज्य","देश","नगर","द्वीप"],answer:0,exp:"राज्य"}],
set3:[{q:"थार?",options:["रेगिस्तान","नदी","पहाड़","झील"],answer:0,exp:"रेगिस्तान"},{q:"लोकतंत्र?",options:["जनता","राजा","सेना","धर्म"],answer:0,exp:"जनता"}],
set4:[{q:"संविधान?",options:["कानून","धर्म","नदी","पहाड़"],answer:0,exp:"कानून"},{q:"भारत दिवस?",options:["26 जनवरी","15 अगस्त","2 अक्टूबर","1 मई"],answer:0,exp:"26 जनवरी"}]
},

november: {set1:[{q:"गंगा?",options:["नदी","पहाड़","झील","रेगिस्तान"],answer:0,exp:"नदी"},{q:"भारत?",options:["देश","राज्य","नगर","द्वीप"],answer:0,exp:"देश"}],
set2:[{q:"हिमालय?",options:["पहाड़","नदी","समुद्र","रेगिस्तान"],answer:0,exp:"पहाड़"},{q:"बिहार?",options:["राज्य","देश","नगर","द्वीप"],answer:0,exp:"राज्य"}],
set3:[{q:"थार?",options:["रेगिस्तान","नदी","पहाड़","झील"],answer:0,exp:"रेगिस्तान"},{q:"लोकतंत्र?",options:["जनता","राजा","सेना","धर्म"],answer:0,exp:"जनता"}],
set4:[{q:"संविधान?",options:["कानून","धर्म","नदी","पहाड़"],answer:0,exp:"कानून"},{q:"भारत दिवस?",options:["26 जनवरी","15 अगस्त","2 अक्टूबर","1 मई"],answer:0,exp:"26 जनवरी"}]
},

december: {set1:[{q:"बिहार दिवस?",options:["22 मार्च","15 अगस्त","26 जनवरी","2 अक्टूबर"],answer:0,exp:"22 मार्च"},{q:"गांधी जयंती?",options:["2 अक्टूबर","15 अगस्त","26 जनवरी","1 मई"],answer:0,exp:"2 अक्टूबर"}],
set2:[{q:"COP?",options:["जलवायु","युद्ध","धर्म","राजनीति"],answer:0,exp:"जलवायु"},{q:"भारत नीति?",options:["विकास","युद्ध","कर","सेना"],answer:0,exp:"विकास"}],
set3:[{q:"ONOS?",options:["ज्ञान","टैक्स","सेना","राजनीति"],answer:0,exp:"ज्ञान"},{q:"विजन 2047?",options:["विकास","युद्ध","धर्म","राजनीति"],answer:0,exp:"विकास"}],
set4:[{q:"डिजिटल इंडिया?",options:["टेक","खेती","सेना","धर्म"],answer:0,exp:"टेक"},{q:"भारत?",options:["देश","राज्य","नगर","द्वीप"],answer:0,exp:"देश"}]
}

};

/* ================= GLOBAL ================= */
let currentTopic = "cell";
let currentSet = "set1";
let questions = allTopics[currentTopic][currentSet];

let index = 0;

let selected = {};
let marked = {};
let resultStatus = {};

// Wrong Questions Retry Feature
let wrongQuestions = [];

// Timer
let timer;
let time = 20;

function saveProgress(){
    localStorage.setItem("quizState", JSON.stringify({
        currentTopic,
        currentSet,
        index,
        selected,
        marked,
        time
    }));
}

function loadProgress(){

    const data = localStorage.getItem("quizState");

    if(!data) return false;

    const state = JSON.parse(data);

    currentTopic = state.currentTopic || "january";
    currentSet = state.currentSet || "set1";
    index = state.index || 0;

    selected = state.selected || {};
    marked = state.marked || {};

    time = state.time || 20;

    questions = allTopics[currentTopic][currentSet] || [];

    return true;
}

// ================= ANALYTICS =================
let analytics = {
    total: 0,
    correct: 0,
    wrong: 0,
    negative: 0,
    percentage: 0
};

// Negative marking rule
let negativeMark = 0.25;

/* ================= SAFE INIT ================= */
function initApp(){
    if(!allTopics[currentTopic]){
        currentTopic = Object.keys(allTopics)[0];
    }

    currentSet = Object.keys(allTopics[currentTopic])[0];

    questions = shuffleArray(allTopics[currentTopic][set] || []);

    reset();
}

/* ================= LOAD TOPIC ================= */
function loadTopic(topic){

if(!allTopics[topic]){
alert("Topic not found: " + topic);
return;
}

currentTopic = topic;
currentSet = Object.keys(allTopics[topic])[0];

questions = shuffleArray(allTopics[currentTopic][currentSet] || []);

index = 0;

reset();
updateActiveButtons();
}

/* ================= LOAD SET ================= */
function loadSet(set){

if(!allTopics[currentTopic] || !allTopics[currentTopic][set]){
alert("Set not found: " + set);
return;
}

currentSet = set;
questions = allTopics[currentTopic][currentSet] || [];

index = 0;

reset();
updateActiveButtons();
}

/* ================= RESET ================= */
function reset(){

document.getElementById("resultBox").style.display = "none";
document.getElementById("quizBox").style.display = "block";

index = 0;
selected = {};
marked = {};
resultStatus = {};
wrongQuestions = [];

clearInterval(timer);

load();
render();
startTimer();
updateActiveButtons();

}

/* ================= LOAD QUESTION ================= */
function load(){

if(!questions.length) return;

let q = questions[index];

document.getElementById("qText").innerText =
"Q" + (index + 1) + ": " + q.q;

document.getElementById("status").innerText =
currentTopic + " | " + currentSet + " | " + (index + 1) + "/" + questions.length;

let box = document.getElementById("options");
box.innerHTML = "";

q.options.forEach((o,i)=>{

let div = document.createElement("div");
div.className = "option";
div.innerText = o;

if(selected[index] === i){
div.classList.add("selected");
}

div.onclick = ()=>{

if(selected[index] === i){
delete selected[index];
} else {
selected[index] = i;
}

saveProgress();

load();
render();

};

box.appendChild(div);

});

updateBar();
}

/* ================= NAV ================= */
function next(){
if(index < questions.length - 1){
index++;

saveProgress();

load();
render();
startTimer();
}else{
submitQuiz();
}
}

function prev(){
if(index > 0){
index--;

saveProgress();

load();
render();
startTimer();
}
}

function mark(){
marked[index] = true;

saveProgress();

render();
}

/* ================= PALETTE ================= */
function render(){

let p = document.getElementById("palette");
p.innerHTML = "";

questions.forEach((q,i)=>{

let b = document.createElement("div");
b.className = "qbtn";
b.innerText = i + 1;

if(resultStatus[i] === "correct"){
b.classList.add("correct");
b.innerHTML = i + 1 + " ✔";
}
else if(resultStatus[i] === "wrong"){
b.classList.add("wrong");
b.innerHTML = i + 1 + " ❌";
}
else if(marked[i]){
b.classList.add("marked");
}
else if(selected[i] !== undefined){
b.classList.add("answered");
}

b.onclick = ()=>{
index = i;
load();
render();
startTimer();
};

p.appendChild(b);
});
}

/* ================= PROGRESS ================= */
function updateBar(){
document.getElementById("bar").style.width =
((index + 1) / questions.length) * 100 + "%";
}

/* ================= TIMER ================= */
function startTimer(){

clearInterval(timer);

time = 20;

timer = setInterval(()=>{

time--;
saveProgress();

document.getElementById("timerText").innerText = "⏳ " + time;
document.getElementById("timerBar").style.width = (time/20)*100 + "%";

if(time <= 0){
next();
}

},1000);
}

/* ================= SUBMIT ================= */
function submitQuiz(){

clearInterval(timer);

let score = 0;
resultStatus = {};
wrongQuestions = [];

questions.forEach((q,i)=>{

if(selected[i] === q.answer){
score++;
resultStatus[i] = "correct";
}else{
resultStatus[i] = "wrong";
wrongQuestions.push(q);
}
localStorage.removeItem("quizState");

});


document.getElementById("quizBox").style.display = "none";
document.getElementById("resultBox").style.display = "block";

let percent = Math.round((score / questions.length) * 100);

document.getElementById("scoreText").innerHTML =
`<h3>Score: ${score}/${questions.length}</h3>
<h3>Percentage: ${percent}%</h3>
<button onclick="retryWrongQuestions()">
🔄 Retry Wrong Questions (${wrongQuestions.length})
</button>`;

let rev = document.getElementById("review");
rev.innerHTML = "";

questions.forEach((q,i)=>{

let div = document.createElement("div");

let userAnswer = selected[i];
let isCorrect = userAnswer === q.answer;

div.className = isCorrect ? "result-correct" : "result-wrong";

div.innerHTML =
"<b>Q:</b> " + q.q +
"<br><b>Your Answer:</b> " +
(userAnswer !== undefined ? q.options[userAnswer] : "<span style='color:gray'>Not Attempted</span>") +
"<br><b>Correct Answer:</b> <span class='correct-answer'>" + q.options[q.answer] + "</span>" +
"<br><b>Explanation:</b> " + q.exp +
"<hr>";

rev.appendChild(div);

});

render();
}

/* ================= RETRY ================= */
function retryWrongQuestions(){

if(!wrongQuestions.length){
alert("🎉 कोई गलत प्रश्न नहीं है");
return;
}

questions = [...wrongQuestions];

index = 0;
selected = {};
marked = {};
resultStatus = {};

clearInterval(timer);

document.getElementById("resultBox").style.display = "none";
document.getElementById("quizBox").style.display = "block";

load();
render();
startTimer();
}

/* ================= SAFE INIT ================= */
function initApp() {
    // अगर current topic मौजूद नहीं है तो पहला topic set करो
    if (!allTopics[currentTopic]) {
        currentTopic = Object.keys(allTopics)[0];
    }

    // उस topic का पहला set auto select करो
    currentSet = Object.keys(allTopics[currentTopic])[0];

    // ✔️ IMPORTANT FIX: "set" नहीं, currentSet use करना है
    questions = shuffleArray(allTopics[currentTopic][currentSet] || []);

    index = 0;

    reset();
}

function updateActiveButtons(){

    // TOPIC BUTTONS (MONTHS)
    document.querySelectorAll(".topic-btn").forEach(b => {
        b.classList.remove("active-btn");

        if (b.dataset.topic === currentTopic) {
            b.classList.add("active-btn");
        }
    });

    // SET BUTTONS
    document.querySelectorAll(".set-btn").forEach(b => {
        b.classList.remove("active-btn");

        if (b.dataset.set === currentSet) {
            b.classList.add("active-btn");
        }
    });

}


document.querySelectorAll(".topic-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const topic = btn.getAttribute("data-topic");
        loadTopic(topic);
    });
});

document.querySelectorAll(".set-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const set = btn.getAttribute("data-set");
        loadSet(set);
    });
});

function shuffleArray(arr){
    return arr
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}

window.onload = () => {

    if(loadProgress()){

        load();
        render();
        startTimer();
        updateActiveButtons();

    }else{

        initApp();

    }

};

// TOPIC BUTTON CLICK
document.querySelectorAll(".topic-btn").forEach(btn=>{
    btn.onclick = () => loadTopic(btn.dataset.topic);
});

// SET BUTTON CLICK
document.querySelectorAll(".set-btn").forEach(btn=>{
    btn.onclick = () => loadSet(btn.dataset.set);
});